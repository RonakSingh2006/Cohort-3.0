# Auto Scaling Group (ASG)

## Steps

1. Create an **EC2 Instance** and configure your application.
2. Create an **AMI (Amazon Machine Image)** from the instance.
3. Create a **Launch Template** using the AMI.
4. Create a **Target Group** for the application.
5. Create an **Auto Scaling Group (ASG)** using the Launch Template and attach the Target Group.
6. Configure **Auto Scaling Policies** (e.g., scale out when CPU usage is high and scale in when CPU usage is low).

## Flow

```text
EC2 Instance → AMI → Launch Template → Target Group → Auto Scaling Group → Scaling Policies
```

