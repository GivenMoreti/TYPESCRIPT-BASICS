var names = [];
names.push("Kim", "mike", "jane", "kamo");
names.pop(); //removes the last item from array
console.log(names);
//readonly arrays prevent them from being modified
var numbers = [3, 5, 6, 6, 32];
var largeNums = numbers.filter(function (number) { return number > 10; });
console.log("Large nums: " + largeNums);
console.log("All nums: ", numbers);
