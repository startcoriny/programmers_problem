function solution(myString) {
    myString = myString.toLowerCase();
    
    let newMyString = myString.split("")
    
    for(let i = 0; i < newMyString.length; i++){
        if(newMyString[i] === "a"){
            newMyString[i] = "A"
        } 
    }
    return newMyString.join("")
}