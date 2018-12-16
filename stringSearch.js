function searchString(string, target) {
  let pos = 0;
  let matchCounter = target.length;
  let char;
  for (let i = 0; i < string.length; i++) {
    char = target[pos];
    if (string[i] === char) {
      pos++;
      if (pos === matchCounter) return i - target.length + 1;
    } else {
      i -= pos;
      pos = 0;
    }
  }
  return -1;
}

let str = "hello fellow i live in finfinland and im fine yeaaah";
let target = "fine";
let index = searchString(str, target);


console.log(index, target.length);
console.log(str.slice(index, target.length + index));

