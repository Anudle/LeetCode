var romanToInt = function(s) {
  const map = {
    'M':  1000,
    'D':  500,
    'C':  100,
    'L':  50,
    'X':  10,
    'V':  5,
    'I':  1,
  }
  let result = 0
  let sArray = s.split('').reverse()
  sArray.forEach((letter, index) => {
    let val = map[letter] 
    console.log(val)
    if (val === 1 && (sArray[index-1] && sArray[index - 1] !== 'I')) {
      val = -1
    } 
    if (val === 10 && (sArray[index - 1] === 'C' || sArray[index - 1] === 'L')){
      val = -10
    } 
    if (val === 100 && (sArray[index - 1] === 'D' || sArray[index - 1] === 'M')) {
      val = -100
    } 
  })
  return result
};

// console.log(romanToInt('XLVII')) // 447

// console.log(romanToInt('IV')) //1994

console.log(romanToInt('MMCCCXCIX')) //2399

// var romanToInt = function(s) {
//   const map = {
//     'M':  1000,
//     'D':  500,
//     'C':  100,
//     'L':  50,
//     'X':  10,
//     'V':  5,
//     'I':  1,
//   }
//   let result = 0
//   if (map[s]) {
//     return map[s]
//   }
//   let sArray = s.split('').reverse()
//   sArray.forEach((letter, index) => {
//     let val = map[letter] 
//     console.log(val)
//     if (val === 1 && (sArray[index-1] && sArray[index - 1] !== 'I')) {
//       val = -1
//     } 
//     if (val === 10 && (sArray[index - 1] === 'C' || sArray[index - 1] === 'L')){
//       val = -10
//     } 
//     if (val === 100 && (sArray[index - 1] === 'D' || sArray[index - 1] === 'M')) {
//       val = -100
//     }  
//       console.log('letter', letter)
//       console.log('val ', val)
//       result += val
//       console.log('result ', result)
//       console.log('-------------')
//   })
//   return result
// };

// // console.log(romanToInt('XLVII')) // 447

// // console.log(romanToInt('IV')) //1994

// console.log(romanToInt('MMCCCXCIX')) //2399