//화살표 함수 : 함수 표현식 형태,function 키워드 대신 =>

const intro = () => {
    console.log('윤오팀에서 팀장을 맡고 있는 정윤오입니다.');
}

//함수 호출
intro();

//매개변수
const intro2 = (name) => {
    console.log(`윤오팀에서 몸매을 맡고 있는 ${name}입니다.`);
}
intro2('임꺽정');

//매개변수 + return문
// const intro3 = (name) => {
//     return `윤오팀에서 비주얼을 맡은 ${name}입니다.`;
// }
const intro3 = name => `윤오팀에서 비주얼을 맡은 ${name}입니다.`;
//매개변수 1개면 => ()생략 가능
//실행문 1개면 => {}+return  생략 가능

intro3('장길산');
console.log(intro3('장길산'));