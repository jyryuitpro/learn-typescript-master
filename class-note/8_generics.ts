// function logText(text) {
//     console.log(text);
//     return text;
// }
// logText(10);
// logText('하이');
// logText(true);

// 타입을 마치 함수의 파라미터의 개념으로 받게되는게 제네릭이라고 생각할 수 있습니다.
// function logText<T>(text: T): T {
//     console.log(text);
//     return text;
// }
// logText<string>('하이');

// function logText(text: string) {
//     console.log(text);
// text.split('').reverse().join('');
// return text;
// }

// function logNumber(num: number) {
//     console.log(num);
//     return num;
// }

// function logText(text: string | number) {
//     console.log(text);
//     return text;
// }

// const a: string | number
// const a = logText('a');
// TS2339: Property 'split' does not exist on type 'string | number'.   Property 'split' does not exist on type 'number'.
// a.split('')
// logText(10);
// const num = logNumber(10);
// logText(true);

// 제네릭의 장점과 타입 추론에서의 이점
function logText<T>(text: T): T {
    console.log(text);
    return text;
}

const str = logText<string>('abc');
str.split('');
const login = logText<boolean>(true);

// logText('a');
// logText(10);

// 인터페이스에 제네릭을 선언하는 방법
// interface Dropdown {
//     value: string;
//     selected: boolean;
// }

// const obj: Dropdown = { value: 10, selected: false };
// const obj: Dropdown = { value: 'abc', selected: false };

interface Dropdown<T> {
    value: T;
    selected: boolean;
}

const obj: Dropdown<string> = { value: 'abc', selected: false };
// const obj: Dropdown<number> = { value: 10, selected: false };

// 제네릭의 타입 제한
function logTextLength<T>(text: T[]): T[] {
    // TS2339: Property 'length' does not exist on type 'T'.
    console.log(text.length);
    text.forEach(function (text) {
        console.log(text);
    })
    return text;
}
logTextLength<string>(['hi', 'abc']);