function solution(t, p) {
  let allstr = [];
  let pLength = p.length;
  for (let i = 0; i < t.length; i++) {
    let burnstr = t.substr(i, pLength);
    allstr.push(burnstr);
  }
  let threestr = allstr.filter((num) => {
    if (num.length === p.length) {
      return num <= p;
    }
  });
  return threestr.length;
}