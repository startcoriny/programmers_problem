function solution(cards1, cards2, goal) {
  let i = 0;
  let j = 0;
  var answer = "";

  goal.forEach((word) => {
    if (word === cards1[i]) {
      i++;
    } else if (word === cards2[j]) {
      j++;
    } else {
      answer = true;
    }
  });

  return answer ? "No" : "Yes";
}