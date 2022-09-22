// Given 2 arrays, create a function that let's a user know (true/false) whether these aarrays contaain any common items
// for Example:
// const array1 = ['a','b','c']
// const array2 = ['z, 'y', 'i']
//  should return false
// ----------
// const array1 = ['a','b','c', 'x']
// const array2 = ['z, 'y', 'x']
//  should return true

// 2 parameters - arrays - no size limits
// return true or false



const array1 = ['a','b','c', 'x', 'i']
const array2 = ['z', 'y', 'i']
// 0(n*2)
function constainsCommonItems(array1, array2) {
  for(let i = 0; i < array1.length; i++){
    for(let j = 0; j < array2.length; j++){
      if(array1[i] === array2[j]) {
        return true
      }
    }
  } 

  return false
}

console.log('constainsCommonItems ==>', constainsCommonItems(array1, array2))

// Better solution

// array1 ==> obj {
// a:true
// b:true
// c:true
// x:true
//}
//  array[index] === obj.properties

// 0(n + 2)

function containsCommonItem2(array1, array2){
  // loop through first array and creaate object where properties === items in the array
  let map = {}

  for (let i = 0; i < array1.length; i++) {
    if(!map[array1[i]]) {
      const item = array1[i]
      map[item] = true
    }
  }

  console.log(map)

  // loop through second array and check if item in second array exists on created object
  for (let j = 0; j < array2.length; j++) {
    console.log(map[array2[j]])
    if(map[array2[j]]) {
      return true
    }
  }

  return false
}

console.log('containsCommonItem2 =>', containsCommonItem2(array1, array2))

//  other 
function containsCommonItem3(array1, array2) {
  return array1.some(item => array2.includes(item))
}

console.log('containsCommonItem3 =>', containsCommonItem3(array1, array2))
