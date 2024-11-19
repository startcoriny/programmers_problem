function solution(n) {
    const nstr = n+"";
    
    return nstr.split("").reduce((arr,curr)=> arr+Number(curr),0)
}