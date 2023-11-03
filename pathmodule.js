const path = require('path');

const a = path.basename('C:\\temp\\myfile.html');
console.log(a);

const b = path.dirname('C:\\temp\\myfile.html');
console.log(b);

const c = path.extname(__filename);
console.log(c);
