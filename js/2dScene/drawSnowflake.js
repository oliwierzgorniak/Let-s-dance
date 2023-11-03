const SNOWFLAKE_SIZE = 20
const SNOWFLAKE_ARM = SNOWFLAKE_SIZE * 0.6

function drawSnowflake(sketch, x, y) {
  const ELLIPSE_SIZE = SNOWFLAKE_SIZE * 0.4
  sketch.ellipse(x , y, ELLIPSE_SIZE)

  sketch.stroke('white')
  sketch.strokeWeight(SNOWFLAKE_SIZE * 0.1)

  const points = [{x0: 0 ,y0: SNOWFLAKE_ARM, x1: 0, y1: -SNOWFLAKE_ARM}, {x0: SNOWFLAKE_ARM, y0: 0, x1: -SNOWFLAKE_ARM, y1: 0}, {x0: SNOWFLAKE_ARM / sqrt(2), y0: SNOWFLAKE_ARM / sqrt(2), x1: -SNOWFLAKE_ARM / sqrt(2), y1: -SNOWFLAKE_ARM / sqrt(2)}, 
{x0: SNOWFLAKE_ARM / sqrt(2), y0: -SNOWFLAKE_ARM / sqrt(2), x1: -SNOWFLAKE_ARM / sqrt(2), y1: SNOWFLAKE_ARM / sqrt(2)}
]
  for (let {x0, y0, x1, y1} of points) {
    sketch.line(x + x0,y + y0, x+  x1, y+  y1)
  }
}