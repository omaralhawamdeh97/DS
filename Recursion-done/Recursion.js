const numbers = [
  [1, 2, 3, 4],
  [3, 6, [5, 6], 8, 2, [2, 4], 9],
  [4, 2, [6, 7, [2, 6, 1]]],
];

const sum = (number) => {
  let i = 0;
  number.map((num) => {
    if (Number.isInteger(num)) {
      i += num;
    } else i += sum(num);
  });
  return i;
};
console.log(`The sum is ${sum(numbers)}`);
