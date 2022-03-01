interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function introduce(): Developer | Person {
    return { name: 'Tony', age: 33, skill: 'Iron Making'};
}
var tony = introduce();
// console.log(tony.skill);
console.log(tony.name);

if ((tony as Developer).skill) {
    var skill = (tony as Developer).skill;
    console.log(skill);
} else if ((tony as Person).age) {
    var age = (tony as Person).age;
    console.log(age);
}