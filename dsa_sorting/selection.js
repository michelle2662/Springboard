function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++){
        let minIndex = i;

        for (let k = i; k < arr.length; k++){
            if (arr[k] < arr[minIndex]) {
                minIndex = k;
            }
        }

        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }


    console.log(arr);
    return arr;
}

selectionSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
selectionSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
selectionSort([1, 2, 3]); // [1, 2, 3]
selectionSort([]);

let nums = [
    4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2,
    453, 546, 75, 67, 4342, 32
];

selectionSort(nums);
module.exports = selectionSort;