var names = [];
names.push("Kim", "mike", "jane", "kamo");
names.pop(); //removes the last item from array
console.log(names);
//readonly arrays prevent them from being modified
var numbers = [3, 5, 6, 6, 32];
//using filter method.
var largeNums = numbers.filter(function (number) { return number > 10; });
//outputs
console.log("Large nums: " + largeNums);
console.log("All nums: ", numbers);
//mutable arrays
var nums = [32, 5, 56, 6, 32];
// nums.push("34");
nums.push(-1);
nums.push(100);
console.log(nums);
