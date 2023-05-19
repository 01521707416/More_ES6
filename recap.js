/* 1. Var, Let, Constant */

const numbers = [12, 24, 36, 48];  // contstant
let salary = 20000;                // changeable
salary = 25000;


/* 2. Default parameters */

function calculateSalary(salary, tax = 0.25, bonus = 0) {
    const remaining = salary - salary * tax;
    const total = salary + bonus;
    return total;
}

/* 3. Template string */

const elementHTML = `
<div> 
<h3> Name: </h3>
<p> Address: </p>
<p> Salary: ${calculateSalary(30000, 0.37, 7000)}</p>
<p> Index: ${numbers[2]} </p>
</div>
`

/* 4. Arrow function */

const doubleIt = x => x * 2;
const CalcSalary = (salary, tax, bonus) => salary - salary * tax + bonus;

/* 5. Spread */

const ages = [13, 17, 19, 21, 23];
const newAges = [...ages, 14, 18, 24];

/* Destructuring */

const { x, y, ...c } = { x: 45, y: 27, name: 'Sakib Al Hasan', salary: 500000 }
console.log(c)
