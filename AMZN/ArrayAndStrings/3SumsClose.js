var threeSumClosest = function(nums, target) {
  let sums = []
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i +1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let sum = nums[i] + nums[j] + nums[k]  
        sums.push(sum)
      }
    }
  }
  let result = sums[0]
  sums.forEach(number => {
    if (Math.abs(target - number) < Math.abs(target - result)) {
      result = number
    }
  })
  return result
};

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

// threeSumClosest([-1,2,1,-4], 1)

console.log(threeSumClosest([1,1,1,0], -100))