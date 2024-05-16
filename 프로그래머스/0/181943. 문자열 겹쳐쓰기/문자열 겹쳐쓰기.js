function solution(my_string, overwrite_string, s) {
    var answer = '';
    
    // 시작점 s
    // 문자열 배열화
    // 배열로 교체하기
    // 교체한 문자열 외의 남는 문자열이 있다면 다시 적어주기
    let nms = my_string.split("")
    let nos = overwrite_string.split("")
    
    for(let i = s, j = 0; i<nms.length; i++,j++){
        if(nos[j]===undefined){
            continue;
        }else{
         nms[i] = nos[j]   
        }
    }
    
    
    return nms.join("");
}