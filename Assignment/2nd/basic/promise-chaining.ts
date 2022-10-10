const me = (callback: () => void, time: number) => {
    setTimeout(callback, time);
};

const wakeup = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        me(() => {
            console.log("현재 - 일어남");
            resolve("일어남");
        }, 1000);
    });
};

const goBathroom = (now: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        me(() => {
            console.log("현재 - 화징실로 이동함");
            resolve(`${now} -> 화장실로 이동함`);
        }, 2000);
    });
};

const ready = (now: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        me(() => {
            console.log("현재 - 칫솔과 치약을 준비함");
            resolve(`${now} -> 칫솔과 치약을 준비함`);
        }, 1000);
    });
};

const startCleaning = (now: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        me(() => {
            console.log("현재 - 씻기 시작함");
            resolve(`${now} -> 씻기 시작함"`);
        }, 1000);
    });
};

wakeup()
    .then((now) => goBathroom(now))
    .then((now) => ready(now))
    .then((now) => startCleaning(now))
    .then((now) => console.log(`\n${now}`));

