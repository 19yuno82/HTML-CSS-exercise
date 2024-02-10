// 반복문 : 어떤 조건을 만족할 때까지 같은 처리를 반복하여 실행하는 경우

//(1) while문
let num1 = 0;
console.log('(1-1)while문');
while(num1<3) {
    console.log(num1);
    num1++;
}
let num2 = 9;
console.log('(1-2)while문(true)');
while(true) {
    console.log(num2);
    num2--;
    if(num2===3) break;
}

//(2) do-while문
let num3 = 1;
console.log('(2)do-while문');
do{
    console.log(num3);
    num3++;
}while(num3<4)

//(3)for문
console.log('(3)for문');
for(let i=4;i<7;i++){
    console.log(i);
}