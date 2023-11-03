function handleBoxAnimation() {
    if (!animationStarted) return;
    if (millis() - startTime < BOX_SLEEP_TIME) return;

    if (boxAnimationPhase < 17 && topBoxRotationAngel < 150) topBoxRotationAngel += 0.7;

    switch (boxAnimationPhase) {
      case 0:
        if (platformLevelOffset < MAX_PLATFORM_LEVEL_OFFSET) platformLevelOffset += 0.4
        else boxAnimationPhase = 1;
      break;
      case 16:
        if (platformLevelOffset > 0) platformLevelOffset -= 0.4;
        else boxAnimationPhase = 17;
      break;
      case 17:
        if (topBoxRotationAngel > 0) topBoxRotationAngel -= 0.6;
        else boxAnimationPhase = 18
      break;
    }
}