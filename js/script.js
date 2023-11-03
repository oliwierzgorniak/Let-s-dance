const BACKGROUND_COLOR = "black";
const BACK_WALL_POSITION = 1000;
const CANVAS_WIDTH = 640;
const CANVAS_HEIGHT = 360;

let song;
let ballerinaModel;
let nutcrackerModel;

let animationStarted = false;
let currentScene = 0;
let newCanvasCreated = false;
let startTime;

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT, WEBGL);
  angleMode(DEGREES);
}

function preload() {
  song = loadSound(
    "./assets/tchaikovsky-dance-of-the-sugar-plum-fairy.mp3",
    handleWhenLoaded
  );
  ballerinaModel = loadModel("./assets/ballerina.obj", true, handleWhenLoaded);
  nutcrackerModel = loadModel(
    "./assets/nutcracker.obj",
    true,
    handleWhenLoaded
  );
}

function draw() {
  background(BACKGROUND_COLOR);

  switch (currentScene) {
    case 0:
      drawSceneZero();
      break;
    case 1:
      drawSceneOne();
      break;
  }
}
