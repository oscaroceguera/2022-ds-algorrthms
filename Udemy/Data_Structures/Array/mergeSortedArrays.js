const log = console.log
const array1 = [0,3,4,31]
const array2 = [4,6,30]

function mergeSortedArraysMe(array1, array2){
  const numbers = [...array1, ...array2]
  return  numbers.sort((a,b) => a - b)
}

mergeSortedArraysMe(array1, array2)


function mergeSortedArray(items1, items2) {
  const mergedArray = [] 
  let array1Item = items1[0] 
  let array2Item = items2[0]
  let i = 1
  let j = 1
  
  if (items1.length === 0) return items2
  if (items2.length === 0) return items1
  
  while(array1Item || array2Item) {
   	console.log(array1Item, array2Item) 
    if(!array2Item || array1Item < array2Item){
      mergedArray.push(array1Item)
      array1Item = items1[i]
      i++
    } else {
      mergedArray.push(array2Item)
      array2Item = items2[j]
      j++
    }

  }
  
  return mergedArray
}

mergeSortedArray([0,3,4,31],  [4,6,30])