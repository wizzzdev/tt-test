const testInput = [1, 2, 3, 5, 6, 8, 9];

const calcSquares = arr => {
  return arr.map(el => {
    const absNumber = Math.abs(el)
    return absNumber * absNumber;
  }).sort(
   (a, b) => {
     return a < b ? -1 : 1;
   }
  );
}

calcSquares(testInput)
calcSquares([-2, -1])
calcSquares([-10, -5, 0, 5, 10])
