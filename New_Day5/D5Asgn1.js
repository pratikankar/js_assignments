let num = prompt("Enter positive number: ");

console.log("The number you entered is: " + num);

let num_arr = [];

for (let i=1; i <= num; i++)
    num_arr.push(i);

let num_odds = num_arr.filter( n => n%2);

let odd_cubes = num_odds.map(n => n**3);

console.log("The cubes of odd numbers in the range is: " + odd_cubes);