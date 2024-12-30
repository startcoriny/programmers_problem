function solution(my_string) {
  const strArr = my_string.split("");

  const set = new Set();

  for (let i = 0; i < strArr.length; i++) {
    set.add(strArr[i]);
  }

  return Array.from(set).join("");
}