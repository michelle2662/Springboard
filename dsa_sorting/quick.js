/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, startIndex, endIndex){
    let pivot = arr[startIndex];
    let swapIndex = startIndex;
    for (let i = startIndex + 1; i <= endIndex; i ++){
        if (arr[i] < pivot){
            swapIndex += 1;
            [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
        }

    }

    [arr[startIndex], arr[swapIndex]] = [arr[swapIndex], arr[startIndex]];

    return swapIndex;    
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, left=0, right = arr.length -1) {
    if (left < right) {
    
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex -1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr 
}


module.exports = quickSort;