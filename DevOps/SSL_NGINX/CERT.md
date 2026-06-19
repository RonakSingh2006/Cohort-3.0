# Certbot

## Install Certbot and Nginx Plugin

### Ubuntu

Choose Ngnix and Linux(Snap) on ec2

```bash
sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/local/bin/certbot
```

## Point Domain to Server

Add an **A Record** in your DNS provider pointing your domain to the EC2 public IP.

Example:

```text
example.com  ->  <EC2_PUBLIC_IP>
www.example.com -> <EC2_PUBLIC_IP>
```

## Generate SSL Certificate

```bash
sudo certbot --nginx
```

Follow the prompts and select the option to redirect HTTP traffic to HTTPS.

## Verify Auto Renewal

```bash
sudo certbot renew --dry-run
```

## Certificate Location

```text
Certificate:
/etc/letsencrypt/live/<domain>/fullchain.pem

Private Key:
/etc/letsencrypt/live/<domain>/privkey.pem
```

## Common Commands

```bash
# List certificates
sudo certbot certificates

# Renew certificates
sudo certbot renew

# Delete a certificate
sudo certbot delete --cert-name <domain>
```

