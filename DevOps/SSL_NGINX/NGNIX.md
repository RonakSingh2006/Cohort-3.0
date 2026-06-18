# Nginx

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

## Common Commands

```bash
# Test configuration
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx

# Restart Nginx
sudo systemctl restart nginx

# Check status
sudo systemctl status nginx
```

