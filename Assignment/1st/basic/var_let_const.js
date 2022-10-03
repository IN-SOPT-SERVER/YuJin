/// var : 변수 재선언 가능, 변수값 재할당 가능, 초기화 값 필요 없음 ( 사용 지양 하기 )

var myName = '한유진';
console.log(`${myName} is my name 입니다`);

var myName = '한유진2'; //재할당
console.log(`${myName} is my name 입니다`);

myName = '한유진3'; //재선언
console.log(`${myName} is my name 입니다`);

/// let : 변수값 재할당 가능, 변수값 재선언 불가능

let part = "서버 파트";
// let part = "iOS 파트"; // 재할당 불가능
console.log(`가보자고 ~ ${part}!!`);

part = "iOS 파트"; // 재선언 가능
console.log(`가보자고 ~ ${part}!!`);

/// const : 변수 재선언 불가, 변수 재할당 불가, 초기화값 필요함

const school = "sopt";
// const school = "soppt"; // 재할당 불가능
// school = "sooopt"; // 재선언 불가능
console.log(`가보자고 ~ ${school}!!`);


//Function Scope: 함수 범위 내
//Block Scope: 블록 범위 ( if , while , for ,function )
//Function Scope >> Block Scope

if (true) {
    var x = "var";
}
console.log("x: ", x);
//var : Function Scope이니까, Block의 영향을 받지 않음

if (true) {
    let y = "let";
}
// console.log("y: ", y);
// Block Scope을 갖게 되면, 특정 block에서 선언한 변수들은 외부에서 접근이 불가능하다!

function func() {
    if (true) {
        var test = "var";
        console.log("test: ", test);
    }
    console.log("test: ", test);
}

func();
// console.log("test: ", test); // Function scope을 벗어남

//var는 지양하자 ! 
