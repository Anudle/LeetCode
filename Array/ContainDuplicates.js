var containsDuplicate = function(nums) {
  let mySet = new Set()
  let response = false
  nums.forEach(num => {
    if (mySet.has(num)) {
      response = true
    } else {
      mySet.add(num)
    }
  })
}

console.log(containsDuplicate([1,2,3,1]))
//Input: [1,2,3,1]
//Output: true