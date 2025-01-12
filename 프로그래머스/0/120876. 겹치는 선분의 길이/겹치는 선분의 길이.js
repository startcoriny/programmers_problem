function solution(lines) {
    const lineArr = lines.map(([start, end]) => {
        return Array.from({ length: end - start + 1 }, (_, i) => i + start);
    });

    const lineMap = {};

    for (const line of lineArr) {
        for (let i = 0; i < line.length - 1; i++) {
            const key = `${line[i]} ${line[i + 1]}`;

            if (!lineMap[key]) {
                lineMap[key] = 1;
            } else {
                lineMap[key] += 1;
            }
        }
    }

    const lineAddArr = [];
    for (const key in lineMap) {
        if (lineMap[key] !== 1) {
            lineAddArr.push(lineMap[key]);
        }
    }

    const result = lineAddArr.length;

    return result;
}