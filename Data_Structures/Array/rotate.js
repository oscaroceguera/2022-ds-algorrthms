function rotate(nums, k) {
  let arr = []
  for (let i = k  + 1; i < nums.length ; i++) {
		 arr.push(nums[i])
  }
  
  for (let j = 0; j < k + 1 ; j++) {
    arr.push(nums[j])
  }
  
  return arr
}

rotate([1,2,3,4,5,6,7], 3)

function rotate2(nums, k) {
  for (let j = 0; j < k  ; j++) {
    nums.unshift(nums.pop())
  }
  
  return nums
}

rotate2([1,2,3,4,5,6,7], 3)
