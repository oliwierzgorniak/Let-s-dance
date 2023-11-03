function handleNutcrackersAnimation() {
  switch (boxAnimationPhase) {
    case 1:
      if (nutcrackersOffset.y < TOWER_CYLINDER_HEIGHT) {
        nutcrackersOffset.y += 0.2;
        nutcrackerTowersOffset += 0.2;
      } else boxAnimationPhase = 2;
      break;
    case 3:
      if (
        Math.abs(nutcrackersOffset.z) <
        (BOX_DEPTH - 2 * WALL_THICKNESS) * 0.7
      ) {
        nutcrackersOffset.z -= 0.5;
      } else boxAnimationPhase = 4;
      break;
    case 4:
      if (nutcrackersOffset.yRotation < 90) {
        nutcrackersOffset.yRotation += 4;
      } else boxAnimationPhase = 5;
      break;
    case 5:
      if (
        Math.abs(nutcrackersOffset.x) <
        (BOX_WIDTH - 2 * WALL_THICKNESS) * 0.26
      ) {
        nutcrackersOffset.x -= 0.5;
      } else boxAnimationPhase = 6;
      break;
    case 6:
      if (nutcrackersOffset.xRotation > -15) {
        nutcrackersOffset.xRotation -= 0.4;
      } else boxAnimationPhase = 7;
      break;
    case 7:
      if (nutcrackersOffset.xRotation < 0) {
        nutcrackersOffset.xRotation += 0.4;
      } else boxAnimationPhase = 8;
      break;
    case 8:
      if (nutcrackersOffset.yRotation > -90) {
        nutcrackersOffset.yRotation -= 4;
      } else boxAnimationPhase = 9;
      break;
    case 9:
      if (nutcrackersOffset.x < 0) {
        nutcrackersOffset.x += 0.5;
      } else boxAnimationPhase = 10;
      break;
    case 10:
      if (nutcrackersOffset.x < 0) {
        nutcrackersOffset.x += 0.5;
      } else boxAnimationPhase = 11;
      break;
    case 11:
      if (nutcrackersOffset.yRotation > -180) {
        nutcrackersOffset.yRotation -= 4;
      } else boxAnimationPhase = 12;
      break;
    case 12:
      if (nutcrackersOffset.z < 0) {
        nutcrackersOffset.z += 0.5;
      } else boxAnimationPhase = 13;
      break;
    case 13:
      if (nutcrackersOffset.yRotation < 0) {
        nutcrackersOffset.yRotation += 4;
      } else boxAnimationPhase = 14;
      break;
    case 15:
      if (nutcrackerTowersOffset > 0) {
        nutcrackersOffset.y -= 0.2;
        nutcrackerTowersOffset -= 0.2;
      } else boxAnimationPhase = 16;
      break;
  }
}
