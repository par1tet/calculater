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
document.querySelector('#bt_mult').onclick = bt_mlt
document.querySelector('#bt_plu').onclick = bt_plu

document.querySelector('#bt_eql').onclick = bt_eql
document.querySelector('#bt_poi').onclick = bt_poi

document.querySelector('#bt_del').onclick = bt_del
document.querySelector('#bt_cel').onclick = bt_cel

document.querySelector('#bt_sin').onclick = bt_sin
document.querySelector('#bt_cos').onclick = bt_cos

answer_text = document.querySelector('#answer')

let first_number = 'noth';
let second_number = 'noth';
let operand = '';

function bt_numb(num){
    if (answer_text.textContent == ''){
        answer_text.textContent = num
    }else if (operand != '' && first_number === 'noth'){
        answer_text.textContent = num
        operand = ''
    }else{
        if (answer_text.textContent.length >= 18){
            return 0
        }
        answer_text.textContent += num
    }
}

function bt_oper(operand_get){
    first_number = (+answer_text.textContent)
    answer_text.textContent = ''
    operand = operand_get
}

function bt_1(){bt_numb('1')}
function bt_2(){bt_numb('2')}
function bt_3(){bt_numb('3')}
function bt_4(){bt_numb('4')}
function bt_5(){bt_numb('5')}
function bt_6(){bt_numb('6')}
function bt_7(){bt_numb('7')}
function bt_8(){bt_numb('8')}
function bt_9(){bt_numb('9')}
function bt_0(){bt_numb('0')}

function bt_plu(){bt_oper('+')}
function bt_mlt(){bt_oper('*')}
function bt_div(){bt_oper('/')}
function bt_def(){
    if (answer_text.textContent === ''){
        answer_text.textContent = '-';
        return 0;
    }
    bt_oper('-')
}

function bt_eql() {
    if (first_number === 'noth' || answer_text.textContent === ''){
        answer_text.style.display = 'none'
        setTimeout(() => {answer_text.style.display = 'block'}, 55)
        return 0;
    }
    second_number = (+answer_text.textContent)
    answer_text.style.display = 'none'
    let sum = 0
    switch (operand){
        case '+':
            sum = first_number + second_number
            break;
        case '-':
            sum = first_number - second_number
            break;
        case '/':
            sum = first_number / second_number
            break;
        case '*':
            sum = first_number * second_number
            break;
    }
    answer_text.textContent = (sum.toString()).slice(0,18)
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
    if (answer_text.textContent == ''){bt_cel()}
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

function bt_sin() {
    answer_text.textContent = (Math.sin((+answer_text.textContent))+'').slice(0,18)
}

function bt_cos() {
    answer_text.textContent = (Math.cos((+answer_text.textContent))+'').slice(0,18)

}