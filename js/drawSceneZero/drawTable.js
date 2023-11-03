const TABLE_SURFACE_RADIUS = 200;
const TABLE_CYLIDNER_HEIHGT = 13;
const TABLE_TOP_CONE_HEIGHT = 80;
const TABLE_LEG_HEIGHT = 200;
const TABLE_LEG_RADIUS = 20;
const TABLE_BOTTOM_CONE_HEIGHT = TABLE_TOP_CONE_HEIGHT * 0.5;
const TABLE_HEIGHT =
  TABLE_CYLIDNER_HEIHGT +
  TABLE_TOP_CONE_HEIGHT +
  TABLE_LEG_HEIGHT +
  TABLE_BOTTOM_CONE_HEIGHT;

function drawTable() {
  push();
  fill(64, 43, 8);
  specularMaterial(64, 43, 8);

  translate(0, 0, TABLE_HEIGHT);

  // surface
  push();
  rotateX(-90);
  translate(0, TABLE_CYLIDNER_HEIHGT / 2, 0);
  cylinder(TABLE_SURFACE_RADIUS, TABLE_CYLIDNER_HEIHGT);
  pop();

  // cone beneath surface
  push();
  rotateX(-90);
  translate(0, TABLE_CYLIDNER_HEIHGT + TABLE_TOP_CONE_HEIGHT / 2, 0);
  cone(TABLE_SURFACE_RADIUS, TABLE_TOP_CONE_HEIGHT);
  pop();

  // leg
  push();
  rotateX(90);
  translate(
    0,
    -(
      TABLE_CYLIDNER_HEIHGT +
      TABLE_TOP_CONE_HEIGHT / 2 +
      TABLE_LEG_HEIGHT / 2 -
      TABLE_CYLIDNER_HEIHGT * 0.2
    ),
    0
  );
  cylinder(TABLE_LEG_RADIUS, TABLE_LEG_HEIGHT);
  pop();

  // leg cone
  push();
  rotateX(90);
  translate(
    0,
    -(
      TABLE_CYLIDNER_HEIHGT +
      TABLE_TOP_CONE_HEIGHT / 2 +
      TABLE_LEG_HEIGHT +
      TABLE_CYLIDNER_HEIHGT / 2
    ),
    0
  );
  cone(TABLE_SURFACE_RADIUS * 0.4, TABLE_BOTTOM_CONE_HEIGHT);
  pop();

  pop();
}
