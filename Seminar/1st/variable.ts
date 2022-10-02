const isLiked: boolean = true;
console.log(`${typeof isLiked}, ${isLiked}`)

const str: string = "hello";
console.log(`${typeof str}, ${str}`);

const test1: number = 31
console.log(typeof test1, test1);

// const sum: number = `sum number`// number로 선언된 변수에 문자열을 집어넣어서 오류가 남

// let aaa: number[] = [1, 2, 3, 'hello']; 문제발생! 
//-> 파트장은 이걸 더 선호한다 
const arr3: Array<string> = ['h', 'c'];

const objArray1: Object = [
    { item1: 'oh' },
    { item2: 'wow' }
]
const foo1 = (a: Object) => {
    console.log(a)
}

const foo2 = (a: Object) => {
    console.log(a)
}

foo1('hello11');

// 함수 타입 표현

const hello22 = (name: string): void => { // 타입 지정안하면 ...이 생김 : 너 타입 뭔지 잘 모르겠다!
    console.log(`${name}아 안녕`)
}

const sumFunc = (a: number, b: number): number => {
    return a + b;
}

//undefined 에는 null안들어감, 자기자신만 들어간다!

//타입 단언

// * as
const test11: any = '이종현'
//.을 찍었을대, 내장함수들을 보여주지 않음! any로 선언을 했기때문에! 어떤타입인지 모름
const nameLen = (test11 as string).length
// as ~라고 선언을 해주니 string이라는 것을 바로 안다!

//** openAPI에서 값을 가져올때가 있는데, 얘는 무조건 string이야라고 타입단언을 해주어서 값을 가져올때가 있음
// any는 javascipt를 사용하는거랑 다름없음! 지양하자! 타입검사를 절대 하지 않음
console.log(nameLen);

const test22: any = '현세빈'
const nameLen2 = (<string>test22).length
console.log(nameLen2)
