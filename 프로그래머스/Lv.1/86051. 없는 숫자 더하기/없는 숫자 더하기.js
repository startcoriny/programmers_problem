function solution(numbers) {
    let arr = []
    for (let i = 0; i < 10; i++) {
        arr[i] = i;
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if(arr[i] == numbers[j]){
                arr[i] = 0;
            }
        }
    }
    let newarr = arr.reduce((a,b)=>a+b,0)
    return newarr;
}