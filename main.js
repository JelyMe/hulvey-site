const canvas = document.getElementById("birds");
const ctx = canvas.getContext("2d");
var counter = 0;

heading = 90* (Math.PI / 180);
headingDelta = 0;
bird = [[100,500,0,0],[101,501,0,0],[102,502,0,0],[103,503,0,0],[104,504,0,0],[105,505,0,0],[106,506,0,0],[107,507,0,0],[108,508,0,0],[109,509,0,0],[110,510,0,0],[110,510,0,0],[110,510,0,0],[110,510,0,0],[110,510,0,0],[110,510,0,0],[110,510,0,0],[110,510,0,0],[110,510,0,0],[110,510,0,0],[110,510,0,0],[110,510,0,0],[110,510,0,0],[110,510,0,0],[110,510,0,0],[110,510,0,0],[110,510,0,0],[110,510,0,0],[110,510,0,0],[110,510,0,0],[110,510,0,0],[110,510,0,0],[110,510,0,0],[110,510,0,0],[110,510,0,0],[110,510,0,0],[110,510,0,0],[110,510,0,0],[110,510,0,0],[110,510,0,0],[110,510,0,0], [1000,1000,0,0]];
birdCenter = [105,105]

for(let i = 0; i < bird.length; i++){
  bird[i][3] = Math.random() + 1;
}
function run() {
  ctx.reset();
  if (counter % 10 == 0){
    headingDelta = Math.random() - 0.5;
  }
  heading += headingDelta * (Math.PI / 180) * 10;
  for(let i = 0; i < bird.length; i++){
    bird[i][2] += (Math.random() - 0.5)* (Math.PI / 180) * 5;
    birdVector = [0,0];
    for(let j = 0; j < bird.length; j++){
      if (j != i){
        birdVector = [bird[i][0] - bird[j][0], bird[i][1] - bird[j][1]];
      }
    }
    length = Math.sqrt(birdVector[0] * birdVector[0] + birdVector[1] * birdVector[1]);
    birdVector = [birdVector[0] / length, birdVector[1]/length];
    vectorToCenter = [birdCenter[0] - bird[i][0], birdCenter[1] - bird[i][1]];
    length = Math.sqrt(vectorToCenter[0] * vectorToCenter[0] + vectorToCenter[1] * vectorToCenter[1]);
    normVector = [vectorToCenter[0]/length, vectorToCenter[1]/length];
    globalCenterVector = [640 - bird[i][0], 360 - bird[i][1]];
    length = Math.sqrt(globalCenterVector[0] * globalCenterVector[0] + globalCenterVector[1] * globalCenterVector[1]);
    globalCenterVector = [globalCenterVector[0] / length, globalCenterVector[1]/length];
    oldBird = bird[i]
    bird[i] = [bird[i][0]+0.5*bird[i][3]*Math.sin(heading + 0.3*bird[i][2]) + 0.3*normVector[0] + 0.4*birdVector[0] + 0.2*globalCenterVector[0], bird[i][1] + 0.5*bird[i][3]*Math.cos(heading + 0.3*bird[i][2]) + 0.3*normVector[1] + 0.4*birdVector[1] + 0.2*globalCenterVector[1], bird[i][2], bird[i][3]];
    drawBird(bird[i][0],bird[i][1], 1);
    birdCenter[0] += (bird[i][0] - oldBird[0])/bird.length
    birdCenter[1] += (bird[i][1] - oldBird[1])/bird.length
    if(bird[i][0] > 1280){ bird[i][0] -= 1280;}
    if(bird[i][0] < 0){ bird[i][0] += 1280;}
    if(bird[i][1] > 720){ bird[i][1] -= 720;}
    if(bird[i][1] < 0){ bird[i][1] += 720;}
  }
  counter++;
  // If our counter is less than 10000, run again at the next repaint
  if (counter < 10000) {
    window.requestAnimationFrame(run);
  }
}

function drawBird(posX, posY, size){
  ctx.beginPath();
  ctx.arc(posX, posY, size, 0, 2 * Math.PI, false);
  ctx.fillStyle = '#789A9B';
  ctx.fill();
}

run();