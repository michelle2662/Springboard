function insertionSort(arr) {

    for (let i = 1; i < arr.length; i++){
        let j = i - 1;
        let current = arr[i] 
        
        while (j >= 0 && arr[j] > current) {
            arr[j+1] = arr[j];
            j = j-1;
        }
        arr[j+1] = current;
    }

    console.log(arr);
    return arr;

}
let nums = [
    4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2,
    453, 546, 75, 67, 4342, 32
];

insertionSort(nums);

module.exports = insertionSort;