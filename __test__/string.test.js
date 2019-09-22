describe('Check strings', () => {
  const text = 'nice text'
  test('Must have this nice', () => {
    expect(text).toMatch(/nice/);
  });
  test('Must not have this is', () => {
    expect(text).not.toMatch(/is/);
  });
  test('Check string length', () => {
    expect(text).toHaveLength(9);
  })
});
