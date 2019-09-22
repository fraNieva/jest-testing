import { callbackHell } from '../callbacks';

describe('Checking callbacks', () => {
  test('Callback', done => {
    function otherCallback(data){
      expect(data).toBe('Hello asshole');
      done();
    }
    callbackHell(otherCallback);
  })
})