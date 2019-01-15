class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  set(key, value) {
    const hash = this._hash(key);

    console.log(hash);

    if (!this.keyExists(hash)) {
      this.keyMap[hash] = [];
    }

    this.keyMap[hash] = [...this.keyMap[hash], [key, value]];
  }

  get(key) {
    const hash = this._hash(key);

    if (!this.keyExists(hash)) return;

    const value = this.keyMap[hash].find(entry => entry[0] === key);
    return value[1];
  }

  keyExists(key) {
    return !!this.keyMap[key];
  }

  keys() {
    return this._iterate(entry => entry[0]);
  }

  values() {
    return this._iterate(entry => entry[1]);
  }

  _iterate(done) {
    const elements = new Set();
    this.keyMap.forEach(entries => 
        entries.forEach(entry => 
          elements.add(done(entry))
        )
    );
    return [...elements];
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
}

module.exports = HashTable;


const ht = new HashTable();

ht.set('hello, world', 'goodbye!');
ht.set('hello, world', 'goodbye!');
ht.set('hello', 'good!');
ht.set('hell', 'by!');
ht.set('hell', 'byee!');
console.log(ht.keyMap);

console.log(ht.get('kek'))
console.log(ht.get('hello'))

console.log(ht.keys());
console.log(ht.values());