const moveZeroes = function(nums) {
  let zeroCount = 0
  for(let i = 0; i < nums.length; i++) {
    if (nums[i] === 0 && zeroCount <= nums.length) {
      nums.splice(i, 1)
      nums.push(0)
      zeroCount += 1
      i = i - 1 
    }
  }
  return nums
};

let test =  [0,1,0,3,12]
// [1,3,12,0,0]

console.log(moveZeroes(test))