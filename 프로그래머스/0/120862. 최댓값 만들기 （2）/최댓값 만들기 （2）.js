function solution(numbers) {
    if (numbers.length < 2) return numbers[0] || 0; // 배열이 1개 이하일 때 예외 처리

    // 양수와 음수를 분리하여 정렬
    const posNum = numbers.filter(num => num > 0).sort((a, b) => b - a); // 내림차순 정렬
    const negNum = numbers.filter(num => num <= 0).sort((a, b) => a - b); // 오름차순 정렬

    // 전체 숫자 리스트를 내림차순 정렬
    const numList = [...numbers].sort((a, b) => b - a);

    // 가장 큰 두 수의 곱
    const maxNum = numList.length > 1 ? numList[0] * numList[1] : -Infinity;

    // 양수에서 가장 큰 두 수의 곱
    const maxPos = posNum.length > 1 ? posNum[0] * posNum[1] : -Infinity;

    // 음수에서 가장 작은 두 수의 곱 (두 개의 음수 곱은 양수)
    const maxNeg = negNum.length > 1 ? negNum[0] * negNum[1] : -Infinity;

    // **음수 중 가장 작은 값과 양수 중 가장 큰 값의 곱**
    const maxMixed = (negNum.length > 0 && posNum.length > 0) ? negNum[0] * posNum[0] : -Infinity;

    // 네 가지 경우 중 가장 큰 값을 선택
    return Math.max(maxNum, maxPos, maxNeg, maxMixed);
}