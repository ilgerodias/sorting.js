/*
let randListGen = (length, upperBound, lowerBound) => {
  let list = []
  for(let i = 0; i < length; i++){
    let num = Math.floor(Math.random() * (upperBound-lowerBound)) + lowerBound;
    list.push(num)
  }
  return list
}

let randNums = randListGen (10, 0, 10)

console.log(randNums)
*/

let randNums = [ 4, 8, 7, 0, 7, 3, 2, 0, 8, 7 ]

for(i = 0; i < randNums.length; i++){
  let min = i;
  for (j = i; j < randNums.length; j++){
    if (randNums[j] < randNums[min]){
      min = j
    }

  }
  let swap = randNums[i]
  randNums[i] = randNums[min]
  randNums[min] = swap
}

console.log(randNums)
