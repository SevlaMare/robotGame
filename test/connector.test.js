import { getScore, sendScore } from '../src/connector';


const array = [{ user: 'asd', score: 123 }, { user: 'dsa', score: 321 }]
global.fetch = jest.fn(() => Promise.resolve({ json: () => array}))

it('works with async/await and resolves', async () => {
  await expect(getScore('as')).resolves.toEqual(array);
});
