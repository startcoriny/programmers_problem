function solution(numbers) {
    const mappingNum = {
        0:"zero", 1:"one", 2:"two", 
        3:"three",4:"four",5:"five",
        6:"six",7:"seven",8:"eight",9:"nine" 
    }
    
    for(let key in mappingNum){
        if(numbers.includes(mappingNum[key])){
            numbers = numbers.replaceAll(mappingNum[key], key)
        }
        
    }
    return Number(numbers);
}