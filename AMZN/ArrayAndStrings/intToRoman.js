var intToRoman = function(num) {
  const map = {
    M:  1000,
    CM: 900,
    D:  500,
    CD: 400,
    C:  100,
    XC: 90,
    L:  50,
    XL: 40,
    X:  10,
    IX: 9,
    V:  5,
    IV: 4,
    I:  1,
  }
  let result = ''
  for (key in map) {
    result += key.repeat(Math.floor(num / map[key]))
    num %= map[key] 
  }
  return result
};


console.log(intToRoman(1234))
// let result = []
// const numArray = num.toString().split('').map(stringNum => Number(stringNum)).reverse()
// numArray.forEach((digit, index) => {
//       if (index === 0) {
//         if (digit < 4) {
//           let count = 0
//           let stringVal = ''
//           while (count < digit) {
//             stringVal += 'I'
//             count++
//           }
//           result.push(stringVal)
//         } else if (digit > 3 && digit < 9) {
//           let stringVal = 'V'
//           if (digit >= 5) {

//           }
//         }
//       }
// })

// console.log(result) 
// // return result

// let count = 0
// if (num < 5) {
  //   while (count < num) {
    //     result += 'I'
    //     count ++
    //   }
    // } if (num < )


