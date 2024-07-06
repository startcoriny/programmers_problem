function solution(common) {
  let result = 0;
  let n = common.length;
  
  
  let diff = common[1] - common[0];
  let ratio = common[1] / common[0];
  
  
  let isArithmetic = true;
  for (let i = 1; i < n; i++) {
    if (common[i] - common[i - 1] !== diff) {
      isArithmetic = false;
      break;
    }
  }
  
 
  if (isArithmetic) {
    result = common[n - 1] + diff;
  } else {

    let isGeometric = true;
    for (let i = 1; i < n; i++) {
      if (common[i] / common[i - 1] !== ratio) {
        isGeometric = false;
        break;
      }
    }
    if (isGeometric) {
      result = common[n - 1] * ratio;
    }
  }
  
  return result;
}
