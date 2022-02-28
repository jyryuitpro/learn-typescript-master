function add(a: number, b: number): number {
    return a + b;
}
var result = add(10, 20);
// var result: number
result.toLocaleString();
// TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
// add(10, '20');

// 에러의 사전방지
// 코드 가이드 및 자동 완성(개발 생산성 향상)