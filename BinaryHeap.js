const BinaryHeap = function BinaryHeap(scoreFunction){
  this.content = [];
  this.scoreFunction = scoreFunction;
}

BinaryHeap.prototype.push = function(element){
  // add the element to the end of the array and then bubble up
  this.content.push(element);
  this.bubbleUp(this.content.length-1);
  console.log(this.content)
}

BinaryHeap.prototype.pop = function(){
  // remove the FIRST item from the content 
  // (use this to always have quick access to min value
  var result = this.content[0];
  var end = this.content.pop(); // pop referring to array pop not heap pop
  // put the end element at the top and let it sink down
  if (this.content.length > 0) {
    this.content[0] = end;
    this.sinkDown(0);
  }
  return result;
  
};

BinaryHeap.prototype.remove = function(node){
  var length = this.content.length;
    // To remove a value, we must search through the array to find
    // it.
    for (var i = 0; i < length; i++) {
      if (this.content[i] != node) continue;
      // When it is found, the process seen in 'pop' is repeated
      // to fill up the hole.
      var end = this.content.pop();
      // If the element we popped was the one we needed to remove,
      // we're done.
      if (i == length - 1) break;
      // Otherwise, we replace the removed element with the popped
      // one, and allow it to float up or sink down as appropriate.
      this.content[i] = end;
      this.bubbleUp(i);
      this.sinkDown(i);
      break;
    }
}
BinaryHeap.prototype.size = function(){
  return this.content.length;
};

BinaryHeap.prototype.bubbleUp = function(n){
  // fetch element to be removed
  var element = this.content[n];
  var score = this.scoreFunction(element);
  while (n>0){
    // compute parent element's index and fetch the value
    var parentN = Math.floor((n+1)/2) - 1;
    var parent = this.content[parentN];

    // compare the currentScore to parent Score
    // If the parent has a lesser score, then all is well
    if (score >= this.scoreFunction(parent)){
      break;
    }

    // else we need to swap the current with the parent and continue
    this.content[parentN] = element;
    this.content[n] = parent;
    n = parentN;
  }
};

BinaryHeap.prototype.sinkDown = function(n){
  var element = this.content[n];
  var elementScore = this.scoreFunction(element);

  while(true){
    // compute indices of children elements
    var child2N = (n+1) * 2;
    var child1N = child2N - 1;
    // temp variable to store the new position of the element if we need it
    var swap = null;
    // we computed the child element indices so now we do a check to see if they exist
    if (child1N < this.content.length){
      var child1 = this.content[child1N];
      var child1Score = this.scoreFunction(child1);

      // compare child1 score with current element score
      if (child1Score < elementScore){
        swap = child1N;
      }
    }

    // do the same for other child
    if (child2N < this.content.length){
      var child2 = this.content[child2N];
      var child2Score = this.scoreFunction(child2);
      if (child2Score < (swap == null ? elementScore: child1Score)){
        swap = child2N;
      }
    }
    // if no swap, element is in the right pot
    if (swap == null) break;

    // otherwise we swap and then continue
    this.content[n] = this.content[swap];
    this.content[swap] = element;
    n = swap;
  }
}

// Score function will allow you to compare things like nodes with nested values
const exscoreFunction = x => x;


var heap = new BinaryHeap(function(x){return x;});
[10, 3, 4, 8, 2, 9, 7, 1, 2, 6, 5].forEach(element=>heap.push(element))

// heap.remove(2);

while (heap.size() > 0){
  console.log(heap.pop());
}
