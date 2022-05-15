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
          console.log(1.1)
          switchXDirection();
          ballYDelta = 2;
        }
        //moves ball at an 45º angle at the first third of the player
        else if(ball.y <=range-1+columnTwoY[i].top+redDeltaY){ // 3-9
          console.log(2.1)
          switchXDirection();
          ballYDelta = -1;
        }
        //moves ball horizontally at the middle third of the player
        else if(ball.y <= columnTwo[i].top + range*2 +redDeltaY){ // 10-20
          console.log(3.1)
          switchXDirection();
          ballYDelta = 0;
        }
        //moves ball at an 135• angle at the bottom third of the player
        else if(ball.y <= columnTwoY[i].bottom-3+redDeltaY){ //21-27
            console.log(4.1)
            switchXDirection();
            ballYDelta = 1;
        }
        //moves ball vertically when hitting bottom of player
        else { //28- 30
            console.log(5.1)
            switchXDirection();
            ballYDelta = 2;
        }
      }
    } 
  }
  if (ball.x == columnThreeX){
    for (let i = 0; i < columnThreeY.length; i++) {
      if (ball.y>=columnThreeY[i].top+ blueDeltaY &&ball.y<=columnThreeY[i].bottom + blueDeltaY){
        const height = columnThreeY[i].bottom - columnThreeY[i].top; 
        const range = height/3;
        //moves ball vertically when htting top of player
        if (ball.y <= columnThreeY[i].top+blueDeltaY +2 ){ // 0 - 2
          console.log(1.2)
          switchXDirection();
          ballYDelta = 2;
        }
        //moves ball at an 45º angle at the first third of the player
        else if(ball.y <=range-1+columnThreeY[i].top+blueDeltaY){ // 3-9
          console.log(2.2)
          switchXDirection();
          ballYDelta = -1;
        }
        //moves ball horizontally at the middle third of the player
        else if(ball.y <= columnThreeY[i].top + range*2 +blueDeltaY){ // 10-20
          console.log(3.2)
          switchXDirection();
          ballYDelta = 0;
        }
        //moves ball at an 135• angle at the bottom third of the player
        else if(ball.y <= columnThreeY[i].bottom-3+blueDeltaY){ //21-27
            console.log(4.2)
            switchXDirection();
            ballYDelta = 1;
        }
        //moves ball vertically when hitting bottom of player
        else { //28- 30
            console.log(5.2)
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
          console.log(1.3)
          switchXDirection();
          ballYDelta = 2;
        }
        //moves ball at an 45º angle at the first third of the player
        else if(ball.y <=range-1+columnFourY[i].top+redDeltaY){ // 3-9
          console.log(2.3)
          switchXDirection();
          ballYDelta = -1;
        }
        //moves ball horizontally at the middle third of the player
        else if(ball.y <= columnFourY[i].top + range*2 +redDeltaY){ // 10-20
          console.log(3.3)
          switchXDirection();
          ballYDelta = 0;
        }
        //moves ball at an 135• angle at the bottom third of the player
        else if(ball.y <= columnFourY[i].bottom-3+redDeltaY){ //21-27
            console.log(4.3)
            switchXDirection();
            ballYDelta = 1;
        }
        //moves ball vertically when hitting bottom of player
        else { //28- 30
            console.log(5.3)
            switchXDirection();
            ballYDelta = 2;
        }
      }
    } 
  }
  if (ball.x == columnFiveX){
    for (let i = 0; i < columnFiveY.length; i++) {
      if (ball.y>=columnFiveY[i].top+ blueDeltaY &&ball.y<=columnFiveY[i].bottom + blueDeltaY){
        const height = columnFiveY[i].bottom - columnFiveY[i].top; 
        const range = height/3;
        //moves ball vertically when htting top of player
        if (ball.y <= columnFiveY[i].top+blueDeltaY +2 ){ // 0 - 2
          console.log(1.4)
          switchXDirection();
          ballYDelta = 2;
        }
        //moves ball at an 45º angle at the first third of the player
        else if(ball.y <=range-1+columnFiveY[i].top+blueDeltaY){ // 3-9
          console.log(2.4)
          switchXDirection();
          ballYDelta = -1;
        }
        //moves ball horizontally at the middle third of the player
        else if(ball.y <= columnFiveY[i].top + range*2 +blueDeltaY){ // 10-20
          console.log(3.4)
          switchXDirection();
          ballYDelta = 0;
        }
        //moves ball at an 135• angle at the bottom third of the player
        else if(ball.y <= columnFiveY[i].bottom-3+blueDeltaY){ //21-27
            console.log(4.4)
            switchXDirection();
            ballYDelta = 1;
        }
        //moves ball vertically when hitting bottom of player
        else { //28- 30
            console.log(5.4)
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
          console.log(1.5)
          switchXDirection();
          ballYDelta = 2;
        }
        //moves ball at an 45º angle at the first third of the player
        else if(ball.y <=range-1+columnSixY[i].top+redDeltaY){ // 3-9
          console.log(2.5)
          switchXDirection();
          ballYDelta = -1;
        }
        //moves ball horizontally at the middle third of the player
        else if(ball.y <= columnSixY[i].top + range*2 +redDeltaY){ // 10-20
          console.log(3.5)
          switchXDirection();
          ballYDelta = 0;
        }
        //moves ball at an 135• angle at the bottom third of the player
        else if(ball.y <= columnSixY[i].bottom-3+redDeltaY){ //21-27
            console.log(4.5)
            switchXDirection();
            ballYDelta = 1;
        }
        //moves ball vertically when hitting bottom of player
        else { //28- 30
            console.log(5.5)
            switchXDirection();
            ballYDelta = 2;
        }
      }
    } 
  }
  if (ball.x == columnSevenX){
    for (let i = 0; i < columnSevenY.length; i++) {
      if (ball.y>=columnSevenY[i].top+ blueDeltaY &&ball.y<=columnSevenY[i].bottom + blueDeltaY){
        const height = columnSeven[i].bottom - columnSeven[i].top; 
        const range = height/3;
        //moves ball vertically when htting top of player
        if (ball.y <= columnSevenY[i].top+blueDeltaY +2 ){ // 0 - 2
          console.log(1.6)
          switchXDirection();
          ballYDelta = 2;
        }
        //moves ball at an 45º angle at the first third of the player
        else if(ball.y <=range-1+columnSevenY[i].top+blueDeltaY){ // 3-9
          console.log(2.6)
          switchXDirection();
          ballYDelta = -1;
        }
        //moves ball horizontally at the middle third of the player
        else if(ball.y <= columnSevenY[i].top + range*2 +blueDeltaY){ // 10-20
          console.log(3.6)
          switchXDirection();
          ballYDelta = 0;
        }
        //moves ball at an 135• angle at the bottom third of the player
        else if(ball.y <= columnSevenY[i].bottom-3+blueDeltaY){ //21-27
            console.log(4.6)
            switchXDirection();
            ballYDelta = 1;
        }
        //moves ball vertically when hitting bottom of player
        else { //28- 30
            console.log(5.6)
            switchXDirection();
            ballYDelta = 2;
        }
      }
    } 
  }
  if (ball.x == columnEightX){
    for (let i = 0; i < columnEightY.length; i++) {
      if (ball.y>=columnEightY[i].top+ blueDeltaY &&ball.y<=columnEightY[i].bottom + blueDeltaY){
        const height = columnEight[i].bottom - columnEight[i].top; 
        const range = height/3;
        //moves ball vertically when htting top of player
        if (ball.y <= columnEightY[i].top+blueDeltaY +2 ){ // 0 - 2
          
          switchXDirection();
          ballYDelta = 2;
        }
        //moves ball at an 45º angle at the first third of the player
        else if(ball.y <=range-1+columnEightY[i].top+blueDeltaY){ // 3-9
          
          switchXDirection();
          ballYDelta = -1;
        }
        //moves ball horizontally at the middle third of the player
        else if(ball.y <= columnEightY[i].top + range*2 +blueDeltaY){ // 10-20
          
          switchXDirection();
          ballYDelta = 0;
        }
        //moves ball at an 135• angle at the bottom third of the player
        else if(ball.y <= columnEightY[i].bottom-3+blueDeltaY){ //21-27
            
            switchXDirection();
            ballYDelta = 1;
        }
        //moves ball vertically when hitting bottom of player
        else { //28- 30
            console.log(5.7)
            switchXDirection();
            ballYDelta = 2;
        }
      }
    } 
  }
  if (ball.x<= tableLeftEdge && ballXDelta == 1 ){
  
    switchXDirection();

  }
  else if(ball.x>= tableRightEdge && ballXDelta == -1 ) {
   
    switchXDirection();

  }
  
  if(isTouchingTopWall()||isTouchingBottomWall()){
    switchYDirection()

  }
  

  else if (isBlueScored()) {
    
    bluePointElement.innerHTML = ++bluePoints;
    ballXDelta = startingDirection();
    ballYDelta = 0; 
    ball.x=startPoint;
  }
  else if (isRedScored()) {
    
    redPointElement.innerHTML = ++redPoints;
    ballXDelta=startingDirection();
    ballYDelta = 0;
    ball.x=startPoint;
  }
  else if (isTouchingLeftWall()||isTouchingRightWall()){
    
    switchXDirection()
  }
 
  
  ball.x += ballXDelta;
  ball.y += ballYDelta;
});

function isTouchingTopWall(){
  if(ball.y<=tableTopEdge ){
    return true
  }
  
  return false
}
function isTouchingBottomWall(){
  if(ball.y>=tableBottomEdge ){
    return true
  }
  
  return false
}
function isTouchingLeftWall(){
  if(ball.x<=tableLeftEdge){
    return true
  }
  
  return false
}
function isTouchingRightWall(){
  if(ball.x>=tableRightEdge){
    return true
  }
  
  return false
}
function isInGoal(){
  if(ball.y>=goalTopEdge && ball.y<=goalBottomEdge){
    return true  
  }
return false 
}
function isBlueScored(){
   if(isTouchingLeftWall()&& isInGoal()){
     return true
   }
 return false  
}
function isRedScored(){
  if(isTouchingRightWall() && isInGoal()){
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


