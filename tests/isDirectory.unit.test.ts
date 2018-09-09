import { isDirectory } from '../src/isDirectory';

test('test isDirectory return true', () => {
  expect(isDirectory('/')).toBe(true);
  expect(isDirectory(__dirname)).toBe(true);
});

test('test isDirectory return false', () => {
  expect(isDirectory(__filename)).toBe(false);
});
