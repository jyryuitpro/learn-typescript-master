// 인터페이스
interface Developer {
    name: string;
    skill: string;
}
// interface Person {
//     name: string;
// }
class Person {
    name: string;
    // skill: string;
}
var developer: Developer;
var person: Person;

// TS2741: Property 'skill' is missing in type 'Person' but required in type 'Developer'.
// developer = person;

person = developer;

// TS2741: Property 'skill' is missing in type 'Person' but required in type 'Developer'.
// developer = new Person();

// 함수
var add = function(a: number) {
    // ...
}
var sum = function(a: number, b: number) {
    // ...
}
// TS2322: Type '(a: number, b: number) => void' is not assignable to type '(a: number) => void'.
// add = sum;
sum = add;

// 제네릭
interface Empty<T> {

}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
    data: T;
}
var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;
notempty1 = notempty2;
notempty2 = notempty1;