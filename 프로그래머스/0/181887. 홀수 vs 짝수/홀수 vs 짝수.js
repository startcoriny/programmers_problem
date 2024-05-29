function solution(num_list) {
    // num_list[0] = 1번원소
    // 홀수원소들의 합과 짝수 원소들의 합 중 큰값을 리턴, 값이 같을경우 그값을 리턴
    
    /* 명령형코드 */
    // var answer = 0;
    // let odd = 0;
    // let even = 0;
    // for(let i = 0; i < num_list.length; i++){
    //     if(i%2===0){
    //         odd+=num_list[i]
    //     }else{
    //         even+=num_list[i]
    //     }
    // }
    // if(odd===even){
    //     answer = odd
    // }else if(odd>even){
    //     answer = odd
    // }else{
    //     answer = even
    // }
    // return answer;
    
    /* 선언형코드 */
    
    // 비교 함수
    function numCompare(odd, even){
        return odd === even ? odd : odd > even ? odd:even
    }
    
    // 배열 분리함수
    function splitArr(arr,n){
        return arr.filter((num,i)=> i%2===n)
    }
    
    // 누적합 구하는 함수
    function accumulateSum(arr){
        return arr.reduce((acc,cur)=>acc+cur,0)
    }
    
    // 홀수원소들의 합
    const odd = accumulateSum(splitArr(num_list,0))
    // 짝수원소들의 합
    const even = accumulateSum(splitArr(num_list,1))
    
    return numCompare(odd,even)
}