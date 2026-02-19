FROM oven/bun:1

WORKDIR /usr/src/app

COPY package.json ./package.json
COPY bun.lock ./bun.lock
COPY turbo.json ./turbo.json

COPY packages ./packages
COPY apps/ws ./apps/ws

RUN bun install
RUN bun run db:generate

EXPOSE 8080

CMD ["bun","run","start:ws"]

#  docker build -t todo-app-ws -f ./docker/Dockerfile.ws .