function solution(number) {
  let count = 0;

  // 기준이 되는 수
  for (let i = 0; i < number.length; i++) {
    let twin = 0;
    let third = 0;

    // 기준에 더해준수
    for (let j = i + 1; j < number.length - 1; j++) {
      twin = number[i] + number[j];

      // 기준에 더해준 수에 나머지 더하기
      for (let z = j + 1; z < number.length; z++) {
        third = twin + number[z];

        // 더해준수 비교하기
        if (third === 0) {
          count++;
        }
      }
    }
  }

  return count;
}