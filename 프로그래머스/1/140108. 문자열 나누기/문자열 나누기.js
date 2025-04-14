function solution(s) {
    let count = 0;
    let i = 0;

    while (i < s.length) {
        let x = s[i];
        let xCount = 1;
        let otherCount = 0;

        for (let j = i + 1; j < s.length; j++) {
            if (s[j] === x) xCount++;
            else otherCount++;

            if (xCount === otherCount) {
                count++;
                i = j + 1;
                break;
            }

            // 문자열 끝까지 갔을 때 처리
            if (j === s.length - 1) {
                count++;
                i = s.length;
            }
        }

        // 남은 한 글자일 경우 (for문이 실행되지 않는 케이스)
        if (i === s.length - 1) {
            count++;
            break;
        }
    }

    return count;
}
