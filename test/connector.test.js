import { getScore } from '../src/connector';

const array = [
  { user: 'asd', score: 123 },
  { user: 'dsa', score: 321 }
]

// replace fetch with a mock version
global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => {array} })
);

describe('getScore', () => {
  it('return an array with all scores', async () => {
    getScore('url').then(body => {
      expect(body.result).toBe(array)
    })
  });
});