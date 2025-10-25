const getURL = (id)=>{
  return `https://pokeapi.co/api/v2/pokemon/${id}`;
}

const generateRandom = ()=>{
  return Math.floor(Math.random()*1000) + 1;
}


let resultBox = document.querySelector("#result");

const generateRandomPokemon = (imgURL , name)=>{
  
  const imgElement = document.createElement("img");

  imgElement.src = imgURL;

  imgElement.width = 200;

  const nameElement = document.createElement("h1");
  nameElement.textContent = name;

  console.log(imgElement);
  console.log(nameElement);

  resultBox.innerHTML = "";
  resultBox.appendChild(imgElement);
  resultBox.appendChild(nameElement);
}

const btn = document.querySelector("#click");

const getData = async ()=>{
  let randomNum = generateRandom();

  let url = getURL(randomNum);

  let res = await fetch(url);
  let data = await res.json();
  

  let img = data.sprites.front_default;
  let name = data.name;

  generateRandomPokemon(img,name);

}

btn.addEventListener("click",getData);

