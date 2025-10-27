// how to make post request using fetch and axios

const axios = require('axios');

// fetch

let dummyRequest = async ()=>{
  let res = await fetch("https://httpdump.app/dumps/808e002a-19e7-427a-a101-f7e4fc0cf922",{
    method : "POST",
    headers : {
    "Content-Type": "application/json",
    "Authorization": "Bearer myAccessToken",
    "Accept": "application/json"
    },
    body : JSON.stringify({
      name : "Ronak",
      age : 19
    })
  });

  // here it may happend that the server and respond in json format so we have to be specific like .json() , .text()
  let data = await res.text();

  console.log(data)
}



// Axios

// oredr url , body , headers
const dummyRequest2 = async () => {
  const res = await axios.post(
    "https://httpdump.app/dumps/808e002a-19e7-427a-a101-f7e4fc0cf922",
    {
      name: "Ronak",
      age: 19
    },
    {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer myAccessToken",
        "Accept": "application/json"
      }
    }
  );

  console.log(res.data);
};


// another way

const dummyRequest3 = async () => {
  const res = await axios({
    url : "https://httpdump.app/dumps/808e002a-19e7-427a-a101-f7e4fc0cf922",
    method : "POST",
    headers : {
        "Content-Type": "application/json",
        "Authorization": "Bearer myAccessToken",
        "Accept": "application/json"
    },
    data : {
      name : "Ronak",
      age : 19
    }
    
  });

  console.log(res.data);
};




// dummyRequest();

// dummyRequest2();

dummyRequest3();