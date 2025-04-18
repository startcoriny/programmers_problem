function solution(n, w, num) {
    // 2중 for문을 돌면서 내부 for문에서 역순으로 저장.
    let reverse = false;

    const box = [];

    for (let i = 1; i <= n; i = i) {
        const line = [];

        for (let j = 0; j < w; j++) {
            if (i > n) {
                line.push(0);
            } else {
                line.push(i);
                i++;
            }
        }

        if (reverse) {
            box.push(line.reverse());
        } else {
            box.push(line);
        }

        reverse = !reverse ? true : false;
    }

    // 1중 for문의 총 길이 구하기
    const height = box.length;

    // 구하려는 박스가 몇번째의 1중 for문제 존재하는지 확인하기
    let location = { line: 0, seq: 0 };

    box.forEach((line, idx) => {
        const existNum = line.indexOf(num);

        if (existNum >= 0) {
            location.line = idx;
            location.seq = existNum;
        }
    });

    // 하나씩 아래로 내려가면서 구하려는 박스 아래의 0이 아닌 수가 있다면 카운트 1
    let count = 0;
    for (let i = location.line; i < height; i++) {
        if (box[i][location.seq] && box[i][location.seq] !== 0) {
            count++;
        }
    }

    return count;
}