const BOTTOM_BOX_HEIGHT = 90;
const BOX_WIDTH = 200;
const BOX_DEPTH = 90;
const WALL_THICKNESS = 5;
const TOP_BOX_HEIGHT = 20;
const MAX_BOX_ROTATION = 150;
const MAX_PLATFORM_LEVEL_OFFSET = BOTTOM_BOX_HEIGHT / 2;

let topBoxRotationAngel = 0;
let platformLevelOffset = 0;

function drawJeweleryBox() {  
  drawBottomBox()
  
  push()
  translate(0, 0, BOTTOM_BOX_HEIGHT + TOP_BOX_HEIGHT / 2);
  translate(0, -BOX_DEPTH / 2, -TOP_BOX_HEIGHT / 2)
  rotateX(topBoxRotationAngel);
  translate(0, BOX_DEPTH / 2, TOP_BOX_HEIGHT / 2);
  box(BOX_WIDTH, BOX_DEPTH, TOP_BOX_HEIGHT);
  pop()
  
  if (topBoxRotationAngel < MAX_BOX_ROTATION)
  topBoxRotationAngel += 1;

  push()
  translate(0, 0, BOTTOM_BOX_HEIGHT / 2 + platformLevelOffset)
  box(BOX_WIDTH - WALL_THICKNESS * 2, BOX_DEPTH - WALL_THICKNESS * 2, WALL_THICKNESS)
  pop()
  
  if (platformLevelOffset < MAX_PLATFORM_LEVEL_OFFSET)
  platformLevelOffset += 0.1;
}

function drawBottomBox() {
  push()
  translate(0, BOX_DEPTH / 2 - WALL_THICKNESS / 2, BOTTOM_BOX_HEIGHT / 2)
  box(BOX_WIDTH, WALL_THICKNESS, BOTTOM_BOX_HEIGHT)
  pop()

  push()
  translate(0, -(BOX_DEPTH / 2 - WALL_THICKNESS / 2), BOTTOM_BOX_HEIGHT / 2)
  box(BOX_WIDTH, WALL_THICKNESS, BOTTOM_BOX_HEIGHT)
  pop()

  push()
  translate(-(BOX_WIDTH / 2 - WALL_THICKNESS / 2), 0, BOTTOM_BOX_HEIGHT / 2)
  box(WALL_THICKNESS, BOX_DEPTH - 2 * WALL_THICKNESS, BOTTOM_BOX_HEIGHT)
  pop()

  push()
  translate(BOX_WIDTH / 2 - WALL_THICKNESS / 2, 0, BOTTOM_BOX_HEIGHT / 2)
  box(WALL_THICKNESS, BOX_DEPTH - 2 * WALL_THICKNESS, BOTTOM_BOX_HEIGHT)
  pop()
}

