function solution(number, limit, power) {
  let totsteel = 0;

  for (let i = 1; i <= number; i++) {
    let count = 0;
    // 주어진 수의 제곱근까지 반복하여 약수를 찾음
    for (let j = 1; j * j <= i; j++) {
      if (i % j === 0) {
        // 주어진 수가 i로 나누어 떨어지면 약수
        // 약수를 찾을 때마다 약수의 쌍의 수를 증가시킴
        count++;
        // 약수가 제곱근과 같지 않으면 해당 약수의 반대편 약수도 존재하므로 쌍의 수를 추가로 증가시킴
        if (j !== i / j) {
          count++;
        }
      }
    }
    // 약수의 갯수 더하기(철 구하기) 설정 공격력보다 높다면 다운시키기
    if (count > limit) {
      count = power;
    }
    totsteel += count;
  }

  return totsteel;
}

console.log(solution(100000, 2, 1));
