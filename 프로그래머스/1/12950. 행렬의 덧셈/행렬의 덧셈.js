function solution(arr1, arr2) {
    var answer = []; // 외부 배열 초기화
    for (let i = 0; i < arr1.length; i++) {
        answer[i]=[]; // 내부 배열도 초기화 해주어야함
        for (let j = 0; j < arr1[i].length; j++) {
            answer[i][j]=(arr1[i][j]+arr2[i][j])
        }
    }
    return answer;
}