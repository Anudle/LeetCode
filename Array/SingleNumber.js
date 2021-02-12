/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function(nums) {
  let result
  const myHashMap = {}
 
  nums.forEach(num => {
    if (!myHashMap.hasOwnProperty(num.toString())) {
      myHashMap[num] = 1
    } else {
      myHashMap[num] += 1
    }
  })

  for (const property in myHashMap) {
    if (myHashMap[property] === 1) {
      result = property
    }
  }

  return result
};

console.log(singleNumber([4]))