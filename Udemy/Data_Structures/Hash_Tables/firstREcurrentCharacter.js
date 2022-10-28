// Given an array = [2,5,1,2,3,5,1,2,4]
// It should return 2

// Given an array = [2,1,1,1,2,3,4,5,1,2,4]
// It should return 1

// Given an array = [2,3,4,5]
// It should return undefined

const log = console.log;

function firstRecurrentCharacterV1(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
} // 0(n^2)

function firstRecurrentCharacterV2(input) {
  let map = {};

  for (let i = 0; i < input.length; i++) {
    // if(0) is equal false in JS: better if(0 !== undefined )
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
  }

  return undefined;
} // 0(n)

log(firstRecurrentCharacterV2([2, 5, 1, 2, 3, 5, 1, 2, 4]));
log(firstRecurrentCharacterV2([2, 1, 1, 1, 2, 3, 4, 5, 1, 2, 4]));
log(firstRecurrentCharacterV2([2, 3, 4, 5]));
