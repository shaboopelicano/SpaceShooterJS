import { Entity } from "./Entity";
import { Sprite } from "./Sprite";
import { Config } from "./Config";

class Laser extends Entity {
  constructor(x = 0, y = 0, w = 9, h = 37) {
    super(x, y, w, h, new Sprite(858, 475, 9, 37, 9, 37));
    this.vX = 0;
    this.vY = Config.LASER1_SPEED;
  }

  colisao() {
    if (this.y + this.h <= 0) delete this;
  }
}

export { Laser };
