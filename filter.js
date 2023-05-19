const numbers = [5, 7, 22, 15, 28, 32, 45, 18, 36];
const bigNums = numbers.filter(n => n > 20);
const tinyNums = numbers.filter(n => n < 20);
const even = numbers.filter(n => n % 2 === 0);
// console.log(even)

const products = [
    { id: 1, name: 'laptop', price: 35000 },
    { id: 2, name: 'mobile', price: 22000 },
    { id: 1, name: 'watch', price: 4000 },
]

const expensive = products.filter(p => p.price > 20000)
console.log(expensive)