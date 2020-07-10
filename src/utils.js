export const getWinner = (boxes) => {
  const list = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let winner;
  list.forEach((values) => {
    const [a, b, c] = values;
    if (
      boxes[a].value &&
      boxes[a].value === boxes[b].value &&
      boxes[a].value === boxes[c].value
    ) {
      winner = boxes[a].value;
    }
  });
  return winner;
};

export const initialState = [
  { id: 0, value: "" },
  { id: 1, value: "" },
  { id: 2, value: "" },
  { id: 3, value: "" },
  { id: 4, value: "" },
  { id: 5, value: "" },
  { id: 6, value: "" },
  { id: 7, value: "" },
  { id: 8, value: "" },
];
