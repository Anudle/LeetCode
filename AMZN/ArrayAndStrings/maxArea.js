var maxArea = function(height) {
  let max = 0
  let leftPointer = 0;
  let rightPointer = height.length - 1;
  while (leftPointer <= height.length - 1 && rightPointer >= 1) {
    let minHeight = Math.min(height[leftPointer], height[rightPointer])
    let width = Math.abs(rightPointer - leftPointer)
    let tempMax = width * minHeight
    if (tempMax > max) {
      max = tempMax
    }
    if (height[leftPointer] < height[rightPointer]) {
      leftPointer ++
    } else {
      rightPointer --  
    }
  }
  return max
};

console.log(maxArea([1, 1]))