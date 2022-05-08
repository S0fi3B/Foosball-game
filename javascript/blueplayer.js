const bluePlayer = PIXI.Sprite.from("images/blue-offense.png");
const bluePointElement = document.getElementById("bluePoints")
bluePointElement.innerHTML = bluePoints;
setPixiLocation(bluePlayer);
bluePlayer.height = 350;
bluePlayer.width = 520;
app.stage.addChild(bluePlayer);
let blueDeltaY = 0;
function blueDownListener (event){
    if (event.code === "ArrowDown" && bluePlayer.y<210){
      bluePlayer.y += 10;
      blueDeltaY +=10;
    }
    else if(event.code ==="ArrowUp" && bluePlayer.y>170){
      bluePlayer.y-=10;
      blueDeltaY -=10;
      
    }
    }
    window.addEventListener("keydown",blueDownListener);
const columnThreeX =198;
const columnFiveX =320;
const columnSevenX =446;
const columnEightX= 508;
const columnThreeY = [
  {top: 102, bottom: 142},
  {top: 170, bottom: 210},
  {top: 240, bottom: 278},
];
const columnFiveY = [
  {top: 35, bottom:74},
  {top: 102, bottom:142},
  {top: 170, bottom:210},
  {top: 240, bottom:278},
  {top: 305, bottom:346},
];
const columnSevenY = [
  {top: 135, bottom:173},
  {top: 207, bottom:245},
]
const columnEightY = [{top: 171, bottom:209}];