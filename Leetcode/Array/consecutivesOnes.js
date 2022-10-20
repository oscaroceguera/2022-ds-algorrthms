const nums = [1,1,0,1,1,1]
const numsTwo = [0,1,1,0,0,0]

function findMaxConsecutivesOnes (nums)  {
  let largestCount = 0; 
  let currentCount = 0; 
  
  if(nums.length === 0) return largestCount
  if(nums.length === 1) return nums[0]
  
  for(let i  = 0; i < nums.length; i++) {
    if(nums[i] === 0) {
      currentCount = 0
    } else {
      currentCount++
    }
    
    if (currentCount > largestCount) largestCount = currentCount
   
  }
  return largestCount
  
}

findMaxConsecutivesOnes(nums)
findMaxConsecutivesOnes(numsTwo)
