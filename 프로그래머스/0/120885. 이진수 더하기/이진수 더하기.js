function solution(bin1, bin2) {
  let addNum = 0;
  const addBin = Number(bin1) + Number(bin2) + "";
  const addBinArr = addBin.split("");
  const rBinArr = [];

  for (let i = addBinArr.length - 1; i >= 0; i--) {
    const num = Number(addBinArr[i]) + addNum;

    addNum = Math.floor(num / 2);

    const remainder = num % 2;

    rBinArr.push(remainder);
    if (i === 0 && addNum === 1) {
      rBinArr.push(addNum);
    }
  }

  const binArr = rBinArr.reverse();

  return binArr.join("");
}