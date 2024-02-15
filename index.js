var message = "Helo world";
console.log(message);
//tsc --version
//1. transpile to js
//tsc index.ts
//node index.js
//2. create tsconfig.json
//3. run tsc index.ts to create a source map
//4. to debug press f5 then select node.js then run tsc index.ts
var json = JSON.parse("66");
console.log(typeof json);
//'any' keyword bto reassign
var value = true;
value = 'string';
console.log(typeof value);
var age = 25;
console.log(age);
/*
TYPESCRIPT TYPES
boolean - true or false values
number - whole numbers and floating point values
string - text values like "TypeScript Rocks"
*/
/*
unknown is best used when you don't know the type of data being typed. To add a type later, you'll need to cast it.

Casting is when we use the "as" keyword to say property or variable is of the casted type.
*/
var userInput = 34;
console.log("User input is : " + userInput);
//assigning an indefined value
var username = undefined;
console.log(username);
var lastname = null;
console.log(lastname);
