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