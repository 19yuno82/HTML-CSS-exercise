//Math.random() : 0~1 사이의 난수 생성
// console.log(Math.random());
//(1)랜덤한 수를 하나 뽑아준다 (1~100)
let answer = parseInt(Math.random()*100)+1;
console.log(answer);

//(2)사용자로부터 수를 입력받는다.
//입력 한 수의 조건에 따라 팝업창을 띄워준다.
let isRight = false;
while(!isRight) {
    let num = parseInt(prompt('숫자를 입력해주세요 >>'));
    if(num == answer) {
        alert('정답입니다. 축하합니다! 🎉');
        isRight = true;
    }else if(num<answer){
            alert('입력한 숫자보다 큰 수입니다.');
    }else{
            alert('입력한 숫자보다 작은 수입니다.');
        }
    }
//     입력한 수의 조건에 따라 팝업창을 띄워준다.
//     입력 > 랜덤 => '입력한 숫자보다 작은 수입니다.'
//     입력 < 랜덤 => '입력한 숫자보다 큰 수입니다.'
//     입력 = 랜덤 => '정답입니다. 축하합니다! 🎉'()