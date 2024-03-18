function solution(X, Y) {
    // x, y의 숫자를 하나씩 비교하여 추출한뒤 그중에서 가장 큰 정수 만들기
     Y = Y.split("");
     X = X.split("");
    let answer="";
    for(let i = 0; i < 10; i++) {
        let x_cnt = X.filter(x => Number(x) === i).length; 
        let y_cnt = Y.filter(y => Number(y) === i).length; 
        answer += i.toString().repeat(Math.min(x_cnt, y_cnt)); 
    }   
    
    // 짝궁이 존재하지 않으면 결과는 -1
    if(answer===''){
        return "-1"
    }
    
    // 짝궁을 구했을때 0으로만 되어있다면 짝궁은 0
    else if(answer.split('').filter(x => x === "0").length === answer.length) { // 전부 0 밖에 없다면 0
        return "0";
    }
    
    // 만약 같은 숫자가 x에는 3개, y에는 2개 있다면 짝궁은 2개가 되는것.
    else {
        return answer.split('').sort().reverse().join(''); // 내림차순 정렬해서 return
    }
}