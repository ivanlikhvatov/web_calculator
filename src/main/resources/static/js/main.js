const BINARY = "binary";
const DECIMAL = "decimal";
const HEXADECIMAL = "hexadecimal";

const PI_VALUE = "3.1415";
const EXP_VALUE = " 2.7182"

const BUTTON = "button";
const VALUE_ATTRIBUTE = "value";

var expression = "0";
var entry = "";
var currentNumber = "0";
var result = "0";
var reset = false;
var isEquationMode = false;

var currentNotation = DECIMAL;

var operationSymbolsArray = ["/", "*", "-", "+", "."];
var notationOperationsArray = ["10 -> 2", "2 -> 10", "16 -> 10", "10 -> 16", "16 -> 2"];

var delZeroPattern = "/.*/0[.]*[0]*[/*\\-+].*/";

var eq;

$(document).ready(function() {

    //eq = document.getElementById('eq');
    //eq.onkeydown = onKeyDown;

    $(BUTTON).click(function() {
        entry = $(this).attr(VALUE_ATTRIBUTE);
		onModeSelected();
    })

    var input = document.querySelector('input');
    input.addEventListener('keydown', onKeyDown);
})

function onModeSelected() {
	if (entry === "ac") {
		deleteAll();
		return;
	}

	if (entry === "ce") {
		deleteLastNum();
		return;
	}

	if (entry === "pi" || entry === "exp") {
		addConstNumber();
		return;
	}

	if (currentNotation !== DECIMAL && notationOperationsArray.indexOf(entry) === -1) {
		alert("Сначала переведите число в десятичную сс");
		return;
	}

	if (!isNaN(entry)) {
		processNumber();
	}

	if (entry === "="){
		solveNumbersOperation();
	}

	if (operationSymbolsArray.indexOf(entry) !== -1) {
		addOperationSymbolOrPoint();
	}

	if (notationOperationsArray.indexOf(entry) !== -1) {
		changeNotation();
	}

    if (entry === "solve-equation") {
        if (!isEquationMode) {
            alert('Включен режим уравнений. Используйте ввод с клавиатуры')
            isEquationMode = true;
        } else {
            alert('Включен обычный режим.')
            isEquationMode = false;
        }
    }

	checkExpressionLength();

	if (result.indexOf(".") !== -1) {
		result = result.truncate()
	}
}

function onKeyDown(key) {
    /*if (!isEquationMode) {
        return;
    }*/

	switch (key.code) {
		case "Digit1": {
			entry = 1;
		}

		default: {
            entry = 5;
        }
	}

    alert(entry)

	onModeSelected();
}

function deleteAll() {
    entry = "0";
    expression = "0";
    result = "0";
    currentNumber = "0";
    currentNotation = DECIMAL;
    $('#result p').html(entry);
    $('#previous p').html(expression);
}

function deleteLastNum() {
    if (currentNotation !== DECIMAL) {
        alert("Сначала переведите в десятичную сс");
        return;
    }

    const lastSymbol = expression[expression.length - 1]

    if (operationSymbolsArray.indexOf(lastSymbol) !== -1) {
        return;
    }

    if (expression.length > 1) {
        expression = expression.slice(0, -1);
        $('#previous p').html(expression);
    } else {
        expression = "0";
        $('#result p').html("");
    }

    $('#previous p').html(expression);

    if (currentNumber.length > 1) {
        currentNumber = currentNumber.slice(0, -1);
        $('#result p').html(currentNumber);
    }
    else {
        currentNumber = "0";
        $('#result p').html("0");
    }
}

function solveNumbersOperation() {
    //TODO сделать проверку при делении на ноль (0./0.0; 0./0.; )

    if(!isExpressionValid()){
        return;
    }


    result = eval(expression);
    $('#result p').html(result);
    expression += "="+result;
    $('#previous p').html(expression);
    expression = result;
    entry = result;
    currentNumber = result;
    reset = true;
}

function addOperationSymbolOrPoint() {
    if (entry !== ".") {
        reset = false;
        if ((currentNumber === 0 || expression === 0 || currentNumber === "0" || expression === "0") && entry === "-") {
        // if (currentNumber === 0 || expression === 0) {
            currentNumber = "";
            expression = entry;
        }
        else {
            currentNumber = "";
            expression += entry;
        }

        if (expression === entry ) {
            $('#result p').html(expression);
        }

        $('#previous p').html(expression);
    }
    else if (currentNumber.indexOf(".") === -1) {
        reset = false;
        if (currentNumber === 0 || expression === 0) {
            currentNumber = 0.;
            expression = 0.;
        }
        else {
            currentNumber += entry;
            expression += entry;
        }
        $('#result p').html(currentNumber);
        $('#previous p').html(expression);
    }
}

function processNumber() {

    if (currentNumber.length > 0 && currentNumber[currentNumber.length - 1] === "0" && entry === "0" && currentNumber.indexOf(".") === -1){
        return;
    }

    console.log(entry !== "0")
    console.log(currentNumber.indexOf("."))

    if (currentNumber.length > 0 && currentNumber[currentNumber.length - 1] === "0" && !isNaN(entry) && entry !== "0" && currentNumber.indexOf(".") === -1){
        currentNumber = "";
        if (expression.length <= 1) {
            expression = "";
        }
    }

    if (reset) {
        expression = entry;
        currentNumber = entry;
        reset = false;
    } else {

        if (expression === "-"){
            expression += entry;
            currentNumber = expression;
        } else {
            expression += entry;
            currentNumber += entry;
        }

    }

    $('#previous p').html(expression);
    $('#result p').html(currentNumber);

    // console.log("currentNumber: " + currentNumber)
}

function addConstNumber() {
    if (currentNumber.length !== 0){
        expression = expression.slice(0, -(currentNumber.length));
    }

    if (entry === "pi") {
        currentNumber = PI_VALUE;
        expression += PI_VALUE;
    } else {
        currentNumber = EXP_VALUE;
        expression += EXP_VALUE;
    }


    $('#result p').html(currentNumber);
    $('#previous p').html(expression);
}

function checkExpressionLength() {
    if (currentNotation !== DECIMAL) {
        return;
    }

    if (currentNumber.length > 10 || expression.length > 26) {
        $("#result p").html("0");
        $("#previous p").html("Too many digits");
        currentNumber ="";
        expression="";
        result ="";
        reset=true;
    }
}

function changeNotation() {
    var lastElem = expression[expression.length - 1];

    if (operationSymbolsArray.indexOf(lastElem) !== -1) {
        alert("Сначала запишите число которое хотите перевести")
        return;
    }

    if (entry === "10 -> 2") {
        convertDecimalToBinary();
        return;
    }

    if (entry === "2 -> 10") {
        convertBinaryToDecimal();
        return;
    }

    if (entry === "16 -> 10") {
        convertHexadecimalToDecimal();
        return;
    }

    if (entry === "10 -> 16") {
        convertDecimalToHexadecimal();
        return;
    }

    if (entry === "16 -> 2") {
        convertHexadecimalToBinary();
        return;
    }
}

function convertDecimalToBinary() {
    if (currentNotation !== DECIMAL) {
        return;
    }

    result = (parseFloat(currentNumber)).toString(2);
    entry = result;
    currentNumber = result;
    currentNotation = BINARY;
    $('#result p').html(result);
}

function convertBinaryToDecimal() {
    if (currentNotation !== BINARY) {
        alert("Данное число не двоичное");
        return;
    }

    result = convertToDecimal(currentNumber, 2);

    entry = result;
    currentNumber = result;
    currentNotation = DECIMAL;
    $('#result p').html(result);
}

function convertHexadecimalToDecimal() {
    if (currentNotation !== HEXADECIMAL) {
        alert("Данное число не шестнадцатиричное");
        return;
    }

    result = convertToDecimal(currentNumber, 16);

    entry = result;
    currentNumber = result;
    currentNotation = DECIMAL;
    $('#result p').html(result);
}

function convertDecimalToHexadecimal() {
    if (currentNotation !== DECIMAL) {
        alert("Данное число не десятичное");
        return;
    }

    result = (parseFloat(currentNumber)).toString(16);

    entry = result;
    currentNumber = result;
    currentNotation = HEXADECIMAL;
    $('#result p').html(result);
}

function convertHexadecimalToBinary() {
    if (currentNotation !== HEXADECIMAL) {
        alert("Данное число не шестнадцатиричное");
        return;
    }

    var decimalNum = convertToDecimal(currentNumber, 16);
    result = (parseFloat(decimalNum)).toString(2);

    entry = result;
    currentNumber = result;
    currentNotation = BINARY;
    $('#result p').html(result);
}

function convertToDecimal(value, base = 2) {
    var [integer, fraction = ''] = value.toString().split('.');

    return parseInt(integer, base) + (integer[0] !== '-' || -1) * fraction
        .split('')
        .reduceRight((r, a) => (r + parseInt(a, base)) / base, 0);
}


function isExpressionValid() {
    const lastSymbol = expression[expression.length - 1]

    if (operationSymbolsArray.indexOf(lastSymbol) !== -1) {
        return false;
    }

    var tmp = expression;

    if (tmp.match( "^.*/0[.]*[0]*$") !== null || tmp.match( ".*/0[.]*[0]*[+\\-*/]") !== null) {
        deleteAll();
        $('#result p').html("Король расстроен :-(");
        $('#previous p').html("Делить на ноль запрещено законами королевства!");
        return false;
    }

    return true;
}