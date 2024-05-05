function findSortedPermutation(a, currPos, permutations) {
    if (currPos === a.length - 1) {
        permutations.count++; // Increment the count before checking if the array is sorted
        return isSorted(a); 
    }
    for (let i = currPos; i < a.length; i++) {
        swap(a, i, currPos); 
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
    //console.log("Permutations tried:", permutations.count);
}

//const arrtest = [5,4, 3, 2, 1];
//permutationSort(arrtest);

//const arrtest = [3, 2, 1];
//permutationSort(arrtest);
