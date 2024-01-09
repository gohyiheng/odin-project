// https://javascript.info/logical-operators
// conditional statements

/*
if 
else
else if 
switch
*/

// if executes if the condition is true 

// else executes if the condition is false

// else if specify a new condition if the first condition is false

/*
switch selects one of many condition to be executed
break allows the code to break out of the switch block
default allows the code to run if there is no case match
*/

// logical operators

/*

|| or - returns true if one or more are true
&& and - returns true if and only if both are true
and has a higher precedence than or 

*/

// OR - boolean 

let hour = 12;
let day = "sunday";
if(hour < 10 || hour > 18 || day == "sunday" || day == "saturday"){
    document.write("The shop is not open ");
}

// OR - find the first truthy value
document.write( 1 || 0 );
document.write( null || 0 || 1 );
document.write( undefined || null ); // returns last value if all are false

// OR - short circuit evaluation
true || document.write("not printed");
false || document.write("\nprinted"); //only the second statement is written as the operation stop once it has read the true.


// AND 

let min = 30;
if(min == 30 && hour == 12){
    document.write("The time now is 12:30\n")
}

// AND - find the first falsly value
document.write(1 && 0);
document.write(null && 0);


// !(NOT) - returns the inverse value

document.write("\n" + !true);

// !! is used to convert a value to boolean
document.write(!!"This is a string");

// TASKS
/*
2 - first truthy value
2 - alert does not return anything 
null - first falsy value

