let cameraMovmentPhase = 0;
let cameraProps = {
  x: 0,
  y: 500,
  z: 600,
  xCentral: 0,
  yCentral: 0,
  zCentral: TABLE_HEIGHT + BOTTOM_BOX_HEIGHT,
};

function handleCamera() {
  camera(
    cameraProps.x,
    cameraProps.y,
    cameraProps.z,
    cameraProps.xCentral,
    cameraProps.yCentral,
    cameraProps.zCentral,
    cameraProps.x * 5.7,
    1000,
    0
  );
  if (!animationStarted) return;

  switch (cameraMovmentPhase) {
    case 0:
      if (
        cameraProps.z > TABLE_HEIGHT + BOTTOM_BOX_HEIGHT + 1 &&
        cameraProps.y > 200
      ) {
        cameraProps.y -= 0.34;
        cameraProps.z -= 0.12;
      } else cameraMovmentPhase = 1;
      break;
    case 1:
      if (cameraProps.x > -TABLE_SURFACE_RADIUS * 0.62) {
        cameraProps.x -= 0.488;
        cameraProps.y -= 0.3;
      } else cameraMovmentPhase = 2;
      break;
    case 2:
      if (cameraProps.x < 0) {
        cameraProps.x += 0.488;
        cameraProps.y += 0.3;
      } else cameraMovmentPhase = 3;
      break;
    case 3:
      if (cameraProps.x < TABLE_SURFACE_RADIUS * 0.62) {
        cameraProps.x += 0.488;
        cameraProps.y -= 0.3;
      } else cameraMovmentPhase = 4;
      break;
    case 4:
      if (cameraProps.x > 0) {
        cameraProps.x -= 0.488;
        cameraProps.y += 0.3;
      } else cameraMovmentPhase = 5;
      break;
    case 5:
      if (cameraProps.z < TABLE_HEIGHT + BOTTOM_BOX_HEIGHT + 150) {
        cameraProps.z += 1;
        cameraProps.y -= 0.8;
        cameraProps.zCentral += 0.5;
      } else cameraMovmentPhase = 6;
      break;
    case 6:
      if (cameraProps.y > -BACK_WALL_POSITION * 0.2) {
        cameraProps.y -= 1.9;
        cameraProps.z -= 0.5;
        cameraProps.yCentral -= 2.4;
        cameraProps.zCentral -= 0.3;
      } else cameraMovmentPhase = 7;
      break;
    case 7:
      if (cameraProps.zCentral > TABLE_HEIGHT + WINDOW_HEIGHT / 2 - 50) {
        cameraProps.y += 4;
        cameraProps.z -= 2.6;
        cameraProps.zCentral -= 2.8;
      } else cameraMovmentPhase = 8;
      break;
    case 8:
      if (cameraProps.y > -BACK_WALL_POSITION * 0.58) {
        cameraProps.y -= 1.8;
        cameraProps.yCentral -= 1.8;
        cameraProps.zCentral += 0.11;
      } else cameraMovmentPhase = 9;
      break;
    case 9:
      currentScene = 1;
      break;
  }
}
