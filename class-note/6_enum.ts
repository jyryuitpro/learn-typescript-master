enum Shoes {
    Nike = '나이키',
    Adidas = '아디다스'
}

var myShoes = Shoes.Nike;
console.log(myShoes);

// 예제
// 이넘 활용 사례 (Dropdown 목록)
enum Answer {
    Yes = 'Y',
    No = 'N',
}

// function askQuestion(answer: string) {
function askQuestion(answer: Answer) {
    // if (answer == 'yes') {
    if (answer == Answer.Yes) {
        console.log('정답입니다.');
    }
    // if (answer == 'no') {
    if (answer == Answer.No) {
        console.log('오답입니다.');
    }
}
// askQuestion('yes');
// askQuestion('예스');
// askQuestion('y');
// askQuestion('Yes');

askQuestion(Answer.Yes);
// TS2345: Argument of type '"Yes"' is not assignable to parameter of type 'Answer'.
// askQuestion('Yes');