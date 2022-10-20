const strings = ['a', 'b', 'c', 'd']

// push - added to the end
strings.push('e') // O(1)

//  pop - removed to the end
strings.pop() // O(1)
strings.pop() // O(1)


// unshif - added to the beginning - need re-organized the indexes
strings.unshift('x') // O(n)

// splice 
strings.splice(2, 0, 'alien')  // O(n/2) = O(n)


console.log(strings)