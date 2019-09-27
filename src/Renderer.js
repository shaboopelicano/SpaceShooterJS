import { Config } from "./Config";

class Renderer {
  constructor() {
    this.canvas = document.querySelector("canvas");
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.ctx = this.canvas.getContext("2d");

    Config.WINDOW_WIDTH = this.canvas.width;
    Config.WINDOW_HEIGHT = this.canvas.height;

    this.spritesheet = new Image();
    this.spritesheet.src = Config.SPRITE_SHEET;

    this.bg = {
      img: new Image(),
      y: 0,
      y1: -this.canvas.height
    };

    this.bg.img.src = Config.BG1_SHEET;

    // Menu Animation
    this.alpha = 0;
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawMenu() {
    this.ctx.globalAlpha = this.alpha;
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.alpha += 0.01;

    this.ctx.font = "italic 40px Calibri";
    this.ctx.fillStyle = "white";
    this.ctx.fillText("MENU", this.canvas.width / 4, this.canvas.height / 2);
  }

  drawBG() {
    this.ctx.drawImage(
      this.bg.img,
      0,
      this.bg.y++,
      this.canvas.width,
      this.canvas.height
    );
    this.ctx.drawImage(
      this.bg.img,
      0,
      this.bg.y1++,
      this.canvas.width,
      this.canvas.height
    );
    if (this.bg.y === this.canvas.height) {
      this.bg.y = 0;
      this.bg.y1 = -this.canvas.height;
    }
  }

  drawHUD(game) {
    this.ctx.fillStyle = "#fff";
    this.ctx.fillText(`Pontos: ${game.pontos}`, 10, 20);
    this.ctx.fillText("Vidas:", 12, 40);
    for (let i = 0; i < game.player.vidas; i++)
      this.ctx.drawImage(
        this.spritesheet,
        game.player.spriteVidas.srcX,
        game.player.spriteVidas.srcY,
        game.player.spriteVidas.width,
        game.player.spriteVidas.height,
        45 + i * 30,
        25,
        game.player.spriteVidas.width / 1.2,
        game.player.spriteVidas.height / 1.2
      );
  }

  draw(entity) {
    this.ctx.drawImage(
      this.spritesheet,
      entity.sprite.srcX,
      entity.sprite.srcY,
      entity.sprite.width,
      entity.sprite.height,
      entity.x,
      entity.y,
      entity.sprite.width,
      entity.sprite.height
    );
  }
}

export { Renderer };
