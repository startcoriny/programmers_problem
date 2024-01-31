function solution(array, commands) {
  let result = [];
  for (let i = 0; i < commands.length; i++) {
    let command = commands[i];
    let newArr = array.slice(command[0] - 1, command[1]);
    newArr.sort((a, b) => a - b);
    result.push(newArr[command[2] - 1]);
  }

  return result;
}