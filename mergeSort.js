function merge(arr1, arr2) {
  let res = [];

  let i = 0;
  let j = 0;
  let value;
  let len1 = arr1.length;
  let len2 = arr2.length;

  while (i < len1 || j < len2) {
    if (arr1[i] < arr2[j])
      value = arr1[i++];
    else
      value = arr2[j++];

    value !== undefined && res.push(value);
  }

  return res;
}

console.log(merge([1, 10, 50], [2, 14, 99, 100]));
