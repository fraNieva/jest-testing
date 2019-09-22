import { sumar, restar, multiplicar, dividir } from '../maths';

describe('Pruebas matemáticas',() => {
  test('Funcion Sumar', () => {
    expect(sumar(1,1)).toBe(2);
  });
  test('Funcion Multiplicar', () => {
    expect(multiplicar(2,3)).toBe(6);
  });
  test('Funcion Restar', () => {
    expect(restar(5,4)).toBe(1);
  });
  test('Funcion Dividir', () => {
    expect(dividir(10,2)).toBe(5);
  });
});