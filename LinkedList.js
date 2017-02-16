/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';

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

LinkedList.prototype.contains = function(){}

LinkedList.prototype.removeNode = function(){}