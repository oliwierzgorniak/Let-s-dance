const NUTCRACKER_SCALE = 0.15
const NUTCRACKER_APPROXIMATE_HEIGHT = BALLERINA_SCALE * 200
const TOWER_CYLINDER_RADIUS = 10;
const TOWER_CYLINDER_HEIGHT = 32;

let nutcrackersOffset = 0;
let nutcrackerTowersOffset = 0;
let towersRevealed = false;

function drawNutcrackers() {
  if (!towersRevealed && nutcrackersOffset < TOWER_CYLINDER_HEIGHT && platformLevelOffset >= MAX_PLATFORM_LEVEL_OFFSET) {
    nutcrackersOffset += 0.4;
    nutcrackerTowersOffset += 0.4;
  }

  if (nutcrackersOffset >= TOWER_CYLINDER_HEIGHT) towersRevealed = true;

  
  push()
  rotateX(90)
  translate(NUTCRACKER_POSITION, BOTTOM_BOX_HEIGHT / 2 + WALL_THICKNESS / 2 + NUTCRACKER_APPROXIMATE_HEIGHT / 2 + platformLevelOffset - TOWER_CYLINDER_HEIGHT + nutcrackersOffset, (BOX_DEPTH - WALL_THICKNESS * 2) / 2 * 0.7)
  scale(NUTCRACKER_SCALE)
  // rotateY(millis() * 0.1)
  normalMaterial()
  model(nutcrackerModel)
  pop()
  
  push()
  rotateX(90)
  translate(-NUTCRACKER_POSITION, BOTTOM_BOX_HEIGHT / 2 + WALL_THICKNESS / 2 + NUTCRACKER_APPROXIMATE_HEIGHT / 2 + platformLevelOffset - TOWER_CYLINDER_HEIGHT + nutcrackersOffset, (BOX_DEPTH - WALL_THICKNESS * 2) / 2 * 0.7)
  scale(NUTCRACKER_SCALE)
  // rotateY(millis() * 0.1)
  normalMaterial()
  model(nutcrackerModel)
  pop()
  
  drawNutcrackerTowers()
}

function drawNutcrackerTowers() {
  if (towersRevealed && nutcrackersOffset >= 0) {
    nutcrackerTowersOffset -= 0.2;
  }

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
}