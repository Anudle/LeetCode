/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
  strs = strs.sort();
  var mapping = {};
  for (var i = 0; i < strs.length; i++) {
      var str = strs[i];
      var sorted = str.split('').sort().join('');
      
      if (mapping[sorted] === undefined) {
          mapping[sorted] = [str];
      } else {
          mapping[sorted].push(str);
      }
  }
  
  var output = [];
  for (var arr in mapping) {
      output.push(mapping[arr]);
  }
  
  return output;
};

strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

console.log(groupAnagrams(strs))








// let setComparer = (setA, setB) => {
//   if (setA.size !== setB.size) {
//     return false
//   }
//   for (let a of setA) {
//     if (!setB.has(a)) {
//       return false
//     }
//   }
//   return true
// }
// let result = []
// let arrayMap = []
// strs.forEach((word, wordIndex) => {
//   let mySet = new Set()
//   word.split('').forEach((letter) => {
//     if (!mySet.has(letter)) {
//       mySet.add(letter)
//     }
//   })
//   arrayMap.push(mySet)
//   arrayMap.forEach((set, setIndex) => {
//     if (setIndex !== wordIndex && setComparer(set, mySet)) {
//       console.log(set)
//       result.push(strs[wordIndex])
//     }
//   })
// console.log('--------')
// })
// console.log(arrayMap)