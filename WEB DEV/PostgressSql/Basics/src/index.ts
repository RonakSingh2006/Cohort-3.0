import dotenv from 'dotenv'
dotenv.config();

import {Client} from 'pg'
import express from 'express'

const pgClient = new Client(process.env.POSTGRESS_URL);
const app = express();

pgClient.connect();

app.use(express.json());

// get users
app.get("/users",async (req,res)=>{
  const data = await pgClient.query('SELECT * from users');

  res.send(data.rows);
})


// add user
// {
//   "username" , "mobile" , "userId"
// }


app.post("/user",async (req,res)=>{
  const {username , mobile , userId} = req.body;

  // we use this syntax in place of concat to prevent sql injection
  const addQuery = 'INSERT INTO USERS (username,mobile,userId) values ($1, $2, $3)'

  await pgClient.query(addQuery,[username,mobile,userId]);

  res.send("user added");
})

// Transactions

app.post("/createAccount", async (req,res)=>{
  const {username,userId,gender,accountId} = req.body;

  const customerQuery = 'INSERT INTO Customer VALUES ($1, $2, $3);'
  const accountQuery = 'INSERT INTO Account VALUES ($1, $2)'

  await pgClient.query('BEGIN;');
  await pgClient.query(customerQuery,[username,userId,gender]);

  await new Promise((res) => setTimeout(res,1000*100));

  await pgClient.query(accountQuery,[accountId,userId]);
  await pgClient.query('COMMIT;');

  res.send("Done");

})

























app.listen(3000);