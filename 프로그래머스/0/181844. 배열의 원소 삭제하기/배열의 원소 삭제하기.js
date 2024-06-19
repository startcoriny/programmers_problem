function solution(arr, delete_list) {
    var answer = [];
    answer = arr.filter(num=> !delete_list.includes(num))
    return answer;
}