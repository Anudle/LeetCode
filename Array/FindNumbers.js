var findNumbers = function(nums) {
  let result = 0
  nums.forEach(num => {
    if (num.toString().split('').length % 2 === 0) {
      result += 1
    }
  })
  return result
};

const nums = [12,345,2,6,7896]
console.log(findNumbers(nums))