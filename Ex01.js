var date = new Date();
var hour = date.getHours();
var date1 = date.getDate();
var minute = date.getMinutes();
var second = date.getSeconds();
var day = date.getDay();

console.log(date);
console.log(hour);
console.log(date1);
console.log(minute);
console.log(second);
console.log(day);

date.getDay();
if (day === 3) {
  console.log("Today is Wednesday");
} else if (day === 2) {
  console.log("Today is Tuesday");
} else if (day === 1) {
  console.log("Today is Monday");
} else if (day === 4) {
  console.log("Today is Thursday");
} else if (day === 5) {
  console.log("Today is Friday");
} else if (day === 6) {
  console.log("Today is Saturday");
} else if (day === 7) {
  console.log("Today is Sunday");
}

console.log(`Current time is ${hour + " PM" + ":" + minute + ":" + second}  `);
