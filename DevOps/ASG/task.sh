#!/bin/bash

for i in {1..5}
do 
  curl localhost:3000/cpu &
  echo ""
done