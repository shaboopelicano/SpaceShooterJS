import { Entity } from "./Entity";
import { Sprite } from "./Sprite";
import { Config } from "./Config";
import { Laser } from "./Laser";

class Player extends Entity {
  constructor(x = 0, y = 0, w = 99, h = 75) {
    super(x, y, w, h, new Sprite(211, 941, 99, 75, w, h));
    this.vidas = 3;
    this.vX = 0;
    this.vY = 0;
    this.isMoving = false;
    this.listaLaser = new Array();
    this.spriteVidas = new Sprite(482, 358, 32, 25, 32, 25);
  }

  moverDireita() {
    this.vX = Config.PLAYER_SPEED;
  }

  moverEsquerda() {
    this.vX = -Config.PLAYER_SPEED;
  }

  moverCima() {
    this.vY = -Config.PLAYER_SPEED;
  }

  moverBaixo() {
    this.vY = Config.PLAYER_SPEED;
  }

  moverPara(x, y) {
    if (this.x != x) {
      this.x += this.vX;
    }
    if (this.y != y) {
      this.y += this.vY;
    }

    if (this.x === x && this.y === y) this.isMoving = false;
  }

  atirar() {
    this.listaLaser.push(new Laser(this.x + this.w / 2, this.y, 9, 37));
    console.log(this.listaLaser);
  }
}

export { Player };
