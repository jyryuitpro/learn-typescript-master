// ES5 - 함수 선언문
function sum(a, b) {
    return a + b;
}
// ES5 - 함수 표현식
var sum = function (a, b) {
    return a + b;
}

// ES6+ - 함수 표현식(화살표 함수 === function을 빼고 =>를 넣어줍니다.)
var sum = (a, b) => {
    return a + b;
}
var sum = (a, b) => a + b;

// 타입스크립의 화살표 함수
var sum = (a: number, b: number): number => {
    return a + b;
}