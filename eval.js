
/**
 * 解析 String 表达式，并执行（仅支持计算器）
 * @param {*} expr A String
 */
const evaluate = (expr) => {
    let tokens = []
    let index = 0;
    let numberTemp = ''
    while(index < expr.length) {
        const r = expr.charAt(index);
        if (isNumber(r) || r == '.') {
            numberTemp += r
        } else {
            if (numberTemp !== '') {
                tokens.push(parseInt(numberTemp))
                numberTemp = ''
            }
            if (['+', '-', '*', '/'].indexOf(r) > -1) {
                tokens.push(r)
            }
        }
        if (index == expr.length - 1 && numberTemp !== '') {
            tokens.push(parseInt(numberTemp))
        }
        index++;
    }
    // return tokens;
    let result = 0;
    let i = 0;
    if (['+', '-', '*', '/'].indexOf(tokens[0]) < 0) { // index0 is number
        result = tokens[0]
        i = 1;
    }
    for (; i < tokens.length; i+=2) {
        switch(tokens[i]) {
            case '+': result += tokens[i+1]; break;
            case '-': result -= tokens[i+1]; break;
            case '*': result *= tokens[i+1]; break;
            case '/': result /= tokens[i+1]; break;
        }
    }
    return result;
}

const isNumber = (r) => {
    return r >= '0' && r <= '9';
    // return r == '1' || r == '2' || r == '3' || r == '4' || r == '5' || r == '6' || r == '7' || r == '8' || r == '9' || r == '0'
}

console.log(evaluate("1+1+77/79"))
