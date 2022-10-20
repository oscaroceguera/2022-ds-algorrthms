function linearSearch (array, length, element) {
  if(array === null || length === 0){
    return false
  }
  
  for(let i = 0; i < length; i++){
    if(array[i] === element) {
      return true
    }
  }
  
  return false
}

linearSearch([1,2,3,44], 4, 2) 

const nums = [10,2,5,3]
const nums2 = [3,1,7,11]
const nums3 = [7,1,14,11]
const nums4 = [-20,8,-6,-14,0,-19,14,4]

const checkIfExist = (arr) => {
	for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
      if(i !== j){
        if(arr[i] === 2 * arr[j]){
          return true
        }
      }
    }
  }
  return false
}

checkIfExist(nums)
checkIfExist(nums2)
checkIfExist(nums3)
checkIfExist(nums4)