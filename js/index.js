console.log("I'm ready!");
// Iteration 1: Names and Input
let hacker1 = "Driver";
let hacker2 = "Navigator";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
let l1 = hacker1.length;
let l2 = hacker2.length;
if (l1 > l2) {
    console.log(`The driver has the longest name, it has ${l1} characters.`);
} else if (l1 < l2) {
    console.log(`It seems that the navigator has the longest name, it has ${l2} characters.`);
} else if (l1 === l2) {
    console.log(`Wow, you both have equally long names, ${l1} characters!`);
}


// Iteration 3: Loops
// 3.1
let i = 0;
let arr = [];
while (i < l1) {
    arr.push(" ");
    arr[i] = (hacker1[i].toUpperCase());
    i++;
}
console.log(arr.join(" "));

// 3.2
let j = l2;
let x = 0;
let array = [];
while (j > 0) {
    array.push(" ");
    array[x] = (hacker2[j - 1]);
    j--;
    x++;
}
console.log(array.join(" "));

// 3.3
const compare = hacker1.localeCompare(hacker2);
if (compare === -1) {
    console.log("The driver's name goes first.");
}
else if (compare === 1) {
    console.log("Yo, the navigator goes first definitely.")
 }
else if (compare === 0) {
    console.log("What?! You both have the same name?");
}