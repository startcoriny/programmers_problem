function solution(todo_list, finished) {
    var answer = [];
    /*명령형 코드*/
    for(let i=0; i<todo_list.length;i++){
        if(!finished[i]) answer.push(todo_list[i])
    }
    
    return answer;
}