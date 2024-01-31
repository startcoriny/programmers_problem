function solution(strings, n) {
  let sumstr = strings.map((str) => {
    return str.slice(n, n + 1) + str;
  });

  sumstr.sort();

  let sortstr = sumstr.map((str) => {
    return str.substr(1);
  });

  return sortstr;
}