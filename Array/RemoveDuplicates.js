/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (!nums.length) {
      return 0
    }
    let pointer1 = 0
    for (let pointer2 = 1; pointer2 < nums.length; pointer2++) {
      if (nums[pointer1] !== nums[pointer2]) {
        pointer1++
        nums[pointer1] = nums[pointer2]
      }
      
    }
    return pointer1 + 1
    };
    // Input: nums = [1,1,2]
    // Output: 2, nums = [1,2]
    
    
    // console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
    console.log(removeDuplicates([1,1,2]))
    
    
