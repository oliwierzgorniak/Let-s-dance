const CHAIR_LEG_THICKNESS = 32;
const CHAIR_SIT_THICKNESS = 32;
const CHAIR_LEG_HEIGHT = 200;
const CHAIR_SITTING_SIZE = 200;
const CHAIR_BACK_HEIGHT_SCALE = 0.5;
const CHAIR_BACK_LEG_HEIGHT = CHAIR_LEG_HEIGHT * 0.8;

function drawChair() {
  push();
  fill(64, 43, 8);
  specularMaterial(70, 60, 10);

  translate(-TABLE_SURFACE_RADIUS * 3, -TABLE_SURFACE_RADIUS * 2, 0);

  const LEG_POSITIONS_MULTIPLIERS = [
    { x: 1, y: 1 },
    { x: -1, y: 1 },
    { x: 1, y: -1 },
    { x: -1, y: -1 },
  ];
  LEG_POSITIONS_MULTIPLIERS.forEach(({ x, y }) => {
    push();
    translate(
      (CHAIR_SITTING_SIZE / 2) * 0.8 * x,
      (CHAIR_SITTING_SIZE / 2) * 0.8 * y,
      CHAIR_LEG_HEIGHT / 2
    );
    box(CHAIR_LEG_THICKNESS, CHAIR_LEG_THICKNESS, CHAIR_LEG_HEIGHT);
    pop();
  });

  push();
  translate(0, 0, CHAIR_LEG_HEIGHT + CHAIR_SIT_THICKNESS / 2);
  box(CHAIR_SITTING_SIZE, CHAIR_SITTING_SIZE, CHAIR_SIT_THICKNESS);
  pop();

  push();
  translate(
    (CHAIR_SITTING_SIZE / 2) * 0.8,
    (-CHAIR_SITTING_SIZE / 2) * 0.8,
    CHAIR_LEG_HEIGHT + CHAIR_SIT_THICKNESS + CHAIR_BACK_LEG_HEIGHT / 2
  );
  box(CHAIR_LEG_THICKNESS, CHAIR_LEG_THICKNESS, CHAIR_BACK_LEG_HEIGHT);
  pop();

  push();
  translate(
    (-CHAIR_SITTING_SIZE / 2) * 0.8,
    (-CHAIR_SITTING_SIZE / 2) * 0.8,
    CHAIR_LEG_HEIGHT + CHAIR_SIT_THICKNESS + CHAIR_BACK_LEG_HEIGHT / 2
  );
  box(CHAIR_LEG_THICKNESS, CHAIR_LEG_THICKNESS, CHAIR_BACK_LEG_HEIGHT);
  pop();

  push();
  translate(
    0,
    (-CHAIR_SITTING_SIZE / 2) * 0.8,
    CHAIR_LEG_HEIGHT +
      CHAIR_SIT_THICKNESS +
      CHAIR_BACK_LEG_HEIGHT +
      (CHAIR_SITTING_SIZE * CHAIR_BACK_HEIGHT_SCALE) / 2
  );
  box(
    CHAIR_SITTING_SIZE * 1.4,
    CHAIR_LEG_THICKNESS,
    CHAIR_SITTING_SIZE * CHAIR_BACK_HEIGHT_SCALE
  );
  pop();

  pop();
}
