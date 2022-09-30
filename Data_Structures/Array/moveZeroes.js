/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:

Input: nums = [0]
Output: [0]
*/


function moveZeroes(nums) {
  let zeroesNums = []
  let Nums = []
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroesNums.push(nums[i])
    } else {
      Nums.push(nums[i])
    }
  }
  
  
  return [...Nums, ...zeroesNums]
}

console.log(moveZeroes([0,1,0,3,12]))

function moveZeroesWhite(nums) {
  let k = 0;
  let zeroArr = []

  while(k < nums.length) {
    if(nums[k] === 0) {
      nums.splice(k, 1);
      zeroArr.push(0)
      k--
    }
    k++
  }
  nums.push(...zeroArr)

  return nums
}

console.log(moveZeroesWhite([0,1,0,3,12]))