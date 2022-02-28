interface Person {
    name: string;
    age: number;
}

type Person = {
    name: string;
    age: number;
};

var seho: Person = {
    name: '세호',
    age: 30
};

type MyString = string;
var str:MyString = 'hello';

type Todo = { id: number; title: string; done: boolean };
// function getTodo(todo: { id: number; title: string; done: boolean }) {
function getTodo(todo: Todo) {

}