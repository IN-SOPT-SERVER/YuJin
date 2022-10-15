const condition: boolean = true;

//* 최초 생성 시점
const promise = new Promise((resolve, reject) => {
    if (condition) {
        resolve("Promise 실행");
    } else {
        reject(new Error("비동기 처리 도중에 실패함"));
    }
});

//* 비동기 처리 성공(then), 비동기 처리 실패(catch)
promise
    .then((resolvedData): void => console.log(resolvedData))
    .catch((error): void => console.log(error));

