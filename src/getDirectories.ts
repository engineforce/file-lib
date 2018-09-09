import fs from 'fs';
import path from 'path';
import { isDirectory } from './isDirectory';

export const getDirectories = (source) =>
  fs
    .readdirSync(source)
    .map((name) => path.join(source, name))
    .filter(isDirectory);
