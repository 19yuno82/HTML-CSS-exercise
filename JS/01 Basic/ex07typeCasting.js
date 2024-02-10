let num1 = 3.14;
let num2 = '3.14';
console.log('num1의 값 :',num1);
console.log('num2의 값 :',num2);

//(1) 문자 => 실수 로 형변환 : parseFloat(val)
console.log('실수로 형변환 :',parseFloat(num2));

//(2) 정수로 형변환 : parseLInt(val)
console.log('정수로 형변환 :',parseInt(num2));
console.log(parseInt(num1));

//(3) 숫자로 형변환 : Number(val)
console.log('숫자로 형변환 :',Number(num2));

//(4) 문자로 형변환 : String(val)
console.log('문자로 형변환',String(num1));