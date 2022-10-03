/// 파트원 2-3명 소개하는 객체 만들기
const members: SoptMembers[] = [
    {
        name: "이종현",
        age: 26,
        where: "노원",
        like: "헬스",
        mbti: "ENFJ",
        study: "알고리즘",
        sibling: true,
        appjam: false
    },
    {
        name: "장한빛",
        age: 24,
        where: "상봉",
        like: "웹툰",
        mbti: "ESFP",
        study: "알고리즘",
        sibling: true,
        appjam: true
    },
    {
        name: "양지영",
        age: 25,
        where: "청량리",
        like: "아이스아메리카노",
        mbti: "INFJ",
        study: "사격",
        sibling: true,
        appjam: true,
    }
]

/// 2. 파트원 소개 배열에 타입으로 지정할 인터페이스 생성 및 타입 지정

interface SoptMembers {
    name: string,
    age: number,
    where: string,
    like: string,
    mbti: string,
    study: string,
    sibling: boolean,
    appjam: boolean
}

/// 3. 모든 파트원 소개 아래와 같이 출력하기

members.map((item) => console.log(`안녕하세요 제이름은 ${item.name}입니다.\n나이는 ${item.age}입니다.\n사는 곳은 ${item.where}입니다.\n제 MBTI는 ${item.mbti}입니다.\n제가 들어간 스터디는 ${item.study}입니다.\n저는 형제 자매가 있다는 것이 ${item.name}입니다.\n저는 앱잼 하고 싶은 것이 ${item.name}입니다.\n`));