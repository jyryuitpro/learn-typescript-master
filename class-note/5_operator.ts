// function logMessage(value: string) {
//     console.log(value);
// }
// logMessage('hello');
// TS2345: Argument of type '100' is not assignable to parameter of type 'string'.
// logMessage(100);

// 유니온 타입(Union Type)
function logMessage(value: string | number) {
    console.log(value);
}
logMessage('hello');
logMessage(100)