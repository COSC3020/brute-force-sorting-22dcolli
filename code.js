//used replit AI tool to help where marked
function findSortedPermutation(arr, currPos, permutations) {
    //my original counted wrong, the following line was changed to help
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
//the logic in this function also needed some revision to pass the checks
function permutationSort(arr) {
    const permutations = { count: 0 }; 
    findSortedPermutation(arr, 0, permutations);
    return permutations.count;
}


//const arrtest = [3, 2, 1];
//permutationSort(arrtest);
