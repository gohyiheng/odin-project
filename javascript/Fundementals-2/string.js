//javascript strings are primitive and immutable

// get length of string
let text = "ABCD";
let length = text.length;
console.log("length is: " + length);


// extracting string 
/* 
at(pos) - returns character at specified index
charAt(pos) - returns character at specified index
charCodeAt(pos) - returns utf-16 code
property access
*/
let text1 = "HELLO";

let char1 = text1.charAt(0);
console.log("char 0 at text1 using .charAt is: " + char1);

let char2 = text.charCodeAt(0);
console.log("char 0 at text1 using .charCodeAt is: " + char2);

let char3 = text1.at(0);
console.log("char 0 at text1 using .at is: " + char3);

let char4 = text1[0];
console.log("char 0 at text1 using property access is: " + char4);

/* property access 
    -> if no character is found, [] returns undefied
    -> read only 
*/


// extracting string parts
/* 
starts from position 0
slice(start, end) - extract part of a string and return in new string
substring(start, end)
substr(start,end)
*/

let text2  = "String, Array";
// slice
let part1 = text2.slice(3,7); // slice string from pos 4 to 7
console.log("Sliced string from position 3 to 7: " + part1);

// ommited second parameter will slice out the rest of the string 
let part2 = text2.slice(3);
console.log("Sliced string from position 3: " + part2);

// paramenter is negative, positing is counted from right to left instead
let part3 = text2.slice(-3);
console.log("Sliced string from position 3 counting from right to left: " + part3);

// able to also input 2 negative numbers
let part4 = text2.slice(-6, -3);
console.log("Sliced string from position -6 to -3: " + part4);

//substring - similar to slice but if values are less than 0 it is treated as 0
let part5 = text2.substring(5, 9);
console.log("substring string from position 5 to 9: " + part5);

// substr - similar to slice but second parameter specifies  the length of the extracted string
let part6 = text2.substr(5, 9);
console.log("substr string from position 5 to 9: " + part6);


// converting upper/lower case
let text3 = "hello";
let textUpper = text3.toUpperCase();
console.log("Upper case converted: " + textUpper);
let textLower = textUpper.toLowerCase();
console.log("lower case converted: " + textLower);

// joining strings
let text4 = "!";
let textConcat = text3.concat(text4);
console.log("String concat: " + textConcat);

// trim 
let text5 = "       HELLO.        ";
let textTrim = text5.trim();
console.log("String original: " + text5);
console.log("String trim: " + textTrim);
let textTrimStart = text5.trimStart();
console.log("String trim start: " + textTrimStart);
let textTrimEnd = text5.trimEnd();
console.log("String trim end: " + textTrimEnd);

// padding
/* 
padStart - pad from start of string
padEnd - pad from end of string
*/
//padstart
let text6 = '5'
let textPadStart = text6.padStart(4, "0"); // specifies length of string and what to pad with
console.log("String pad start: " + textPadStart);

//padEnd
let textPadEnd = text6.padEnd(4, "0"); // specifies length of string and what to pad with
console.log("String pad end: " + textPadEnd);

/*repeat
- returns copies of said string
- returns new string
- does not change original string
*/
let textRepeat = text6.repeat(5);
console.log("String repeat 5 times: " + textRepeat);

// replacing string
let text7 = "I am groot am";
let newText = text7.replace("am", "am not");
console.log("Replace am with am not: " + newText);
/*
replaces only the first match
    -> replace all using /g flag
replace is case sensitive
    -> able to use regex with /i flag /AM/i
*/
let textReplaceAll = text7.replace(/AM/ig, "am not");
console.log("Replace am with am not: " + textReplaceAll);

// replaceAll - allows for regular expression instead of a string to be replaced
let replaceAll = text7.replaceAll(/AM/ig, "what");
console.log("Replace all am with am not: " + replaceAll);

// split
let textSplitSpaces = text7.split(" ");
console.log("split text on space: " + textSplitSpaces);