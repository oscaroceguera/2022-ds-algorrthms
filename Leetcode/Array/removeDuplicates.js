const nums = [1,1,2]


function removeDuplicates(nums) {
 let insertIndex = 1
 for(let i = 1; i < nums.length; i++) {
   if(nums[i - 1] !== nums[i]){
     nums[insertIndex] = nums[i]
     insertIndex++
   }
 }
  
  return insertIndex
}

removeDuplicates(nums)


function removeDuplicatesLeetCode(nums) {
  let insertIndex = 1
  
  for (let i = 1; i < nums.length; i++){
    if(nums[i - 1] !=  nums[i]) {
      nums[insertIndex] = nums[i]
      insertIndex++
    }
  }
  
  return insertIndex
}

removeDuplicatesLeetCode(nums)