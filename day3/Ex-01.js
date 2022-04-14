function max(a, b, c) {
  if (a < b && b < c) {
    console.log(c);
  } else if (a > b && a > c) {
    console.log(a);
  } else if (a < b && c < b) {
    console.log(b);
  }
}
max(5, 10, 8);
max(16, 10, 8);
max(5, 10, 79);
