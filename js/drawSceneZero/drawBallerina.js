const BALLERINA_SCALE = 0.15;
const BALLERINA_APPROXIMATE_HEIGHT = BALLERINA_SCALE * 200;

function drawBallerina() {
  push();
  fill(255, 255, 255);
  specularMaterial(255, 255, 255);
  translate(0, 0, TABLE_HEIGHT);
  rotateX(90);
  translate(
    0,
    BOTTOM_BOX_HEIGHT / 2 +
      WALL_THICKNESS / 2 +
      BALLERINA_APPROXIMATE_HEIGHT / 2 +
      platformLevelOffset,
    (BOX_DEPTH / 2) * 0.2
  );
  scale(BALLERINA_SCALE);
  rotateY(millis() * 0.1);
  model(ballerinaModel);
  pop();
}
