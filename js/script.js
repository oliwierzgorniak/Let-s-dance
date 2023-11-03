const BACKGROUND_COLOR = 'black';
const BACK_WALL_POSITION = 1000;

let currentScene = 1;
let time = 0;
let song;
let ballerinaModel;
let nutcrackerModel;
let newCanvasCreated = false

let startTime;

let animationStarted = false;

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
  
  // currentScene = getCurrentScene();
  
  switch (currentScene) {
    case 0:
        drawSceneOne()
        break;
      case 1:
        if (!newCanvasCreated) {
          let canvas3dElement = document.querySelector('#defaultCanvas0')
          canvas3dElement.remove()

          var s2 = function (sketch) {
            sketch.setup = function () {
              let canvas2 = sketch.createCanvas(640, 360);
              sketch.noStroke();
            };
            sketch.draw = function () {
              sketch.background(100);
            
              draw2dWindow(sketch)
            };
          };
          
          new p5(s2);
        }
        newCanvasCreated = true;
        break;
    }
}

// function getCurrentScene() {
//   const ms = millis()

//   // from 0 to 2 seconds
//   if (ms - time <= 2000) {
//     return 1
//     // from 2 to 4 seconds
//   } else if (ms - time <= 4000) {
//     return 2
//     // from 4 to 6 seconds
//   } else if (ms - time <= 6000) {
//     return 3
//   } else {
//     time = ms
//     return 1
//   }
// }

function drawSceneOne() {

  // // camera(0, TABLE_HEIGHT* 2, TABLE_HEIGHT, 0, 0, TABLE_HEIGHT) // front
  // // camera(0, 2000, 1001, 0, 0, 1000) // front
  
  // // camera(0, 1000, 1000, 0, 0, TABLE_HEIGHT * 1.3) // top
  // camera(0, 200, TABLE_HEIGHT * 1.8 + 1, 0, 0, TABLE_HEIGHT * 1.2) // top
  handleCamera()
  
  normalMaterial()
  push()
  rotateX(90)
  translate(0, 0, BACK_WALL_POSITION)
  plane(10000, 10000)
  pop()
  
  plane(10000, 10000)
  
  drawJeweleryBox()
  drawTable();
  push()
  translate(0, 0, TABLE_HEIGHT)
  drawBallerina()
  pop()
  drawChair()
  drawChristmasTree()
  drawWindow()
}

function drawSceneTwo() {
 
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

let startButtonElement = document.querySelector('button');
startButtonElement.addEventListener('click', () => {
  song.play();

  let canvasElement = document.querySelector('canvas')
  canvasElement.style.opacity = '1';

  animationStarted = true;
  startTime = millis()
  startButtonElement.remove()
})


// function drawRect(colour) {
//   push();
//   fill(colour);
//   rectMode(CENTER);
//   rect(width / 2, height / 2, width / 2);
//   pop();
// }
