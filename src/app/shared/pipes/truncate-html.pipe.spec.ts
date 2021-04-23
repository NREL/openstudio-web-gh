import { TruncateHTMLPipe } from './truncate-html.pipe';

describe('TruncateHTMLPipe', () => {
  it('create an instance', () => {
    const pipe = new TruncateHTMLPipe();
    expect(pipe).toBeTruthy();
  });
});
