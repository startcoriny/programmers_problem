function solution(num, total) {
  const middleNum = Math.floor(total / num);
  let startNum = 0;
  if (num % 2 !== 0) {
    let prev = Math.floor(num / 2);
    startNum = middleNum - prev;
  } else {
    let prev = num / 2 - 1;
    startNum = middleNum - prev;
  }

  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(startNum++);
  }
  return arr;
}