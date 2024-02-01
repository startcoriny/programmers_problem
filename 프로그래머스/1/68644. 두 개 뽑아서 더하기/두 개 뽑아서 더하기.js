function solution(numbers) {
  let tot = [];
  // 모든수 한번씩 더하기(2중for문)
  // 시작은2(index[0])부터 4(index [3])까지
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 1 + i; j < numbers.length; j++) {
      tot.push(numbers[i] + numbers[j]);
    }
  }

  // 단 같은 값이 나오는 값은 반환하지 않음 + 정렬순

  tot.sort((a, b) => a - b);
  let result = [];
  result[0] = tot[0];
  for (let i = 1; i < tot.length; i++) {
    if (!(tot[i] === tot[i - 1])) {
      result.push(tot[i]);
    }
  }

  return result;
}