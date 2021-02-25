var rotate = function(matrix) {
  let n = matrix.length
    
  // Transpose the Matrix, i.e. transform the rows into columns:
  for(let i=0; i<n; i++) {
      for(let j=i; j<n; j++) {
          if(i !== j) {
          let temp = matrix[i][j]
          matrix[i][j] = matrix[j][i]
          matrix[j][i] = temp
          }
      }
  }
  
  // Swap the first column values with the last column values
  // n is the number of columns
  for(let i=0; i<n; i++) {
      for(let j=0; j<n/2; j++) {
          let temp = matrix[i][j]    
          matrix[i][j] = matrix[i][n-j-1]
          matrix[i][n-j-1] = temp
      }       
  }
};

let testMatrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

rotate(testMatrix)

