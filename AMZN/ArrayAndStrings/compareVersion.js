var compareVersion = function(version1, version2) {
  const v1Array = version1.split('.')
  const v2Array = version2.split('.')
  const v1Number = []
  const v2Number = []
  let result = 0
  v1Array.forEach(set => {
    number = Number(set)
    v1Number.push(number)
  })
  v2Array.forEach(set => {
    number = Number(set)
    v2Number.push(number)
  })
  const max = v1Array.length >= v2Array.length ? v1Array : v2Array

  for(let i = 0; i < max.length; i++) {
    const v1Parse = Number(v1Array[i])
    const v2Parse = Number(v1Array[i])
    
    if ((v1Number[i] < v2Number[i]) || (v2Number[i] && !v1Number[i])) {
      result = -1
      break
    } else if ((v1Number[i] > v2Number[i]) || (v1Number[i] && !v2Number[i])){
      result = 1
      break
    }
  }
  return result
};

// Input: version1 = "1.01", version2 = "1.001"
// Output: 0

let version1 = "1.0.1"
let version2 = "1"
// Output: 1

// let version1 = "7.5.2.4"
// let version2 = "7.5.3"
// Output: -1

console.log(compareVersion(version1, version2))

//Split strings into arrays by .
//Trim leading 0