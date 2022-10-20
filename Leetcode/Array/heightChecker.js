const numbers = [1,1,4,2,1,3]
const numbers2 = [5,1,2,3,4]
const numbers3 = [1,2,3,4,5]
const numbers4 = [10,6,6,10,10,9,8,8,3,3,8,2,1,5,1,9,5,2,7,4,7,7]

function orderArray (heights) {
  for(let i = 1; i < heights.length; i++) {
    for(let j = 0; j < i; j++) {
      if(heights[i] < heights[j]) {
        let x = heights[i]
        heights[i] = heights[j]
        heights[j] = x
      }
    }
  }
  
  return heights
}

function heightChecker2 (heights) {
 	const copyHeights = [...heights]
	const sortedHeights = copyHeights.sort((a,b) => a - b)
  console.log(sortedHeights)
  let count = 0
  for(let i = 0; i < heights.length; i++) {
    if(heights[i] !== sortedHeights[i]) {
      count++
    }
  }
  
 return count
}

heightChecker2(numbers)
heightChecker2(numbers2)
heightChecker2(numbers3)
heightChecker2(numbers4)