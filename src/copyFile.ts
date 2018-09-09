import fs from 'fs';
import path from 'path';

export async function copyFile(
  srcFile: string,
  destDir: string,
  renameCb?: (name: string) => string
) {
  return new Promise((resolve, reject) => {
    let srcFileName = path.basename(srcFile);

    let destFileName = srcFileName;
    if (renameCb) {
      destFileName = renameCb(srcFileName);
    }

    let destFile = path.join(destDir, destFileName);

    let writer = fs.createWriteStream(destFile);
    writer.on('finish', () => {
      console.log('Copied: ' + destFile);
      resolve();
    });
    fs.createReadStream(srcFile).pipe(writer);
  });
}
