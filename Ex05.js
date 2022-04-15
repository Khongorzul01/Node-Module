// function sum(a, b) {
//   if (a + b < 80 && a + b > 50) {
//     console.log(65);
//   } else console.log(80);
// }

// sum(30, 30);
// sum(50, 60);
// sum(20, 20);

function anhnii(a) {
  let num = "primeNum";
  for (let i = 2; i < a; i++) {
    if (a % i == 0) {
      return "not primeNum";
    }
    break;
  }
  return num;
}
console.log(anhnii(10));
