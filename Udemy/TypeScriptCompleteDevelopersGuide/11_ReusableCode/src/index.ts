import fs from 'fs';

const matches = fs.readFileSync('football.csv', {
  encoding: 'utf-8'
}).split('\n').map((r) => r.split(','));

console.log(matches);

