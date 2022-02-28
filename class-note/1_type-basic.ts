// JS 문자열 선언
// var str = 'hello';

// TS 문자열 선언
let str: string = 'hello';

// TS 숫자 선언
let num: number = 10;

// TS 배열 선언
let arr: Array<number> = [1,2,3];
let heores: Array<string> = ['Capt', 'Thor', 'Hulk', 10];

// TS 배열 - 리터럴 선언
let items: number[] = [1,2,3];

// TS 튜플
// let address: string[] = ['gangnam', 'pangyo'];
let address: [string, number] = ['gangnam', 100];

// JS 객체 선언
// let obj = {};

// TS 객체 선언
let obj: object = {};
// let person: object = {
//     name: 'capt',
//     age: 100
// };

// TS 객체 (구체화)
let person: { name: string, age: number } = {
    name: 'thor',
    age: 1000
};

// JS 진위값
// let show = true;

// TS 진위값
let show: boolean = true;