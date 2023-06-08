let numberOne = [];
let numberTwo = [];
let mathStatus = 'nothing';



let changeTypeButton = document.querySelector('#changeNumberType');
let changeTypeButtonText = document.querySelector('#changeNUmberType p');

let clearButton = document.querySelector('#clear');
let clearButtonText = document.querySelector('#clear p');


let deleteButton = document.querySelector('#delete');
let deleteButtonText = document.querySelector('#delete p');


let addition = document.querySelector('#additionSymbol');
let additionText = document.querySelector('#additionSymbol p');

let substraction = document.querySelector('#substractionSymbol');
let substractionText = document.querySelector('#substractionSymbol p');


let multiplication = document.querySelector('#multiplicationSymbol');
let multiplicationText = document.querySelector('#multiplicationSymbol p');


let division = document.querySelector('#divisionSymbol');
let divisionText = document.querySelector('#divisionSymbol p');


let zero = document.querySelector('#zero');
let zeroText = document.querySelector('#zero p');

let one = document.querySelector('#one');
let oneText = document.querySelector('#one p');

let two = document.querySelector('#two');
let twoText = document.querySelector('#two p');

let three = document.querySelector('#three');
let threeText = document.querySelector('#three p');

let four = document.querySelector('#four');
let fourText = document.querySelector('#four p');

let five = document.querySelector('#five');
let fiveText = document.querySelector('#five p');

let six = document.querySelector('#six');
let sixText = document.querySelector('#six p');


let seven = document.querySelector('#seven');
let sevenText = document.querySelector('#seven p');

let eight = document.querySelector('#eight');
let eightText = document.querySelector('#eight p');


let nine = document.querySelector('#nine');
let nineText = document.querySelector('#nine p');


let bigText = document.querySelector('#bigText');
let smallText = document.querySelector('#smallText');


let equalitySymbol = document.querySelector('#equalitySymbol');
let equalitySymbolText = document.querySelector('#equalitySymbol p');


let pointSymbol = document.querySelector('#pointSymbol');
let pointSymbolText = document.querySelector('#pointSymbol');



let calculator =document.querySelector('#mainCalculator');
calculator.addEventListener('click', operation);

document.addEventListener('keydown', (e) =>
	{
console.log(e.key)

	}

)

function operation(e){
console.log(e.target);
switch(e.target){
	case changeTypeButton:
	case changeTypeButtonText:
		if(!numberTwo.join(``)){
		changeNumberType(numberOne);
    numberOne = `${result}`.split('');
		refleshNumberOnPage();
		}
		else{
		changeNumberType(numberTwo);
    numberTwo = `${result}`.split('');
		smallText.innerHTML = `${numberOne.join('')}`;
		showDifferentSymbolsDependingOnMathStatus();
		}
		break;




	case clearButton:
	case clearButtonText:
		numberOne = [];
		numberTwo = [];
		refleshNumberOnPage();
		break;
	



	case deleteButton:
	case deleteButtonText:
    if(!numberTwo.join(``)){
		numberOne.pop();
		refleshNumberOnPage();
		}
		else{
		numberTwo.pop();
		refleshNumberOnPage();
		}
		break;


	case pointSymbol:
	case pointSymbolText:
    if(!numberTwo.join(``)){
		numberOne.push('.');
    refleshNumberOnPage();
		}
		else{
		numberTwo.push('.');
		refleshNumberOnPage();
		}
		break;



	case equalitySymbol:
	case equalitySymbolText:
		if(numberTwo.join(``) && mathStatus == 'addition'){
		addNumbers();
		refleshNumberOnPage();
		mathStatus = 'nothing';
		}
		else if(numberTwo.join(``) && mathStatus == 'substraction'){
		substractNumbers();
		refleshNumberOnPage();
		mathStatus = 'nothing';
		}
		else if(numberTwo.join(``) && mathStatus == 'multiplication'){
		multiplyNumbers();
		refleshNumberOnPage();
		mathStatus = 'nothing';
		}
		else if(numberTwo.join(``) && mathStatus == 'division'){
		divideNumbers();
		refleshNumberOnPage();
		mathStatus = 'nothing';
		}
		break;



	case addition:
	case additionText:
		if(numberTwo.join('') && mathStatus == 'addition'){
		bigText.innerHTML = '+';
		addNumbers();
		smallText.innerHTML = `${numberOne.join('')}`;
		}
		else if(numberOne.join('') && mathStatus == 'nothing'){
    mathStatus = 'addition';
		smallText.innerHTML = `${numberOne.join('')}`;
		bigText.innerHTML = '+';
		}
		break;
	case substraction:
	case substractionText:
		if(numberTwo.join('') && mathStatus == 'substraction'){
		bigText.innerHTML = '-';
		substractNumbers();
		smallText.innerHTML = `${numberOne.join('')}`;
		}
		else if(numberOne.join('') && mathStatus == 'nothing'){
    mathStatus = 'substraction';
		smallText.innerHTML = `${numberOne.join('')}`;
		bigText.innerHTML = '-';
		}
		break;
	case multiplication:
	case multiplicationText:
		if(numberTwo.join('') && mathStatus == 'multiplication'){
		bigText.innerHTML = 'x';
		multiplyNumbers();
		smallText.innerHTML = `${numberOne.join('')}`;
		}
		else if(numberOne.join('') && mathStatus == 'nothing'){
    mathStatus = 'multiplication';
		smallText.innerHTML = `${numberOne.join('')}`;
		bigText.innerHTML = 'x';
		}
		break;
	case division:
	case divisionText:
		if(numberTwo.join('') && mathStatus == 'division'){
		bigText.innerHTML = '%';
		divideNumbers();
		smallText.innerHTML = `${numberOne.join('')}`;
		}
		else if(numberOne.join('') && mathStatus == 'nothing'){
    mathStatus = 'division';
		smallText.innerHTML = `${numberOne.join('')}`;
		bigText.innerHTML = '%';
		}
		break;



	case zero:
	case zeroText:
		pushAndReflesh(0);
		break;


	case one:
	case oneText:
		pushAndReflesh(1);
		break;

	case two:
	case twoText:
		pushAndReflesh(2);
		break;


	case three:
	case threeText:
		pushAndReflesh(3);
		break;


	case four:
	case fourText:
		pushAndReflesh(4);
		break;


	case five:
	case fiveText:
		pushAndReflesh(5);
		break;

	case six:
	case sixText:
		pushAndReflesh(6);
		break;

	case seven:
	case sevenText:
		pushAndReflesh(7);
		break;
		

	case eight:
	case eightText:
		pushAndReflesh(8);
		break;


	case nine:
	case nineText:
		pushAndReflesh(9);
		break;
	  	
		}
}
















function showDifferentSymbolsDependingOnMathStatus(){
if(mathStatus == 'nothing'){
showSymbolOnBigNumber();
bigText.innerHTML = `${numberTwo.join('')}`;
}
else if(mathStatus == 'addition'){
showSymbolOnBigNumber('+');
}
else if(mathStatus == 'substraction'){
showSymbolOnBigNumber('-');
}
else if(mathStatus == 'multiplication'){
showSymbolOnBigNumber('x');
}
else if(mathStatus == 'division'){
showSymbolOnBigNumber('%');
}

}


function showSymbolOnBigNumber(symbol = ''){
bigText.innerHTML = `${symbol}${numberTwo.join('')}`;
}





function pushAndReflesh(numberToPush){

if(mathStatus == 'nothing'){
numberOne.push(numberToPush);
refleshNumberOnPage();
}
else if(mathStatus == 'addition'){
numberTwo.push(numberToPush);
refleshNumberOnPage('+');
}
else if(mathStatus == 'substraction'){
numberTwo.push(numberToPush);
refleshNumberOnPage('-');
}
else if(mathStatus == 'multiplication'){
numberTwo.push(numberToPush);
refleshNumberOnPage('x');
}
else if(mathStatus == 'division'){
numberTwo.push(numberToPush);
refleshNumberOnPage('%');
}

}


function refleshNumberOnPage(symbol = ''){
if(!symbol){
bigText.innerHTML = `${numberOne.join('')}`;
}
else{
bigText.innerHTML = `${symbol}${numberTwo.join('')}`;
smallText.innerHTML = `${numberOne.join('')}`;

}

}





let result;

function changeNumberType(number){
if(Number(number.join('')) >= 0){
result = 0 - Number(number.join(''));
//numberOne = `${result}`.split('');
}
else if(Number(number.join('')) < 0){
number.shift();
result = 0 + Number(number.join(''));
//number = `${result}`.split('');
}

}

function addNumbers(){
result = Number(numberOne.join('')) + Number(numberTwo.join(''));
numberOne = `${result}`.split('');
numberTwo = [];
}

function substractNumbers(){
result = Number(numberOne.join('')) - Number(numberTwo.join(''));
numberOne = `${result}`.split('');
numberTwo = [];
}

function multiplyNumbers(){
result = Number(numberOne.join('')) * Number(numberTwo.join(''));
numberOne = `${result}`.split('');
numberTwo = [];
}


function divideNumbers(){
result = Number(numberOne.join('')) / Number(numberTwo.join(''));
numberOne = `${result}`.split('');
numberTwo = [];
}
