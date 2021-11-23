let pictures=["IMG-8285.JPG", "IMG-8286.WEBP", "IMG-8290.JPG", "IMG-8288.WEBP", "IMG-8289.JPG"];
let idx=0;

function prevPicture(){
  idx = idx - 1;

  if(idx < 0){
    document.getElementById("currentImg").src = pictures[pictures.length-1];
    idx = pictures.length-1;
  }
  else{
    document.getElementById("currentImg").src = pictures[idx];
  }

}

function nextPicture(){
  idx = idx + 1;

  if(idx >= pictures.length){
    document.getElementById("currentImg").src = pictures[0];
    idx = 0;
  }
  else{
    document.getElementById("currentImg").src = pictures[idx];
  }

}
