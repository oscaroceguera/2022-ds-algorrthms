const squareEven = (arr) => {
  let newArray =  []
  
  if(arr.lenght === 0) return
  
  for(let i = 0; i < arr.length; i++) {
    if(i % 2 === 0) {
      arr[i] *= arr[i]
    }
    newArray[i] =  arr[i]
  }
  return newArray
}

squareEven([9, -2, -9, 11, 56, -12, -3])