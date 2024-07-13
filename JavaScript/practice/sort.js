// sorting in ascending order

const arr = [ 2,11,5]
const result = arr.sort((a,b) => a - b)
                                // 2 -11=-9 [2,11,5] -- 1
                                // 11-5= 6 [2,5,11] -- 2
                                // 2 -5 = -3 [2,5,11] -- 3
                                // 5- 11= -6  [2,5,11] -- 4

console.log(result)