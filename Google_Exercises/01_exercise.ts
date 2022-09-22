const array1 = ['a', 'b', 'c', 'x']
const array2 = ['x', 'y', 'i']

function contains(
  array1: Array<string> | Array<number>,
  array2: string[] | number[]
): boolean {
 for(let i = 0; i < array1.length; i++) {
   for(let j = 0; j < array2.length; j++){
     if(array1[i] === array2[j]) {
       return true;
     }
   }
 }
  
  return false;
}

contains(array1, array2)


function contains2(
  array1: Array<string> | Array<number>,
  array2: string[] | number[]
): boolean {
  let tally =  {}
  
  for(let i = 0; i < array1.length; i++) {
    if(!tally[array1[i]]) {
      const item = array1[i]
      tally[item] = true
    }
  }
  
  for(let j = 0; j < array2.length; j++) {
    if(tally[array2[j]]) {
      return true
    }
  }
  
  return false
  
}

contains2(array1, array2)


function contains3(
  array1: Array<string> | Array<number>,
  array2: string[] | number[]
): boolean {
  return array1.some((item) => array2.includes(item))
}

contains3(array1, array2)
