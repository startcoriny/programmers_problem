function solution(rsp) {
    
    const winMap = {
        2 :'0',
        0 :'5',
        5 :'2'
    }
    
    return rsp.split("").reduce((win,x)=> win + winMap[x],"")
}