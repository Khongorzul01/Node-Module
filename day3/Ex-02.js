function farenheit(c) {
  const b = (c * 9) / 5 + 32;
  console.log(`celcius is ${b + "c"}`);
}
farenheit(10);

function celcius(f) {
  const d = ((f - 32) * 5) / 9;
  console.log(`farenheit is ${d + "f"}`);
}
celcius(20);
