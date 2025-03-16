function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  }
  
  function digitCount(num) {
    if (num === 0) {
        return 1;
    }
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }
  
  function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
      maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
  }
  
  function radixSort(nums) {
    let maxDigit = mostDigits(nums); 

    for (let k = 0; k < maxDigit; k++) {
        let buckets = [[], [], [], [], [], [], [], [], [], []]; 

        for (let num of nums) {
            let digit = getDigit(num, k);
            buckets[digit].push(num);
        }

        nums = [].concat(...buckets);
    }
    console.log(nums)
    return nums;
  }

  module.exports = { getDigit, digitCount, mostDigits, radixSort };