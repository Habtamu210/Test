const Calculator = require('./calculator.js');

describe('check operations', () =>{
  const calculator = new Calculator();

  test('valid add', () => {
    expect(calculator.add(320, 100)).toBe(420);
    expect(calculator.add(120, 10)).toBe(130);
    expect(calculator.add(7, 1)).toBe(8);
  });

  test('valid subtract', () => {
    expect(calculator.subtract(38, 72)).toBe(-34);
    expect(calculator.subtract(10, 2)).toBe(8);
    expect(calculator.subtract(10, 35)).toBe(-25);
  });

  test('valid divide', () => {
    expect(calculator.divide(42, 8)).toBe(5.25);
    expect(calculator.divide(0, 8)).toBe(0);
    expect(calculator.divide(10, 0)).toBe('Error');
  });

  test('valid multiply', () => {
    expect(calculator.multiply(8, 8)).toBe(64);
    expect(calculator.multiply(4, 25)).toBe(100);
    expect(calculator.multiply(0, 9)).toBe(0);
  });
});