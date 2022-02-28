interface User {
    age: number;
    name: string;
}

// 변수에 인터페이스 활용
var seho: User = {
    age: 34,
    name: '세호'
}

// 함수에 인터페이스 활용
function getUser(user: User) {
    console.log(user);
}
const capt = {
    age: 100,
    name: '캡틴'
};
// 3_interface.ts(2, 5): 'age' is declared here.
getUser(capt);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
    (a: number, b: number): number;
}

// function sum(a, b) {
//     return a + b;
// }

var sum: SumFunction;
sum = function(a: number, b: number): number {
    return a + b;
}

// 인덱싱 방식을 정의하는 인터페이스
interface StringArray {
    [index: number]: string;
}

var arr: StringArray = ['a','b','c'];
// arr[0] = 10;

// 인터페이스 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp
}

var obj: StringRegexDictionary = {
    // sth: /abc/,
    // TS2322: Type 'string' is not assignable to type 'RegExp'.
    // cssFile: 'css'
    cssFile: /\.css$/,
    jsFile: /\.js$/,
};

// obj.sth

// TS2322: Type '"a"' is not assignable to type 'RegExp'.
// obj['cssFile'] = 'a';

// 타입 추론
Object.keys(obj).forEach(function (value) {

})