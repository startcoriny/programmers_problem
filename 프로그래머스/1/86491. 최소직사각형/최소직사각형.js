function solution(sizes) {
  // 2차배열안에서 서로 비교해서 가로와 세로중에 큰 수를 가로쪽으로 작은수를 세로쪽으로 이동

  // 그렇게 되면 가로쪽은 2개수보다 큰수만 위치 세로쪽은 그보다 작은수로만 위치
  // 가로중에 가장큰수 꺼내고 새로중에 가장 큰수 꺼내서곱하면 끝

  let widthmax = sizes[0][0];
  let heightmax = sizes[0][1];

  for (let i = 1; i < sizes.length; i++) {
    if (widthmax < heightmax) {
      heightmax = sizes[0][0];
      widthmax = sizes[0][1];
    }
    for (let j = 1; j < sizes[i].length; j++) {
      if (sizes[i][j] > sizes[i][j - 1]) {
        let temp = sizes[i][j];
        sizes[i][j] = sizes[i][j - 1];
        sizes[i][j - 1] = temp;
      }
    }
    if (widthmax < sizes[i][0]) {
      widthmax = sizes[i][0];
    }
    if (heightmax < sizes[i][1]) {
      heightmax = sizes[i][1];
    }
  }

  return widthmax * heightmax;
}