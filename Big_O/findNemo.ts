const nemo = ['nemo']

function findNemo(fishes: Array<string>): string {
  let isNemoFound = false;
  for(let i = 0; i < fishes.length; i++){
    if(fishes[i] === 'nemo') {
      isNemoFound = true
      break;
    }
  }
  
  return isNemoFound ? 'Found Nemo' : 'Where did nemo go?'
}

findNemo(nemo)