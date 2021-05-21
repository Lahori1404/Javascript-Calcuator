
const calculator=document.querySelector(".calculator")
const select = calculator.querySelector('.calculator_keys');
let display = calculator.querySelector(".calculator_display");

    select.addEventListener('click',event=>{
       
        const key=event.target;
        const keyvalue=key.innerText;
        let displayvalue=display.innerText;
        const { type } =  key.dataset; 
        const { previousKeyType } = calculator.dataset; // saving the previous key type
        
        //Is this a number key.

        if(type==='number')
        {if(displayvalue==='0')
        {display.innerText=keyvalue;}
        else if ( previousKeyType === 'operator') {
            display.innerText=keyvalue;
        }
        else{display.innerText= displayvalue + keyvalue;}}
        
        // Is this an operator key.
        
        if (type=='operator') {
        
            const currentoperator = calculator.querySelectorAll("[data-state='selected']");
            currentoperator.forEach(e1 => {
             e1.dataset.state = '';   
            });
        calculator.dataset.firstNumber=displayvalue;
        calculator.dataset.operator=keyvalue;
        console.log(event.target);

        key.dataset.state='selected';
        }

        // Is this a result/equals
        
        if(type==='result'){
        const secondnumber = parseFloat(displayvalue);
        const firstNumber = parseFloat(calculator.dataset.firstNumber);
        const operator = calculator.dataset.operator;
        
        display.innerText = calculate(firstNumber,secondnumber,operator);
        console.log(firstNumber,secondnumber,operator);

        }
      if(type==='clear'){

      display.innerText= '0';

      }
        calculator.dataset.previousKeyType = type;
    })
































    function calculate(first,second,oper) {
        let res = ''
switch (oper) {
    case '+':
        res = first+second;
        break;
        case '-':
            res = first-second;
            break;
            case '×':
                res = first*second;
                break;
                case '/':
                    res = first/second;
                    break;
                        
    default:
        break;
}

return res.toFixed(3);
    }