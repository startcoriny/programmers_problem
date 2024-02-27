function solution(lottos, win_nums) {
  let n = lottos.length;
  //map에 순위자료넣기
  const map = new Map();
  for (let i = 1; i <= win_nums.length; i++) {
    map.set(i, n--);
  }

  let minCount = 0;
  let zeroCount = 0;
  // 하나씩 비교해서 같은것이 있다면 count세기
  for (let i = 0; i < win_nums.length; i++) {
    for (let j = 0; j < win_nums.length; j++) {
      if (lottos[i] === win_nums[j]) {
        minCount++;
      }
    }
    if (lottos[i] === 0) {
      zeroCount++;
    }
  }

  // 최고일떄와 최저일때의 맞출수 있는 count세기
  let maxCount = minCount + zeroCount;

  // map에서 해당 키값에 맞는 순위 가져오기
  const min = minCount === 0 ? 6 : map.get(minCount);
  const max = maxCount === 0 ? 6 : map.get(maxCount);

  return [max, min];
}