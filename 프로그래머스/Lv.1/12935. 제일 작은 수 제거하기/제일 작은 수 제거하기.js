function solution(arr) {
    const minvalue = Math.min(...arr);
    return arr.length > 1 ? arr.filter(a => a > minvalue) : [-1];
}