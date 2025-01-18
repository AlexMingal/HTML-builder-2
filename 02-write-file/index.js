const fs = require('fs');
const path = require('path');

ws = fs.createWriteStream(path.join(__dirname), 'info.txt'), {encoding: 'utf';}
