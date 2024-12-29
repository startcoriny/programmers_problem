function solution(array, n) {
  const nMinusNumArr = array.map((num) => {
    return Math.abs(n - num);
  });

  const minNum = Math.min(...nMinusNumArr);

  const findIdxArr = nMinusNumArr.reduce((acc, num, i) => {
    if (num === minNum) {
      acc.push(i);
    }
    return acc;
  }, []);

  const result = findIdxArr.map((Idx) => {
    return array[Idx];
  });

  return Math.min(...result);
}