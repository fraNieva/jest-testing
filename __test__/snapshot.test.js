import { getCharacter } from '../snapshot';
import rick from '../rick.json';

describe('Snapshot testing', () => {
 test('Snapshot', () => {
  expect(getCharacter(rick)).toMatchSnapshot();
 });

 test('Snapshot will always fail', () => {
  const user = {
    createdAt: new Date(),
    id: Math.floor(Math.random() * 20),
  }
  expect(user).toMatchSnapshot();
 });

 test('Snapshot with exception', () => {
  const user = {
    name: "Franco Nieva",
    id: Math.floor(Math.random() * 20),
  }
  expect(user).toMatchSnapshot({
    id: expect.any(Number)
  });
 });

});