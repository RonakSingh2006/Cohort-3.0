// work single time in start

if(document.querySelector("#container").innerHTML == ""){
  load();
}


// Check If already logged in

async function load() {
  if(localStorage.getItem('token')){
    try{
      let res = await axios.get("http://127.0.0.1:3000/me",{
        headers : {
          token : localStorage.getItem('token')
        }
      })

      renderDetails(res.data.username,res.data.password);
    }
    catch(e){
      alert(e);
      renderSingInSingnUp();
    }
  }
  else{
    renderSingInSingnUp();
  }

}

// render sign in and sign up

function renderSingInSingnUp(){
  // sign up

  let signUpDiv = document.createElement("div");
  signUpDiv.className = "signup-div";

  let inputSignup = document.createElement("input");
  inputSignup.type = "text";
  inputSignup.id = "signup-username";
  inputSignup.placeholder = "Username";

  let passwordSignup = document.createElement("input");
  passwordSignup.type = "text";
  passwordSignup.id = "signup-password";
  passwordSignup.placeholder = "Password";

  let signUpBtn = document.createElement('button');
  signUpBtn.textContent = "SingUp";
  signUpBtn.id = "signup";
  signUpBtn.onclick = signUp;

  signUpDiv.appendChild(inputSignup);
  signUpDiv.appendChild(passwordSignup);
  signUpDiv.appendChild(signUpBtn);

  // sign in
  let signInDiv = document.createElement("div");
  signInDiv.className = "signin-div";

  let inputSignin = document.createElement("input");
  inputSignin.type = "text";
  inputSignin.id = "signin-username";
  inputSignin.placeholder = "Username";

  let passwordSignin = document.createElement("input");
  passwordSignin.type = "text";
  passwordSignin.id = "signin-password";
  passwordSignin.placeholder = "Password";

  let signInBtn = document.createElement('button');
  signInBtn.textContent = "SingIn";
  signInBtn.id = "signin";
  signInBtn.onclick = signIn;

  signInDiv.appendChild(inputSignin);
  signInDiv.appendChild(passwordSignin);
  signInDiv.appendChild(signInBtn);

  document.querySelector('#container').innerHTML = "";
  document.querySelector('#container').appendChild(signUpDiv);
  document.querySelector('#container').appendChild(signInDiv);
}



// render logout btn and user details

function renderDetails(username , password){
  let userDiv = document.createElement('div');

  let usernameDiv = document.createElement('div');
  usernameDiv.textContent = `Username : ${username}`;

  let passwordDiv = document.createElement('div');
  passwordDiv.textContent = `Password : ${password}`;


  let logoutBtn = document.createElement('button');
  logoutBtn.id = "logout";
  logoutBtn.textContent = "Logout";
  logoutBtn.onclick = ()=>{
    localStorage.removeItem('token');
    renderSingInSingnUp();
  }

  userDiv.appendChild(usernameDiv);
  userDiv.appendChild(passwordDiv);
  userDiv.appendChild(logoutBtn);

  document.querySelector('#container').innerHTML = "";
  document.querySelector('#container').appendChild(userDiv);
}


// Sign Up

async function signUp(){

  let username = document.querySelector("#signup-username").value;
  let password = document.querySelector("#signup-password").value;

  try{
    let res = await axios.post("http://127.0.0.1:3000/signup",{
      username,
      password
    });
    alert(res.data);
  }
  catch(err){
    if(err.response){
      alert(err.response.data);
    }
    else{
      alert(err.message);
    }
  }
  finally{
    load();
  }

}

// Sign In

async function signIn(){

  let username = document.querySelector("#signin-username").value;
  let password = document.querySelector("#signin-password").value;

  try{
    let res = await axios.post("http://127.0.0.1:3000/signin",{
      username,
      password
    })

    localStorage.setItem("token",res.data.token);
    alert("Signed In");
  }
  catch(err){
    if(err.response){
      alert(err.response.data);
    }
    else{
      alert(err.message);
    }
  }
  finally{
    load();
  }
}