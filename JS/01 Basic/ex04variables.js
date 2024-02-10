//변수 : 데이터를 담을 공간
let num = 3;
/*
let => 변수 선업 키워드
num => 변수 이름
3 => 변수에 할당된 값
*/

//재선언 : 같은 변수의 이름으로 다시 변수를 선언
//재할당 : 선언된 변수에 다시 값을 할당

//(1) var : 재선언 O 재할당 O
var var1 = 1;
console.log("var1 최초 선언", var1);
var var1 = 2;
console.log("var1 다시 선언", var1);
var1 = 3;
console.log("var 값만 할당", var1);

//(2) let : 재선언 X 재할당 O
let let1 = 1;
console.log("let 최초 선언", let1);
// let let1 = 2;
let1 = 3;
console.log("let 값만 할당", let1);

//(3) const : 재선언 X 재할당 X
const con1 = 1;
console.log("const 최초 선언", con1);
// const con1 = 2;
// con1 = 3;
// console.log("con 값만 할당",con1);