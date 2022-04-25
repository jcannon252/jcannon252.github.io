//choose your own adventure 
// which party will this inch worm go to?
// freesound music https://freesound.org/s/145596/

let scene = 1;
let mySound;
let sadSound;

function preload() {
  img = loadImage("firstscene.png"); //scene one 
  party = loadImage("party.png"); //scene two -
  parte = loadImage("parte.png"); //scene three - still possible second
  disco = loadImage("disco.png"); // scene four
  sad = loadImage("sad.png"); //scene five
   soundFormats('mp3', 'ogg');
  mySound = loadSound('discomusic.mp3');
  sadSound =loadSound('sadMusic.mp3');
}


function setup() {
  createCanvas(400, 400);
}

function draw() {
  // console.log(mouseX + ", " + mouseY); //concatenation
console.log(scene);
  // background(220);
  // image (img,0, 0,400,400);
  // image (party,0,0,400,400);}

  // check which scene is currently active, and draw it
  if (scene === 1) {
    drawScene1();
  } else if (scene === 2) {
    drawScene2();
  } else if (scene === 3) {
    drawScene3();
  } else if (scene === 4) {
    drawScene4();
  } else if (scene === 5) {
    drawScene5();
  }
}

function drawScene1() {
  // draw images in a scene

  // other interactions appropriate for draw(), like hover
  // effects etc. that are unique to scene 1 should go here
  image(img, 0, 0);
}

// scene 2 and 3 are a choose your own adventure type of direction
function drawScene2() {
  image(party, 0, 0);
}

function drawScene3() {
  image(parte, 0, 0);
}

function drawScene4() {
  image(disco, 0, 0);
  if (!mySound.isPlaying()){
  mySound.play();
  }
}

function drawScene5() {
  image(sad, 0, 0);
  if (!sadSound.isPlaying()){
  sadSound.play();
  }
}

function mousePressed() {
  // check which scene we're currently on, and
  // choose where to go next

  if (scene === 1) {
    // check each hole, move on to new scene if hole clicked
    if (mouseX > 186 && mouseX < 269 && mouseY > 370 && mouseY < 400) {
      scene = 2; //party hole
    } else if (mouseX > 293 && mouseX < 360 && mouseY > 370 && mouseY < 400) {
      scene = 3;
    }
  } else if (scene === 2) {
    scene = 4; 
  } else if (scene === 3) {
    scene = 5;
  }
   else if (scene === 4) {
    scene = 1;
  }
  else if(scene === 5){
    scene = 1;
  }
}
