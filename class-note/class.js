// ES2015 (ES6)
class Person {
    // 클래스 로직
    constructor(name, age) {
        console.log('생성되었습니다.');
        this.name = name;
        this.age = age;
    }
}

var seho = new Person('세호', 30);
console.log(seho);

// var user = { name: 'capt', age: 100 };
// var admin = { name: 'capt', age: 100, role: 'admin' };

var user = { name: 'capt', age: 100 };
var admin = {};
// __proto__의 상위에 user객체를 주겠다.
admin.__proto__ = user;
// user에서 가지고 있는 속성들을 내려받아서 재활용할 수 있습니다. (상속)
admin.name;
admin.age;

// {}
admin;
admin.role = 'admin';

// Built-in Javascript API 또는 Javascript Native API
var obj = { a: 10};
obj.toString();
Object.keys(obj);
obj.hasOwnProperty('a');
obj;

var user ={ name: 'capt', age: 100 };
var arr = [];
arr;