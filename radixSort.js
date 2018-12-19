function radixSort(arr) {
  let longest = mostDigits(arr);
  Array.from({length: longest}).forEach((_, i) => {
    let container = Array.from({length: 10}, () => []);
    arr.forEach(num => {
      let digit = getDigit(num, i);
      container[digit].push(num);
    });
    arr = [].concat(...container);
  });
  return arr;
}

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / (10 ** i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
  let max = 0;
  arr.forEach(n => max = Math.max(max, digitCount(n)));
  return max;
}

console.log(radixSort([345, 12, 4, 2, 7, 241, 20]));