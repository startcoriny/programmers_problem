function solution(my_string, indices) {
    let newString = my_string.split("")
    
    indices.sort((a,b)=>a-b).reverse()

    indices.forEach(indice=>{
        newString.splice(indice,1)
    })
    return newString.join("");
}