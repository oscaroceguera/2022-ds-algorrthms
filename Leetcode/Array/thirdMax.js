const arr = [3,2,1]
const arr2 = [1,2]
const arr3 = [2,2,3,1]


function thirdMax(nums) {
 let firstMax = [-1, false];
    let secondMax = [-1, false];
    let thirdMax = [-1, false];

    for (let index in nums) {
        let num = nums[index];
        
        // If current number is already stored, skip it.
        if ((firstMax[1] && firstMax[0] == num) || 
            (secondMax[1] && secondMax[0] == num) || 
            (thirdMax[1] && thirdMax[0] == num)) {
            continue;
        }

        // If we never stored any variable in firstMax
        // or curr num is bigger than firstMax, then curr num is the biggest number.
        if (!firstMax[1] || firstMax[0] <= num) {
            thirdMax = secondMax;
            secondMax = firstMax;
            firstMax = [num, true];
        }
        // If we never stored any variable in secondMax
        // or curr num is bigger than secondMax, then curr num is 2nd biggest number.
        else if (!secondMax[1] || secondMax[0] <= num) {
            thirdMax = secondMax;
            secondMax = [num, true];
        }
        // If we never stored any variable in thirdMax
        // or curr num is bigger than thirdMax, then curr num is 3rd biggest number.
        else if (!thirdMax[1] || thirdMax[0] <= num) {
            thirdMax = [num, true];
        }
    }

    // If third max was never updated, it means we don't have 3 distinct numbers.
    if (!thirdMax[1]) {
        return firstMax[0];
    }

    return thirdMax[0];
}

thirdMax(arr)
thirdMax(arr2)
thirdMax(arr3)