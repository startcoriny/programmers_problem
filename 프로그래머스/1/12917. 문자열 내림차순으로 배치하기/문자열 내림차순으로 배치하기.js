function solution(s) {
    var answer ='';
    answer=s.split('')
    let uparr = answer.filter(upstr=>{
        if(/[A-Z]/g.test(upstr)){// 정규표현식의 test메서드사용하여 해당문자열과 비교해서 대문자추출
            return upstr
        }
    })
    let lowarr = answer.filter(upstr=>{
        if(/[^A-Z]/g.test(upstr)){// 정규표현식의 test메서드사용하여 해당문자열과 비교해서 소문자추출
            return upstr
        }
    })
    lowarr.sort((a,b)=>b.localeCompare(a)) // 소문자 정렬
    uparr.sort((a,b)=>b.localeCompare(a)) // 대문자 정렬
    return lowarr.join("")+uparr.join("");
}