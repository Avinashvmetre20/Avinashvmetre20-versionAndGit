for(let i=1;i<=10;i++){
    console.log(2*i);
}

// Find even and odd numbers in an array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = numbers.filter(n => n % 2 === 0);
const odds = numbers.filter(n => n % 2 !== 0);
console.log("Even numbers:", evens);
console.log("Odd numbers:", odds);

// Print a triangle pattern
const rows = 5;
for (let i = 1; i <= rows; i++) {
    console.log('*'.repeat(i));
}
