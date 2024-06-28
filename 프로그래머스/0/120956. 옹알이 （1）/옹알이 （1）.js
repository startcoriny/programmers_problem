function solution(babbling) {
    const language = ["aya", "ye", "woo", "ma"]
    const arr = babbling.map(str=>{
        let text = str;
        for(let i = 0; i< language.length; i++){
            text = text.replace(language[i]," ");
            if(text === " "){
                break;
            }
        }
        return text
    }).filter(str=> !str.match(/[^' ']/))
    return arr.length
}