#!/usr/bin/env node
import { Command } from 'commander';
import fs from "fs";
const program = new Command();

// CLI metadata
program
  .name('mycli')
  .description('A simple CLI built using commander.js')
  .version('1.0.0');

// Add a simple command
program
  .command('greet <name>')
  .description('Greet a user by name')
  .option('-u, --uppercase', 'Display name in uppercase')
  .action((name, options) => {
    const output = options.uppercase ? name.toUpperCase() : name;
    console.log(`Hello, ${output}! 👋`);
  });

// Add another command
program
  .command('add <a> <b>')
  .description('Add two numbers')
  .action((a, b) => {
    console.log(`Result: ${Number(a) + Number(b)}`);
  });

// Count no of words in a file
program
  .command('count <filePath>')
  .description('Count no of words and lines in a file')
  .option('-l','Count no of Lines in a file')
  .action((filePath , options)=>{
    if(options.l){
      fs.readFile(filePath,'utf-8',(err,data)=>{
       if(err) console.log(err);
       else{
         let count = data.split("\n").length;
         console.log(`No of Lines in file is ${count}`);
       }
     })
    }
    else{
      fs.readFile(filePath,'utf-8',(err,data)=>{
        if(err) console.log(err);
        else{
          let dataArr = data.split("\n");
          let newData = [];

          dataArr.forEach((e)=>{
            let d = e.split(" ");
            d.forEach((el)=>{
              newData.push(el);
            })
          })
          let count = newData.length;
          console.log(`No of Words in file is ${count}`);
        } 
      })
    }
  })

// Parse CLI args
program.parse(process.argv);
