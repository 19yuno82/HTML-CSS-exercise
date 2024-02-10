let num = prompt('숫자를 입력해주세요');
let intNum = Number(num);
let result = (intNum-intNum%100);
console.log(`백의 자리 이하 버린 결과 >> ${result}`);