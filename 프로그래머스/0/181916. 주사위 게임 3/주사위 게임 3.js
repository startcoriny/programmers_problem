function solution(a, b, c, d) {
  let diceNum = [a, b, c, d];
  let bundleDiceNum = new Set(diceNum);
  let score = 0;
  let diceNumArr = [];

  const setIter = bundleDiceNum.values();
  if (setIter) {
    for (let i = 0; i < bundleDiceNum.size; i++) diceNumArr.push(setIter.next().value);
  }

  // set의 사이즈가 1일 경우
  if (bundleDiceNum.size === 1) {
    let [p] = diceNumArr;
    score = 1111 * p;
  }

  // set의 사이즈가 2일 경우 -> 2가지
  if (bundleDiceNum.size === 2) {
    let [p, q] = diceNumArr;
    let count = 0;
    diceNum.forEach((element) => {
      if (p === element) {
        count++;
      }
    });

    if (count === 1) {
      score = (10 * q + p) ** 2;
    } else if (count === 3) {
      score = (10 * p + q) ** 2;
    } else {
      score = (p + q) * Math.abs(p - q);
    }
  }

  // set의 사이즈가 3일 경우
  if (bundleDiceNum.size === 3) {
    let [p, q, r] = diceNumArr;
    let pcount = 0;
    let qcount = 0;
    diceNum.forEach((element) => {
      if (p === element) {
        pcount++;
      } else if (q === element) {
        qcount++;
      }
    });
    console.log(pcount)
    if (pcount > 1) {
      score = q * r;
    } else if (qcount > 1) {
      score = p * r;
    } else if (pcount === 1 && qcount === 1) {
      score = p * q;
    }
  }
  // set의 사이즈가 4일 경우
  if (bundleDiceNum.size === 4) {
    score = Math.min(...diceNum);
  }

    return score
}