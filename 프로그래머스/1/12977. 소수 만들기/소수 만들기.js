function solution(nums) {
  // 세자리를 더할수 있는 모든 경우의수 구하기
  let addNum = [];
  for (let i = 0; i < nums.length - 2; i++) {
    for (let k = i + 1; k < nums.length - 1; k++) {
      for (let j = k + 1; j < nums.length; j++) {
        addNum.push(nums[i] + nums[k] + nums[j]);
      }
    }
  }
  // 모든 경우의 수를 구한뒤 소수 찾기
  // 2부터 시작해서 자기 자신전까지 나누는데 나눠지는 숫자가 없어야함
  let count = 0;
  for (let i = 0; i < addNum.length; i++) {
    for (let j = 2; j <= addNum[i]; j++) {
      if (addNum[i] % j === 0 && j > 1 && j !== addNum[i]) {
        break;
      }
      if (addNum[i] % j === 0 && j === addNum[i]) {
        count++;
      }
    }
  }

  return count;
}