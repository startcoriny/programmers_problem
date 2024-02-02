function solution(s) {
  let strArr = s.split("");
  let result = [];
  result[0] = -1;

  // 담으면서 비교할 배열
  let arr = [];
  arr[0] = strArr[0]; 
  for (let i = 1; i < strArr.length; i++) {
    arr.push(strArr[i]); // a  비교 할때마다 하나씩 늘어남

    let index = -1;
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[i] === arr[j]) {
        index = j;
        index = i - index;
      }
    }
    result.push(index);
  }
  return result
}