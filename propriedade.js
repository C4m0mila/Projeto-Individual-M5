const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let properties = [];

rl.setPrompt('Digite uma propriedade CSS ou "SAIR" para sair: ');

rl.on('line', input => {
  if (input.toUpperCase() === 'SAIR') {
    console.log(properties.sort().join('\n'));
    rl.close();
  } else {
    properties.push(input);
  }
});

rl.on('close', () => {
  console.log('Programa encerrado.');
});

rl.prompt();

