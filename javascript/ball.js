const ball = PIXI.Sprite.from("images/soccer-ball.png"); 

setPixiLocation(ball);
ball.height = 30;
ball.width = 30;
app.stage.addChild(ball);
const startPoint = app.screen.width/2; 
ball.y=app.screen.height/2;
let elapsed = 0.0;
let ballYDelta = 0;
let ballXDelta = startingDirection(); 
console.log({ballXDelta})
app.ticker.add((delta) => {
  
  elapsed += delta;
  if (ball.x == columnOneX){
    for (let i = 0; i < columnOneY.length; i++) {
      if (ball.y>=columnOneY[i].top+ redDeltaY &&ball.y<=columnOneY[i].bottom + redDeltaY){
        const height = columnOneY[i].bottom - columnOneY[i].top; 
        const range = height/3;
        //moves ball vertically when htting top of player
        if (ball.y <= columnOneY[i].top+redDeltaY +2 ){ // 0 - 2
          console.log(1)
          switchXDirection();
          ballYDelta = 2;
        }
        //moves ball at an 45º angle at the first third of the player
        else if(ball.y <=range-1+columnOneY[i].top+redOneY){ // 3-9
          console.log(2)
          switchXDirection();
          ballYDelta = -1;
        }
        //moves ball horizontally at the middle third of the player
        else if(ball.y <= columnOneY[i].top + range*2 +redDeltaY){ // 10-20
          console.log(3)
          switchXDirection();
          ballYDelta = 0;
        }
        //moves ball at an 135• angle at the bottom third of the player
        else if(ball.y <= columnOneY[i].bottom-3+redDeltaY){ //21-27
            console.log(4)
            switchXDirection();
            ballYDelta = 1;
        }
        //moves ball vertically when hitting bottom of player
        else { //28- 30
            console.log(5)
            switchXDirection();
            ballYDelta = 2;
        }
      }
    } 
  }
  if (ball.x == columnTwoX){
    for (let i = 0; i < columnTwoY.length; i++) {
      if (ball.y>=columnTwoY[i].top+ redDeltaY &&ball.y<=columnTwoY[i].bottom + redDeltaY){
        const height = columnTwoY[i].bottom - columnTwoY[i].top; 
        const range = height/3;
        //moves ball vertically when htting top of player
        if (ball.y <= columnTwoY[i].top+redTwoY +2 ){ // 0 - 2
          console.log(1)
          switchXDirection();
          ballYDelta = 2;
        }
        //moves ball at an 45º angle at the first third of the player
        else if(ball.y <=range-1+columnTwoY[i].top+redDeltaY){ // 3-9
          console.log(2)
          switchXDirection();
          ballYDelta = -1;
        }
        //moves ball horizontally at the middle third of the player
        else if(ball.y <= columnTwo[i].top + range*2 +redDeltaY){ // 10-20
          console.log(3)
          switchXDirection();
          ballYDelta = 0;
        }
        //moves ball at an 135• angle at the bottom third of the player
        else if(ball.y <= columnTwoY[i].bottom-3+redDeltaY){ //21-27
            console.log(4)
            switchXDirection();
            ballYDelta = 1;
        }
        //moves ball vertically when hitting bottom of player
        else { //28- 30
            console.log(5)
            switchXDirection();
            ballYDelta = 2;
        }
      }
    } 
  }
  if (ball.x == columnThreeX){
    for (let i = 0; i < columnThreeY.length; i++) {
      if (ball.y>=columnThreeY[i].top+ redDeltaY &&ball.y<=columnThreeY[i].bottom + redDeltaY){
        const height = columnThreeY[i].bottom - columnThreeY[i].top; 
        const range = height/3;
        //moves ball vertically when htting top of player
        if (ball.y <= columnThreeY[i].top+redDeltaY +2 ){ // 0 - 2
          console.log(1)
          switchXDirection();
          ballYDelta = 2;
        }
        //moves ball at an 45º angle at the first third of the player
        else if(ball.y <=range-1+columnThreeY[i].top+redDeltaY){ // 3-9
          console.log(2)
          switchXDirection();
          ballYDelta = -1;
        }
        //moves ball horizontally at the middle third of the player
        else if(ball.y <= columnThreeY[i].top + range*2 +redDeltaY){ // 10-20
          console.log(3)
          switchXDirection();
          ballYDelta = 0;
        }
        //moves ball at an 135• angle at the bottom third of the player
        else if(ball.y <= columnThreeY[i].bottom-3+redDeltaY){ //21-27
            console.log(4)
            switchXDirection();
            ballYDelta = 1;
        }
        //moves ball vertically when hitting bottom of player
        else { //28- 30
            console.log(5)
            switchXDirection();
            ballYDelta = 2;
        }
      }
    } 
  }

  if (ball.x == columnFourX){
    for (let i = 0; i < columnFourY.length; i++) {
      if (ball.y>=columnFourY[i].top+ redDeltaY &&ball.y<=columnFourY[i].bottom + redDeltaY){
        const height = columnFourY[i].bottom - columnFourY[i].top; 
        const range = height/3;
        //moves ball vertically when htting top of player
        if (ball.y <= columnFourY[i].top+redDeltaY +2 ){ // 0 - 2
          console.log(1)
          switchXDirection();
          ballYDelta = 2;
        }
        //moves ball at an 45º angle at the first third of the player
        else if(ball.y <=range-1+columnFourY[i].top+redDeltaY){ // 3-9
          console.log(2)
          switchXDirection();
          ballYDelta = -1;
        }
        //moves ball horizontally at the middle third of the player
        else if(ball.y <= columnFourY[i].top + range*2 +redDeltaY){ // 10-20
          console.log(3)
          switchXDirection();
          ballYDelta = 0;
        }
        //moves ball at an 135• angle at the bottom third of the player
        else if(ball.y <= columnFourY[i].bottom-3+redDeltaY){ //21-27
            console.log(4)
            switchXDirection();
            ballYDelta = 1;
        }
        //moves ball vertically when hitting bottom of player
        else { //28- 30
            console.log(5)
            switchXDirection();
            ballYDelta = 2;
        }
      }
    } 
  }
  if (ball.x == columnFiveX){
    for (let i = 0; i < columnFiveY.length; i++) {
      if (ball.y>=columnFiveY[i].top+ redDeltaY &&ball.y<=columnFiveY[i].bottom + redDeltaY){
        const height = columnFiveY[i].bottom - columnFiveY[i].top; 
        const range = height/3;
        //moves ball vertically when htting top of player
        if (ball.y <= columnFiveY[i].top+redDeltaY +2 ){ // 0 - 2
          console.log(1)
          switchXDirection();
          ballYDelta = 2;
        }
        //moves ball at an 45º angle at the first third of the player
        else if(ball.y <=range-1+columnFiveY[i].top+redDeltaY){ // 3-9
          console.log(2)
          switchXDirection();
          ballYDelta = -1;
        }
        //moves ball horizontally at the middle third of the player
        else if(ball.y <= columnFiveY[i].top + range*2 +redDeltaY){ // 10-20
          console.log(3)
          switchXDirection();
          ballYDelta = 0;
        }
        //moves ball at an 135• angle at the bottom third of the player
        else if(ball.y <= columnFiveY[i].bottom-3+redDeltaY){ //21-27
            console.log(4)
            switchXDirection();
            ballYDelta = 1;
        }
        //moves ball vertically when hitting bottom of player
        else { //28- 30
            console.log(5)
            switchXDirection();
            ballYDelta = 2;
        }
      }
    } 
  }
  if (ball.x == columnSixX){
    for (let i = 0; i < columnSixY.length; i++) {
      if (ball.y>=columnSixY[i].top+ redDeltaY &&ball.y<=columnSixY[i].bottom + redDeltaY){
        const height = columnSixY[i].bottom - columnSixY[i].top; 
        const range = height/3;
        //moves ball vertically when htting top of player
        if (ball.y <= columnSixY[i].top+redDeltaY +2 ){ // 0 - 2
          console.log(1)
          switchXDirection();
          ballYDelta = 2;
        }
        //moves ball at an 45º angle at the first third of the player
        else if(ball.y <=range-1+columnSixY[i].top+redDeltaY){ // 3-9
          console.log(2)
          switchXDirection();
          ballYDelta = -1;
        }
        //moves ball horizontally at the middle third of the player
        else if(ball.y <= columnSixY[i].top + range*2 +redDeltaY){ // 10-20
          console.log(3)
          switchXDirection();
          ballYDelta = 0;
        }
        //moves ball at an 135• angle at the bottom third of the player
        else if(ball.y <= columnSixY[i].bottom-3+redDeltaY){ //21-27
            console.log(4)
            switchXDirection();
            ballYDelta = 1;
        }
        //moves ball vertically when hitting bottom of player
        else { //28- 30
            console.log(5)
            switchXDirection();
            ballYDelta = 2;
        }
      }
    } 
  }
  if (ball.x == columnSevenX){
    for (let i = 0; i < columnSevenY.length; i++) {
      if (ball.y>=columnSevenY[i].top+ redDeltaY &&ball.y<=columnSevenY[i].bottom + redDeltaY){
        const height = columnSeven[i].bottom - columnSeven[i].top; 
        const range = height/3;
        //moves ball vertically when htting top of player
        if (ball.y <= columnSevenY[i].top+redDeltaY +2 ){ // 0 - 2
          console.log(1)
          switchXDirection();
          ballYDelta = 2;
        }
        //moves ball at an 45º angle at the first third of the player
        else if(ball.y <=range-1+columnSevenY[i].top+redDeltaY){ // 3-9
          console.log(2)
          switchXDirection();
          ballYDelta = -1;
        }
        //moves ball horizontally at the middle third of the player
        else if(ball.y <= columnSevenY[i].top + range*2 +redDeltaY){ // 10-20
          console.log(3)
          switchXDirection();
          ballYDelta = 0;
        }
        //moves ball at an 135• angle at the bottom third of the player
        else if(ball.y <= columnSevenY[i].bottom-3+redDeltaY){ //21-27
            console.log(4)
            switchXDirection();
            ballYDelta = 1;
        }
        //moves ball vertically when hitting bottom of player
        else { //28- 30
            console.log(5)
            switchXDirection();
            ballYDelta = 2;
        }
      }
    } 
  }
  if (ball.x == columnEightX){
    for (let i = 0; i < columnEightY.length; i++) {
      if (ball.y>=columnEightY[i].top+ redDeltaY &&ball.y<=columnEightY[i].bottom + redDeltaY){
        const height = columnEight[i].bottom - columnEight[i].top; 
        const range = height/3;
        //moves ball vertically when htting top of player
        if (ball.y <= columnEightY[i].top+redDeltaY +2 ){ // 0 - 2
          console.log(1)
          switchXDirection();
          ballYDelta = 2;
        }
        //moves ball at an 45º angle at the first third of the player
        else if(ball.y <=range-1+columnEightY[i].top+redDeltaY){ // 3-9
          console.log(2)
          switchXDirection();
          ballYDelta = -1;
        }
        //moves ball horizontally at the middle third of the player
        else if(ball.y <= columnEightY[i].top + range*2 +redDeltaY){ // 10-20
          console.log(3)
          switchXDirection();
          ballYDelta = 0;
        }
        //moves ball at an 135• angle at the bottom third of the player
        else if(ball.y <= columnEightY[i].bottom-3+redDeltaY){ //21-27
            console.log(4)
            switchXDirection();
            ballYDelta = 1;
        }
        //moves ball vertically when hitting bottom of player
        else { //28- 30
            console.log(5)
            switchXDirection();
            ballYDelta = 2;
        }
      }
    } 
  }
  if (ball.x<= tableLeftEdge && ballXDelta == -1 ){
    console.log(6)
    switchXDirection();

  }
  else if(ball.x>= tableRightEdge && ballXDelta == 1 ) {
    console.log(7)
    switchXDirection();

  }
  if(isTouchingWall()){
    if (isBlueScored()) {
      console.log(8)
      bluePointElement.innerHTML = ++bluePoints;
      ballXDelta = startingDirection();
      ballYDelta = 0; 
      ball.x=startPoint;
    }
    else if (isRedScored()) {
      console.log(9)
      redPointElement.innerHTML = ++redPoints;
      ballXDelta=startingDirection();
      ballYDelta = 0;
      ball.x=startPoint;
    }
    else {
      console.log(10)
      switchXDirection(); 
    } 
  }
  console.log(ball.x)
  console.log(ball.y)
  ball.x += ballXDelta;
  ball.y += ballYDelta;
});

function isTouchingWall(){
  if(ball.x<=tableLeftEdge||ball.x>=tableRightEdge||ball.y<=tableTopEdge||ball.y>=tableBottomEdge ){
    return true
  }
return false
}
function isInGoal(){
  console.log({ballY:ball.y,goalTopEdge,goalBottomEdge})
  if(ball.y>=goalTopEdge && ball.y<=goalBottomEdge){
    return true  
  }
return false 
}
function isBlueScored(){
   if(ball.x<=tableLeftEdge && isInGoal()){
     return true
   }
 return false  
}
function isRedScored(){
  if(ball.x>=tableRightEdge && isInGoal()){
    return true
  }
return false
}
function startingDirection(){
  const random = Math.floor(Math.random()*2);
  if (random == 0) {
    return -1
  }
  else{
    return 1
  }
}


