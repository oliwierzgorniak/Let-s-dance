function drawBottomBox() {
  push();
  fill(64, 43, 8);
  specularMaterial(64, 43, 8);

  drawTopBox();
  drawBoxPlatform();
  drawBoxWalls();
  pop();

  drawBoxLock();
  drawBoxPanels();
}
