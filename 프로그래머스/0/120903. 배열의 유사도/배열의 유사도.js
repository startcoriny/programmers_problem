function solution(s1, s2) {
    const tot = s1.reduce((acc, str)=>{
        if(s2.includes(str)){
         acc = acc + 1   
        }
        return acc;
    },0);
    
    return tot;
}