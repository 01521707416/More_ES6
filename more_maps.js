const numbers = [58, 76, 98, 67]
const half = numbers.map(n => n / 2);
const thirds = numbers.map(n => n / 3);

// console.log('Main Array: ', numbers)
// console.log('Half the elements: ', half)
// console.log('One third the elements: ', thirds)

const friends = ['Ayan', 'Hasib', 'Nishat'];
const firstLetters = friends.map(n => n[0]);
const nameLengths = friends.map(n => n.length);

// console.log(firstLetters);
// console.log(nameLengths)

const products = [
    { id: 1, name: 'laptop', price: 35000 },
    { id: 2, name: 'mobile', price: 22000 },
    { id: 1, name: 'watch', price: 4000 },
]

const items = products.map(p => p.name)
const prices = products.map(p => p.price)
console.log(items)
console.log(prices)