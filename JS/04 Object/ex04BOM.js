/*
BOM(browser Object Model)
- 브라우저에 계층적으로 내장된 객체들
- window(브라우저), location(주소창), document(문서영역) 등
*/

//(1) window : 브라우저 객체 최상위, 브라우저 창 관련 기능
// window.open('http://www.naver.com','네이버','width=500; height=500');
// open('http://www.naver.com','네이버','width=500; height=500');

//(2) location : 브라우저 주소 관련 기능
console.log(location);
// location.href = "http://www.naver.com"

//(3) screen : 브라우저 화며 해상도 관련 기능
console.log(screen);

//(6) navigator : 브라우저 정보 관련 기능
console.log(navigator);

//(7) history : 브라우저 이동 관련 기능
//back() - 뒤로, forward() - 앞으로
//go(이동할 페이지 숫자)