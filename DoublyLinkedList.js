var List = function(){
  this.head = null
  this.tail = null
}

var ListNode = function(prev, val, next){
  this.prev = prev || null
  this.val = val
  this.next = next || null
}

// Insert value at the head of the list.
List.prototype.unshift = function(val){
  if (!this.head && !this.tail) {
    this.head = this.tail = new ListNode(null, val, null)
  } else {
    this.head = new ListNode(null, val, null)
    this.head.next.prev = this.head
  }
  return this.head;
}
// Delete the head of the list
List.prototype.shift = function(){
  if (this.head === null && this.tail === null){
    return null;
  } else {
    var head = this.head;
    this.head = this.head.next;
    head.delete();
    return head.val;
  }
}
// Insert at the tail of the list
List.prototype.push = function(val){
  // Empty list
  if (this.head === null && this.tail === null) {
    this.head = this.tail = new ListNode(null, val, null);
  } else {
    var prevTail = this.tail // which had no next value
    this.tail = new ListNode(prevTail, val, null)
    prevTail.next = this.tail // setting prev tail's next to this new tail
  }
}
// Delete at the tail of the list
List.prototype.pop = function(){
  // empty list
  if (this.head === null && this.tail === null) {
    this.head = this.tail = new ListNode(null, val, null);
  } else {
    var tail = this.tail;
    this.tail = this.tail.prev
    tail.delete()
    return tail.val;
  }
}

// move a node to the front of the list
List.prototype.moveToFront = function(node){
  if (node === this.tail){
    this.pop();
  } else if (node === this.head) {
    return;
  } else {
    // clean up pointers in prev/next nodes
    node.delete()
  }
  // clean up pointers in curent node
  node.next = null
  node.prev = null

  // we don't use this.unshift because that function takes a value and creates a new node.
  // we want to re-use this node

  // empty list
  if (this.head === null && this.tail === null) {
    this.head = this.tail = node;
  } else {
    this.head.prev = node
    node.next = this.head
    this.head = node
  }

}
// move a node to the back of the list
List.prototype.moveToEnd = function(node){
  if (node === this.tail){
    return;
  } else if (node === this.head){
    // do reconfiguring for the head
    this.shift()
  } else {
    node.delete()
  }

  // clean up current node pointrs
  node.next = node.prev = null

    // empty list
  if (this.head === null && this.tail === null) {
    this.head = this.tail = node
  } else {
    this.tail.next = node
    node.prev = this.tail
    this.tail = node
  }
}
// remove a node
ListNode.prototype.delete = function(){
  if (this.prev) this.prev.next = this.next
  if (this.next) this.next.prev = this.prev
}