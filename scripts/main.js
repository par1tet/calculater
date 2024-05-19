document.querySelector('#bt_1').onclick = bt_1
document.querySelector('#bt_2').onclick = bt_2
document.querySelector('#bt_3').onclick = bt_3

document.querySelector('#bt_4').onclick = bt_4
document.querySelector('#bt_5').onclick = bt_5
document.querySelector('#bt_6').onclick = bt_6

document.querySelector('#bt_7').onclick = bt_7
document.querySelector('#bt_8').onclick = bt_8
document.querySelector('#bt_9').onclick = bt_9

document.querySelector('#bt_0').onclick = bt_0

document.querySelector('#bt_def').onclick = bt_def
document.querySelector('#bt_div').onclick = bt_div
document.querySelector('#bt_mult').onclick = bt_mult
document.querySelector('#bt_plu').onclick = bt_plu

document.querySelector('#bt_eql').onclick = bt_eql
document.querySelector('#bt_poi').onclick = bt_poi

document.querySelector('#bt_del').onclick = bt_del
document.querySelector('#bt_cel').onclick = bt_cel

answer_text = document.querySelector('#answer')

let first_number = 'noth';
let second_number = 'noth';
let operand = '';

function bt_1() {
    if (answer_text.textContent.length >= 13){
        return 0
    }
    if (answer_text.textContent == ''){
        answer_text.textContent = '1'
    }else if (operand != '' && first_number === 'noth'){
        answer_text.textContent = '1'
        operand = ''
    }else{
        answer_text.textContent += '1'
    }
}
function bt_2() {
    if (answer_text.textContent.length >= 13){
        return 0
    }
    if (answer_text.textContent == ''){
        answer_text.textContent = '2'
    }else if (operand != '' && first_number === 'noth'){
        answer_text.textContent = '2'
        operand = ''
    }else{
        answer_text.textContent += '2'
    }
}
function bt_3() {
    if (answer_text.textContent.length >= 13){
        return 0
    }
    if (answer_text.textContent == ''){
        answer_text.textContent = '3'
    }else if (operand != '' && first_number === 'noth'){
        answer_text.textContent = '3'
        operand = ''
    }else{
        answer_text.textContent += '3'
    }
}

function bt_4() {
    if (answer_text.textContent.length >= 13){
        return 0
    }
    if (answer_text.textContent == ''){
        answer_text.textContent = '4'
    }else if (operand != '' && first_number === 'noth'){
        answer_text.textContent = '4'
        operand = ''
    }else{
        answer_text.textContent += '4'
    }
}
function bt_5() {
    if (answer_text.textContent.length >= 13){
        return 0
    }
    if (answer_text.textContent == ''){
        answer_text.textContent = '5'
    }else if (operand != '' && first_number === 'noth'){
        answer_text.textContent = '5'
        operand = ''
    }else{
        answer_text.textContent += '5'
    }
}
function bt_6() {
    if (answer_text.textContent.length >= 13){
        return 0
    }
    if (answer_text.textContent == ''){
        answer_text.textContent = '6'
    }else if (operand != '' && first_number === 'noth'){
        answer_text.textContent = '6'
        operand = ''
    }else{
        answer_text.textContent += '6'
    }
}

function bt_7() {
    if (answer_text.textContent.length >= 13){
        return 0
    }
    if (answer_text.textContent == ''){
        answer_text.textContent = '7'
    }else if (operand != '' && first_number === 'noth'){
        answer_text.textContent = '7'
        operand = ''
    }else{
        answer_text.textContent += '7'
    }
}
function bt_8() {
    if (answer_text.textContent.length >= 13){
        return 0
    }
    if (answer_text.textContent == ''){
        answer_text.textContent = '8'
    }else if (operand != '' && first_number === 'noth'){
        answer_text.textContent = '8'
        operand = ''
    }else{
        answer_text.textContent += '8'
    }
}
function bt_9() {
    if (answer_text.textContent.length >= 13){
        return 0
    }
    if (answer_text.textContent == ''){
        answer_text.textContent = '9'
    }else if (operand != '' && first_number === 'noth'){
        answer_text.textContent = '9'
        operand = ''
    }else{
        answer_text.textContent += '9'
    }
}

function bt_0() {
    if (answer_text.textContent == ''){
        answer_text.textContent = '0'
    }else if (operand != '' && first_number === 'noth'){
        answer_text.textContent = '0'
        operand = ''
    }else{
        answer_text.textContent += '0'
    }
}
function bt_plu() {
    first_number = (+answer_text.textContent)
    answer_text.textContent = ''
    operand = '+'
}
function bt_def() {
    first_number = (+answer_text.textContent)
    answer_text.textContent = ''
    operand = '-'
}
function bt_mult() {
    first_number = (+answer_text.textContent)
    answer_text.textContent = ''
    operand = '*'
}
function bt_div() {
    first_number = (+answer_text.textContent)
    answer_text.textContent = ''
    operand = '/'
}

function bt_eql() {
    if (first_number === 'noth' || answer_text.textContent === ''){
        answer_text.style.display = 'none'
        setTimeout(() => {answer_text.style.display = 'block'}, 55)
        return 0;
    }
    second_number = (+answer_text.textContent)
    answer_text.style.display = 'none'
    switch (operand){
        case '+':
            answer_text.textContent = first_number + second_number
            break;
        case '-':
            answer_text.textContent = first_number - second_number
            break;
        case '/':
            answer_text.textContent = first_number / second_number
            break;
        case '*':
            answer_text.textContent = first_number * second_number
            break;
    }
    setTimeout(() => {answer_text.style.display = 'block'}, 55)
    first_number = 'noth'
    second_number = 'noth'
}
function bt_poi() {
    if (!(answer_text.textContent.includes('.'))){
        answer_text.textContent += '.';
    }
}

function bt_del() {
    if (answer_text.textContent == 'Enter numbers'){}
    else{
        answer_text.textContent = answer_text.textContent.slice(0,-1)
    }
}

function bt_cel() {
    if (answer_text.textContent == 'Enter numbers'){}
    else{
        answer_text.textContent = ''
        operand = ''
        first_number = 'noth'
        second_number = 'noth'
    }
}