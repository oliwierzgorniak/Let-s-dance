const WALL_SIZE = 20000;

function drawWalls() {
  // back wall
  push();
  fill(15, 15, 15);
  specularMaterial(15, 15, 15);
  rotateX(90);
  translate(0, 0, BACK_WALL_POSITION);
  plane(WALL_SIZE, WALL_SIZE);
  pop();

  // floor
  push();
  fill(61, 2, 2);
  specularMaterial(61, 2, 2);
  plane(WALL_SIZE, WALL_SIZE);
  pop();
}
