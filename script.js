

let inputValue = document.querySelector('.resultbar');
let OperatorButton = document.querySelectorAll('.operator');
const division = document.getElementById('division');
const multi = document.getElementById('multi');
const subtract = document.getElementById('subtract');
const addition = document.getElementById('addition');
const equal = document.getElementById('equal');

const OperatorStack = [];
const ValueStack = [];

let value = 0

addition.addEventListener('click', function (){
    ValueStack.push(value);
    value = 0;
    inputValue.textContent = value;
    if(OperatorStack.length){
        OperatorStack.pop();
    }
    OperatorStack.push('+')
})
subtract.addEventListener('click', function (){
    ValueStack.push(value);
    value = 0;
    inputValue.textContent = value;
    if(OperatorStack.length){
        OperatorStack.pop();
    }
    OperatorStack.push('-')
})
multi.addEventListener('click', function (){
    ValueStack.push(value);
    value = 0;
    inputValue.textContent = value;
    if(OperatorStack.length){
        OperatorStack.pop();
    }
    OperatorStack.push('*')
})
division.addEventListener('click', function (){
    ValueStack.push(value);
    value = 0;
    inputValue.textContent = value;
    if(OperatorStack.length){
        OperatorStack.pop();
    }
    OperatorStack.push('%')
})

equal.addEventListener('click', function (){
    let operator = OperatorStack.pop();
    let value1 = ValueStack.pop();
    let output = 0;
    switch (operator) {
        case '+':
            output = value1+value;
            break;
    
        case '-':
            output = value1-value;
            break;
        case '*':
            output = value1*value;
            break;
        case '%':
            if(value1 == 0 || value == 0){
                output = 0;
            }else{
                output = value1/value;
            }
            break;
        case 'default':
            output = 0;
            
    }
    inputValue.textContent = output;

})

function onClickhandle(number){
value= value*10 + number;
inputValue.textContent = value;
}


function onClickClear(){
    inputValue.textContent = 0;
    value = 0;
    ValueStack.pop();
}
