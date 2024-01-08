// https://javascript.info/variables
// creating a variable

let message; //create variable 

message = "hello"; // assigns a string to the variable

alert(message); //shows an alert popup with the message

// able to declare multiple variables in a single line
// let name = "steven", age = '21', phrase = 'me no wan to';

/* 
$ and _ can also be used to create a name for the variable
hypehns or starting with a number is not allowed
non latin characters such as 私 are allowed but not recommended
*/

// constants
const myBirthday = "25 Feb 2000";
// constants cannot be reassigned, it is a fixed value once declared
// can be used as aliases for difficult to remember values, such as orange is easier to remember than the value #FF7F00

// TASKS
// working with variables 
let admin, name = "John";
admin = name;
alert(admin)

// Giving the right name
const homePlanet = "Earth";
let visitor;

// uppercase const
// the birthday constant is fine as the upper case is normally used for variables which are known prior/directly written. However the age is something that we would not know as it is being evaluated in real time.