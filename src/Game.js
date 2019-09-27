import { Renderer } from "./Renderer";
import { Player } from "./Player";
import { Input } from "./Input";
import { EnemySpawnManager } from "./EnemySpawnManager";

class Game {
  constructor() {
    this.renderer = new Renderer();
    this.player = new Player(
      this.renderer.canvas.width / 4,
      this.renderer.canvas.height - 150
    );
    this.input = new Input();
    this.enemySpawnManager = new EnemySpawnManager();
    this.pontos = 0;
    this.isMenu = true;
  }

  setup() {
    this.input.setupInput(this);
  }

  drawScene() {
    this.renderer.clear();

    if (this.isMenu) {
      this.renderer.drawMenu();
    } else {
      this.renderer.drawBG();
      this.enemySpawnManager.enemyList.forEach(e => {
        this.renderer.draw(e);
      });
      this.player.listaLaser.forEach(l => {
        this.renderer.draw(l);
      });
      this.renderer.draw(this.player);

      this.renderer.drawHUD(this);
    }
  }

  update() {
    if (this.isMenu) {
      // TODO
    } else {
      this.enemySpawnManager.spawn();
      this.enemySpawnManager.enemyList.forEach(e => {
        e.mover();
        if (e.collision()) {
          this.enemySpawnManager.enemyList.delete(e.id);
        }
      });
      this.player.mover();
      this.player.listaLaser.forEach(l => {
        l.mover();
      });
    }
    this.drawScene();
    requestAnimationFrame(this.update.bind(this));
  }

  run() {
    requestAnimationFrame(this.update.bind(this));
  }
}

export { Game };
