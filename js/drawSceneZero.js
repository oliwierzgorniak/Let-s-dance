function drawSceneZero() {
  noStroke();

  pointLight(
    255,
    255,
    255,
    0,
    TABLE_SURFACE_RADIUS,
    TABLE_HEIGHT + BOTTOM_BOX_HEIGHT + 300
  );
  handleCamera();

  drawWalls();
  drawChair();
  drawChristmasTree();
  drawTable();
  drawJeweleryBox();
  drawBallerina();
  drawWindow();
}
