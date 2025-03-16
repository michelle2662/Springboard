function bubbleSort(nums) {
    console.log(`Before: ${nums}`)
    for (let i = 0; i < nums.length; i++){
        for (let j = 0; j < nums.length - i; j++) {
            if (nums[j] >= nums[j+1]) {
                temp = nums[j]
                nums[j] = nums[j+1]
                nums[j+1] = temp
            }
        }
    }

    console.log(`After: ${nums}`)

}

module.exports = bubbleSort;

