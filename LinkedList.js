/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// console.log(list.tail;         )//yields 'null'
// console.log(list.addToTail(4);)
// console.log(list.addToTail(5);)
// console.log(list.head.value;   )//yields '4';
// console.log(list.contains(5);  )//yields 'true';
// console.log(list.contains(6);  )//yields 'false';
// console.log(list.removeHead(); )//yields '4'
// console.log(list.tail.value;   )//yields '5';

var LinkedList = function(){
  this.head = null
  this.tail = null
};

var ListNode = function(value, next){
  this.value = value
  this.next = next || null
}

LinkedList.prototype.addToTail = function(value){
  // empty list
  var newTail = new ListNode(value)
  if (!this.head) this.head = newTail
  if (this.tail) this.tail.next = newTail
  this.tail = newTail
}

LinkedList.prototype.removeHead = function(){
  // empty list
  var current = this.head
  if (!this.head) return null
  if (this.head === this.tail){
    this.head = this.tail =  null
  }
  if (this.head) {
    this.head = this.head.next
  }
  return current
}

LinkedList.prototype.contains = function(value){
  let node = this.head
  if (this.head.value === value || this.tail.value === value) {
    return true
  }
  while (node){
    if (node.value === value) return true;
    node = node.next
  }
  return false
}

LinkedList.prototype.removeNode = function(node){
  // given a pointer to a node, we can effectively remove it
  if (this.tail === node){
    this.removeTail();
    return node.value
  }

  node.value = node.next.value
  node.next=node.next.next
}