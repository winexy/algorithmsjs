function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0)
      return [arr[left], arr[right]];
    sum > 0 ? right-- : left++;
  }
  return [undefined, undefined];
}

console.log(sumZero([-4, -3, -2, -1, 0, 5, 10]));
