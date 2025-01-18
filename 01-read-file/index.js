const { error } = require('console');
const fs = require('fs');
const path = require('path');
const rs = fs.createReadStream(path.join(__dirname, 'text.txt'), {encoding: 'utf8'});

rs.on('data', (dataChunk) => {
  console.log(dataChunk);
})

rs.on('error', error => {
  console.log('error: ', error.message);
});