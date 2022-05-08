const redPlayer = PIXI.Sprite.from('images/red-offense.png');
const redPointElement = document.getElementById("redPoints")
redPointElement.innerHTML = redPoints;
setPixiLocation(redPlayer);
redPlayer.height = 350;
redPlayer.width = 520;
app.stage.addChild(redPlayer);
let redDeltaY = 0;
function redDownListener (event){
    if (event.code === "KeyS" && redPlayer.y<210){
      redPlayer.y += 10;
      redDeltaY +=10;  
    }
   else if(event.code ==="KeyW" && redPlayer.y> 170){
      redPlayer.y-=10;
      redDeltaY -=10;
    }
  }
const columnOneX = 80;
const columnTwoX =140;
const columnFourX =260;
const columnSixX =380;
window.addEventListener("keydown", redDownListener);
// initial psotion: app.screen.height/2
//height is 20 px
// distanv=ce between is 45 ish
const columnOneY = [{top: 171, bottom:209}];
const columnTwoY = [
  {top: 135, bottom:173},
  {top: 207, bottom:245},
];
const columnFourY = [
  {top: 35, bottom:74},
  {top: 102, bottom:142},
  {top: 170, bottom:210},
  {top: 240, bottom:278},
  {top: 305, bottom:346},
];
const columnSixY = [
  {top: 102, bottom:142},
  {top: 170, bottom:210},
  {top: 240, bottom:278},
];

