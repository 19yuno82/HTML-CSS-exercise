let height = prompt('키 입력하세요.');
let weight = prompt('몸무게 입력하세요');
let apprWeight = parseInt((height-100)*0.9);
let gap = Math.abs(weight-apprWeight);
let isAppr = gap == 0 ? '정상' : (weight>apprWeight ? '초과' : '미만') ;

document.write(`
신장 : ${height}cm<br>
체중 : ${weight}kg<br>
적정 체중 : (${height}-100)X0.9=${apprWeight}kg<br>
적정 체중은 ${apprWeight}kg이며, 현재 적정 체중에서 ${gap}kg ${isAppr}한 것을 알 수 있습니다.
`);
// if(isAppr) {
//     document.write(`${weight}은 적중 체중입니다.`);    
// }else {
//     if(weight > apprWeight) {
//         document.write(`적정 체중은 ${apprWeight}kg이며, 현재 적정 체중에서 ${gap}kg 초과한 것을 알 수 있습니다.`);
// }else {
//         document.write(`적정 체중은 ${apprWeight}kg이며, 현재 적정 체중에서 ${gap}kg 부족한 것을 알 수 있습니다.`);
// }
// }