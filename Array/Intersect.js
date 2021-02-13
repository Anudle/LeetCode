/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let res = [];
  for (var i = 0; i < nums2.length; i++){
      if (nums1.includes(nums2[i])){
          res.push(nums2[i]);
          console.log('res', res)
          console.log('nums1', nums1)
          nums1.splice(nums1.indexOf(nums2[i]), 1);
      }
  }
  return res;
};


nums1 = [4,9,5]
nums2 = [9,4,9,8,4]
// Output: [4,9]

// nums1 = [1,2,2,1]
// nums2 = [2,2]

// nums1 = [1]
// nums2 = [1, 2]

// nums1 = [1]
// nums2 = [1,1]

console.log(intersect(nums1, nums2))