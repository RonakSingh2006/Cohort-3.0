import express from 'express';
import 'newrelic';


const app = express();

app.get('/',(req,res)=>{
        res.send("hello world");
});

app.listen(3000,()=>{
        console.log("App running");
});