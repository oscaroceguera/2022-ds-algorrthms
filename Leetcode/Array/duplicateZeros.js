const arr = [1,0,2,3,0,4,5,0]
const arrTwo = [1,2,3]


function duplicateZeros (arr) {
  for(let i = 0; i < arr.length; i++) {
   if(arr[i] === 0) {
     arr.splice(i, 0, 0)
     arr.pop()
     i++
   } 
  }
  
  return arr
}

duplicateZeros(arr)
duplicateZeros(arrTwo)


const duplicateZerosMe = function(arr) {
    let copy = [...arr]
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 0) {
            copy.splice(i + 1, 0 , 0)
        }
    }
    
    return copy.slice(0, arr.length)
};
