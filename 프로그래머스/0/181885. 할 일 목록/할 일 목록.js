function solution(todo_list, finished) {
    /*명령형 코드*/
    // var answer = [];
    // for(let i=0; i<todo_list.length;i++){
    //     if(!finished[i]) answer.push(todo_list[i])
    // }
    // return answer;
    
    /*선언형 코드*/
    return todo_list.filter((todo,i)=>!finished[i])
}