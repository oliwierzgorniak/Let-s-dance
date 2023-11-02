const BALLERINA_SCALE = 0.15
const BALLERINA_APPROXIMATE_HEIGHT = BALLERINA_SCALE * 200

function drawBallerina() {
  push()
  rotateX(90)
  translate(0, BOTTOM_BOX_HEIGHT / 2 + WALL_THICKNESS / 2 + BALLERINA_APPROXIMATE_HEIGHT / 2 + platformLevelOffset, BOX_DEPTH / 2 * 0.2)
  scale(BALLERINA_SCALE)
  rotateY(millis() * 0.1)
  normalMaterial()
  model(ballerinaModel)
  pop()
}