function solution(rny_string) {
    return rny_string.split("").map(str=> str === "m" ? str.replaceAll("m","rn"):str).join("")
}