const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    let str = input[0];
    let changeStr = [];
    let index = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === str[i].toUpperCase()){
            changeStr.push(str[i].toLowerCase())
        } else if(str[i]===str[i].toLowerCase()){
            changeStr.push(str[i].toUpperCase())
        }
    }
    console.log(changeStr.join(""))
});