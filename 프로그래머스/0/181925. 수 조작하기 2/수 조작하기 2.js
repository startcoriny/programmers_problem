function solution(numLog) {
    // 1 - 0 = 1
    // 0 - 1 = -1
    // 10-0 = 10
    // 0 - 10 = -10
    // 1 - 0 = 1
    // 0 - 1 = -1
    // 10 - 0 = 10
    // 0 - 10 = -10
    // -1 - 0 = -1
    // -2 - -1 = -1
    // -1 - -2 = 1
    var answer = '';
    for(let i = 1; i <= numLog.length; i++){
        switch(numLog[i] - numLog[i-1] ){
            case 1: 
                answer+='w'
                break;
            case -1: 
                answer+='s'
                break;
            case 10: 
                answer+='d'
                break;
            case -10: 
                answer+='a'
                break;
        }
    }
    return answer;
}