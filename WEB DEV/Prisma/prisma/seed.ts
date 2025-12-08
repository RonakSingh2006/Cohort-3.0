import {prisma} from '../src/lib/prisma'

async function createDummyUser(){
  await prisma.user.create({
    data : {
      usename : 'testName',
      password : 'test@123',
      age : 98,
      todos : {
        create : {
          title : 'Go to Gym',
          description : 'Do 100 pull up',
          done : false
        }
      }
    }
  })
}


createDummyUser();