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


# ECS Deployment

1. Create an **ECS Cluster**.
2. Create a **Task Definition**.
3. Create a **Service** using the task definition.
4. During service creation, create:

   * An **Application Load Balancer (ALB)**
   * A **Target Group**
5. Once deployed, the application will be accessible via the Load Balancer DNS name.

## Enable HTTPS

1. Open the Load Balancer and add an **HTTPS (443) Listener**.
2. Launch an **EC2 instance** and configure **Nginx**.
3. Point your domain to the EC2 instance.
4. Add the required **CNAME/TXT records** in your DNS provider for domain verification.
5. Install **Certbot** and generate a free SSL certificate.
6. Export/import the generated certificate into **AWS Certificate Manager (ACM)**.
7. Attach the certificate to the Load Balancer's 443 listener.
8. Update the Security Group to allow inbound traffic on port **443**.
9. change the record in domain registery to point to loadbalancer dns ip
Your application will now be accessible securely over HTTPS.
