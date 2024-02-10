//배열 : 여러 변수를 하나의 묶음으로 다루는 구조

//(1) 배열의 선언
let numList = [];
let numList2 = new Array(3);
console.log('numList2',numList2);
let numList3 = new Array(1,2,3,4,5);
console.log('numList3',numList3);

//(2) 배열의 생성
numList = [1,2,3];
console.log('numList', numList);
// ** 3개로 선언을 했어도 5개 할당 가능 => 공간이 동적, 가변적
numList2 = [1,2,3,4,5];
console.log('numList2',numList2);

//(3) 배열과 인덱스
let nameList = ['수현','세영','봉균'];
console.log('봉균쌤 이름 출력?',nameList[2]);

// ** 인덱스 활용 데이터 저장
let ynList = [];
ynList[0] = 'green';
ynList[1] = 1;
ynList[2] = true;
console.log(ynList);

//(4) 배열의 길이
console.log(ynList.length);