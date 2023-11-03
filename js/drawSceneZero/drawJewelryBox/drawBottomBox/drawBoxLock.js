function drawBoxLock() {
  push();
  fill(143, 143, 143);
  specularMaterial(143, 143, 143);

  push();
  translate(
    0,
    BOX_DEPTH / 2 + LOCK_ONE_HEIGHT / 2,
    BOTTOM_BOX_HEIGHT / 2 + LOCK_ONE_RADIUS
  );
  cylinder(LOCK_ONE_RADIUS, LOCK_ONE_HEIGHT, 20);
  pop();

  push();
  translate(0, BOX_DEPTH / 2 + LOCK_ONE_HEIGHT / 2, BOTTOM_BOX_HEIGHT / 2);
  cylinder(LOCK_ONE_RADIUS * 0.8, LOCK_ONE_HEIGHT, 20);
  pop();

  pop();
}
