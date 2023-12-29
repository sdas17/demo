import { NumberCountPipe } from './number-count.pipe';

describe('NumberCountPipe', () => {
  it('create an instance', () => {
    const pipe = new NumberCountPipe();
    expect(pipe).toBeTruthy();
  });
});
