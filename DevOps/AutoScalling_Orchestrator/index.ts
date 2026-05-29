import "dotenv/config";

import {
  AutoScalingClient,
  SetDesiredCapacityCommand,
  DescribeAutoScalingInstancesCommand,
  TerminateInstanceInAutoScalingGroupCommand
} from "@aws-sdk/client-auto-scaling";
import { EC2Client, DescribeInstancesCommand } from "@aws-sdk/client-ec2";
import express from "express";

const app = express();

const client = new AutoScalingClient({
  region: "ap-south-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

const ec2Client = new EC2Client({
  region: "ap-south-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

type Machine = {
  ip: string;
  isUsed: boolean;
  assignedProject?: string;
};

const ALL_MACHINES: Machine[] = [];

async function refreshCommand() {
  const command = new DescribeAutoScalingInstancesCommand();

  const data = await client.send(command);
  // console.log(data);

  const ids: string[] = data.AutoScalingInstances?.map(
    (e) => e.InstanceId,
  ) as string[];

  const ec2Command = new DescribeInstancesCommand({
    InstanceIds: ids,
  });

  const ec2data = await ec2Client.send(ec2Command);

  console.log(ec2data.Reservations?.map((r) => r.Instances));

  // add and remove machines in all_machine array
}

refreshCommand();

setInterval(refreshCommand, 10000);

app.get("/:projectId", async (req, res) => {
  const projectId = req.params.projectId;

  const idleMachine = ALL_MACHINES.find((x) => x.isUsed === false);

  if (!idleMachine) {
    return res.status(404).send("No machine is idle");
  }

  idleMachine.isUsed = true;

  // scale up

  const command = new SetDesiredCapacityCommand({
    AutoScalingGroupName: "vscode-asg",
    DesiredCapacity:
      ALL_MACHINES.length + (5 - ALL_MACHINES.filter((x) => x.isUsed == false).length),
  });

  await client.send(command);

  res.send({ ip: idleMachine.ip });
});

app.post("/destroy",async (req,res)=>{
  const InstanceId:string = req.body.InstanceId;

  const command = new TerminateInstanceInAutoScalingGroupCommand({
    InstanceId,
    ShouldDecrementDesiredCapacity: true
  })

  await client.send(command);
  
})

app.listen(3000);
