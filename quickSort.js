function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let _pivot = pivot(arr, left, right);

    if (_pivot === left) return arr;
    
    quickSort(arr, left, _pivot - 1);
    quickSort(arr, _pivot + 1, right);
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

    function swap(arr, i, j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}

 


const arr = [4, 8, 2, 1, 5, 7, 6, 3]; 



console.log(quickSort(arr));

