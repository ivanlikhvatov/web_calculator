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
var isEquationResult = false;

var currentNotation = DECIMAL;

var operationSymbolsArray = ["/", "*", "-", "+", "."];
var notationOperationsArray = ["10 -> 2", "2 -> 10", "16 -> 10", "10 -> 16", "16 -> 2"];

var delZeroPattern = "/.*/0[.]*[0]*[/*\\-+].*/";

var input;
var keys = [];

$(document).ready(function() {

    $(BUTTON).click(function() {
        entry = $(this).attr(VALUE_ATTRIBUTE);
		onModeSelected();
    })

    input = document.querySelector('input');
    input.addEventListener('keyup', onKeyUp);
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

	if (entry === "=") {
		if (isEquationMode) {
			solveEquation();
		} else {
			solveNumbersOperation();
		}
	}

	if (!isNaN(entry)) {
		processNumber();
	} else {
		processWord();
	}

	if (operationSymbolsArray.indexOf(entry) !== -1 && !isEquationMode) {
		addOperationSymbolOrPoint();
	}

	if (notationOperationsArray.indexOf(entry) !== -1 && !isEquationMode) {
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
	if (!isEquationMode) {
        return;
    }

	input.value = "";
	input.placeholder = "Нажмите здесь, чтобы использовать клавиатуру";

    keys.push(key.code);
}

function onKeyUp(key) {
    if (!isEquationMode) {
        return;
    }

	if (keys[0] === 'ShiftLeft') {
		if (keys[1] === 'Digit6') {
			entry = "^";
			keys.length = 0;
			onModeSelected();
			return;
		} else if (keys[1] === 'Equal') {
			entry = "+";
			keys.length = 0;
			onModeSelected();
			return;
		} else if (keys[1] === 'Digit8') {
			entry = "*";
			keys.length = 0;
			onModeSelected();
			return;
		}
	}

	keys.length = 0;

	switch (key.code) {
		case 'Digit0': {
			entry = 0;
			break;
		}

		case 'Digit1': {
			entry = 1;
			break;
		}

		case 'Digit2': {
			entry = 2;
			break;
		}

		case 'Digit3': {
			entry = 3;
			break;
		}

		case 'Digit4': {
			entry = 4;
			break;
		}

		case 'Digit5': {
			entry = 5;
			break;
		}

		case 'Digit6': {
			entry = 6;
			break;
		}

		case 'Digit7': {
			entry = 7;
			break;
		}

		case 'Digit8': {
			entry = 8;
			break;
		}

		case 'Digit9': {
			entry = 9;
			break;
		}

		case 'KeyX': {
			entry = "x";
			break;
		}

		case 'Minus': {
			entry = "-";
			break;
		}

		case 'Backspace': {
			entry = "ce";
			break;
		}

		case 'Slash': {
			entry = "/";
			break;
		}

		default: {
			entry = "";
			break;
		}
	}

	onModeSelected();
}

function deleteAll() {
	isEquationMode = false;
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

function solveEquation() {
	if (!isEquationMode) {
		return;
	}

	let findXSquare = -1;

	for (let i = 0; expression[i] !== "x" && expression[i + 1] !== "^" && expression[i + 2] !== "2"; i++) {
		findXSquare = i;
	}

	console.log("findXSquare = " + findXSquare);

	let ax = "";

	if (expression[0] === "x" && expression[1] === "^" && expression[2] === "2") {
		findXSquare = 0;
		ax = "1";
	} else {
		for (let i = 0; i <= findXSquare; i++) {
			if (expression[i] === "+" || expression[i] === "*" || expression[i] === "/") {
				continue;
			}

			ax += expression[i];
		}
	}

	if (findXSquare == -1) {
		$('#result p').html("Отсутствует x^2");
		expression += "=" + result;
		$('#previous p').html(expression);
		expression = result;
		entry = result;
		currentNumber = result;
		reset = true;
		return;
	}

	console.log(ax);

	let findX = -1;

	for (let i = findXSquare + 2; expression[i] !== "x"; i++) {
		findX = i;
	}

	console.log("findX = " + findX);

	let bx = "";

	if (expression[findXSquare + 4] === "x") {
		findX = 0;
		bx = "1";
	} else {
		for (let i = findXSquare + 4; i <= findX; i++) {
			if (expression[i] === "+" || expression[i] === "*" || expression[i] === "/") {
				continue;
			}

			bx += expression[i];
		}
	}

	if (findX == -1) {
		$('#result p').html("Отсутствует x");
		expression += "=" + result;
		$('#previous p').html(expression);
		expression = result;
		entry = result;
		currentNumber = result;
		reset = true;
		return;
	}

	console.log(bx);

	let findC = -1;

	for (let i = findX; i < expression.length; i++) {
		findC = i;
	}

	if (findC == -1) {
		$('#result p').html("Отсутствует свободный член C");
		expression += "=" + result;
		$('#previous p').html(expression);
		expression = result;
		entry = result;
		currentNumber = result;
		reset = true;
		return;
	}

	let c = "";

	for (let i = findX + 2; i <= findC; i++) {
		if (expression[i] === "+" || expression[i] === "*" || expression[i] === "/") {
			continue;
		}

		c += expression[i];
	}

	console.log(parseInt(c, 10));

	let d;

	d = parseInt(bx, 10) * parseInt(bx, 10) - 4 * parseInt(ax, 10) * parseInt(c, 10);

	console.log(parseInt(d, 10));

	let r1, r2;

	if (d < 0) {
		result = "Нет корней";
	} else if (d == 0) {
		r1 = (-parseInt(bx, 10) + Math.sqrt(d)) / (2 * parseInt(ax, 10));
		result = "x = " + r1.toFixed(2);
	} else {
		r1 = (-parseInt(bx, 10) + Math.sqrt(d)) / (2 * parseInt(ax, 10));
		r2 = (-parseInt(bx, 10) - Math.sqrt(d)) / (2 * parseInt(ax, 10));
		result = "x1 = " + r1.toFixed(2) + ", x2 = " + r2.toFixed(2);
	}

	console.log(result);

	$('#result p').html(result);
	expression += "=" + result;
	$('#previous p').html(expression);
	expression = result;
    entry = result;
    currentNumber = result;
    reset = true;
	isEquationResult = true;
}

function solveNumbersOperation() {
    //TODO сделать проверку при делении на ноль (0./0.0; 0./0.; )

    if (!isExpressionValid()){
        return;
    }

	console.log(expression);
    result = eval(expression);
	console.log(result);
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
			console.log("1 exp " + expression);
			console.log("1 entry " + entry);
        } else {
            currentNumber = "";
            //expression += entry;
			console.log("2 exp " + expression);
			console.log("2 entry " + entry);
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

function processWord() {

    if (currentNumber.length > 0 && currentNumber[currentNumber.length - 1] === "0" && entry === "0" && currentNumber.indexOf(".") === -1){
        return;
    }

    //console.log(entry !== "0")
    //console.log(currentNumber.indexOf("."))

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

function processNumber() {

    if (currentNumber.length > 0 && currentNumber[currentNumber.length - 1] === "0" && entry === "0" && currentNumber.indexOf(".") === -1){
        return;
    }

    //console.log(entry !== "0")
    //console.log(currentNumber.indexOf("."))

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

	if (isEquationResult) {
		isEquationResult = false;
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