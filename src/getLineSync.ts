import fs from 'fs';

// lineNumber: 0 indexed
export function getLineSync(filename: string, lineNumber: number) {
  lineNumber = +lineNumber;

  var data = fs.readFileSync(filename, 'utf8');
  var lines = data.split('\n');

  if (lineNumber > lines.length) {
    throw new Error('File end reached without finding line');
  }

  return lines[lineNumber];
}
