Array.prototype.binarySearch = function(number) {
  let l = 0;
  let r = this.length - 1;

  while (l <= r) {
    let middle = Math.floor((l + r) / 2);
    let value = this[middle];

    if (value < number) {
      l = middle + 1;
    } else if (value > number) {
      r = middle - 1;
    } else return middle;
  }

  return -1;
};

console.log([1, 2, 3, 4, 7, 9, 11, 14, 17, 18, 20, 24].binarySearch(17));
