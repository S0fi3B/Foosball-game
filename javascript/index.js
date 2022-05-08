
// Create the application helper and add its render target to the page
let app = new PIXI.Application({ width: 580, height: 380, backgroundAlpha: 0 });
document.body.appendChild(app.view);
let redPoints = 0;
let bluePoints = 0;
function setPixiLocation(pixi){
  pixi.anchor.set(0.5);
  pixi.x= app.screen.width/2;
  pixi.y=app.screen.height/2;
}
window.addEventListener("mousedown",(e)=> console.log(e) )












