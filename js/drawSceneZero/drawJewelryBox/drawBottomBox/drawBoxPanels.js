function drawBoxPanels() {
  const frontPanelWidth =
    (BOX_WIDTH - LOCK_ONE_RADIUS * 2) / 2 - PANEL_MARGIN * 2;

  push();
  fill(117, 81, 19);
  specularMaterial(117, 81, 19);

  // front panel
  push();
  translate(
    frontPanelWidth / 2 + LOCK_ONE_RADIUS + PANEL_MARGIN,
    BOX_DEPTH / 2 + PANEL_DEPTH / 2,
    BOTTOM_BOX_HEIGHT / 2
  );
  box(frontPanelWidth, PANEL_DEPTH, BOTTOM_BOX_HEIGHT - PANEL_MARGIN * 2);
  pop();

  // front panel
  push();
  translate(
    -(frontPanelWidth / 2 + LOCK_ONE_RADIUS + PANEL_MARGIN),
    BOX_DEPTH / 2 + PANEL_DEPTH / 2,
    BOTTOM_BOX_HEIGHT / 2
  );
  box(frontPanelWidth, PANEL_DEPTH, BOTTOM_BOX_HEIGHT - PANEL_MARGIN * 2);
  pop();

  // side panel
  push();
  translate(BOX_WIDTH / 2 + PANEL_DEPTH / 2, 0, BOTTOM_BOX_HEIGHT / 2);
  box(
    PANEL_DEPTH,
    BOX_DEPTH - PANEL_MARGIN * 2,
    BOTTOM_BOX_HEIGHT - PANEL_MARGIN * 2
  );
  pop();

  // side panel
  push();
  translate(-(BOX_WIDTH / 2 + PANEL_DEPTH / 2), 0, BOTTOM_BOX_HEIGHT / 2);
  box(
    PANEL_DEPTH,
    BOX_DEPTH - PANEL_MARGIN * 2,
    BOTTOM_BOX_HEIGHT - PANEL_MARGIN * 2
  );
  pop();

  // back panel
  push();
  translate(0, -(BOX_DEPTH / 2 + PANEL_DEPTH / 2), BOTTOM_BOX_HEIGHT / 2);
  box(
    BOX_WIDTH - PANEL_MARGIN * 2,
    PANEL_DEPTH,
    BOTTOM_BOX_HEIGHT - PANEL_MARGIN * 2
  );
  pop();

  pop();
}
