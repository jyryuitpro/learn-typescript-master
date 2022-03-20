var heroes = [
    {name: 'capt', age: 100},
    {name: 'thor', age: 1000},
];
heroes.reduce((total, currentItem) => {
    total = total + currentItem.age;
    // reduce의 콜백 함수에 꼭 리턴을 해주셔야 값이 누적됩니다. :)
    return total;
}, 0);