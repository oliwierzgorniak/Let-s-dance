const NUTCRACKER_SCALE = 0.15
const NUTCRACKER_APPROXIMATE_HEIGHT = BALLERINA_SCALE * 200

function drawNutcracker(x) {
  push()
  rotateX(90)
  translate(x, BOTTOM_BOX_HEIGHT / 2 + WALL_THICKNESS / 2 + NUTCRACKER_APPROXIMATE_HEIGHT / 2 + platformLevelOffset, (BOX_DEPTH - WALL_THICKNESS * 2) / 2 * 0.7)
  scale(NUTCRACKER_SCALE)
  // rotateY(millis() * 0.1)
  normalMaterial()
  model(nutcrackerModel)
  pop()
}