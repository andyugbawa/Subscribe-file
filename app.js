const timePiece = document.getElementById("time-piece");
const nextBtn = document.getElementById("next-btn");
const okBtn = document.getElementById("ok-btn");
const subBtn = document.getElementById("sub-btn");
const bellBtn = document.getElementById("bell-btn");
const imageFile = document.getElementById("image");
let bellIcon = document.querySelector(".fa-bell");








let time = 10;



nextBtn.addEventListener("click",myPress);

okBtn.addEventListener("click",newPress);

subBtn.addEventListener("click",subPress);

bellBtn.addEventListener("click",bellPress);




function myPress(){
  okBtn.style.display = "block";
  subBtn.style.display = "block";
  bellBtn.style.display = "block";
  nextBtn.style.display = "none";
  imageFile.style.display = "block";

  const handPull = new Audio("sound/mixkit-fast-double-click-on-mouse-275.wav");
  handPull.play();

  
}

function newPress(){
    okBtn.style.color = "blue"
    okBtn.style.backgroundColor = "white";
    okBtn.style.border = "2px solid black";

    const handPull = new Audio("sound/mixkit-handgun-click-1660.mp3");
     handPull.play();
}

function subPress(){
    subBtn.style.color = "black"
    subBtn.style.backgroundColor = "white";
    subBtn.style.border = "2px solid black" ;

    const subSound = new Audio("sound/mixkit-retro-arcade-casino-notification-211.wav");
    subSound.play();
}

function bellPress(){
    bellBtn.style.color = "goldenrod"
    bellBtn.style.backgroundColor = "white";
    bellBtn.style.border = "2px solid black";

    const bellSound = new Audio("sound/mixkit-bike-notification-bell-590.wav");
    bellSound.play();

    if(bellIcon.classList.contains("fa-bell")){
        bellIcon.classList.replace("fa-bell","fa-bell-slash")
    }else{
        bellIcon.classList.replace("fa-bell-slash","fa-bell")
    }
    
   
    
}




let poll = setInterval(dang,1000)

function dang(){
    time --;
    timePiece.innerHTML =`YOUR TIME STARTS NOW  :${time}`;
    if(time === 0){
       clearInterval(poll) ;
       nextBtn.style.display = "block"
       timePiece.style.display = "none"
       
       
    }
}