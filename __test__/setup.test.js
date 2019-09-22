// after each test
afterEach(() => console.log('After each test'));
afterAll(() => console.log('After all tests'));

// before each test
beforeAll(() => console.log('Before all tests'));
beforeEach(() => console.log('Before each test'));

describe('prepare before run', () => {
  test('is true', () => {
    expect(true).toBeTruthy();
  });
});