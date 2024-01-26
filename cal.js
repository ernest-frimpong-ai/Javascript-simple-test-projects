document.getElementById('result').addEventListener('click', function(){
    const num1 = parseInt(document.getElementById('firstNumber').value);
    const num2 = parseInt(document.getElementById('secondNumber').value);
    const operator = document.querySelector('select').value;
    let result;


    if(operator === '+'){
        result = num1 + num2
    }

    else if(operator === '-'){
        result = num1 - num2
    }

    else if(operator === '*'){
        result = num1 * num2
    }

    else if(operator === '/'){
        if(num2 !=0){
            result = num1 / num2
        }
        else{
            alert('Cannot divide by zero');
            return ;
        }
    }

    else{
        alert('Please select an operator')
    }

    document.getElementById('ans').textContent = 'The result of the operetion is:' + result;
})