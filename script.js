function addNumber(input) {
    var num = parseInt(input.id);
    console.log(num);
    total = total * 10 + num;
    console.log("total", total);
    document.getElementById("total").innerHTML = total;
}

function del() {
    total = Math.floor(total/10);
    document.getElementById("total").innerHTML = total;
}

function ac() {
    total = 0;
    num1 = null;
    op = null;
    document.getElementById("total").innerHTML = total;
}

function operation(input) {
    // gimana kalau misalnya udah mencep operational lebih dari sekali, berarti bikin case defaultnya operation itu + kalik entahlah
    // if (total == 0) {
    //     op = input.id;
    // } 
    if (op == null) {
        num1 = total;
        total = 0;
        op = input.id;
    } else if (op != null) {
        num1 = calculate(num1, total, op);
    }
    total = 0;
    op = input.id;
    document.getElementById("total").innerHTML = total;
}

function equal() {
    total = calculate(num1, total, op);
    document.getElementById("total").innerHTML = total;
}

function calculate(x, y, ope) {
    var result;
    switch(ope) {
        case "/":
            result = x/y;
            break;
        case "*":
            result = x*y;
            break;
        case "+":
            result = x+y;
            break;
        case "-":
            result = x-y;
            break;
        default:
            break;
    }
    return result;
}

var num1 = null;
var op = null;
var total = 0;
document.getElementById("total").innerHTML = total;