// Hashtable contains insert, retrieve, and remove methods
// The hashtable should handle collisions correctly
// Double the storage limit as soon as the total number of items stored
// is greater that 3/4 of the number of slots in the storage array
// Halve the storage limit when utilization drops below 1/4

const makeHashTable = (limit)=> {
  let result = {}
  let storage = []
  let limit = limit || 4
  let size = 0

  result.insert = (key, value) =>{
    // get index
    const index = getIndexBelowMaxForKey(key, limit)
    // set a bucket at that index
    storage[index] = storage[index] || [];
    // if storage has a bucket already, we need to check for overwrites 
    let replaced = false;
    for (let i = 0; i < storage[index].length; i++){
      let pair = storage[index][i]
      // check to see if the pair has the same key
      if (pair[0] === key){
        pair[1] = value
        replaced = true
      }
    }
    if (!replaced) {
      pairs.push([key,value])
      size++
    }

    // handle resizing:
    if (size >= limit * 0.75) {
      resize(limit * 2)
    }

  };

  result.retrieve = key => {

    let index = getIndexBelowMaxForKey(key, limit)
    if (!storage[index]) return;

    for (let i=0;i<storage[index].length;i++){
      let pair = storage[index][i]
      if (key === pair[0]){
        return pair[1]
      }
    }

  };

  result.remove = key => {
    let index = getIndexBelowMaxForKey(key, limit)
    if (!storage[index]) return;
    let temp = []
    for (let i=0;i<storage[index].length;i++){
      let pair = storage[index][i]
      if (key === pair[0]){
        temp = pair[1]
        delete pairs[i]
        size--
        if (size <= limit*0.25){
          resize(limit/2)
        }
      }
    }
    return temp
  };

  let resizing = false;
  function resize(newSize){
    if (!resizing){
      resizing = true;
      let pairs = []
      for (let i = 0; i<storage.length;i++){
        if (!storage[i]) continue;
        for (let j = storage[i].length-1; j>=0;j--){
          if (!storage[i][j]) continue;
          pairs.push(storage[i][j]);
          storage[i].length--
        }
      }
      limit = newSize
      storage = []
      size = 0
      for (let i=0;i<pairs.length;i++){
        result.insert(pairs[i][0], pairs[i][1])
      }
      resizing = false;
    }
  }

}



// Hashing Function
const getIndexBelowMaxForKey = (str, max) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};