// Used replit AI tool on one logic issue marked below
function findSortedPermutation(a, currPos, permutations) {
    //this if loop had problem innitially
    if (currPos === a.length - 1) {
      //console.log("array", a); 
      return isSorted(a); 
    }
    //needed help with the logic inside this loop too
    for (let i = currPos; i < a.length; i++) {
      swap(a, i, currPos); 
      permutations.count++;
      if (findSortedPermutation(a, currPos + 1, permutations)) {
        return true; 
      }
      swap(a, currPos, i);
    }
    return false; 
  }

  function swap(a, first, second) {
    const tmp = a[first];
    a[first] = a[second];
    a[second] = tmp;
  }
  
  
  function isSorted(a) {
    for (let i = 0; i < a.length - 1; i++) {
      if (a[i] > a[i + 1]) {
        return false; 
      }
    }
    return true; 
  }
  
  function permutationSort(a) {
    const permutations = { count: 0 }; 
    findSortedPermutation(a, 0, permutations);
    //console.log("tried:", permutations.count);
  }
  
  
  //const arrtest = [3, 1, 2];
  //permutationSort(arrtest);
