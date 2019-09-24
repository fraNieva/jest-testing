import { getCharacter } from '../snapshot';
import rick from '../rick.json';

describe('Snapshot testing', () => {
 test('Snapshot', () => {
  expect(getCharacter(rick)).toMatchSnapshot();
 });
});