function solution(emergency) {
    const sortEmergency = [...emergency].sort((a,b)=>b-a)
    
    let fastOrder = {}
    
    sortEmergency.forEach((order,idx)=>{
        fastOrder[order] = idx+1
    })
    
    const answer = emergency.map(order =>  fastOrder[order])
    
    return answer
}