function solution(s, n) {
  // and연산자와 or연산자의 우선순위 주의!!
  console.log(s.charCodeAt(0) + n);
  let strarr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      strarr.push(" ");
    } else if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
      let unicode =
        s.charCodeAt(i) + n > 90 ? s.charCodeAt(i) - 26 : s.charCodeAt(i);
      console.log(unicode + n);
      strarr.push(String.fromCodePoint(unicode + n));
    } else {
      let unicode =
        (91 <= s.charCodeAt(i) + n && s.charCodeAt(i) + n <= 96) ||
        s.charCodeAt(i) + n >= 123
          ? s.charCodeAt(i) - 26
          : s.charCodeAt(i);
      console.log(unicode + n);
      strarr.push(String.fromCodePoint(unicode + n));
    }
  }

  return strarr.join("");
}