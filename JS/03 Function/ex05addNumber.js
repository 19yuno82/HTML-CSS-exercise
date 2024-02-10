//(1) 사용자로부터 두 개의 정수를 입력받는다
//(2) 입력받은 정수를 매개변수로 하는 함수를 생성한다
//  함수선언문 =>addNumber1
//  함수표현식 =>addNumber2
//  화살표함수 =>addNumber3
//(3) 결과값을 콘솔창으로 확인해준다
let num1 = Number(prompt("첫번째 정수 >> "));
let num2 = Number(prompt("두번째 정수 >> "));

function addNumber1(num1,num2) {
    return num1+num2;
}
const addNumber2 = function (num1,num2) {
    return num1 + num2 ;
}
const addNumber3 = (num1,num2) => num1 + num2 ;

console.log('함수 선언문',addNumber1(num1,num2));
console.log('함수 표현식',addNumber2(num1,num2));
console.log('화살표 함수',addNumber3(num1,num2));