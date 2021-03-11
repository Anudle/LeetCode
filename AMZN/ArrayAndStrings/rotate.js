var rotate = function(matrix) {
  let maxLength = matrix[0].length
  for (let i = 0; i < matrix.length; i++) {
    for (j = 0; j < maxLength; j++){
        let val = matrix[i][j]
        matrix[j].push(val)
    }
  }
  for (let k = 0; k < matrix.length; k++) {
    matrix[k].splice(0, maxLength)
    matrix[k].reverse()
  }
  return matrix
};

rotate([[1,2,3],[4,5,6],[7,8,9]])

// [[7,4,1],[8,5,2],[9,6,3]]