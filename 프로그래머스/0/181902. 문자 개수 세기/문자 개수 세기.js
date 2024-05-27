// function solution(my_string) {
//     var answer = [];
//     let eng = "ABCDEFGHIZKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
//     answer.length = 52
//     answer.fill(0)
    
//     my_string.split("").map(word=>{
//         answer[eng.indexOf(word)] += 1
//     })
//     return answer;
// }
function solution(m) {
    var answer = [];
    let al = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let a = [];
    a.length = 52;
    a.fill(0);

    m.split("").map((n)=>{
        a[al.indexOf(n)]+=1
    })

    return a;
}