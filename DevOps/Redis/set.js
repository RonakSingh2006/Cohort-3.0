import {Client} from "./client.js"

async function main() {
  await Client.sadd("set","ronak");

  console.log(await Client.sismember("set","ronak"));

  await Client.sadd("name","ronak");
  await Client.sadd("name","ram");

  console.log(await Client.sinter("set","name"));

}

main();