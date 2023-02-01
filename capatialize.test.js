const capitalize = require('./capatialize.js');

test('First character capitalized', () => {
  expect(capitalize('habtamu')).toBe('Habtamu');
});

test('check the string', () => {
  expect(capitalize(2022)).toBe('Not a string');
});