import { getDataFromApi } from '../promise';

describe('Testing promises', () => {
  test('Getting data from api', done => {
      const api = 'https://rickandmortyapi.com/api/character/';
      getDataFromApi(api).then(data => {
        expect(data.results.length).toBeGreaterThan(0);
        done();
      });
  });

  test('Resolves a hello', () => {
    return expect(Promise.resolve('Hello!')).resolves.toBe('Hello!');
  });

  test('Reject with an error', () => {
    return expect(Promise.reject('Errror')).rejects.toBe('Errror');
  });
});