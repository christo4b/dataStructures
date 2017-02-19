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
  // remove the FIRST item from the content 
  // (use this to always have quick access to min value
  const result = this.content[0];
  const end = this.content.pop(); // pop referring to array pop not heap pop
  // put the end element at the top and let it sink down
  if (this.content.length > 0) {
    this.content[0] = end;
    this.sinkDown(0);
  }
  return result;
};

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

BinaryHeap.prototype.sinkDown = function(n){
  const element = this.content[0];
  const elementScore = this.scoreFunction(element);

  while(true){
    // compute indices of children elements
    let child2N = (n+1) * 2;
    let child1N = child2N - 1;
    // temp variable to store the new position of the element if we need it
    let swap = null;
    // we computed the child element indices so now we do a check to see if they exist
    if (child1N < this.content.length){
      let child1 = this.content[child1N];
      let child1Score = this.scoreFunction(child1);

      // compare child1 score with current element score
      if (child1Score < elementScore){
        swap = child1N
      }
    }

    // do the same for other child
    if (child2N < this.content.length){
      let child2 = this.content[child2N];
      let child2Score = this.scoreFunction(child2N);

      if (child2Score < (swap === null ? elementScore: child1Score)){
        swap = child2N;
      }
    }
    // if no swap, element is in the right pot
    if (swap === null) break;

    // otherwise we swap and then continue
    this.content[n] = this.content[swap];
    this.content[swap] = element;
    n = swap;
  }
}

// Score function will allow you to compare things like nodes with nested values
const scoreFunction = x => x;