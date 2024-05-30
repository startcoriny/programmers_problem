function solution(names) {
    /* 명령형 코드 */
    // let answer = [];
    // for(let i = 0; i<names.length; i+=5){
    //     answer.push(names[i])
    // }
    // return answer;
    
    /* 선언형 코드 */
    return names.filter((name,i)=>i%5===0)
}