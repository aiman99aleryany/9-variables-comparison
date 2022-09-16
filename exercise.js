// # Exercise 9

// * Try to predict the output of the comparisons before printing them in the console

const name = "Mario";
const lastName = "Rossi";
const age = 27;
const isGraduated = false;
const average = 27;
const examsCompleted = 10;
const firstYearCompleted = true;
const yearsCompleted = 1;

console.log(name == lastName); // false
console.log(age <= average); // true
console.log(firstYearCompleted == lastName); // I predicted true, but somehow it's false
console.log(yearsCompleted == firstYearCompleted); // true
console.log(firstYearCompleted === yearsCompleted); //false
console.log(examsCompleted < age); // true
console.log(isGraduated > yearsCompleted); //false
