function solution(numbers, n) {

    /* 명령형 코드 */
    let tot = 0;
    for(let i = 0; i<numbers.length; i++){
        tot += numbers[i]
        if(tot>n){
            return tot
        }
    }
    
    /* 선언형 코드 */

}