function solution(my_string) {
    const strArr = my_string.split("")
    const filterStr = strArr.filter(str => !["a","e","i","o","u"].includes(str)).join("")

    return filterStr
}