//조건문 : 주어진 조건을 비교, 판단하여 결과를 얻는 구문

//(1) 조건연산자 : 조건문 ? 실행문1(t) : 실행문2(f)
let coffeeMenu = prompt('메뉴를 입력하세요.');
//(1-1) true/false 일 때
coffeeMenu == '아메리카노' 
? console.log('주문하신 음료 나왔습니다.') 
: console.log(coffeeMenu,'대기 시간 5분 있습니다.');
//(1-2) 조건이 하나일 때 : 조건문 && 실행문
coffeeMenu == '토마토주스' && console.log('이벤트 중인 메뉴입니다.');

//(2) if-else문
if(coffeeMenu == '민트초코라떼') {
    console.log('치약을 좋아하시나봐요?');
} else {
    console.log('준비해드리겠습니다.');
}

