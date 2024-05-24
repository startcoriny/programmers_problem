function solution(my_string, queries) {
    my_string = my_string.split("")
    for(let i = 0; i < queries.length; i++){
        let[s, e] = queries[i]
        for(let j = s; j < e; j++){
            let temp = my_string[j]
            my_string[j] = my_string[e]
            my_string[e] = temp
            e--
        }
    }
    return my_string.join("")
}