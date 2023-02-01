const strLength = require('./Stringlength');
test('check the string length', () => {
  expect(strLength('habtamub')).toBe(8);
});

test('check the string length', () => {
  expect(strLength('')).toBe('the string must have 1 to 9 characters');
});