export const TETROMINOS = {
  0: {
    shape: [[0]],
    color: "1, 1, 1",
  },

  I: {
    shape: [
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
    ],
    color: "0, 255, 255",
  },

  J: {
    shape: [
      [0, "J", 0],
      [0, "J", 0],
      ["J", "J", 0],
    ],
    color: "255, 255, 0",
  },
  L: {
    shape: [
      [0, "L", 0],
      [0, "L", 0],
      [0, "L", "L"],
    ],
    color: "128, 0, 128",
  },

  O: {
    shape: [
      ["O", "O"],
      ["O", "O"],
    ],
    color: "0, 255, 0",
  },

  S: {
    shape: [
      [0, "S", "S"],
      ["S", "S", 0],
      [0, 0, 0],
    ],
    color: "255, 0, 0",
  },
  T: {
    shape: [
      [0, 0, 0],
      ["T", "T", "T"],
      [0, "T", 0],
    ],
    color: "0, 0, 255",
  },
  Z: {
    shape: [
      ["Z", "Z", 0],
      [0, "Z", "Z"],
      [0, 0, 0],
    ],
    color: "255, 127, 0",
  },
};

export const randomTetrominos = () => {
  const random = "IJLOSTZ";
  const rendomLetter = random[Math.floor(Math.random() * random.length)];
  return TETROMINOS[rendomLetter];
};
