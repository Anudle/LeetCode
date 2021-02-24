var isValidSudoku = function(board) {
    let result = true
    const verticalSetFirst = new Set()
    const verticalSetSecond = new Set()
    const verticalSetThird = new Set()
    const verticalSetFourth = new Set()
    const verticalSetFifth = new Set()
    const verticalSetSix = new Set()
    const verticalSetSeventh = new Set()
    const verticalSetEight = new Set()
    const verticalSetNineth = new Set()

    const topLeftSet = new Set()
    const topMiddleSet = new Set()
    const topRightSet = new Set()
    const leftMiddleSet = new Set()
    const middleSet = new Set()
    const rightMiddleSet = new Set()
    const bottomLeftSet = new Set()
    const bottomMiddleSet = new Set()
    const bottomRightSet = new Set()

    const setArray = [
      verticalSetFirst, 
      verticalSetSecond, 
      verticalSetThird, 
      verticalSetFourth, 
      verticalSetFifth, 
      verticalSetSix, 
      verticalSetSeventh, 
      verticalSetEight, 
      verticalSetNineth,
    ]
    board.forEach((row, j) => {
      const horizontalSet = new Set()
      row.forEach((num, i) => {
        if (num !== '.' && setArray[i].has(row[i])) {
          console.log('I')
          result = false
        } else {
          setArray[i].add(row[i])
        }
        if (num !== '.' && horizontalSet.has(num)){
          console.log('H')
          result = false
        } else {
          horizontalSet.add(num)
        }

        if (j <= 2 && i <=2) {
          if (num !== '.' && topLeftSet.has(num)){
            console.log('G')
            result = false
          } else {
            topLeftSet.add(num)
          }
        }
        if (j <= 2 && (i >=3 && i <6)) {
          if (num !== '.' && topMiddleSet.has(num)){
            console.log('F')
            result = false
          } else {
            topMiddleSet.add(num)
          }
        }
        if (j <= 2 && i >= 6) {
          console.log(num)
          if (num !== '.' && topRightSet.has(num)){
            console.log('E')
            result = false
          } else {
            topRightSet.add(num)
          }
        }

        if ((j >=3 && j <6) && i <=2) {
          if (num !== '.' && leftMiddleSet.has(num)){
            console.log('D')
            result = false
          } else {
            leftMiddleSet.add(num)
          }
        }
        if ((j >=3 && j <6 ) && (i >=3 && i <6)) {
          if (num !== '.' && middleSet.has(num)){
            console.log('K')
            result = false
          } else {
            middleSet.add(num)
          }
        }
        if ((j >=3 && j <6) && i >= 6) {
          if (num !== '.' && rightMiddleSet.has(num)){
            console.log('J')
            result = false
          } else {
            rightMiddleSet.add(num)
          }
        }

        if (j >= 6 && i <=2) {
          if (num !== '.' && bottomLeftSet.has(num)){
            console.log('C')
            result = false
          } else {
            bottomLeftSet.add(num)
          }
        }
        if (j >= 6 && (i >=3 && i < 6)) {
          if (num !== '.' && bottomMiddleSet.has(num)){
            console.log('B')
            result = false
          } else {
            bottomMiddleSet.add(num)
          }
        }
        if (j >= 6 && i >= 6) {
          if (num !== '.' && bottomRightSet.has(num)){
            console.log('A')
            result = false
          } else {
            bottomRightSet.add(num)
          }
        }
      })
    })
    return result
};

let testBoard = [
  [".",".",".","3",".",".","8","4","."],
  [".",".",".","6",".",".","4","9","."],
  [".",".",".",".","8",".",".",".","."],
  [".",".","6","7",".",".",".",".","."],
  [".",".","1",".",".",".",".",".","2"],
  [".","7","5",".",".",".","1",".","."],
  [".","2",".",".",".",".",".","1","."],
  [".",".","3",".",".","4",".",".","."],
  [".",".","8",".","9",".",".",".","."]]

console.log(isValidSudoku(testBoard))