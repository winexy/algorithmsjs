function merge(arr1, arr2) {
  let res = [];

  let i = 0;
  let j = 0;
  let value;
  let len1 = arr1.length;
  let len2 = arr2.length;

  while (i < len1 && j < len2) {
    if (arr1[i] < arr2[j]) value = arr1[i++];
    else value = arr2[j++];
    value !== undefined && res.push(value);
  }

  while (i < len1) res.push(arr1[i++]);
  while (j < len2) res.push(arr2[j++]);

  return res;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let middle = Math.floor(arr.length / 2);
  return merge(
    mergeSort(arr.slice(0, middle)),
    mergeSort(arr.slice(middle))
  );
}


console.log(mergeSort([1, -1, -2]));
