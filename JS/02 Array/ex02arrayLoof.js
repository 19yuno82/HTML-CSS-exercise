//배열에 저장된 데이터를 반복문으로 출력

//(1) for문
let nameList = ['윤오','서혁','다이','상훈'];
for(let i=0; i<nameList.length; i++){
    console.log(nameList[i]);
}

//(2) for-of문
let foodList = ['우동','국수','모밀','칼국수','짬뽕'];
for(let i of foodList ){
    console.log(i);
}

//(3)forEach문
let subList = ['HTML','CSS','JS','PYTHON','DATABASE'];
subList.forEach((item,index)=>{console.log(index, item);})
