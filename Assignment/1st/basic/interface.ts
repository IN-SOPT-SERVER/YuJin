interface SOPT {
    name: string;
    age: number;
    isSOPT: boolean;
    like?: string; //선언해도 되고, 안해도 되는!
}

const info: SOPT = {
    name: '한유진',
    age: 10,
    isSOPT: true,
};

const infos: SOPT[] = [
    {
        name: '한유진',
        age: 10,
        isSOPT: true,
        like: "흑임자 치즈케이크",
    },
    {
        name: '한유진1',
        age: 100,
        isSOPT: true,
    },
]