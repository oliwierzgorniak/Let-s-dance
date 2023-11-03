const NUTCRACKER_SCALE = 0.15
const NUTCRACKER_APPROXIMATE_HEIGHT = BALLERINA_SCALE * 200
const TOWER_CYLINDER_RADIUS = 10;
const TOWER_CYLINDER_HEIGHT = 36;

let nutcrackersOffset = {x: 0, y: 0, z: 0, yRotation: 0, xRotation: 0};
let nutcrackerTowersOffset = 0;

function drawNutcrackers() {
  handleNutcrackersAnimation()
  drawNutcrackerTowers()
  drawNutcrackerModels();
}
