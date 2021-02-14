/**
 * @param {number[]} digits
 * @return {number[]}
 */
let plusOne = function(digits) {
  digits = digits.reverse()
  digits[0] += 1
  for(let i = 0; i  digits.length; i++ ) {
    if (digits[i] >= 10 && i !== digits.length - 1) {
      digits[i] = 0
      digits[i + 1] += 1
    } else if (digits.length - 1 === i && digits[i] >= 10) {
      digits[i] = 0
      digits.push(1)
    }
  }
  return digits.reverse()
};

// let digits = [4, 3, 2, 1]
// // Output: [4,3,2,2]

let digits = [9, 9]



console.log(plusOne(digits))