function solution(rank, attendance) {
    var answer = [];
    let tot = 0;
    answer = rank
        .filter((num,i)=>attendance[i] === true)
        .sort((a,b)=>a-b)
        .slice(0,3)
        .map(num=> rank.indexOf(num))
    
    return 10000*answer[0]+100*answer[1]+answer[2];
}