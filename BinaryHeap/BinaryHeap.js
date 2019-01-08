const MaxBinaryHeap = function() {
  this.values = [];

  const getChildIndices = parent => (
    [
      2 * parent + 1,
      2 * parent + 2
    ]
  );


  const bubbleUp = (current = this.values.length - 1) => {
    const parent = Math.floor((current - 1) / 2);

    if (this.values[parent] < this.values[current]) {
      const temp = this.values[parent];
      this.values[parent] = this.values[current];
      this.values[current] = temp;
      bubbleUp(parent);
    }
  };


  const bubbleDown = (parentIndex = 0) => {
    const notValidChild = (parent, child) => typeof child === 'undefined' || parent >= child;

    const [leftIndex, rightIndex] = getChildIndices(parentIndex);
    const parent = this.values[parentIndex];
    const left = this.values[leftIndex];
    const right = this.values[rightIndex];

    if (
      notValidChild(parent, left) &&
      notValidChild(parent, right)
    ) return;

    const swapIndex = left < right ? rightIndex : leftIndex;

    const temp = this.values[swapIndex];
    this.values[swapIndex] = this.values[parentIndex];
    this.values[parentIndex] = temp;

    bubbleDown(swapIndex);

  };


  return {
    get: () => [...this.values],

    insert: value => {
      this.values.push(value);
      bubbleUp();
    },

    remove: () => {
      let [ max ] = this.values;
      this.values[0] = this.values.pop();

      bubbleDown();
      return max;
    }
  }
};

module.exports = MaxBinaryHeap;
