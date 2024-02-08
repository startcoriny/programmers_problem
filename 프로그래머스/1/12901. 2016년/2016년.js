function solution(a, b) {
  let day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let currentDay = day[5];
  let index = 5;

  for (let i = 1; i <= a; i++) {
    let month = 31;

    if ((i < 8 && i % 2 === 0) || (i > 8 && i % 2 !== 0)) {
      month = 30;
    }
    if (i === 2) {
      month = 29;
    }

    for (let j = 1; j <= month; j++) {
      let currentind = index++;
      currentDay = day[currentind % 7]; // 5,5 6,6 7,0 8,1 9,2 10,3 11,4 12,5 13,6

      if (i === a && j === b) {
        break;
      }
    }
  }
  return currentDay;
}