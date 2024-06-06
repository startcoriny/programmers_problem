function solution(myString, pat) {
    let newString = myString;
    let index = 0;
    let count = 0;

    while(index !== -1){
        index = newString.indexOf(pat);
        if(index > -1){
            count++
            newString = newString.slice(index+1)
        }
    }
    return count
}