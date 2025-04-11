const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
    
    let star = ''
    for(let i = 0; i < Number(input); i++){
            star += '*'.repeat(i+1) +'\n'
    }
    
    console.log(star)
}).on('close', function () {
    console.log(Number(input[0]));
});