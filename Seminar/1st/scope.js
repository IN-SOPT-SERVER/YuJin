// var : Function scope
// if (true) {
//     var test = 'var !';
//     console.log(test);
// }
// console.log(test);

// if (true) {
//     let test2 = 'let!'
//     console.log(test2);
// }
// console.log(test2); // let은 block scope 이기 때문에 밖에서 사용 불가능


// DB 통신할때 var를 사용하는 것은 값이 제대로 잘 안들어가는 사태가 발생할 수 있음! == 호이스팅 문제
// var는 지양, let과 const를 지향하는 것이 좋다~

// function fun() {
//     var test = 'var';
//     if (true) {
//         var test = "var";
//         console.log("test:", test);
//     }
//     console.log("test:", test);
// }

// fun();
// console.log("test:", test); // function scope를 벗어난 곳에서는 접근이 불가능하다!

const arr1 = ['한뉴', '회', 20, true]
const arr2 = Array(1, 2, 'hi', false, { sopt: "SERVER", name: "한유진" })

arr2.map((item) => console.log(item));

arr1.map((item) => console.log(`${item} 야호`));

