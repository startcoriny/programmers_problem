function solution(board) {
    
    
    const directions = [
        [-1, -1], [-1, 0], [-1, 1], 
        [0, -1], [0, 0], [0, 1], 
        [1, -1], [1, 0], [1, 1]
    ]
    
    let a_mine = []
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            if(board[i][j] === 1){
                a_mine.push({i:i,j:j})
            }
        }
    }
    
    
    
    if(a_mine.length === board.length * board[0].length){
        return 0
    }
    
    const dangerList = a_mine.flatMap(({ i, j }) =>
        directions.map(([di, dj]) => ({ i: i + di, j: j + dj }))
    )
    
    const filterDangerList = dangerList.filter(danger=> danger.i >= 0 && danger.i < board.length && danger.j >= 0 && danger.j < board.length).map(danger=>JSON.stringify(danger))
    
    const removeSameDangerSet = new Set(filterDangerList)
    
    
    return board.length**2 - removeSameDangerSet.size
    

    
    
    
    
}