const elements = [0, 0,-1, 1, 1]

function plusMinus(arr) {
  const integers = []
  const zeroes = []
  const negatives = []
   const n = arr.length
  
  for(let i = 0; i < n; i++) {
    if(arr[i] === 0) {
      zeroes.push(arr[i])
    } else if(arr[i] < 0) {
      negatives.push(arr[i])
    } else {
      integers.push(arr[i])
    }
  }
  
  
  const integerResult = (integers.length / n).toFixed(6)
  const zeroesResult = (zeroes.length / n).toFixed(6)
  const negativesResult = (negatives.length / n).toFixed(6)
  
  const results = [integerResult, negativesResult, zeroesResult]
  
  for(let result in results) {
    console.log(results[result])
  }
  
}

plusMinus(elements)