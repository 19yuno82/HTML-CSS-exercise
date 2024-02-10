// 1. 입력창을 통한 입력
// "출력질문", ("입력창에 출력할 기본 값")
// 리턴 타입 : String
let dinner = prompt("저녁 뭐 먹을래요?","크림고사리수제비");
console.log(dinner);

// 2. 확인 및 취소를 통한 입력
let coffee = confirm("커피도 마실래요?");
// coffee라는 공간을 만들어서 넣어준 다음 콘솔창으로 출력
if(coffee) {
    console.log("🍩");
} else {
    console.log("💢");
}
console.log(coffee);