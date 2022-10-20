const nums = [0,,2,3,4,5,2,1,0]
const nums2 = [0,2,3,3,5,2,1,0]
const nums3 = [2,1]
const nums4 = [3,5,5]
const nums5 = [0,3,2,11]

const validMountainArray = (arr) => {
  if(arr.length < 3) {
    return false
  }
  
  let increse = false;
  let decrese = false;
  
  for(let i = 1; i < arr.length; i++){
    if(arr[i] === arr[i - 1]){
      return false
    }
    
    if (arr[i] > arr[i - 1]) {
      if(decrese === true) {
        return false
      }
      
      increse = true
    }
    
    if (arr[i] < arr[i - 1]) {
      decrese = true
    }
  }
  
  return increse && decrese
}



validMountainArray(nums)