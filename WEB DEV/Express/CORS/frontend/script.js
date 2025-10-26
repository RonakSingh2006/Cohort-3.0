let inpA = document.querySelector("#first");
let inpB = document.querySelector("#second");


let sumBtn = document.querySelector("#sum")

let result = document.querySelector('.result');

sumBtn.addEventListener("click", async ()=>{
  let x = inpA.value;
  let y = inpB.value;

  let url = `http://localhost:3000/sum`;

  let res = await axios.post(url , {
    a : x,
    b : y
  });

  result.innerHTML = JSON.stringify(res.data);
})