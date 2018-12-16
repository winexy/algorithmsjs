function anagram(first, second) {
  if (first.length !== second.length) return false;

  let lookup = {};

  for (let f of first)
    lookup[f] ? lookup[f] += 1 : lookup[f] = 1;

  for (let f of second) {
    if (!lookup[f])
      return false;
    else
      lookup[f] -= 1;
  }

  return true;
}

console.log(anagram('', ''));
console.log(anagram('aaz', 'zza'));
console.log(anagram('anagram', 'nagaram'));
console.log(anagram('rat', 'car'));
console.log(anagram('awesome', 'awesom'));
console.log(anagram('qwerty', 'qeywrt'));
console.log(anagram('texttwisttime', 'timetwisttext'));
