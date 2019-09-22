import { arrayFruits, arrayColors } from '../array';

describe('Comprobar si existe un elemento', () => {
  test('Tiene una banana', () => {
    expect(arrayFruits()).toContain('banana');
  });
  test('No contiene una banana', () => {
    expect(arrayFruits()).not.toContain('grape');
  });
  test('Comprobar tamaño de un arreglo', () => {
    expect(arrayFruits()).toHaveLength(6);
  });
});