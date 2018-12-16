function countUniqueValues(arr) {
  let len = arr.length;
  if (len < 2) return 1;
  for (var j = 1, i = 0; j < len; j++)
    if (arr[i] !== arr[j])
      arr[++i] = arr[j];
  return i + 1;
}


console.log(countUniqueValues([1, 2, 2, 3, 3, 4, 4, 5, 6]));
console.log(countUniqueValues([1, 2]));
console.log(countUniqueValues([1, 1]));
