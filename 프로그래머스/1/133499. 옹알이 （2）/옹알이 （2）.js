function solution(babbling) {
  // 애기발음 배열 준비하기
  let babyStr = ["aya", "ye", "woo", "ma"];
  // babbling단어가 애기 발음에 일치하는게 있으면 빈문자열로 만듬
  let count = 0;
  for (let i = 0; i < babbling.length; i++) {
    for (let j = 0; j < babyStr.length; j++) {
        if(babbling[i].includes(babyStr[j].repeat(2))){
           break
           }
       babbling[i] = babbling[i].split(babyStr[j]).join(" ");
      console.log(babbling[i]);
    }

    // 빈배열의 갯수를 샌다.
        if(babbling[i].split(" ").join("").length === 0){
            count ++
        }
  }
  return count;
}