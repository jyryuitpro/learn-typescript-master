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

function logText(text: string) {
    console.log(text);
    // text.split('').reverse().join('');
    return text;
}

function logNumber(num: number) {
    console.log(num);
    return num;
}

logText('a');
// logText(10);
const num = logNumber(10);
logText(true);