var strStr = function(haystack, needle) {
  equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);
  let result = 0
  if (needle.length) {
    let needleLength = needle.length;
    if (haystack.includes(needle)) {
      let needleArray = needle.split('')
      let haystackArry = haystack.split('')
      for (let i = 0; i < haystackArry.length; i++) {
        if (equals(haystackArry.slice(i, i + needleLength), needleArray)){
          result = i
          break
        }
      }
    } else {
      result = -1
    }
  }
  return result
};

//Input: haystack = "hello", needle = "ll"

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

console.log(strStr("aaa", 'a'))

