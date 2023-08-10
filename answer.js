const twoSum = (numbers,target) => {
  let arrResult = []
  numbers.forEach((x,i,arr)=>arr.forEach((y,j)=>i!=j&&x+y==target?arrResult.push(i,j):arrResult))
  return arrResult.slice(0,2)
}

function twoSum(numbers, target) {
    for (var i = 0; i < numbers.length-1; i++) {
        for (var j = i+1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) return [i, j];
        }
    }
}

function twoSum(numbers, target) {
  let seen = new Map();
  for (let i = 0; i < numbers.length; i++) {
    let x = numbers[i], y = target - x;
    if (seen.has(y))
      return [seen.get(y), i];
    seen.set(x, i);
  }
}
