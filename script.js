//?  jis pay click karain gay wo element par event raise hoga,aur event listner na milnay par wo event element
 //?  k parent par listner dhundega,,waha bhi na milnay par event parent k parent keparent par listenr
  //?  dhunde ga

var timer = 20;
var score = 0;
var hitrn=0;

function makeBubble() {
  var clutter = "";
  for (var i = 1; i <= 152; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}

function runtimer() {
  var timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#tim").textContent = timer;
    } else {
      clearInterval(timerint);
      document.querySelector("#pbtm").innerHTML=`<h1>Game Over   </br></br></br> #WAQAS117 </h1>`;
      // document.querySelector("#pbtm").innerHTML=`<h2>Your Score is ${score}</h2>`;
    }
  }, 1000);
}
function getnewhit() {
   hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hit").textContent = hitrn;
}
function increaseScore() {
  score += 10;
  document.querySelector("#sco").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
   var clickednum=(Number(dets.target.textContent));
   if(clickednum===hitrn){
    increaseScore();
    makeBubble();
    getnewhit();
   }
   
})


makeBubble();
runtimer();
getnewhit();
