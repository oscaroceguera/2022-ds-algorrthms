const arr = [4,3,2,7,8,2,3,1]
const arr2 = [1, 1]
const arr3 = [1, 2]
const arr4 = [2, 2]

function findDisappearedNumbersMe(nums) {
	if (nums.length <= 2) {
    let sum = 0
    for(const ele in nums) {
      sum += nums[ele] 
    }
    return [sum]
  }  

  let output = []
  // sorted array
  const sortedNums = nums.sort((a,b) => a - b)
  
  // remove duplicates
  const uniqueNums = sortedNums.filter((element, idx) => {
    return sortedNums.indexOf(element) === idx
  })
  
  // given the output when arent consecutives
  let counter = 1
  for(let i = 0; i < uniqueNums.length; i++) {
    if(counter !== uniqueNums[i]) {
      output.push(counter)
    }
    counter++
  }
  
  return output
}

function findDisappearedNumbers(nums = []) {
	for (let i = 0; i < nums.length; i++) {
    while (
      nums[i] !== nums[nums[i] - 1]
    ) {
      const temp = nums[i]
      const nextIndex = nums[i] - 1
      nums[i] = nums[nextIndex]
      nums[nextIndex] = temp
    }
  }
  return nums.reduce((acc, num, index) => {
    if (num !== index + 1) {
      acc.push(index + 1)
    }
    return acc
  }, [])
}

findDisappearedNumbers(arr)
findDisappearedNumbers(arr2)
findDisappearedNumbers(arr3)
findDisappearedNumbers(arr4)