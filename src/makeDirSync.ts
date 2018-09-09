import fs from 'fs';
import path from 'path';
const sep = path.sep;

export function makeDirSync(targetDir) {
  targetDir.split(sep).reduce((parentDir, childDir) => {
    const currentDir = path.resolve(parentDir, childDir);
    if (!fs.existsSync(currentDir)) {
      fs.mkdirSync(currentDir);
    }

    return currentDir;
  }, path.isAbsolute(targetDir) ? sep : '');
}
