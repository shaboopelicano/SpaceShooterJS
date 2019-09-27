import { Sprite } from "./Sprite";

class Entity {
  constructor(x = 0, y = 0, w = 0, h = 0, sprite) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.vX = 0;
    this.vY = 0;
    this.sprite = sprite;
  }

  mover() {
    this.x += this.vX;
    this.y += this.vY;
  }
}

export { Entity };
