import { PinyinPipe } from './pinyin.pipe';

describe('PinyinPipe', () => {
  it('create an instance', () => {
    const pipe = new PinyinPipe();
    expect(pipe).toBeTruthy();
  });
});
