function solution(names) {
    
    // 최대5명씩 탑승가능한 놀이기구
    // 줄서있는 사람들의 이름이 담긴 문자열 리스트 names
    // 앞에서부터 5명씩 묶은 그룹의 가장 앞에 서있는 사람들의 이름을 담은 리스트 리턴
    
    // 명령형 코드
    let answer = [];
    for(let i = 0; i<names.length; i+=5){
        answer.push(names[i])
    }
    return answer;
}