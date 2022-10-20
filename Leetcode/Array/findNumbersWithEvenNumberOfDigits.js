const nums = [12,345,2,6,7896]
const numsTwo = [[555,901,482,1771]]


function findNumbers(nums) {
  let count = 0
  for(let i = 0; i < nums.length; i++) {
    const numToString = `${nums[i]}`
    if (numToString.length % 2  === 0) count++
  }
  
  return count
}

findNumbers(nums)
findNumbers(numsTwo)