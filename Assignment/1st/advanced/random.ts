/* 

도전 과제 조건
1. Member, Dinner interface 만들고 타입 지정하기
2. organize 내부 로직 채우기

*/

import Dinner from "./interface/Dinner";

const dinner: Dinner = {
    members: [
        {
            name: "임승하",
            group: "코리곰탕",
        },
        {
            name: "최윤한",
            group: "코리곰탕",
        },
        {
            name: "권세훈",
            group: "환승연애",
        },
        {
            name: "양지영",
            group: "환승연애",
        },
        {
            name: "조예슬",
            group: "버디버디",
        },
        {
            name: "정준서",
            group: "버디버디",
        },
    ],
    menu: ['인절미치즈케이크', '고르곤졸라피자', '소금빵', '바게트', '매기', '연어', '회'],
    shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
        /* 
        Math.random()이 0 ~ 1사이의 값이 나오는데, 0.5를 빼면 무조건 양수나 음수가 나온다.
        양수나 음수값이 나오면, 무작위로 출력됨 (0이나 1이면 안된다)
        */
    },
    organize(array) {
        this.shuffle(array);
        this.shuffle(this.menu);

        const POME = array.find((pome) => pome.group === '환승연애');
        const CORIGOMTANG = array.find((corigomtang) => corigomtang.group === '코리곰탕');
        const serverpattzzang = array.find((name) => name.name === '권세훈');
        const buddybuddy = array.find((buddy) => buddy.group === '버디버디');
        const dinnerMember = array.map((member) => member.name)

        console.log(`제 코리곰탕 조는요! ${CORIGOMTANG?.name}입니다. 잘부탁드립니다...~!`);
        console.log(`환승연애 .. 점 그리워 ~.. : ${POME?.name}`);
        console.log(`서버파트장 화이팅 ㅋ ㅋ ! ${serverpattzzang?.name}`);
        console.log(`버디버디 조 화이팅이다 ~!~ 아자잣!@!@! ${buddybuddy?.name}`);
        console.log(`${dinnerMember[0]}과 ${dinnerMember[1]}은 ${this.menu[0]}와 ${this.menu[1]}을 드세요.`);
    },
};

dinner.organize(dinner.members);