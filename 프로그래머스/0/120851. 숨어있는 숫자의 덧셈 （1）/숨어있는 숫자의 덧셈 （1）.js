function solution(my_string) {

    return my_string.replace(/[^0-9]/g, "0").split("").reduce((acc,num) => acc += +num, 0);
}