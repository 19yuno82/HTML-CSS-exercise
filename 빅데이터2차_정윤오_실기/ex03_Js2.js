let a = document.querySelector('#cnt')
let cnt_num = 0;
const up = ()=>{
    cnt_num += 1 ;
    a.innerHTML = cnt_num;
}
const down = ()=>{
   if(cnt_num != 0) cnt_num -= 1;
    a.innerHTML = cnt_num;
}
const reset = ()=>{
    if(cnt_num != 0) a.innerHTML = 0;
}