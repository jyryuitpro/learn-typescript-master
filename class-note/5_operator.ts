// function logMessage(value: string) {
// function logMessage(value: any) {
//     console.log(value);
// }
// logMessage('hello');
// TS2345: Argument of type '100' is not assignable to parameter of type 'string'.
// logMessage(100);

// 유니온 타입(Union Type)
var seho: string | number | boolean;
function logMessage(value: string | number) {
    console.log(value);
    // 타입 가드: 특정 타입으로 타입의 범위를 좁혀나가는(필터링 하는) 과정
    if (typeof value == 'number') {
        value.toLocaleString()
    }
    if (typeof value == 'string') {
        value.toString();
    }
    throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100);