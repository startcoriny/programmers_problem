function solution(s) {
  let newArr = s.split(" ");
  let newArr2 = [];
  let result = [];
  for (let i = 0; i < newArr.length; i++) {
    newArr2 = newArr[i].split("");
    result.push(
      newArr2.map((str, i) => {
        if (i % 2 === 0) return str.toUpperCase();
        else return str.toLowerCase();
      })
    );
    result[i] = result[i].join("");
  }
  return (result = result.join(" "));
}