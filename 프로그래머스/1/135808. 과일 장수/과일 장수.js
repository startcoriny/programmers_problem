function solution(k, m, score) {
  // 최상급 점수에 맞춰서 앞으로 나란히 정렬
  score.sort((a, b) => b - a);
  // m개씩 나누어 쪼개준다, 만약에 마지막에 남아있는것이 m개가 되지 않는다면 버린다.
  let newArr = [];
  let num = m;
  for (let i = 0; i < score.length; i += m) {
    let arr = score.slice(i, num);
    num += m;
    if (arr.length === m) {
      newArr.push(arr);
    }
  }
  // 나눈 상자들의 가격 구한다. p(상자속 상품의 가장 낮은가격) * m(상품갯수)
  let tot = 0;
  for (let i = 0; i < newArr.length; i++) {
    let minNum = Math.min(...newArr[i]);
    tot = tot + minNum * m;
  }
  // 각각의 상자들의 가격을 더해준다.
  return tot;
}