import { arrayFruits, arrayColors } from '../array';

describe('Comprobar arrays', () => {
  test('Existe banana', () => {
    expect(arrayFruits()).toContain('banana');
  });
  test('No existe banana', () => {
    expect(arrayFruits()).not.toContain('grape');
  });
  test('Check array length', () => {
    expect(arrayFruits()).toHaveLength(6);
  });
  test('Has blue', () => {
    expect(arrayColors()).toContain('blue');
  })
});