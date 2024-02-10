// (1) 사용자로부터 이모티콘과 행의 개수를 입력받는다.
// (2) 입력 받아온 이모티콘과 행우 개수를 매개변수로 하여
//     피라미드 형태로 출력하는 함수를 생성한다.
//     (HTML 문서 내 출력!)

let imoticon = prompt('이모티콘을 입력하세요');
let rowNum = Number(prompt('출력할 행의 개수를 입력하세요'));

row_print(rowNum,imoticon);

function row_print (rowNum,imoticon) {
        for(let i=0;i<rowNum;i++) {
                for(let j=0;j<=i;j++){
                    document.write(imoticon);
                }
            document.write('<br>');
        }
}