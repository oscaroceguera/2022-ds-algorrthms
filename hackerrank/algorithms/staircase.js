// const elements = ['   #', '  ##', ' ###', '####']

// for(let i = 0; i < elements.length; i++) {
//   console.log(elements[i])
// }

function staircase(n) {
  let stair = []
  
   for(let i = 0; i < n; i++) {
    const symbol = '#'
    const symbolCount = symbol.repeat(i + 1)
    const symbolOrder = ' '.repeat(n - i - 1) + symbolCount
    stair.push(symbolOrder)
  }
  
   for(let i = 0; i < n; i++){
    console.log(stair[i])
   }
}

// staircase(4)
staircase(6)