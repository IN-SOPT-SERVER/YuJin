//원시 타입
//number, String, Boolean, Symbol, Null, Undefined

//객체 타입
const user = {
    name: "유진",
    getFavoriteFoods: function () {
        this.getFavoriteFoods.forEach((food) => {
            console.log(`${food} 맛있다!`);
        })
    },
}

//Array : 어떤 해당 인덱스가 비어있어도 괜찮다
const array = [null, "하하", 2];

//Function : 일급객체
function sum(a, b) {
    return a + b;
}

const sum = (a, b) => {
    return a + b;
};

const add = (a, b) => a + b; // return 생략 가능 , 하지만 코드가 헷갈릴 수 있으니, 코드가 짧은 경우만 사용해라!