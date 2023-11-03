const NUTCRACKER_SCALE = 0.15
const NUTCRACKER_APPROXIMATE_HEIGHT = BALLERINA_SCALE * 200
const TOWER_CYLINDER_RADIUS = 10;
const TOWER_CYLINDER_HEIGHT = 36;

let nutcrackersOffset = {x: 0, y: 0, z: 0, yRotation: 0, xRotation: 0};
let nutcrackerTowersOffset = 0;

function drawNutcrackers() {
  if (boxAnimationPhase === 1 && nutcrackersOffset.y < TOWER_CYLINDER_HEIGHT) {
    nutcrackersOffset.y += 0.2;
    nutcrackerTowersOffset += 0.2;
  } else if (boxAnimationPhase === 1) boxAnimationPhase = 2;
  
  if (boxAnimationPhase === 3 && Math.abs(nutcrackersOffset.z) < (BOX_DEPTH - 2 * WALL_THICKNESS) * 0.7) {
    nutcrackersOffset.z -= 0.5;   
  } else if (boxAnimationPhase === 3) boxAnimationPhase = 4;
  
  if (boxAnimationPhase === 4 && nutcrackersOffset.yRotation < 90) {
    nutcrackersOffset.yRotation += 4;
  } else if (boxAnimationPhase === 4) boxAnimationPhase = 5;
  
  if (boxAnimationPhase === 5 && Math.abs(nutcrackersOffset.x) < (BOX_WIDTH - 2 * WALL_THICKNESS ) * 0.26 ) {
    nutcrackersOffset.x -= 0.5;
  } else if (boxAnimationPhase === 5) boxAnimationPhase = 6;
  
  if (boxAnimationPhase === 6 && nutcrackersOffset.xRotation > -15) {
    nutcrackersOffset.xRotation -= 0.4;
  } else if (boxAnimationPhase === 6) boxAnimationPhase = 7;
  
  if (boxAnimationPhase === 7 && nutcrackersOffset.xRotation < 0) {
    nutcrackersOffset.xRotation += 0.4;
  } else if (boxAnimationPhase === 7) boxAnimationPhase = 8;
  
  if (boxAnimationPhase === 8 && nutcrackersOffset.yRotation > -90 ) {
    nutcrackersOffset.yRotation -= 4;
  } else if (boxAnimationPhase === 8) boxAnimationPhase = 9;
  
  if (boxAnimationPhase === 9 && nutcrackersOffset.x < 0) {
    nutcrackersOffset.x += 0.5;
  } else if (boxAnimationPhase === 9) boxAnimationPhase = 10;
   
  if (boxAnimationPhase === 10 && nutcrackersOffset.x < 0) {
    nutcrackersOffset.x += 0.5;
  } else if (boxAnimationPhase === 10) boxAnimationPhase = 11;

  if (boxAnimationPhase === 11 && nutcrackersOffset.yRotation > -180) {
    nutcrackersOffset.yRotation -= 4;
  } else if (boxAnimationPhase === 11) boxAnimationPhase = 12;

  if (boxAnimationPhase === 12 && nutcrackersOffset.z < 0) {
    nutcrackersOffset.z += 0.5;
  } else if (boxAnimationPhase === 12) boxAnimationPhase = 13;
  
  if (boxAnimationPhase === 13 && nutcrackersOffset.yRotation < 0) {
    nutcrackersOffset.yRotation += 4;
  } else if (boxAnimationPhase === 13) boxAnimationPhase = 14;
  
  if (boxAnimationPhase === 15 && nutcrackerTowersOffset > 0) {
    nutcrackersOffset.y -= 0.2;
    nutcrackerTowersOffset -= 0.2;
  } else if (boxAnimationPhase === 15) boxAnimationPhase = 16;

push()
  fill(117, 81, 19)
  specularMaterial(117, 81, 19)

  push()
  rotateX(90)
  translate(NUTCRACKER_POSITION + nutcrackersOffset.x, BOTTOM_BOX_HEIGHT / 2 + WALL_THICKNESS / 2 + NUTCRACKER_APPROXIMATE_HEIGHT / 2 + platformLevelOffset - TOWER_CYLINDER_HEIGHT + nutcrackersOffset.y, (BOX_DEPTH - WALL_THICKNESS * 2) / 2 * 0.7 + nutcrackersOffset.z)
  scale(NUTCRACKER_SCALE)
  rotateY(nutcrackersOffset.yRotation)
  rotateX(nutcrackersOffset.xRotation)
  rotateY(180)
  model(nutcrackerModel)
  pop()
  
  push()
  rotateX(90)
  translate(-NUTCRACKER_POSITION - nutcrackersOffset.x, BOTTOM_BOX_HEIGHT / 2 + WALL_THICKNESS / 2 + NUTCRACKER_APPROXIMATE_HEIGHT / 2 + platformLevelOffset - TOWER_CYLINDER_HEIGHT + nutcrackersOffset.y, (BOX_DEPTH - WALL_THICKNESS * 2) / 2 * 0.7 + nutcrackersOffset.z)
  scale(NUTCRACKER_SCALE)
  rotateY(-nutcrackersOffset.yRotation)
  rotateX(nutcrackersOffset.xRotation)
  rotateY(180)
  model(nutcrackerModel)
  pop()
  
  pop()

  drawNutcrackerTowers()
}

function drawNutcrackerTowers() {
  if (boxAnimationPhase === 2 && nutcrackerTowersOffset > 0) {
    nutcrackerTowersOffset -= 0.3;
  } else if (boxAnimationPhase === 2) boxAnimationPhase = 3;

  if (boxAnimationPhase === 14 && nutcrackerTowersOffset < TOWER_CYLINDER_HEIGHT) {
    nutcrackerTowersOffset += 0.3;
  } else if (boxAnimationPhase === 14) boxAnimationPhase = 15;

  push()
  fill(184, 163, 7)
  specularMaterial(184, 163, 7)

  push()
  rotateX(90)
  translate(NUTCRACKER_POSITION, BOTTOM_BOX_HEIGHT / 2 + TOWER_CYLINDER_HEIGHT / 2 + platformLevelOffset - TOWER_CYLINDER_HEIGHT + nutcrackerTowersOffset, (BOX_DEPTH - WALL_THICKNESS * 2) / 2 * 0.7)
  cylinder(TOWER_CYLINDER_RADIUS, TOWER_CYLINDER_HEIGHT)
  pop()
  
  push()
  rotateX(90)
  translate(-NUTCRACKER_POSITION, BOTTOM_BOX_HEIGHT / 2 + TOWER_CYLINDER_HEIGHT / 2 + platformLevelOffset - TOWER_CYLINDER_HEIGHT + nutcrackerTowersOffset, (BOX_DEPTH - WALL_THICKNESS * 2) / 2 * 0.7)
  cylinder(TOWER_CYLINDER_RADIUS, TOWER_CYLINDER_HEIGHT)
  pop()

  pop()
}