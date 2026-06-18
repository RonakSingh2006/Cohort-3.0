# GitHub Actions CI/CD (Docker Hub)

```yaml
name: Deploy Backend

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Code
        uses: actions/checkout@v2

      - name: Docker Login
        uses: docker/login-action@v2
        with:
          username: ${{ secrets.DOCKERHUB_USERNAME }}
          password: ${{ secrets.DOCKERHUB_TOKEN }}

      - name: Build and Push Image
        uses: docker/build-push-action@v4
        with:
          context: .
          file: ./docker/Dockerfile.backend
          push: true
          tags: RonakSingh2006/todo-app-backend:${{ github.sha }}
```

## Required GitHub Secrets

* `DOCKERHUB_USERNAME`
* `DOCKERHUB_TOKEN`

## Workflow

1. Triggered on every push to the `main` branch.
2. Checks out the repository code.
3. Logs in to Docker Hub using GitHub Secrets.
4. Builds the Docker image.
5. Pushes the image to Docker Hub with the commit SHA as the tag.

