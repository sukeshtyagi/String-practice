// Reverse a given string in 4 methods
//1 using reverse
const str = "hi i m good student of life";
let result = str.split(" ").reverse().join(" ");

//2 not using reverse and using for
const str2 = "hi i m good student of life";
const ar = str2.split(" ");
const ar2 = [];
for (let i = 0; i < ar.length; i++) {
  ar2[i] = ar[ar.length - 1 - i];
}

//3 not for, not reverse use only map
const str3 = "hi i m good student of life";
const ar3 = str3.split(" ");
let a3 = [];
ar3.map((word, index) => (a3[ar3.length - 1 - index] = word));

//checking if given string is palindrom from  diff programs
//1 using reverse()

const strPalin1 = "civic";
function checkPalindrome(strPalin1) {
  const arPalin1 = strPalin1.split("");
  const resP1 = arPalin1.reverse().join("");
  if (resP1 === strPalin1) {
    // console.log("yes it is a palindrome string");
  }
}
checkPalindrome(strPalin1);

//2 without reverese
const strPalin2 = "RADAR";
function checkPalindrome2(strPalin2) {
  const ar = strPalin2.split("");
  let arPalin2 = [];
  ar.map((letter, index) => {
    arPalin2[ar[ar.length - 1 - index]] = letter;
  });
  if (ar.join("") === strPalin2) {
    // console.log("yes it is a palindrome string");
  }
}
checkPalindrome2(strPalin2);

//3 without reverse and map, foreach loop
const strPalin3 = "refer";
function checkPalindrome3(strPalin3) {
  let arPalin3 = strPalin3.split("");
  let resPalin = [];
  arPalin3.forEach((letter, index) => {
    resPalin[arPalin3.length - 1 - index] = letter;
  });
  if (resPalin.join("") === strPalin3) {
    //console.log("yes it is a palindrome string");
  }
}
checkPalindrome3(strPalin3);

//4 for loop
const strPalin4 = "refered";
function checkPalindrome4(strPalin4) {
  const arPalin4 = strPalin4.split("");
  let resPalin4 = [];
  for (let i = 0; i < arPalin4.length; i++) {
    resPalin4[i] = arPalin4[arPalin4.length - 1 - i];
  }
  if (resPalin4.join("") === strPalin4) {
    //console.log("yes it is a palindrome string");
  } else {
    //console.log("NO it is not a palindrome string");
  }
}
checkPalindrome4(strPalin4);

//4 methods of counting no of vowels in a given str
const strV1 = "rahul";
function countVowel1(strV1) {
  const arV1 = strV1.split("");
  let vowels1 = ["a", "e", "i", "o", "u"];
  let res = arV1.filter((letter) => vowels1.includes(letter));
  console.log(`No of vowels in given string is ${res.length}`);
  console.log(
    `No of consonents in given string is ${arV1.length - res.length}`
  );
}

//2 without filter
const strV2 = "rahul";
function countVowel2(strV1) {
  const arV2 = strV1.split("");
  let vowels2 = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < arV2.length; i++) {
    if (vowels2.includes(arV2[i])) {
      count = count + 1;
    }
  }
  console.log(`No of vowels in give string is ${count}`);
  console.log(`No of consonents in give string is ${arV2.length - count}`);
}

//3 reduce
const strV3 = "nawabsaabjikyahaalhaapke";
function countVowel3(strV1) {
  const arV3 = strV1.split("");
  let vowels3 = ["a", "e", "i", "o", "u"];
  let res3 = arV3.reduce((acc, curr) => {
    if (vowels3.indexOf(curr) >= 0) {
      acc = acc + 1;
    }
    return acc;
  }, 0);
  console.log(`No of vowels in give string is ${res3}`);
  console.log(`No of consonents in give string is ${arV3.length - res3}`);
}

/*function expect(val) {
  return {
    toBe: function toBe(val1) {
      if (val === val1) {
        return true;
      } else {
        throw new Error("not equal");
      }
    },
    notToBe: function notToBe(val2) {
      if (val !== val2) {
        return true;
      } else {
        throw new Error("equal");
      }
    },
  };
}
let a = expect(5).notToBe(5);
console.log(a);
*/

/*function createCounter(init) {
  var initial = init;
  return {
    increment: () => {
      return ++init;
    },
    decrement: () => {
      return --init;
    },
    reset: () => {
      init = initial;
      return init;
    },
  };
}
let a = createCounter(4);
console.log(a.increment());
console.log(a.increment());
console.log(a.increment());
console.log(a.increment());
console.log(a.increment());
console.log(a.increment());
console.log(a.increment());
console.log(a.increment());
console.log(a.increment());
console.log(a.increment());
console.log(a.reset());
console.log(a.decrement());
*/

const arr = [0, 1, 2, 3, 4, 5, 6];
let a = [];
for (i = 0; i < arr.length; i++) {
  a.push(arr[i] + 100);
}
console.log(a);
