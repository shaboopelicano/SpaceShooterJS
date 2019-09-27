class Input {
  constructor() {}

  setupInput(game) {
    window.onkeydown = e => {
      let retorno = null;
      switch (e.key) {
        case "a":
          game.player.moverEsquerda();
          break;
        case "d":
          game.player.moverDireita();
          break;
        case "w":
          game.player.moverCima();
          break;
        case "s":
          game.player.moverBaixo();
          break;
        case "Control":
          game.player.atirar();
          break;
        case "Enter":
          game.renderer.ctx.font = "12px Calibri";
          game.isMenu = false;
          break;
        default:
          retorno = -1;
          break;
      }
      return retorno;
    };
    window.onkeyup = e => {
      let retorno = null;
      switch (e.key) {
        case "a":
          game.player.vX = 0;
          break;
        case "d":
          game.player.vX = 0;
          break;
        case "w":
          game.player.vY = 0;
          break;
        case "s":
          game.player.vY = 0;
          break;
        default:
          retorno = -1;
          break;
      }
      return retorno;
    };
  }
}

export { Input };
