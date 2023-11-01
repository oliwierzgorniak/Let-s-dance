const TRUNK_RADIUS = 50;
const TRUNK_HEIGHT = 100;
const TREE_BASE_CONE_RADIUS = 300;
const TREE_BASE_CONE_HEIGHT = 400;

function drawChristmasTree() {
  push()
  translate(TABLE_SURFACE_RADIUS * 3.5, -TABLE_SURFACE_RADIUS * 3, 0)
  
  push()
  rotateX(90)
  translate(0, TRUNK_HEIGHT / 2, 0)
  cylinder(TRUNK_RADIUS, TRUNK_HEIGHT)
  pop()

  
  push()
  rotateX(90)
  translate(0, TRUNK_HEIGHT + TREE_BASE_CONE_HEIGHT / 2, 0)
  cone(TREE_BASE_CONE_RADIUS, TREE_BASE_CONE_HEIGHT)
  pop()


  push()
  rotateX(90)
  translate(0, TRUNK_HEIGHT + TREE_BASE_CONE_HEIGHT * 0.5 + TREE_BASE_CONE_HEIGHT / 2 , 0)
  scale(0.8)
  cone(TREE_BASE_CONE_RADIUS, TREE_BASE_CONE_HEIGHT)
  pop()
  
  push()
  rotateX(90)
  translate(0, TRUNK_HEIGHT + TREE_BASE_CONE_HEIGHT * 0.7 + TREE_BASE_CONE_HEIGHT * 0.8 , 0)
  scale(0.6)
  cone(TREE_BASE_CONE_RADIUS, TREE_BASE_CONE_HEIGHT)
  pop()  
  pop()
}