import {Client} from "./client.js"

async function  init() {
  
  await Client.set("count",10);

  console.log(await Client.get("count"));

  await Client.incr("count");

  console.log(await Client.get("count"));

  Client.expire("count",10);

  await Client.del("count");
}

init();