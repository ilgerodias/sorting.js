
let randListGen = (length, upperBound, lowerBound) => {
	let list = []
	for(let i = 0; i < length; i++){
		let num = Math.floor(Math.random()*(upperBound - lowerBound)) + lowerBound;
		list.push(num)
	}
	return list
}


let randNums = randListGen(50, 100, -100)


for(let i = 1; i < randNums.length; i++){
	for(let j = 0; j < i; j++){
		if (randNums[j] > randNums[i]) {
			let c = randNums[i];
			randNums[i] = randNums[j];
		 	randNums[j] = c;
		}
	}
}	

console.log(randNums)