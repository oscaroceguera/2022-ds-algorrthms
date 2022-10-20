function merge (nums1, m, nums2, n){
  
  for(let i = nums2.length; i > 0; i--) {
    nums1.unshift(nums2[0])
    nums1.pop()
    nums2.shift()
  }
  
  return nums1.sort((a,b)  => a - b)
}

merge([1,2,3,0,0,0], 3, [2,5,6], 3)
merge([1], 1, [], 0)
merge([0], 0, [1], 1)


function mergeMe (nums1, m, nums2, n){
  const firstArr = []
  const secondArr = []
  
  for(let i = 0; i < m; i++) {
    firstArr.push(nums1[i])
  }
  
  for(let i = 0; i < n; i++) {
    secondArr.push(nums2[i])
  }
  
  const mergeArrays = firstArr.concat(secondArr)
  
  return mergeArrays.sort((a, b) => a - b)
}