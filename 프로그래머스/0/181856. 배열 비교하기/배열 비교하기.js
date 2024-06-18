function solution(arr1, arr2) {
    if(arr1.length < arr2.length){
        return -1;
    }
    else if(arr1.length>arr2.length){
        return 1;
    }
    else{
        let sumArr1 = arr1.reduce((a,c)=>a+c,0);
        let sumArr2 = arr2.reduce((a,c)=>a+c,0);
        let maxNum= Math.max(sumArr1, sumArr2)
        if(maxNum === sumArr1 && maxNum === sumArr2){
            return 0;
        }else if(maxNum === sumArr2){
            return -1;
        }else{
            return 1;
        }
    }
}