import { Entity } from "./Entity";
import { Sprite } from "./Sprite";
import { Config } from "./Config";

class Enemy extends Entity {
  constructor(x = 0, y = -83, w = 91, h = 83, id) {
    super(x, y, w, h, new Sprite(426, 384, w, h, w, h));
    this.vY = Config.ENEMY_SPEED;
    this.vX = 0;
    this.id = id;
  }

  collision() {
    if (this.y > Config.WINDOW_HEIGHT + this.h) {
      return true;
    }
  }
}

export { Enemy };
