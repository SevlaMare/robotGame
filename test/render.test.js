import renderScores from '../src/helpers/render';

describe('renderScores', () => {
  it('display scores as string', () => {
    expect(renderScores([{ 'user': 'asd', 'score': 123 }]))
      .toContain('asd')
  });
});