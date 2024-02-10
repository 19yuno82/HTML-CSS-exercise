// (1) number : 정수, 실수 등 산술 연산이 가능한 자료형
let num1 = 1.234;
let num2 = 5;
console.log('num1',num1);
console.log('num2',num2);

//(2) String : 문자열로 이루어진 자료형
let str1 = '안녕하세요.';
let str2 = '반갑습니다.';
console.log(str1);
console.log(str2);

/*
**Template Literals(템플릿 리터럴)
  : 내장된 표현식을 허용하는 문자열 리터럴
    문자열 삽입, 여러 줄 문자열 등 다양한 기능 제공
    =>`(백틱) 사용, 1 왼쪽 물결과 함께 있는 기호
*/
console.log(str1,'저는 정윤오입니다.',str2);
console.log(`${str1} 저는 정윤오입니다. ${str2}`);
console.log(`안녕하세요.
반갑습니다.`);

//(3)Boolean : 참/ 거짓 으로 표현되는 논리 형태의 자료형
let isFemale = true;
let isYoung = false;
console.log('여성인가요?',isFemale);
console.log('어린가요?',isYoung);

//undefined : 값이 할당된 적이 없거나 존재하지 않는 속성일 때의 유형
//             => 값을 할당하지 않은 상태
let value1;
console.log(value1);

//null : 아무런 값을 나타내지 않을 때의 자료형
//             => 의도적으로 비어 있는 상태
let value2 = null;
console.log(value2);