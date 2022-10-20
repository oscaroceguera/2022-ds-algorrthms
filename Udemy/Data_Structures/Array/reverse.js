function reverseOne(str){
  //  check input
  if(!str || str.length < 2 || typeof str !== 'string') {
    return 'Hmmm that us not good'
  }
  
  const backwards = []
  const totalItems = str.length - 1
  for(let i = totalItems; i >= 0; i--){
    backwards.push(str[i])
  }
  console.log(backwards)
  
  return backwards.join('')
}

const words = 'Anita lava la tina'
reverseOne(words)

function reverse2(str){
  return str.split('').reverse().join('')
}

reverse2('oscar')

const reverse3 => str => [...str].reverse().join('')

reverse3('Oso baboso')