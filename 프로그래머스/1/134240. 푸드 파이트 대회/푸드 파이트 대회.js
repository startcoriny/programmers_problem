function solution(food) {
  let foodArange = [];
  for (let i = 1; i < food.length; i++) {
    if (food[i] % 2 !== 0) {
      food[i] = food[i] - 1;
    }

    for (let j = 0; j < food[i] / 2; j++) {
      foodArange.push(i);
    }
  }
  foodArange.push(0);

  for (let i = food.length - 1; i > 0; i--) {
    if (food[i] % 2 !== 0) {
      food[i] = food[i] - 1;
    }

    for (let j = 0; j < food[i] / 2; j++) {
      foodArange.push(i);
    }
  }

  return foodArange.join("");
}