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
});

describe('Testing Async/Await', () => {
  test('Make an api request', async () => {
    let api = 'https://rickandmortyapi.com/api/character/';
    let getRick = 'https://rickandmortyapi.com/api/character/1';
   
    const data = await getDataFromApi(api);
    expect(data).toBeGreaterThan(0);

    const Rick = await getDataFromApi(getRick);
    expect(Rick).toEqual('Rick Sanchez');
  });
});