function solution(my_string) {
  function checkUpperCase(str) {
    return /[A-Z]/.test(str);
  }

  my_string = my_string.split("");
  const newString = [];
  for (let str of my_string) {
    if (checkUpperCase(str)) {
      str = str.toLowerCase();
    } else {
      str = str.toUpperCase();
    }
    newString.push(str);
  }

  return newString.join("");
}