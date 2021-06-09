class Node {
  constructor(groupSize, next = null) {
    this.groupSize = groupSize;
    this.next = next;
  }
}

class Queue {
  constructor(limit = 10) {
    this.limit = limit;

    this.frontNode = null;
    this.backNode = null;

    this.size = 0;
    this.waitingTime = 0;
  }

  isEmpty = () => this.size === 0;

  isFull = () => this.size === this.limit;

  peek = () => {
    if (this.isEmpty()) console.log("Empty queue!");
    else return this.frontNode;
  };

  enqueue = (groupSize) => {
    if (this.isFull()) {
      return "There's no place for you here ,this group can't entered now please wait,and the last group that added to this queue contain";
    } else {
      const newNode = new Node(groupSize);

      if (this.isEmpty()) {
        this.frontNode = newNode;
        this.backNode = newNode;

        this.waitingTime += groupSize * 0.5;
      } else {
        this.backNode.nextNode = newNode;

        this.backNode = newNode;
        this.waitingTime += groupSize * 0.5;
      }
      this.size++;
    }
  };

  dequeue = () => {
    if (this.isEmpty()) {
      console.log("OOps! Nothing to remove.");
    } else {
      const removedNode = this.frontNode;
      if (this.size === 1) {
        this.frontNode = null;
        this.backNode = null;
        this.waitingTime = 0;
      } else {
        this.frontNode = removedNode.nextNode;
        this.waitingTime -= removedNode.groupSize * 0.5;
      }
      this.size--;
      return removedNode.groupSize;
    }
  };
}

const ride = new Queue();
console.log(`waiting Time when queue still empty : ${ride.waitingTime}`);
queueGroups = [15, 12, 3, 7];
let i = 0;
while (i < queueGroups.length) {
  if (!ride.isFull()) {
    while (queueGroups[i] > 12) {
      ride.enqueue(12);
      queueGroups[i] -= 12;
    }
    ride.enqueue(queueGroups[i]);
  } else {
    console.log(`${ride.enqueue()} ${queueGroups[i - 1]} people`);
    break;
  }
  i++;
}

console.log(
  `waiting Time after adding four groups to the queue: ${ride.waitingTime}`
);
console.log(
  `the group size for the group that removed from the queue : ${ride.dequeue()}`
);
console.log(
  `waiting Time after remove one element from the queue: ${ride.waitingTime}`
);
