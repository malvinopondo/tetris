import React, { useState, useEffect } from "react";

import { createStage } from "../GameHelper";

const useStage = (props) => {
  const [stage, setStage] = useState(createStage());
  const [rowsCleared, setRowsCleared] = useState(0);
  useEffect(() => {
    setRowsCleared(0);
    const sweepRows = (newStage) =>
      newStage.reduce((ack, row) => {
        if (row.findIndex((cell) => cell[0] === 0) === -1) {
          setRowsCleared((prev) => prev + 1);
          ack.unshift(new Array(newStage[0].length).fill([0, "clear"]));
          return ack;
        }
        ack.push(row);
        return ack;
      }, []);
    const updataStage = (prevStage) => {
      // First flush the stage
      const newStage = prevStage.map((row) =>
        row.map((cell) => (cell[1] === "clear" ? [0, "clear"] : cell))
      );

      // Then draw the tetromino
      props.player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + props.player.pos.y][x + props.player.pos.x] = [
              value,
              `${props.player.collided ? "merged" : "clear"}`,
            ];
          }
        });
      });
      if (props.player.collided) {
        props.resetPlayer();
        return sweepRows(newStage);
      }

      return newStage;
    };

    setStage((prevStage) => updataStage(prevStage));
  }, [props.player, props.resetPlaye]);

  return [stage, setStage, rowsCleared];
};

export default useStage;
