const Node = require('./Node');


function PriorityQueue() {
  this.values = [];

  const getChildIndices = parent => (
    [
      2 * parent + 1,
      2 * parent + 2
    ]
  );

  const bubbleUp = (current = this.values.length - 1) => {

    const parent = Math.floor((current - 1) / 2);

    if (!this.values[parent]) return;
    if (this.values[parent].priority > this.values[current].priority) {
      const temp = this.values[parent];
      this.values[parent] = this.values[current];
      this.values[current] = temp;
      bubbleUp(parent);
    }
  };

  const bubbleDown = (parentIndex = 0) => {
    const notValidChild = (parent, child) => {
      // console.log({parent, child});
      return typeof child === 'undefined' || parent.priority < child.priority;
    };
    const [leftIndex, rightIndex] = getChildIndices(parentIndex);
    const parent = this.values[parentIndex];
    const left = this.values[leftIndex];
    const right = this.values[rightIndex];

    if (
      notValidChild(parent, left) &&
      notValidChild(parent, right)
    ) return;

    const swapIndex = right && left.priority > right.priority ? rightIndex : leftIndex;

    const temp = this.values[swapIndex];
    this.values[swapIndex] = this.values[parentIndex];
    this.values[parentIndex] = temp;

    bubbleDown(swapIndex);

  };

  return Object.entries({
    get() {
      return this.values
        .map(node =>
          `${node.value}:${node.priority}`
        );
    },

    enqueue(value, priority) {
      this.values.push(
        new Node(value, priority)
      );

      bubbleUp();
    },

    dequeue() {
      if (this.values.length === 0) return null;
      if (this.values.length === 1) return this.values.pop();

      let [ highestPriority ] = this.values;
      this.values[0] = this.values.pop();

      bubbleDown();
      return highestPriority;
    }
  }).reduce((instance, [name, fn]) => {
    instance[name] = fn.bind(this);
    return instance;
  }, {});
}


module.exports = PriorityQueue;
