const elements2 = [[3], [11, 2, 4], [4, 5, 6], [10, 8, -12]]
const elements = [[1, 2, 3], [4, 5, 6], [9, 8, 9]]

function diagonalDifference(arr) {
  const newArr = []
  
  // check and create the newArray 
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].length >= 2) {
      newArr.push(arr[i])
    }
  }
  
  let primary = 0
  for(let i = 0; i < newArr.length; i++) {
    primary += newArr[i][i]
  }
  
  let secondary = 0
  let counter = 0
  for(let j = newArr.length - 1; j >= 0; j--) {
    secondary += newArr[counter][j]
    counter++
  }

  console.log('primary', primary)
  console.log('secondary', secondary)
  
  return Math.abs(primary - secondary)
}

diagonalDifference(elements)
diagonalDifference(elements2)

