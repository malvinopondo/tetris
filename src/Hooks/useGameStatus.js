import React, { useState, useEffect, useCallback } from "react";

export const useGameStatus = (rowsCleared) => {
  const [rows, setRows] = useState(0);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(0);

  const levelPoint = [40, 100, 300, 1200];
  const scoreCalc = useCallback(() => {
    if (rowsCleared > 0) {
      setScore((prev) => prev + levelPoint[rowsCleared - 1] * (level + 1));
      setRows((prev) => prev + rowsCleared);
    }
  }, [level, rowsCleared, levelPoint]);

  useEffect(() => {
    scoreCalc();
  }, [scoreCalc, rowsCleared, score]);

  return [score, rows, level, setRows, setScore, setLevel];
};

export const useGameStatuss = (rowsCleared) => {
  const [score, setScore] = useState(0);
  const [rows, setRows] = useState(0);
  const [level, setLevel] = useState(0);

  const linePoints = [40, 100, 300, 1200];

  const calcScore = useCallback(() => {
    // We have score
    if (rowsCleared > 0) {
      // This is how original Tetris score is calculated
      setScore((prev) => prev + linePoints[rowsCleared - 1] * (level + 1));
      setRows((prev) => prev + rowsCleared - 1);
    }
  }, [level, linePoints, rowsCleared]);

  useEffect(() => {
    calcScore();
  }, [calcScore, rowsCleared, score]);

  return [score, setScore, rows, setRows, level, setLevel];
};
