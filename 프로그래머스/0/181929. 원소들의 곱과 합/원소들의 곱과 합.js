function solution(num_list) {
    
    let sumtot = num_list.reduce((acc,curr)=> acc+curr,0)
    let multot = num_list.reduce((acc,curr)=> acc*curr,1)
    
    return multot < sumtot**2 ? 1 : 0
}