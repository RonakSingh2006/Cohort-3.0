# Docker Commands

| Command                                                                                                     | Description                               |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| `docker images`                                                                                             | List all images                           |
| `docker rmi <image>`                                                                                        | Remove an image                           |
| `docker ps`                                                                                                 | List running containers                   |
| `docker kill <containerId>`                                                                                 | Stop a container                          |
| `docker run <image>`                                                                                        | Run a container                           |
| `docker run -p <hostPort>:<containerPort> <image>`                                                          | Run with port mapping                     |
| `docker exec -it <container> sh`                                                                            | Open shell inside container               |
| `docker build -t <tag> .`                                                                                   | Build an image                            |
| `docker volume ls`                                                                                          | List volumes                              |
| `docker volume create <volume>`                                                                             | Create a volume                           |
| `docker run -v <volume>:/path <image>`                                                                      | Mount a volume                            |
| `docker network create <network>`                                                                           | Create a network                          |
| `docker network ls`                                                                                         | List networks                             |
| `docker run --name <container> --network <network> -p <hostPort>:<containerPort> -v <volume>:/path <image>` | Run with name, network, ports, and volume |
| `docker compose up`                                                                                         | Start services from docker-compose.yml    |

## Common Flags

* `-p` → Port mapping (`hostPort:containerPort`)
* `-v` → Volume mapping (`volumeName:/path`)
* `-d` → Run container in background
* `-e` → Set environment variables

## Example

```bash
docker run -d \
  --name postgres-db \
  -e POSTGRES_PASSWORD=password \
  -p 5432:5432 \
  -v postgres-data:/var/lib/postgresql/data \
  postgres
```

> For PostgreSQL containers, `POSTGRES_PASSWORD` must be provided using the `-e` flag.
