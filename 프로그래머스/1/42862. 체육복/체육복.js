function solution(n, lost, reserve) {
    var answer = 0;
    
    // 체육복은 바로 앞 또는 뒤 학생에게만 빌려줄수 있음
    // 전체 학생의 수는 2명이상 30명 이하 : n
    // 도난 당한 학생의 수 1명이상 n명 이해 : lost[]
    // 여별의 체육복을 가져온 학생의수 1명이상 n명 이하 : reserve[]
    // 여벌의 체육복이 있는 학생만 빌려줄수 있음 위 아래로.
    // 도난 당한 체육복이 여벌을 가져온 학생의 것이면 여벌 학생은 옷을 빌려줄수 없음
    // 체육 수업을 들을수 있는 학생의 최댓값.
    // 이 경우 최댓값만 구하면 됨.
    
    
    // 입출력 1번 예시
    // 총 학생수 5명 = [1,2,3,4,5] , 체육복 도난 인원 2명=[2,4] , 여벌 체육복 가져온 인원 [1,3,5]
    // 문제없이 수업들을수 있는 학생 = 총 학생수 - 도난당한 학생수 | 3 = 5 - 2
    // 도난당한 인원 -1학생과 +1학생이 여벌체육복 가져온 인원이면 문제 없이 수업들을수 있는 학생수 + 1을 해준다.
    // if(reserve.includes(2-1)||reserve.includes(2+1)) 문제없이 수업들을수 있는 학생++
    // 2-1 = 1, 1번학생에게 여벌체육복이 있으므로 학생 +1
    // 4-1 = 3, 3번학생에게도 여벌체육복이 있으므로 학생 +1
    // 총 수업 듣는 인원 5명
    
    // 입출력 2번 예시
    // 총 학생수 5명 = [1,2,3,4,5] , 체육복 도난 인원 2명=[2,4] , 여벌 체육복 가져온 인원 [3]
    // 문제없이 수업들을수 있는 학생 = 총 학생수 - 도난당한 학생수 | 3 = 5 - 2
    // if(reserve.includes(2-1)||reserve.includes(2+1)) 문제없이 수업들을수 있는 학생++, 여벌 체육복인원 공백으로 만들기
    // 2+1 = 3, 3번학생에게 여벌체육복이 있으므로 학생 +1
    // 4-1 = 3, 3번학생에게 여벌옷이 있었지만 빌려줬으므로 추가 x
    // 총 수업 듣는 인원 5명
    
    let noProblemStd = n-lost.length
    lost.sort()
    reserve.sort()
    
    // 도난 당한 체육복이 여벌을 가져온 학생의 것이면 여벌 학생은 옷을 빌려줄수 없음
    for(let i=0; i < lost.length; i++){
        for(let j=0; j < reserve.length; j++){
            if(lost[i] === reserve[j]){
                noProblemStd++
                reserve[j] = ""
                lost[i] = -99
                break;
            }
        }
    }
    
    for(let i = 0; i<lost.length;i++){
        if(reserve.includes(lost[i]-1)){
            noProblemStd++
            reserve = reserve.filter(student=>student !== lost[i]-1)
        }else if(reserve.includes(lost[i]+1)){
            noProblemStd++
            reserve = reserve.filter(student=>student !== lost[i]+1)
        }
    }
    return noProblemStd;
}