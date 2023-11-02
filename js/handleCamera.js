let cameraMovmentPhase = 0;
let cameraProps = {x: 0, y: 500, z: 600, xCentral: 0, yCentral: 0, zCentral: TABLE_HEIGHT + BOTTOM_BOX_HEIGHT, panAngle : 0}
let myCamera;


function handleCamera() {
if (animationStarted) {
  if (cameraMovmentPhase === 0 && cameraProps.z > TABLE_HEIGHT + BOTTOM_BOX_HEIGHT + 1 && cameraProps.y > 200) {
    cameraProps.y -= 0.3;
    cameraProps.z -= 0.1;
  } else if (cameraMovmentPhase === 0) cameraMovmentPhase = 1;
}
  
  if (cameraMovmentPhase === 1 && cameraProps.x > - TABLE_SURFACE_RADIUS * 1.1) {
    cameraProps.x -= 1;
    cameraProps.y -= 0.3;
  } else if (cameraMovmentPhase === 1) cameraMovmentPhase = 2;
  
  if (cameraMovmentPhase === 2 && cameraProps.x < 0) {
    cameraProps.x += 1;
    cameraProps.y += 0.3;
  } else if (cameraMovmentPhase === 2) cameraMovmentPhase = 3;

  if (cameraMovmentPhase === 3 && cameraProps.x < TABLE_SURFACE_RADIUS * 1.1) {
    cameraProps.x += 1;
    cameraProps.y -= 0.3;
  } else if (cameraMovmentPhase === 3) cameraMovmentPhase = 4;
  
  if (cameraMovmentPhase === 4 && cameraProps.x > 0) {
    cameraProps.x -= 1;
    cameraProps.y += 0.3;
  } else if (cameraMovmentPhase === 4) cameraMovmentPhase = 5;


  camera(cameraProps.x, cameraProps.y, cameraProps.z, cameraProps.xCentral, cameraProps.yCentral, cameraProps.zCentral, cameraProps.x * 5.7, 1000, 0)

}