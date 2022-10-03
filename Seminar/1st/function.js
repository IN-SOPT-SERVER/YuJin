// 함수 선언식
function hello(name) {
    console.log(`안녕 ${name}`);
}

//함수 표현식
const sum = (a, b) => {
    const result = num1 + num2;
    // console.log(result);
    return result;
}

const sum1 = (num1, num2) => num1 + num2;
//이런식으로 사용하는것은 이해하기 힘들 수도 있어서 조심해서 사용해야한다!

hello('유진');
sum(1, 2);