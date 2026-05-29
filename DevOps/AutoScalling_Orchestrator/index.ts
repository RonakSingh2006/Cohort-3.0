import "dotenv/config";

import { AutoScalingClient,SetDesiredCapacityCommand } from "@aws-sdk/client-auto-scaling";
import express from "express"

const client = new AutoScalingClient({
  region: "ap-south-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

const command = new SetDesiredCapacityCommand({AutoScalingGroupName : "vscode-asg" , DesiredCapacity : 1})

const data = await client.send(command);

console.log(data);