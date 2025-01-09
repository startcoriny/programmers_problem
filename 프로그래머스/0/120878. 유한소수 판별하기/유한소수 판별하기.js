function solution(a, b) {
    // 최대공약수(GCD) 계산 함수
    const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y));

    // 분모 b를 기약분수로 만들기 위해 GCD로 나눔
    const denominator = b / gcd(a, b);

    // 분모의 소인수 분해에서 2와 5 외의 소인수가 있는지 확인
    let num = denominator;
    while (num % 2 === 0) num /= 2; // 2로 나누기
    while (num % 5 === 0) num /= 5; // 5로 나누기

    // 나머지가 1이 아니면 2 반환, 그렇지 않으면 1 반환
    return num === 1 ? 1 : 2;
}