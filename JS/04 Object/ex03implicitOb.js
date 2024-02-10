//내장객체 : 자바스크립트에서 제공하는 객체
//Array, Math, Date, .....

const today = new Date();
const yesterday = new Date(2023,9,17,0,0,0)
console.log(today);
console.log(yesterday);

//출력 형태
//YY년 M월 D일 D요일 
//H시 M분 S초입니다.
let tYear = today.getFullYear();
let tMonth = today.getMonth()+1; //0~11로 반환
let tDate = today.getDate();
let tDay = today.getDay();
let tHour = today.getHours();
let tMinute = today.getMinutes();
let tSecond = today.getSeconds();

//요일 0~6으로 반환
let week = ['일','월','화','수','목','금','토'];

console.log(`
${tYear}년 ${tMonth}월 ${tDate}일 ${week[tDay]}요일
${tHour}시 ${tMinute}분 ${tSecond}초 입니다.
`);