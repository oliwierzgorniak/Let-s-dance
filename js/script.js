const BACKGROUND_COLOR = 'black';

let currentScene = 0;
let time = 0;
let song;
let ballerinaModel;
let nutcrackerModel;

function setup() {
  createCanvas(640, 360, WEBGL)
  angleMode(DEGREES)
}

function preload() {
  song = loadSound("./assets/tchaikovsky-dance-of-the-sugar-plum-fairy.mp3")
  ballerinaModel = loadModel("./assets/ballerina.obj", true);
  nutcrackerModel = loadModel("./assets/nutcracker.obj", true);
}

function draw() {
  background(BACKGROUND_COLOR);
  orbitControl(0.05, 0.05, 0.05, {freeRotation: true});
  // camera(0, 200, 300) // front
  drawSceneOne()

  // currentScene = getCurrentScene();

  // switch (currentScene) {
  //   case 1:
  //     drawRect(0);
  //     break;
  //   case 2:
  //     drawRect("red");
  //     break;
  //   case 3:
  //     drawRect(255);
  //     break;
  // }

  // showTime();

}

function getCurrentScene() {
  const ms = millis()

  // from 0 to 2 seconds
  if (ms - time <= 2000) {
    return 1
    // from 2 to 4 seconds
  } else if (ms - time <= 4000) {
    return 2
    // from 4 to 6 seconds
  } else if (ms - time <= 6000) {
    return 3
  } else {
    time = ms
    return 1
  }
}

function drawSceneOne() {
  // camera(0, TABLE_HEIGHT* 2, TABLE_HEIGHT, 0, 0, TABLE_HEIGHT) // front
  camera(0, 2000, 1001, 0, 0, 1000) // front
  // camera(0, 0, 1000) // top
  // camera(0, 250, 150) // top

  normalMaterial()
  plane(10000, 10000)
  drawJeweleryBox()
  drawTable();
  push()
  translate(0, 0, TABLE_HEIGHT)
  drawBallerina()
  drawNutcracker(NUTCRACKER_POSITION);
  drawNutcracker(-NUTCRACKER_POSITION);
  pop()
  drawChair()
  drawChristmasTree()
}

// function showTime() {
//   const ms = millis();
//   push();
//   stroke(0);
//   fill(220);
//   noStroke();
//   rect(0, 0, 150, 80);
//   fill(0);
//   text(`Seconds: ${floor(ms / 1000)}`, 10, 30);
//   text(`Scene: ${currentScene}`, 10, 50);
//   pop();
// }

// function mouseClicked() {
//   song.play();
// }

// function drawRect(colour) {
//   push();
//   fill(colour);
//   rectMode(CENTER);
//   rect(width / 2, height / 2, width / 2);
//   pop();
// }
