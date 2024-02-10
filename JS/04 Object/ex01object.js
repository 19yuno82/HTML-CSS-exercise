//객체 : 여러 데이터를 하나의 변수에 저장할 수 있는 데이터 타입

//구조 => let object = {key1:value1,key2:value2,...}
//key : 객체 속성(property)
//value : 속성 값 / 기본자료형, 함수, 배열, 객체, ...
//객체 내 value 접근 =>object.key1 // value1

//객체 생성
let person = {
    "name" : "정윤오",
    age : 20,
    isPerson : true,
    intro : name=>console.log(`저는 ${name}입니다.`),
    intro2 : name=> `저는 ${name}입니다.`,
    favorite : {
        food : 'susi🍣',
        drink : 'coffee☕'
    },
    nameList : ['길동','순신','임당']
};

//객체 내 데이터 접근
console.log(person);
console.log('이름 :',person.name);
console.log('나이 :',person.age);
person.intro('정윤오');
console.log(person.intro2(person.name));
console.log(person.favorite);
console.log('좋아하는 음식 :',person.favorite.food);
console.log(person.nameList);
console.log('조선의 장군 :',person.nameList[1]);

//속성 활용 값 변경 및 추가
//변경
person.name = '유재석';
console.log('이름 변경 :',person.name);
//객체는 속성에 해당하는 값을 참조하는 구조
let nameValue = person.name;
nameValue = '정우성';
console.log('이름 변경 :',nameValue);
console.log('이름 변경 :',person.name);
//추가
person.height = 178;
console.log('키 추가 :',person.height);
console.log(person);