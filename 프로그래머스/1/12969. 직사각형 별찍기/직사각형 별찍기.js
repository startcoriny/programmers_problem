process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
    let star = ''
    for (let i = 0; i < b; i++) {
        for (let j = 1; j <= a; j++) {
            if(j===a){
                star+='*\n'
            }else{
                star+='*'
            }
        }
    }
    console.log(star);
});