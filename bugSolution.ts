function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both parameters must be numbers');
  }
  return a + b;
}

let result = add(1, 2); // Works correctly
console.log(result); // 3

try {
  let result2 = add("1", 2);
} catch (e) {
  console.error(e); // Throws an error
}
