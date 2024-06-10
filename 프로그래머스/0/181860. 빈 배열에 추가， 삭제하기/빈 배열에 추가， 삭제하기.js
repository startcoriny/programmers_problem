function solution(arr, flag) {
    let newArr = [];
    flag.forEach((a,i)=>{
        if(a){
            let add = Array(arr[i]*2).fill(arr[i]);
            newArr.push(...add)
        }else{
            newArr = newArr.slice(0, newArr.length - arr[i])
        }
    })
    return newArr
}