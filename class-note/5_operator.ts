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

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

// 유니온 타입의 특징: 공통 속성까지만 접근할 수 있습니다.
function askSomeone(someone: Developer | Person) {
    someone.name;
    // someone.skill;
    // someone.age;
}

askSomeone({ name: '디벨로퍼', skill: '웹개발' });
askSomeone({ name: '캡틴', age: 100 });

// 인터섹션 타입 소개
var seho: string | number | boolean;
// var capt: never
var capt: string & number & boolean;

function askSomeone2(someone: Developer & Person) {
    someone.name;
    someone.skill;
    someone.age;
}

// TS2345: Argument of type '{ name: string; skill: string; }' is not assignable to parameter of type 'Developer & Person'.
// Property 'age' is missing in type '{ name: string; skill: string; }' but required in type 'Person'.
// askSomeone2({ name: '디벨로퍼', skill: '웹개발' });
askSomeone2({ name: '디벨로퍼', skill: '웹개발', age: 34 });
// askSomeone2({ name: '캡틴', age: 100 });


