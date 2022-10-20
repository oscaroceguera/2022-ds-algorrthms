const nums = [-4, -1, 0, 3, 10]
const numsTwo = [-7,-3,2,3,11]

function sortedSquares(nums) {
  let squares = []
  for(let i = 0; i < nums.length; i++) {
    squares.push(Math.pow(nums[i], 2))
  }
  
  return squares.sort((a, b) => a -  b)
}

sortedSquares(nums)
sortedSquares(numsTwo)