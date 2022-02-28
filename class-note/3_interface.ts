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
