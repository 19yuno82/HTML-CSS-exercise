/*
/ : 실제 나누기 연산 결과
% : 나누고 난 몫 이후 나머지
*/
console.log(100/3);
console.log(100%3);
//100/3 몫 출력하기
console.log(parseInt(100/3));
console.log((100-100%3)/3);

/*
비교연산자
== : 값만 비교
=== : 값과 자료형을 비교
*/
let num = 10;
let str = '10';
console.log('==', num == str);
console.log('===', num === str);