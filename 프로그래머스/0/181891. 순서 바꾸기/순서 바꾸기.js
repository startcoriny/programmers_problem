function solution(num_list, n) {
    let next = num_list.slice(n)
    let prev = num_list.slice(0,n)
    return next.concat(prev);
}