const BOTTOM_BOX_HEIGHT = 90;
const BOX_WIDTH = 200;
const BOX_DEPTH = 90;
const WALL_THICKNESS = 5;
const TOP_BOX_HEIGHT = 20;
const LOCK_ONE_RADIUS = 10;
const LOCK_ONE_HEIGHT = 2;
const PANEL_MARGIN = 10;
const PANEL_DEPTH = 2;
const MAX_PLATFORM_LEVEL_OFFSET = BOTTOM_BOX_HEIGHT / 2;
const NUTCRACKER_POSITION = (BOX_WIDTH / 2 - WALL_THICKNESS * 2) * 0.8; 

let topBoxRotationAngel = 0;
let platformLevelOffset = 0;
let boxAnimationPhase = 0;

function drawJeweleryBox() {
  push()
  translate(0, 0, TABLE_HEIGHT)

  drawBottomBox()
  drawNutcrackers();
  
  push()
  translate(0, 0, BOTTOM_BOX_HEIGHT + TOP_BOX_HEIGHT / 2);
  translate(0, -BOX_DEPTH / 2, -TOP_BOX_HEIGHT / 2)
  rotateX(topBoxRotationAngel);
  translate(0, BOX_DEPTH / 2, TOP_BOX_HEIGHT / 2);
  box(BOX_WIDTH, BOX_DEPTH, TOP_BOX_HEIGHT);
  pop()
  
  if (boxAnimationPhase < 17 && topBoxRotationAngel < 150)
  topBoxRotationAngel += 1;

  push()
  translate(0, 0, BOTTOM_BOX_HEIGHT / 2 + platformLevelOffset)
  box(BOX_WIDTH - WALL_THICKNESS * 2, BOX_DEPTH - WALL_THICKNESS * 2, WALL_THICKNESS)
  pop()
  
  if (boxAnimationPhase === 0 && platformLevelOffset < MAX_PLATFORM_LEVEL_OFFSET) {
    platformLevelOffset += 0.4;
  } else if (boxAnimationPhase === 0) boxAnimationPhase = 1;
  
  if (boxAnimationPhase === 16 && platformLevelOffset > 0) {
    platformLevelOffset -= 0.4;
  } else if (boxAnimationPhase === 16) boxAnimationPhase = 17;
  
  if (boxAnimationPhase === 17 && topBoxRotationAngel > 0) {
    console.log(topBoxRotationAngel)
    topBoxRotationAngel -= 1;
  } else if (boxAnimationPhase === 17) boxAnimationPhase = 18;

  pop()
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

  drawBoxLock()
  drawBoxPanels()
}

function drawBoxLock() {
  push()
  translate(0, BOX_DEPTH / 2 + LOCK_ONE_HEIGHT / 2, BOTTOM_BOX_HEIGHT / 2 + LOCK_ONE_RADIUS)
  cylinder(LOCK_ONE_RADIUS, LOCK_ONE_HEIGHT, 20)
  pop()
  
  push()
  translate(0, BOX_DEPTH / 2 + LOCK_ONE_HEIGHT / 2, BOTTOM_BOX_HEIGHT / 2)
  cylinder(LOCK_ONE_RADIUS * 0.8, LOCK_ONE_HEIGHT, 20)
  pop()
}

function drawBoxPanels() {
  const panelWidth = (BOX_WIDTH - LOCK_ONE_RADIUS * 2) / 2 - PANEL_MARGIN * 2

  push()
  translate(panelWidth / 2 + LOCK_ONE_RADIUS + PANEL_MARGIN, BOX_DEPTH / 2 + PANEL_DEPTH / 2, BOTTOM_BOX_HEIGHT / 2)
  box(panelWidth, PANEL_DEPTH, BOTTOM_BOX_HEIGHT - PANEL_MARGIN * 2)
  pop()
  
  push()
  translate(-(panelWidth / 2 + LOCK_ONE_RADIUS + PANEL_MARGIN), BOX_DEPTH / 2 + PANEL_DEPTH / 2, BOTTOM_BOX_HEIGHT / 2)
  box(panelWidth, PANEL_DEPTH, BOTTOM_BOX_HEIGHT - PANEL_MARGIN * 2)
  pop()


  push()
  translate(BOX_WIDTH / 2 + PANEL_DEPTH / 2, 0, BOTTOM_BOX_HEIGHT / 2)
  box(PANEL_DEPTH, BOX_DEPTH - PANEL_MARGIN * 2, BOTTOM_BOX_HEIGHT - PANEL_MARGIN * 2)
  pop()
  
  push()
  translate(-(BOX_WIDTH / 2 + PANEL_DEPTH / 2), 0, BOTTOM_BOX_HEIGHT / 2)
  box(PANEL_DEPTH, BOX_DEPTH - PANEL_MARGIN * 2, BOTTOM_BOX_HEIGHT - PANEL_MARGIN * 2)
  pop()


  push()
  translate(0, -(BOX_DEPTH / 2 + PANEL_DEPTH / 2), BOTTOM_BOX_HEIGHT / 2)
  box(BOX_WIDTH - PANEL_MARGIN * 2, PANEL_DEPTH, BOTTOM_BOX_HEIGHT - PANEL_MARGIN * 2)
  pop()
}

