// Reverse a given string in 4 methods
//1 using reverse
const str = "hi i m good student of life";
let result = str.split(" ").reverse().join(" ");
console.log(str, "||", result);

//2 not using reverse and using for
const str2 = "hi i m good student of life";
const ar = str2.split(" ");
const ar2 = [];
for (let i = 0; i < ar.length; i++) {
  ar2[i] = ar[ar.length - 1 - i];
}
console.log(ar2.join(" "));

//3 not for, not reverse use only map
const str3 = "hi i m good student of life";
const ar3 = str3.split(" ");
let a3 = [];
ar3.map((word, index) => (a3[ar3.length - 1 - index] = word));
console.log(a3.join(" "));
