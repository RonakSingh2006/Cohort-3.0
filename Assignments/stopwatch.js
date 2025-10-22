// build stop watch using setTimeout

let cnt = 1;

function clock(){
  console.log(cnt++);

  setTimeout(clock,1000);
}

clock();