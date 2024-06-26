function solution(arr) {
    const n = arr.length;
    const r = arr[0].length;
    
    if(n > r){
        for(let i = 0; i < n; i++){
            for(let j = n-(n-r); j < n; j++){
                arr[i][j] = 0;   
            }
        }
        return arr;
    }else if(n < r){
         const c = Array.from({ length: r }, () => 0);
         return new Array(...arr, ...Array.from({ length: r-n }, () => c));
    }else if(n === r){
        return arr
    }
}