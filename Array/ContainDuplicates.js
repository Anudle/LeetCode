var containsDuplicate = function(nums) {
  let map = {}
  let response = false
  nums.forEach(num => {
    if (!map[num]) {
      map[num] = true
    } else {
      response = true
    }
  }) 
  return response
}; 


console.log(containsDuplicate([1,2,3,1]))
//Input: [1,2,3,1]
//Output: true