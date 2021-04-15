var missingNumber = function(nums) {
    let result = nums.length
    const sorted = nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== i) {
        result = i
        break
      }
    }
    return result
};

const nums = [9,6,4,2,3,5,7,0,1]
// const nums = [0,1]
console.log(missingNumber(nums))