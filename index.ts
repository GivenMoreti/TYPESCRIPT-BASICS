let message: string = "Helo world";
console.log(message);
//tsc --version
//1. transpile to js
//tsc index.ts
//node index.js
//2. create tsconfig.json
//3. run tsc index.ts to create a source map
//4. to debug press f5 then select node.js then run tsc index.ts
const json = JSON.parse("66");
console.log(typeof json);

//'any' keyword to reassign
//any keyowrd disables typechecking
let value: any = true;
value = 'string';
console.log(typeof value);

let age: number = 25;
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

let userInput: unknown = 34;
console.log("User input is : " + userInput);

//assigning an indefined value
let username: undefined = undefined;
console.log(username);
//assigning a null value
let lastname: null = null;
console.log(lastname);
