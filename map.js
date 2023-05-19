const numbers = [2, 4, 6, 8]


function getDoubles(numbers) {
    const output = [];
    for (const number of numbers) {
        const doubled = doubleIt(number);
        output.push(doubled);
    }
    return output;
}

const doubleIt = num => num * 2;

const makeDouble = numbers.map(doubleIt);
const makeDouble2 = numbers.map(x => x * 2);

const result = getDoubles(numbers);
console.log(result)
console.log(makeDouble)
console.log(makeDouble2)

const fiveTimes = [1, 2, 3, 4, 5].map(x => x * 5)
console.log(fiveTimes)
const LacTimes = [58, 76, 98, 67, 64].map(x => x * 100000)
console.log(LacTimes)

