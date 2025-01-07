function solution(score) {
    let rank = 1;
    const rankList = [];
    const resultRank = new Array(score.length);

    const averageList = score.map(([aScore, bScore]) => (aScore + bScore) / 2);
    const sortedAver = [...averageList].sort((a, b) => b - a);

    for (let i = 0; i < sortedAver.length; i++) {
        if (i === 0) {
            rankList.push(rank);
        } else {
            if (sortedAver[i - 1] === sortedAver[i]) {
                rankList.push(rank);
            } else {
                const preRank = rankList[rankList.length - 1];

                const rankCnt = rankList.reduce((acc, rankNum) => {
                    if (rankNum === preRank) {
                        acc++;
                    }
                    return acc;
                }, 0);

                rank = rank + rankCnt;

                rankList.push(rank);
            }
        }
    }

    for (let i = 0; i < sortedAver.length; i++) {
        const idx = averageList.indexOf(sortedAver[i]);

        resultRank[idx] = rankList[i];
        averageList[idx] = -1;
    }

    return resultRank;
}