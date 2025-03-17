function solution(dots) {
    
    
    const xList = dots.map(dot => dot[0] )
    
    const yList = dots.map(dot => dot[1] )
    
    const maxX = Math.max(...xList)
    const minX = Math.min(...xList)
    
    const maxY = Math.max(...yList)
    const minY = Math.min(...yList)  
    
    return (maxX - minX) * (maxY - minY)
}