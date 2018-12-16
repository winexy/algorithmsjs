const arr = [5, 3, 4, 1, 2];


function selectionSort(arr) {
  let length = arr.length;
  for (let i = 0 ; i < length; i++) {
    let min = i;

    for (let j = i + 1; j < length; j++)
      if (arr[j] < arr[min]) min = j;

    if (i !== min) {
      let temporary = arr[min];
      arr[min] = arr[i];
      arr[i] = temporary;
    }
  }
  return arr;


}

console.log(selectionSort(arr));
