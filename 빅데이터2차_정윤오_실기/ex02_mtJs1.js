let divAll = document.querySelector('div');
let red_box = document.querySelector('#redBox');
let green_box = document.getElementById('#greenBox');
let blue_box = document.getElementById('#blueBox');
let gray_box = document.getElementById('#grayBox');

const move = ()=>{
    let red_box = document.querySelector('#redBox');
    let green_box = document.querySelector('#greenBox');
    let blue_box = document.querySelector('#blueBox');
    let gray_box = document.querySelector('#grayBox');
    red_box.style.cssText = 'margin-left: 100px;'
    green_box.style.cssText = 'margin-left: 200px;'
    blue_box.style.cssText = 'margin-left: 300px;'
    gray_box.style.cssText = 'margin-left: 400px;'
}
const change = ()=>{
    let divAll = document.querySelectorAll('div');
    for(i=0;i<4;i++) {
    divAll[i].style.cssText += 'border-top-right-radius: 50%; border-bottom-left-radius: 50%;'
    }
}