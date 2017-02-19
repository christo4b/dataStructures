export default function BinaryHeap(scoreFunction){
  this.content = []
  this.scoreFunction = scoreFunction
}

BinaryHeap.prototype.push = function(element){
  // add the element to the end of the array and then bubble up
  this.content.push(element);
  this.bubbleUp(this.size-1);
}
BinaryHeap.prototype.pop = function(){
  // remove the last item from the content
}
BinaryHeap.prototype.remove = function(){}
BinaryHeap.prototype.size = function(){
  return this.content.length;
};

BinaryHeap.prototype.bubbleUp = function(n){
  // fetch element to be removed
  const element = this.content[n];
  const score = this.scoreFunction(element);

  while (n>0){
    // compute parent element's index and fetch the value
    let parentN = Math.floor((n+1)/2) - 1;
    let parent = this.content(parentN);

    // compare the currentScore to parent Score
    // If the parent has a lesser score, then all is well
    if (score >= this.scoreFunction(parent)){
      break;
    }

    // else we need to swap the current with the parent and continue
    this.content(parentN) = element;
    this.content(n) = parent;
    n = parentN;
  }
};

BinaryHeap.prototype.sinkDown = function(){}

// Score function will allow you to compare things like nodes with nested values
const scoreFunction = x => x;