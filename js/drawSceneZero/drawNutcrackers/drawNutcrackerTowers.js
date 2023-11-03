function drawNutcrackerTowers() {
  switch (boxAnimationPhase) {
    case 2:
      if (nutcrackerTowersOffset > 0) {
        nutcrackerTowersOffset -= 0.3;
      } else boxAnimationPhase = 3;
      break;
    case 14:
      if (nutcrackerTowersOffset < TOWER_CYLINDER_HEIGHT) {
        nutcrackerTowersOffset += 0.3;
      } else boxAnimationPhase = 15;
      break;
  }

  push();
  fill(184, 163, 7);
  specularMaterial(184, 163, 7);

  // tower 0
  push();
  rotateX(90);
  translate(
    NUTCRACKER_POSITION,
    BOTTOM_BOX_HEIGHT / 2 +
      TOWER_CYLINDER_HEIGHT / 2 +
      platformLevelOffset -
      TOWER_CYLINDER_HEIGHT +
      nutcrackerTowersOffset,
    ((BOX_DEPTH - WALL_THICKNESS * 2) / 2) * 0.7
  );
  cylinder(TOWER_CYLINDER_RADIUS, TOWER_CYLINDER_HEIGHT);
  pop();

  // tower 1
  push();
  rotateX(90);
  translate(
    -NUTCRACKER_POSITION,
    BOTTOM_BOX_HEIGHT / 2 +
      TOWER_CYLINDER_HEIGHT / 2 +
      platformLevelOffset -
      TOWER_CYLINDER_HEIGHT +
      nutcrackerTowersOffset,
    ((BOX_DEPTH - WALL_THICKNESS * 2) / 2) * 0.7
  );
  cylinder(TOWER_CYLINDER_RADIUS, TOWER_CYLINDER_HEIGHT);
  pop();

  pop();
}
