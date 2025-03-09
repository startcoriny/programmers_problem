function solution(polynomial) {
    
    const xArr = []
    const numArr = []
    
    const polyArr = polynomial.split(" ")
    
    for(const poly of polyArr){
        
        if(poly.includes("x")){
            xArr.push(poly)
        }
        
        else if(!isNaN(poly)){
            numArr.push(poly)
        }
        
    }
    
    
    const xNum = xArr.reduce((a,x)=> {
        
        if(x === "x"){
            a = a + 1
        }else{
            
            const numStr = x.split("x")[0]
            
            a = a + Number(numStr)
        }
        
        return a
    },0)
    
    const num = numArr.reduce((a,num) => a + Number(num) ,0)

    if(xNum === 0 && num !== 0){
        return `${num}`
    }else if(xNum !== 0 && num === 0){
        return `${xNum === 1 ? "x" : `${xNum}x`}`
    }else{
        return `${xNum === 1 ? "x" : `${xNum}x`} + ${num}`
    }

}