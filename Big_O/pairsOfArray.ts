const boxes = ['a', 'b', 'c', 'd', 'e']

function logAllPairsOfArray(array: Array<string>): void {
  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length; j++) {
      console.log(array[i], array[j])
    }
  }
}

logAllPairsOfArray(boxes)
