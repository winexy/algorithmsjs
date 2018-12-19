function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let index = pivot(arr, left, right);

    if (index === left) return arr;
    
    quickSort(arr, left, index - 1);
    quickSort(arr, index + 1, right);
  }
  return arr;


  function pivot(arr, start = 0, end = arr.length - 1) {
    let pivot = arr[start];
    let counter = start;
    for (let i = start + 1; i <= end; i++)
      if (arr[i] < pivot)
        swap(arr, i, ++counter);

    swap(arr, counter, start);

    return counter;
  }

  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

 


const arr = [4, 104, 14, 35, 12, 8, 2, 1, 99, -1, 5, 7, 6, 3, 2, 7]; 



console.log(quickSort(arr));

