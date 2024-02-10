//함수 표현식 : 익명 함수 형태로 함수 선언 => 변수 참조
//function() {} => 익명 함수
const intro = function () {
    console.log('윤오팀에서 팀장을 맡고 있는 정윤오입니다.');
}

//함수 호출
intro();

//매개변수
const intro2 = function (name) {
    console.log(`윤오팀에서 몸매을 맡고 있는 ${name}입니다.`);
}
intro2('임꺽정');

//매개변수 + return문
const intro3 = function (name) {
    return `윤오팀에서 비주얼을 맡은 ${name}입니다.`;
}
intro3('장길산');
console.log(intro3('장길산'));