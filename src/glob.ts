import _glob from 'glob';

export function glob(pattern: string) {
  return new Promise<string[]>((resolve, reject) => {
    _glob(pattern, (err, matches) => {
      if (err) {
        return reject(err);
      }

      resolve(matches);
    });
  });
}
