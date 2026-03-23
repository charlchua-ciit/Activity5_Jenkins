const sum = require('./sum');
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
test('adds 5 + 7 to equal 12', () => {
  expect(sum(5, 7)).toBe(12);
});
test('adds 6 + 6 to equal 12', () => {
  expect(sum(6, 6)).toBe(12);
});
test('adds 10 + 10 to equal 20', () => {
  expect(sum(10, 10)).toBe(20);
});
