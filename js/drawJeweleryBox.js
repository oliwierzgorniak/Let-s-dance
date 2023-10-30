let topBoxRotationAngel = 0;
function drawJeweleryBox(x, y) {
  const BOTTOM_BOX_HEIGHT = 90;
  const BOX_WIDTH = 200;
  const BOX_DEPTH = 90;
  const TOP_BOX_HEIGHT = 20;
  const MAX_BOX_ROTATION = 150;

  box(BOX_WIDTH, BOX_DEPTH, BOTTOM_BOX_HEIGHT);
  translate(0, 0, BOTTOM_BOX_HEIGHT / 2 + TOP_BOX_HEIGHT / 2);
  translate(0, -BOX_DEPTH / 2, -TOP_BOX_HEIGHT / 2)
  rotateX(topBoxRotationAngel);
  translate(0, BOX_DEPTH / 2, TOP_BOX_HEIGHT / 2);
  box(BOX_WIDTH, BOX_DEPTH, TOP_BOX_HEIGHT);
  if (topBoxRotationAngel < MAX_BOX_ROTATION)
  topBoxRotationAngel += 1;
}
