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
const BOX_SLEEP_TIME = 8400;

let topBoxRotationAngel = 0;
let platformLevelOffset = 0;
let boxAnimationPhase = 0;

function drawJeweleryBox() {
  push()
  translate(0, 0, TABLE_HEIGHT)

  drawBottomBox()
  drawNutcrackers();
  handleBoxAnimation()
  
  pop()
}
