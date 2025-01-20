const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// const filename = __dirname + 'text.txt';
const ws = fs.createWriteStream(path.join(__dirname, 'text.txt'), {encoding: 'utf8', flags: 'a'});

console.log('Input something:');

rl.on('line', (input) => {
  if(input.toLowerCase() === 'exit') {
    console.log('Ok, exiting!');
    rl.close();
    ws.end();
    return;
  }
  console.log(`You wrote: "${input}". \n Write something else!`);
  ws.write(input + '\n');
});
  rl.on('close', () => console.log('File has been saved'));