import { Enemy } from "./Enemy";
import { Config } from "./Config";

class EnemySpawnManager {
  constructor() {
    this.enemyList = new Map();
    // @TODO (tulio) - retirar
    this.lastSpawnTime = Date.now();
    this.enemyCount = 0;
  }

  spawn() {
    const now = Date.now();
    if (now - this.lastSpawnTime > Config.ENEMY_FREQ) {
      const x = Math.random() * (Config.WINDOW_WIDTH - 50);

      this.enemyCount++;
      const newEnemy = new Enemy(x, -83, 91, 83, this.enemyCount);

      this.enemyList.set(newEnemy.id, newEnemy);
      this.lastSpawnTime = now;
    }
  }
}

export { EnemySpawnManager };
