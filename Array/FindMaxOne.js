var findMaxConsecutiveOnes = function(nums) {
  let currentResult = 0
  let maxResult = 0
  nums.forEach(num => {
    if (num === 0) {
      currentResult += 1
    } else {
      if (currentResult >= maxResult) {
        maxResult = currentResult
      }
      currentResult = 0
    }
  })
  return maxResult
};

[1,0,1,1,0,1]

Output: 3