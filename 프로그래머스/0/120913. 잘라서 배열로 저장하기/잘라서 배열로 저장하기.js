function solution(my_str, n) {
    my_str = my_str.split("")
    let arr = [];
    for(let i = 0; i < my_str.length;){
        let str = my_str.splice(i,n)
        arr.push(str.join(""))
    }
    return arr
}