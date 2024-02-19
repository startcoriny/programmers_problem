function solution(n, m, section) {
  // 1부터 n까지 칠한다고 가정
  // 롤러의 길이까지 칠하면 그곳이 칠해져 있는지 확인하고 그 이후부터 다시 칠함
  // 즉 section의 칠하려는 부분이 롤러가 칠한 길이보다 작다면 칠해진것.
  let count = 0;
  let filledWall = 0;
  section.forEach((element) => {
    if (element > filledWall) {
      count++;
      filledWall = element + m - 1; //0+4 = 4
      // filledWall : 4, 8, 12 ...
    }
  });
  return count;
}