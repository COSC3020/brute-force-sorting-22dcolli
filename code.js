// Used replit AI tool on one logic issue marked below
function findSortedPermutation(arr, currPos, permutations) {
    //this if loop had problem innitially
    if (currPos === arr.length - 1) {
      //console.log("array", arr); 
      return isSorted(arr); 
    }
    //needed help with the logic inside this loop too
    for (let i = currPos; i < arr.length; i++) {
      swap(arr, i, currPos); 
      permutations.count++;
      if (findSortedPermutation(arr, currPos + 1, permutations)) {
        return true; 
      }
      swap(arr, currPos, i);
    }
    return false; 
  }

  function swap(arr, first, second) {
    const tmp = arr[first];
    arr[first] = arr[second];
    arr[second] = tmp;
  }
  
  
  function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        return false; 
      }
    }
    return true; 
  }
  
  function permutationSort(arr) {
    const permutations = { count: 0 }; 
    findSortedPermutation(arr, 0, permutations);
    //console.log("tried:", permutations.count);
  }
  
  
  //const arrtest = [3, 1, 2];
  //permutationSort(arrtest);
