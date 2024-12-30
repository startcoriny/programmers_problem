function solution(sides) {
    const maxNum = Math.max(...sides);
    
    const totSides = sides.reduce((acc,side)=>acc+side,0)
    
    return maxNum < (totSides - maxNum) ? 1 : 2
}