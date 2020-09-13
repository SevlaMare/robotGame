import { renderScores } from '../src/helpers/render';

describe('renderScores', () => {
  it('display scores as string', () => {
    expect(renderScores([{ user: 'asd', score: 123 }]))
      .toContain('asd');
  });

  it('is not null', () => {
    expect(renderScores([{ user: 'asd', score: 123 }]))
      .not.toBeUndefined();
  });

  it('is null', () => {
    expect(renderScores())
      .toBeNull();
  });
});