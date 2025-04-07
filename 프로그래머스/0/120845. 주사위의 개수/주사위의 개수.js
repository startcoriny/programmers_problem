function solution(box, n) {
    
    const [width, heigth, depth] = box
    
    const w = Math.floor(width / n)
    const h = Math.floor(heigth / n)
    const d = Math.floor(depth / n)
    
    return w * h * d
}