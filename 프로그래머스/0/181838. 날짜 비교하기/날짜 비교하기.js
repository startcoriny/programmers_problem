function solution(date1, date2) {
    const [year1, month1, day1] = date1
    const [year2, month2, day2] = date2
    
    if(year1 < year2 ){
        return 1
    }else if(year1 === year2 && month1 < month2){
        return 1
    }else if(year1 === year2 && month1 === month2 && day1 < day2){
        return 1
    }else{
        return 0
    }
}

date1 = [2022, 1, 1]
date2 = [2021, 12, 31 ]