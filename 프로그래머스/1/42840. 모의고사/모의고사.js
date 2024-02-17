function solution(answers) {
  let first = [1, 2, 3, 4, 5];
  let second = [2, 1, 2, 3, 2, 4, 2, 5];
  let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  var answer = [];

  // 각 수포자가 찍은 것과 정답을 비교해서 카운트 세기
  // 수포자가 찍은것 무한 반복.
  let countArr = [first, second, third].map((arr) => {
    let count = 0;
    for (let i = 0; i < answers.length; i++) {
      if (arr[i % arr.length] === answers[i]) {
        count++;
      }
    }
    return count;
  });

  console.log(countArr);
  // 카운트가 동일하면 오름차순, 아니라면 가장높은사람만 반환
  let max = Math.max(...countArr);
  for (let i = 0; i < countArr.length; i++) {
    if (max === countArr[i]) {
      answer.push(i + 1);
    }
  }
  return answer;
}