/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
  let result = []
  nums.forEach((num, index) => {
    nums.splice(index, 1) 
    let sum = nums.reduce((a,b) => a*b)
    result.push(sum)
    nums.splice(index, 0, num)
    console.log(nums)
  })  
  return result
};

productExceptSelf([1,2,3,4])