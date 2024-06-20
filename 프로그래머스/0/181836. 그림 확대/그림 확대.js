function solution(picture, k) {
    
    const doubleArr = picture.map(figure=>{
        let draw = figure.split("");
        let arr = [];
        draw.forEach(element=>{
            arr.push(...new Array(k).fill(element))
        })
        return new Array(k).fill(arr.join(""))
    })
    
    return doubleArr.flat();
}