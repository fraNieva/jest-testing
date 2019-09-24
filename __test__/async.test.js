import { getDataFromApi } from '../promise';

describe('Testing Async/Await', () => {
  test('Make an api request', async () => {
    let api = 'https://rickandmortyapi.com/api/character/';
    let getRick = 'https://rickandmortyapi.com/api/character/1';
    await getDataFromApi(api).then( data => {
      expect(data.results.length).toBeGreaterThan(0);
    });
    await getDataFromApi(getRick).then( data => {
      expect(data.name).toEqual('Rick Sanchez');
    });
  });

  test('Make an api request with error', async () => {
    const apiError = 'http://httpstat.us/404';
    const request = getDataFromApi(apiError);
    await expect(request).rejects.toEqual(Error('Request failed with status code 404'));
  });

  test('Resolves a Hello', async () => {
    await expect(Promise.resolve('Hello')).resolves.toBe('Hello');
    await expect(Promise.reject('Error')).rejects.toBe('Error');
  });
});

describe('Testing Async/Await', () => {
  test('Make an api request', async () => {
    let api = 'https://rickandmortyapi.com/api/character/';
    let getRick = 'https://rickandmortyapi.com/api/character/1';
   
    const data = await getDataFromApi(api);
    expect(data.results.length).toBeGreaterThan(0);

    const Rick = await getDataFromApi(getRick);
    expect(Rick.name).toEqual('Rick Sanchez');
  });
});