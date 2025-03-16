function merge(arr1, arr2) {
    let i = 0
    let j = 0
    let arr = new Array()

    while (i < arr1.length && j < arr2.length ) {
        if (arr1[i] < arr2[j]){
            arr.push(arr1[i])
            i++
        } else {
            arr.push(arr2[j])
            j++
        }
    }

    while (i < arr1.length) {
        arr.push(arr1[i])
        i++
    }

    while (j < arr2.length) {
        arr.push(arr2[j])
        j++
    }

    return arr;
}

function mergeSort(arr) {
    if (arr.length <= 1){
        return arr
    }

    let mid = Math.floor(arr.length/2);
   
    let sortedLeft = mergeSort(arr.slice(0,mid))
    let sortedRight = mergeSort(arr.slice(mid));

    const sortedArray = merge(sortedLeft, sortedRight);

    console.log(sortedArray)
    return sortedArray
    
}

module.exports = { merge, mergeSort};

mergeSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
mergeSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
mergeSort([1, 2, 3]); // [1, 2, 3]
mergeSort([]);

let nums = [
    4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2,
    453, 546, 75, 67, 4342, 32
];

mergeSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35,
                 //  43, 67, 75, 232, 232, 453, 546, 4342]