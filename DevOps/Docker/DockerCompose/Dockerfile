FROM node:22-alpine

WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

ENV DATABASE_URL=postgresql://postgres:random@localhost:5432/postgres

RUN pnpm prisma migrate dev
RUN pnpm prisma generate

RUN pnpm run build

EXPOSE 3000

CMD [ "pnpm","run","start"]