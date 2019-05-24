import operate from './operate'

export function calculate(calculator, buttonName) {
    switch (buttonName) {
        case 'AC':
            calculator.total = null;
            calculator.next = null;
            calculator.operation = null
            break;
        case '+/-':
            calculator.total = calculator.total * -1
            break;
        case '/':
            calculator.operation = '/'
            calculator.total = calculator.next;
            calculator.next = ""
            break;
        case 'X':
            calculator.operation = 'X'
            calculator.total = calculator.next;
            calculator.next = ""
            break
        case '-':
            calculator.operation = '-'
            calculator.total = calculator.next;
            calculator.next = ""
            break
        case '+':
            calculator.operation = '+'
            calculator.total = calculator.next;
            calculator.next = ""
            break
        case '=':
            calculator.total = operate(calculator.total, calculator.next, calculator.operation);
            calculator.next = ""
            calculator.operation = '='
            break;
        default:
            if (isNaN(calculator.total)) {
                calculator.total = null;
            }

            calculator.next === null ? calculator.next = buttonName : calculator.next = calculator.next + buttonName
    }
    return calculator;
}
