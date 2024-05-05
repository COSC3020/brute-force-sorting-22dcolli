function findSortedPermutation(arr, currPos, permutations) {
    if (currPos === arr.length - 1) {
        permutations.count++;
        return isSorted(arr); 
    }
    for (let i = currPos; i < arr.length; i++) {
        swap(arr, i, currPos); 
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
    return permutations.count;
}


//const arrtest = [3, 2, 1];
//permutationSort(arrtest);
