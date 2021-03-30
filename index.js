var a, b, n, string
a = Math.floor(Math.random() * 1000)
b = Math.floor(Math.random() * 1000)
n = Math.floor(Math.random() * 1000)
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
console.log(add(a, b));
console.log(subtract(a, b));
console.log(multiply(a, b));
console.log(divide(a, b));
function increment(n) {
    n++;
    return n;
}
console.log(increment(n));
function decrement(n) {
    n--;
    return n;
}
console.log(decrement(n));
function makeInt(string) {
    return parseInt(string, 10);
}
console.log(makeInt(string))
function preserveDecimal(string) {
    return parseFloat(string);
}
console.log(preserveDecimal(string));