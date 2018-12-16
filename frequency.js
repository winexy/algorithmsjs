function frequency(first, second) {
  if (first.length !== second.length) return false;

  return first.every(x => {
    let index = second.indexOf(x ** 2);

    if (index === -1) return false;

    second.splice(index, 1);
    return true;
  })
}

function frequency2(first, second) {
  if (first.length !== second.length) return false;

  let counter1 = {};
  let counter2 = {};
  for (let i in first) {
    counter1[first[i]] = (counter1[first[i]] || 0) + 1;
    counter2[second[i]] = (counter2[second[i]] || 0) + 1;
  }

  for (let key in counter1) {
    if (!(key ** 2 in counter2))
      return false;
    if (counter2[key ** 2] !== counter1[key])
      return false;
  }
  return true;
}

console.time('b');
console.log(frequency2([1, 2, 3], [4, 1, 9]));
console.log(frequency2([1, 2, 3], [1, 9]));
console.log(frequency2([1, 2, 1], [4, 4, 1]));
console.timeEnd('b');
//
console.time('a');
console.log(frequency([1, 2, 3], [4, 1, 9]));
console.log(frequency([1, 2, 3], [1, 9]));
console.log(frequency([1, 2, 1], [4, 4, 1]));
console.timeEnd('a');
//
