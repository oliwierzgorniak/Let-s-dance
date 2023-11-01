const TOWER_CYLINDER_RADIUS = 10;
const TOWER_CYLINDER_HEIGHT = 32;
// const TOWER_CONE_RADIUS = 15;
// const TOWER_CONE_HEIGHT = 12;

function drawNutcrackerTower(x) {
  push()
  rotateX(90)
  translate(x, (BOTTOM_BOX_HEIGHT / 2 + TOWER_CYLINDER_HEIGHT / 2 + platformLevelOffset ), (BOX_DEPTH - WALL_THICKNESS * 2) / 2 * 0.7)
  cylinder(TOWER_CYLINDER_RADIUS, TOWER_CYLINDER_HEIGHT)
  pop()
}