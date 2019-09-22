import { isNull, isFalse, isTrue, isUndefined } from '../true';

describe('Probar resultados nulos', () => {
  test('Null', () => {
    expect(isNull()).toBeNull();
  });
});

describe('Probar resultados verdaderos', () => {
  test('Verdadero', () => {
    expect(isTrue()).toBeTruthy();
  });
});

describe('Probar resultados falsos', () => {
  test('Falso', () => {
    expect(isFalse()).toBeFalsy();
  });
});

describe('Probar resultados undefined', () => {
  test('Undefined', () => {
    expect(isUndefined()).toBeUndefined();
  });
});

describe('Probar resultados verdaderos o falsos', () => {
  test('Verdadero o Falso', () => {
    expect(isFalse()).not.toBeTruthy();
  });
});