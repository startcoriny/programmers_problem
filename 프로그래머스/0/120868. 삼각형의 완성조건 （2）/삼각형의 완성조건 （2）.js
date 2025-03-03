function solution(sides) {
    
    
    const lineArr = [];
    
    sides.sort((a,b)=> b-a)
    
    const [maxNum, remainder] = sides
    
    let sumNum = sides[0] + sides[1]
    
    
    
    for(let i = maxNum - remainder + 1 ; i <= maxNum; i++){
        lineArr.push(i)
    }
    
    
    for(let i = maxNum + 1; i < sumNum; i++){
        if(!lineArr.includes(i)){
            lineArr.push(i)
        }
    }
        

    
    return lineArr.length;
}