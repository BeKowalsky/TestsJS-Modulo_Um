const { sum } = require('./calculator');

it('should sum 2 and 2 and the result must be 4', () => {
  expect(sum(2, 2))./*not.*/ toBe(4);
});

it('should sum 2 and 2 even if one of them is a string and the result must be 4', () => {
  expect(sum('2', '2'))./*not.*/ toBe(4);
});

it('should throw and error if what is provided to the method cannot be summed', () => {
  expect(() => {
    sum('', '2');
  })./*not.*/ toThrowError();

  expect(() => {
    sum([2, 2]);
  })./*not.*/ toThrowError();

  expect(() => {
    sum({});
  })./*not.*/ toThrowError();

  expect(() => {
    sum();
  })./*not.*/ toThrowError();
});
