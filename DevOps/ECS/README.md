# AWS ECR Setup

1. Create an ECR repository in AWS.
2. Create an IAM user with ECR permissions and generate an Access Key & Secret Key.
3. Configure AWS CLI:

```bash
aws configure
```

```text
AWS Access Key ID: <ACCESS_KEY>
AWS Secret Access Key: <SECRET_KEY>
Default region name: ap-south-1
Default output format: json
```

4. Login to ECR:

```bash
aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin <ACCOUNT_ID>.dkr.ecr.ap-south-1.amazonaws.com
```

5. Follow the repository instructions to build, tag, and push the Docker image.
