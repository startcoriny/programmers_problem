function solution(quiz) {
    var answer = [];
    
    function getExpressionAndValue(string){
        const arr = string.split(" ");
        let expressResult = 0;
        if(arr[1] === "+"){
           expressResult = Number(arr[0]) + Number(arr[2])
        }else{
            expressResult = Number(arr[0]) - Number(arr[2])
        }
        return [expressResult, Number(arr[4])]
    }
    
    for(let i = 0; i < quiz.length; i++){
        const result = getExpressionAndValue(quiz[i])
        
        const expressResult = result[0];
        const value = result[1];
        
        if(expressResult === value){
            answer.push("O")
        }else{
            answer.push("X")
        }
        
    }
    
    return answer;
}