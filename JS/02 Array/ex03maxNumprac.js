//(1) 주어진 데이터를 담은 배열을 생성한다
let numList = [23,54,13,44.77,91,1,3,4];
//(2) 반복문을 활용해 최댓값을 찾아준다
let maxNum = numList[0];
for(let i of numList) {
    if(i > maxNum) {
        maxNum = i;
    }
}
//(3) 결과값을 알림팝업창으로 출력해준다
alert( `최대값 >> ${maxNum}`);