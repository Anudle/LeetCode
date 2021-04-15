var numberToWords = function(num) {

  let onesMap = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  }
  let teensMap = {
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
  }
  let tensMap = {
    2: 'twenty',
    3: 'thirty',
    4: 'fourty',
    5: 'fifty',
    6: 'sixty',
    7: 'sevety',
    8: 'eighty',
    9: 'ninty',
  }

  const convertToHundred = (arrayOf3) => {
    let convertResult = []
    if (arrayOf3[1] !== '1') {
      convertResult.unshift(onesMap[arrayOf3[0]])
      convertResult.unshift(tensMap[arrayOf3[1]])
    } else {
      convertResult.unshift(teensMap[`${arrayOf3[1]}${arrayOf3[0]}`])
    }
    convertResult.unshift(`${onesMap[arrayOf3[2]]} hundred`)
    console.log(convertResult)
  }
  let arrayNum = num.toString().split('').reverse()
  convertToHundred(arrayNum)
}

let num = 418
console.log(numberToWords(num))
//One Hundred Twenty Three