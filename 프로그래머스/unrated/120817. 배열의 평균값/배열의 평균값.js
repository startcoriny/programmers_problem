function solution(numbers) {
  let tot = 0;
  for (let i = 0; i < numbers.length; i++) {
    tot +=numbers[i]
  }
  return (tot/numbers.length).toFixed(1);
}