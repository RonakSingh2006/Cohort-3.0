# Nginx Setup

## Configuration File Location

```text
/etc/nginx/nginx.conf
```

## Basic Nginx Configuration

```nginx
events {
    worker_connections 1024;
}

http {
    server {
        listen 80;
        server_name _;

        location / {
            proxy_pass http://localhost:3000;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }
    }
}
```

## Editing the Configuration

```bash
sudo nano /etc/nginx/nginx.conf
```

> If you get permission errors, make sure you're editing the file with `sudo`.

---

## DNS Configuration

To point a subdomain to your EC2 instance, use an **A Record**:

| Type | Host    | Value       |
| ---- | ------- | ----------- |
| A    | nodeapp | 13.60.29.26 |

Do **not** use a CNAME record with an IP address.

Incorrect:

```text
CNAME  nodeapp  13.60.29.26
```

This causes:

```text
Please enter a fully qualified domain name.
```

because a CNAME must point to a domain name, not an IP address.

---

## Common Nginx Commands

### Test Configuration

```bash
sudo nginx -t
```

### Reload Configuration (Recommended)

```bash
sudo nginx -s reload
```

Reloads the configuration without stopping Nginx and keeps existing connections alive.

### Restart Nginx

```bash
sudo systemctl restart nginx
```

Stops and starts the Nginx service. Existing connections may be interrupted.

### Check Service Status

```bash
sudo systemctl status nginx
```

---

## Recommended Workflow

After making changes to `nginx.conf`:

```bash
sudo nginx -t
sudo nginx -s reload
```

Use restart only if reload does not work:

```bash
sudo systemctl restart nginx
```

