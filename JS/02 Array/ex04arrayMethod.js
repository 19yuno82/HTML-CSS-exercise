// 배열 함수
let nameList = ['윤오','서혁','다이','상훈'];

//(1) 마지막 인덱스 데이터 추가 : push()
nameList.push('헬먼데이');
console.log('마지막 추가',nameList);

//(2) 마지막 인덱스 데이터 삭제 : pop()
nameList.pop();
console.log('마지막 삭제',nameList);

//(3) 첫번째 인덱스 데이터 추가 : unshift()
nameList.unshift('길동');
console.log('첫번째 추가',nameList);

//(4)첫번째 인덱스 데이터 삭제 : shift()
nameList.shift()
console.log('첫번째 삭제',nameList);

//(5) 원하는 인덱스 데이터 추가 혹은 삭제 : splice()
//    추가 => splice(인덱스번호,0,추가할데이터)
nameList.splice(1,0,'아이유');
console.log('원하는 인덱스 추가',nameList);

//    삭제 => splice(인덱스번호,삭제개수)
nameList.splice(1,1);
console.log('원하는 인덱스 삭제',nameList);

//사이에 2명 추가하기
nameList.splice(1,0,'아이유','정우성');
console.log(nameList);

//(6) 기존의 배열 -> 새로운 배열 : map()
let mapList = nameList.map((item)=>{
    return `💤${item}`
})
console.log(mapList);

//(7) 기존의 배열 => 새로운 배열 + 조건
let nameList2 = [
    {name:'길동',age:200,gender:'male'},
    {name:'관순',age:100,gender:'female'},
    {name:'순신',age:300,gender:'male'},
    {name:'임당',age:400,gender:'female'},
    {name:'세종',age:500,gender:'male'}
]

let oldGroup = nameList2.filter(item=>item.age>200)
console.log(oldGroup);