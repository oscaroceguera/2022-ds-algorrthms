const nums = [3,2,2,3]
const val = 3



function removeElement(nums, val) {
	let newNums = []
  
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] !== val) {
      newNums.push(nums[i])
    }
  }
	return newNums
}

console.log(removeElement(nums, val))



function removeElementTwo(nums, val) {
  while(nums.includes(val)) {
    nums.splice(nums.indexOf(val), 1)
  }
  return nums.length
}

removeElementTwo(nums, val)