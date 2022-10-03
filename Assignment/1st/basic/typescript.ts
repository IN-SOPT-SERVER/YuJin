// js -> ts 타입이 너무 자유로워서 개발자도 모르게 문제가 생길 수 있다!

// 기본적인 문법 표현
let num: number = 31;
const str_hi: string = 'hi';
const isLiked: boolean = false;

// 배열 타입 표현
const numbers: number[] = [1, 2, 3];

const objectArray: Object[] = [
    { name: 'hi' },
    { age: 12 }
]
const objectArray2: object[] = [
    { name: 'hi' },
    { age: 12 }
]
/// Object << object가 더 엄격한 타입
//object: 원시 타입이 아닌 타입 hname만 할당 가능

///함수 타입 표현
const fun = (name: string): void => console.log(`hello, ${fun}!`);

const sum1 = (a: number, b: number): number => a + b;

const sum2 = (a: number, b: number): number => {
    return a + b;
}

///null, undefined 타입 표현
const a: null = null;
let b: undefined = undefined;
//자기 이외의 값을 할당 못한다!

/// 타입 단언 : 개발자가 타입을 단언한다!

//angle-bracket
let str: any = '스트링';
let strLen: number = (<string>str).length;
console.log(`${typeof strLen} , ${strLen}`);

//as
let str2: any = "스트링2";
let str2Len: number = (str2 as string).length;
console.log(`${typeof str2Len}, ${str2Len}`);
///any를 쓰는건 javacript를 쓰는거랑 다름 없다! 지양해야함!

