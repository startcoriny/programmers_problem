function solution(keyinput, board) { [9,5]                                    
                                    
    const moveKey = {
        up:[0,1],
        down:[0,-1],
        left:[-1,0],
        right:[1,0]
    }
    
    // 이동할수 있는 최대 길이 구한다.
    const halfWidth = Math.floor(board[0] / 2)
    const halfHeight = Math.floor(board[1] / 2) 
    
    // 최초 위치 초기화.
    let character = [0,0]
    
    for(const key of keyinput){
        const [moveWidth, moveHeight] = moveKey[key]
        
        const [width, height] = character
        
        // 가로가 최대 가로길이보다 작다면 더해준다.
        if(Math.abs(width) <= halfWidth){
            if(Math.abs(width + moveWidth) <= halfWidth){
                character[0] = width + moveWidth
            }
        }
        
        // 높이가 최대 높이보다 작다면 더해준다.
        if(Math.abs(height) <= halfHeight){
            if(Math.abs(height + moveHeight) <= halfHeight){
                character[1] = height + moveHeight
            }
        }
        
    }
    
    return character;
}