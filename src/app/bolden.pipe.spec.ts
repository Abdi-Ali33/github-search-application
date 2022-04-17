import { BoldenPipe } from './bolded.pipe';

describe('BoldedPipe', () => {
  it('create an instance', () => {
    const pipe = new BoldenPipe();
    expect(pipe).toBeTruthy();
  });
});
