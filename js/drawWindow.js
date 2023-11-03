const FRAME_THICKNESS = 30;
const WINDOW_WIDTH = 640 ;
const WINDOW_HEIGHT = 360 ;

function drawWindow() {
  push()
  fill(26, 20, 1)
  specularMaterial(26, 20, 1)
  translate(0, -BACK_WALL_POSITION - FRAME_THICKNESS * 0.2 / 2, TABLE_HEIGHT)
  
  
  push()
  translate(0, FRAME_THICKNESS * 0.2 / 2, WINDOW_HEIGHT / 2 + FRAME_THICKNESS / 2)
  box(WINDOW_WIDTH, FRAME_THICKNESS * 0.2, FRAME_THICKNESS )
  pop()
  
  push()
  translate(0, FRAME_THICKNESS * 0.2 / 2, -WINDOW_HEIGHT / 2 - FRAME_THICKNESS / 2)
  box(WINDOW_WIDTH, FRAME_THICKNESS * 0.2, FRAME_THICKNESS)
  pop()
  
  push()
  translate(0, FRAME_THICKNESS * 0.2 / 2, 0)
  box(FRAME_THICKNESS, FRAME_THICKNESS * 0.2, WINDOW_HEIGHT)
  pop()

  push()
  translate(WINDOW_WIDTH / 2 - FRAME_THICKNESS / 2, FRAME_THICKNESS * 0.2 / 2, 0)
  box(FRAME_THICKNESS, FRAME_THICKNESS * 0.2, WINDOW_HEIGHT)
  pop()
  
  push()
  translate(-WINDOW_WIDTH / 2 + FRAME_THICKNESS / 2, FRAME_THICKNESS * 0.2 / 2, 0)
  box(FRAME_THICKNESS, FRAME_THICKNESS * 0.2, WINDOW_HEIGHT)
  pop()
  
  push()
  translate(0, 1 ,0)
  box(WINDOW_WIDTH, FRAME_THICKNESS * 0.2, FRAME_THICKNESS)
  pop()
  
  pop()
}