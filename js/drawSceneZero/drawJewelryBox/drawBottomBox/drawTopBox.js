function drawTopBox() {
  push();
  translate(0, 0, BOTTOM_BOX_HEIGHT + TOP_BOX_HEIGHT / 2);
  translate(0, -BOX_DEPTH / 2, -TOP_BOX_HEIGHT / 2);
  rotateX(topBoxRotationAngel);
  translate(0, BOX_DEPTH / 2, TOP_BOX_HEIGHT / 2);
  box(BOX_WIDTH, BOX_DEPTH, TOP_BOX_HEIGHT);
  pop();
}
