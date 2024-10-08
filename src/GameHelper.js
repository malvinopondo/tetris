export const StageWidth = 12;
export const StageHeight = 20;

export const createStage = () => {
  return Array.from(Array(StageHeight), () =>
    new Array(StageWidth).fill([0, "clear"])
  );
};
export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetromino.length; y++) {
    for (let x = 0; x < player.tetromino[y].length; x++) {
      if (player.tetromino[y][x] !== 0) {
        if (
          

          !stage[y + player.pos.y + moveY] ||
          
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
         
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            "clear"
        ) {
          return true;
        }
      }
    }
  }
};
