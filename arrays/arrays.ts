const  names :string[] = [];

names.push("Kim","mike","jane","kamo");
names.pop();    //removes the last item from array

console.log(names);

//readonly arrays prevent them from being modified

const numbers : readonly number[] = [3,5,6,6,32];
//using filter method.
const largeNums = numbers.filter((number)=> number> 10);
//outputs
console.log("Large nums: "+ largeNums);
console.log("All nums: ",numbers);

//mutable arrays
const nums : number[] = [32,5,56,6,32];

