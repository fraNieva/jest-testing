describe('Comparadores comunes', () => {
  const user = {
    name: "franco",
    lastname: "nieva"
  }
  const user2 = {
    name: "franco",
    lastname: "nieva"
  }
  const user3 = {
    name: "gaston",
    lastname: "nieva"
  }

  test('Igualdad de elementos', () => {
    expect(user).toEqual(user2);
  });
  // para negar se agrega el not
  test('No son exactament iguales', () => {
    expect(user).not.toEqual(user3);
  });
});