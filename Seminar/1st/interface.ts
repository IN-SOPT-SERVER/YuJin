//interface를 사용해서 DTO 이용함, 어떤 타입을 주고 받을지 클라이언트와 소통할때 중요함! 
interface Sopt {
    name: string;
    age: number;
    isSopt?: boolean; // ? : 있을수도, 없을수도 있다.
    // favoriteFood: string;
}

// const introduce = {
//     name: '한유진',
//     age: 18,
//     isSopt: true,
//     favoriteFood: '회'
// }

const introduces: Sopt[] = [
    {
        name: '권세훈',
        age: 20,
        isSopt: true,
    },
    {
        name: '권세훈1',
        age: 201,
        isSopt: true,
    },
    {
        name: '권세훈2',
        age: 202,
        isSopt: false,
    },
]