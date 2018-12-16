function maxSubarraySum(arr, n) {
  if (n > arr.length) return null;

  let sum = 0;
  for (let i = 0; i < n; i++)
    sum += arr[i];

  let max = sum;

  for (let i = n; i < arr.length; i++) {
    sum += arr[i] - arr[i - n];
    if (max < sum) max = sum;
  }

  return max;
}


console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubarraySum([4, 2, 1, 6], 1));
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4));
console.log(maxSubarraySum([], 4));

