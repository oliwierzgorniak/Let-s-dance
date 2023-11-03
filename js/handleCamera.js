let cameraMovmentPhase = 0;
let cameraProps = {x: 0, y: 500, z: 600, xCentral: 0, yCentral: 0, zCentral: TABLE_HEIGHT + BOTTOM_BOX_HEIGHT, panAngle : 0}
let myCamera;


function handleCamera() {
if (animationStarted) {
  if (cameraMovmentPhase === 0 && cameraProps.z > TABLE_HEIGHT + BOTTOM_BOX_HEIGHT + 1 && cameraProps.y > 200) {
    cameraProps.y -= 0.34;
    cameraProps.z -= 0.12;
  } else if (cameraMovmentPhase === 0) cameraMovmentPhase = 1;
}
  
  if (cameraMovmentPhase === 1 && cameraProps.x > - TABLE_SURFACE_RADIUS * 0.62) {
    cameraProps.x -= 0.496;
    cameraProps.y -= 0.3;
  } else if (cameraMovmentPhase === 1) cameraMovmentPhase = 2;
  
  if (cameraMovmentPhase === 2 && cameraProps.x < 0) {
    cameraProps.x += 0.496;
    cameraProps.y += 0.3;
  } else if (cameraMovmentPhase === 2) cameraMovmentPhase = 3;

  if (cameraMovmentPhase === 3 && cameraProps.x < TABLE_SURFACE_RADIUS * 0.62) {
    cameraProps.x += 0.496;
    cameraProps.y -= 0.3;
  } else if (cameraMovmentPhase === 3) cameraMovmentPhase = 4;
  
  if (cameraMovmentPhase === 4 && cameraProps.x > 0) {
    cameraProps.x -= 0.496;
    cameraProps.y += 0.3;
  } else if (cameraMovmentPhase === 4) cameraMovmentPhase = 5;

  if (cameraMovmentPhase === 5 && cameraProps.z < TABLE_HEIGHT + BOTTOM_BOX_HEIGHT + 150 ) {
    cameraProps.z += 1;
    cameraProps.y -= 0.8;
    cameraProps.zCentral += 0.5
  } else if (cameraMovmentPhase === 5) cameraMovmentPhase = 6;

  
  if (cameraMovmentPhase === 6 && cameraProps.y > -BACK_WALL_POSITION * 0.2 ) {
    cameraProps.y -= 1.9;
    cameraProps.z -= 0.5;
    cameraProps.yCentral -= 2.4;
    cameraProps.zCentral -= 0.3;

  } else if (cameraMovmentPhase === 6) cameraMovmentPhase = 7;
  
  if (cameraMovmentPhase === 7 && cameraProps.zCentral > TABLE_HEIGHT + WINDOW_HEIGHT / 2 - 50 ) {
    cameraProps.y += 4;
    cameraProps.z -= 2.6;
    cameraProps.zCentral -= 2.8
  } else if (cameraMovmentPhase === 7) cameraMovmentPhase = 8;


if (
  cameraMovmentPhase === 8 &&
  cameraProps.y > -BACK_WALL_POSITION * 0.58
) {
  cameraProps.y -= 2.1;
  cameraProps.yCentral -= 2.2
  cameraProps.zCentral += 0.11
} else if (cameraMovmentPhase === 8) cameraMovmentPhase = 9;

if (
  cameraMovmentPhase === 9
) {
  currentScene = 1
}

  camera(cameraProps.x, cameraProps.y, cameraProps.z, cameraProps.xCentral, cameraProps.yCentral, cameraProps.zCentral, cameraProps.x * 5.7, 1000, 0)

}