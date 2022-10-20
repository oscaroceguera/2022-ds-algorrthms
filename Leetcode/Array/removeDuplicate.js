const numbers = [1,1,2]
const numbers2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

function removeDuplicates (nums) {
	if(!nums || nums.length === 0){
    return nums
  }
  
  // count how many unique elements are in the array
  let uniqueNumbers = 0;
  for (let i = 0; i < nums.length; i++) {
    if(i === 0 || nums[i] !== nums[i - 1]) {
      uniqueNumbers++
    }
  }
  
  console.log('uniqueNumbers', uniqueNumbers)
  // create a result array
  let result = [uniqueNumbers]
  
  // write the unique elements into the result array
  let positionInResult = 0
  for(let i = 0; i < nums.length; i++){
    if(i === 0 || nums[i] !== nums[i - 1]) {
      result[positionInResult] = nums[i]
      positionInResult++
    }
  }
  return result
}

removeDuplicates(numbers)
// removeDuplicates(numbers2)