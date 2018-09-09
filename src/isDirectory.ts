import fs from 'fs';

export const isDirectory = (source: string) =>
  fs.lstatSync(source).isDirectory();
