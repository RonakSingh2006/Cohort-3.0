import {Client} from "./client.js"

async function main() {
  await Client.lpush("list","ronak");

  console.log(await Client.lpop("list"));


  console.log(await Client.llen("list"));

  console.log(await Client.lrange("list",0,-1));
}

main();