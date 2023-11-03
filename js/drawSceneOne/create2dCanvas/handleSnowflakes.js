let snowflakes = [];
function handleSnowflakes(sketch) {
  if (frameCount % 3 === 0) {
    let x = map(noise(frameCount * 100), 0, 1, 0, 640);
    snowflakes.push({ x: x, y: FRAME_THICKNESS - SNOWFLAKE_SIZE / 2 });
  }

  snowflakes = snowflakes.map(({ x, y }) => {
    const FLAKE_SPEED = 3;
    drawSnowflake(sketch, x, y + FLAKE_SPEED);
    return { x: x, y: y + FLAKE_SPEED };
  });
}
