/*
(1) 포맷에 맞춰 팀원들의 정보를 넣은 객체 생성
let format = {
    name : ,
    bday : ,
    favsub : 
}
*/
let dai = {
    name : '임다이',
    bday : '5월26일',
    favSub : '없음'
}
let sang = {
    name : '이상훈',
    bday : '8월1일',
    favSub : '자바'
}
let hyuk = {
    name : '안서혁',
    bday : '3월12일',
    favSub : '없음'
}
let yuno = {
    name : '정윤오',
    bday : '2월4일',
    favSub : '파이썬'
}

let arr = [dai, sang, hyuk, yuno];
/*
(2) 결과문에 맞춰 HTML 내 출력
xxx의 생일은 xxxx이며, 좋아하는 과목은 xx입니다.
*/
for(let i=0;i<arr.length;i++) {
document.write(`${arr[i].name}의 생일은 ${arr[i].bday}이며, 좋아하는 과목은 ${arr[i].favSub}입니다.<br>`);
}