var twoSum = function(nums, target) {
  let result = []
  for (i = 0; i < nums.length; i++) {
    for(j = i+1; j< nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i)
        result.push(j)
      }
    }
  }
  return result
};

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
const nums = [2,7,11,15]
const target = 9
console.log(twoSum(nums, target))