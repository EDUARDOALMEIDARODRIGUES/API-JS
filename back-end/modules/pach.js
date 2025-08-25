import path from 'node:path'

console.log(path.basename(import.meta.filename));
console.log(path.dirname(import.meta.filename));