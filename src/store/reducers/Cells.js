const cells = (
  state = [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined
  ],
  action
) => {
  switch (action.type) {
    case "ADD_MOVE":
      return state.map((item, cell) => {
        return cell === action.cell ? action.player : item;
      });
    case "RESET":
      return [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined
      ];
    default:
      return state;
  }
};

export default cells;

// const cells = (state = Array(9).fill(null), action) => {
//   switch (action.type) {
//     case "ADD-MOVE":
//       return state.map((item, cell) => {
//         return cell === action.cell ? action.player : item;
//       });
//     case "REST":
//       return Array(9).fill(null);
//     default:
//       return state;
//   }
// };

// export default cells;
