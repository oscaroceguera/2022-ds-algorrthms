const arr = [3,1,2,4]

function sortArrayByParity (nums) {
	let newNums = [];

  for(let i = 0; i < nums.length; i++) {
    if(nums[i] % 2 === 0) {
      console.log('even', nums[i])
      newNums.unshift(nums[i])
    } else {
      console.log('odd', nums[i])
      newNums.push(nums[i])
    }
  }
  
  return newNums
}

sortArrayByParity(arr)