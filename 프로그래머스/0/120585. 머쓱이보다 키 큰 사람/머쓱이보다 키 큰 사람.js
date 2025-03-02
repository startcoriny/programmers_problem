function solution(array, height) {
    return array.reduce((acc,tall)=>{
        
        if(tall > height){
            ++acc
        }
       return acc 
    },0)
}