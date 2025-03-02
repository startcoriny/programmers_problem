function solution(dots) {
// slope
// (y2-y1) / (x2 - x1)
    // [a-b, c-d],[a-c, b-d],[a-d, b-c]
    
    const slopeArr = []
    const reverseSlopeArr = []
    for(let i = 0 ; i < dots.length - 1; i++){
        const [x1, y1]= dots[i]
        
        for(let j = i+1; j < dots.length; j++){
            const [x2, y2]= dots[j]
            
            const x = x2 - x1
            const y = y2 - y1
            
            const slope = y / x
            

            if(i === 0){
                slopeArr.push(slope)    
            }else{
                reverseSlopeArr.push(slope)
            }
            
        } 
    }
    reverseSlopeArr.reverse()
    
    
    const equalSlope = slopeArr.filter((slope, idx)=>{
        return slope === reverseSlopeArr[idx]
    })
    
    return equalSlope.length > 0 ? 1 : 0
    // return new Set(slopeArr).size === slopeArr.length ? 0 : 1
    
}