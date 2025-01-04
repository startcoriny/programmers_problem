function solution(id_pw, db) {
    
    const idList = [];
    
    for(let [id,pw] of db){
            
        if(id === id_pw[0] && pw === id_pw[1]){
            return "login"
        }
        
        idList.push(id)
    }
    
    if(idList.includes(id_pw[0])){
        return "wrong pw"
    }else {
        return "fail"
    }
}