## Manual Installation
- Install NodeJs
- npm install -g pnpm
- Clone repo
- pnpm install
- start db locally
  - docker run -e POSTGRES_PASSWORD=your_password -d -p 5432:5432 postgres
  - create db on neon.tech
- Add DATABASE_URL in .env
- pnpm prisma migrate dev
- pnpm prisma generate
- pnpm run dev


## Docker Installation
- Install Docker
- create newtwork 
  - docker network create user_network
- Start Postgres
  - docker run --name postgres --network user_network -e POSTGRES_PASSWORD=random -d -p 5432:5432 postgres
- Buid Image
  - docker build --network=host -t user_project .
- Run Image
  - docker run --network user_network -e DATABASE_URL=postgresql://postgres:random@postgres:5432/postgres -d -p 3000:3000 user_project

## Docker Compose Instalation
- Install Docker , docker-compose
- Run  `docker compose up`
