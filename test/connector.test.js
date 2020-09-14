/* eslint-disable no-unused-vars */
import regeneratorRuntime from 'regenerator-runtime';
import { getScore, sendScore } from '../src/connector';

describe('getScore', () => {
  const fetchArray = [{ user: 'asd', score: 123 }, { user: 'dsa', score: 321 }];
  global.fetch = jest.fn(() => Promise.resolve({ json: () => fetchArray }));

  it('works with async/await and resolves', async () => {
    await expect(getScore('url')).resolves.toEqual(fetchArray);
  });
});

describe('sendScore', () => {
  it('works with async/await and resolves', async () => {
    const fetchData = { user: 'asd', score: 123 };
    global.fetch = jest.fn(() => Promise.resolve({ json: () => fetchData }));

    await expect(sendScore('url')).resolves.toEqual(fetchData);
  });

  it('throw error on status 400 response', async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: jest.fn(),
      status: 400,
      statusText: 'Bad request',
    }));
    await expect(sendScore({ user: undefined, score: 123 })).rejects.toThrow('You need your name to send.');
  });
});
