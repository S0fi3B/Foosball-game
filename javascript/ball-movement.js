function switchXDirection(){
  switch (ballXDelta) {
    case -1:
      //moving right
      ballXDelta = 1;
      break;
    case 1:
      ballXDelta = -1;
      break
    default:   
  }     
}
function isTouchingPlayer(){
  if (ball.x == columnOneX){ 
    for (let i = 0; i < columnOneY.length; i++) {
      if (ball.y>=columnOneY[i].top+redDeltaY &&ball.y<=columnOneY[i].bottom + redDeltaY){
        return true
      }
    } 
  }     
  else if (ball.x == columnTwoX){
    for (let i = 0; i < columnTwoY.length; i++) {
      if (ball.y>=columnTwoY[i].top+redDeltaY &&ball.y<=columnTwoY[i].bottom + redDeltaY){
        return true
      }
    } 
  }
  else if (ball.x == columnThreeX){
    for (let i = 0; i < columnThreeY.length; i++) {
      if (ball.y>=columnThreeY[i].top+blueDeltaY &&ball.y<=columnThreeY[i].bottom + blueDeltaY){
        return true
      }
    }                         
  }
  else if (ball.x == columnFiveX){
    for (let i = 0; i < columnThreeY.length; i++) {
      if (ball.y>=columnFourY[i].top+blueDeltaY &&ball.y<=columnFourY[i].bottom + blueDeltaY){
        return true
      }
    }               
  }
  else if (ball.x == columnSixX){
    for (let i = 0; i < columnSixY.length; i++) {
      if (ball.y>=columnSixY[i].top+redDeltaY &&ball.y<=columnSixY[i].bottom + redDeltaY){
        return true
      }
    }            
  }
  else if (ball.x == columnSevenX){
    for (let i = 0; i < columnSevenY.length; i++) {
      if (ball.y>=columnSevenY[i].top+blueDeltaY &&ball.y<=columnSevenY[i].bottom + blueDeltaY){
        return true
      }
    } 
               
  }
  else if (ball.x == columnEightX){
    for (let i = 0; i < columnEightY.length; i++) {
      if (ball.y>=columnEightY[i].top+blueDeltaY &&ball.y<=columnEightY[i].bottom + blueDeltaY){
        return true 
      }
    } 
                
  }
  return false
}

