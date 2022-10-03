const sayHi = () => console.log('Hi');

const timer = () => {
    return setTimeout(() => {
        console.log("End !");
    }, 3000);
};

sayHi();
timer();