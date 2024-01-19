function solution(s) {
    if (s.length === 4 || s.length === 6) {
        if (/[^0-9]/g.test(s)) {
            return false
        } else {
            return true
        }
    }else{
        return false
    }
}