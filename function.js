let numberOne = [];
let numberTwo = [];
let mathStatus = 'nothing';


let addition = document.querySelector('#additionSymbol');
let additionText = document.querySelector('#additionSymbol p');

let substraction = document.querySelector('#substractionSymbol');
let substractionText = document.querySelector('#substractionSymbol p');


let multiplication = document.querySelector('#multiplicationSymbol');
let multiplicationText = document.querySelector('#multiplicationSymbol p');


let division = document.querySelector('#divisionSymbol');
let divisionText = document.querySelector('#divisionSymbol p');




let changeTypeButton = document.querySelector('#changeNumberType');
let changeTypeButtonText = document.querySelector('#changeNumberType p');

let clearButton = document.querySelector('#clear');
let clearButtonText = document.querySelector('#clear p');


let deleteButton = document.querySelector('#delete');
let deleteButtonText = document.querySelector('#delete p');


let equalitySymbol = document.querySelector('#equalitySymbol');
let equalitySymbolText = document.querySelector('#equalitySymbol p');


let pointSymbol = document.querySelector('#pointSymbol');
let pointSymbolText = document.querySelector('#pointSymbol');




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










let calculator =document.querySelector('#mainCalculator');
calculator.addEventListener('click', operationWithClick);

document.addEventListener('keydown', operationWithKeyboard)










function operationWithKeyboard(e){
console.log(e.key);
switch(e.key){

	case 'F2':
		changeNumberTypeAndRefleshPage();
		break;


	case 'F1':
		clearBothNumbersAndRefleshPage();
		break;
	

	case 'Backspace':
		deteleLastNumberAndReflesh();
		break;


	case '.':
		pushAndReflesh(`.`);
		break;


	case '=':
	case 'Enter':
		makeCalculationDependingOnMathStatus();
		break;
		





	case '+':
		if(numberTwo.join('') && mathStatus == 'addition'){
    makeCalculationAndUpdateNumber('+');
		}
		else if(numberOne.join('') && mathStatus == 'nothing'){
    changeMathStatusAndUpdateNumber('+');
		}
		break;


	case '-':
		if(numberTwo.join('') && mathStatus == 'substraction'){
    makeCalculationAndUpdateNumber('-');
		}
		else if(numberOne.join('') && mathStatus == 'nothing'){
    changeMathStatusAndUpdateNumber('-');
		}
		break;


	case '*':
	case 'x':
		if(numberTwo.join('') && mathStatus == 'multiplication'){
    makeCalculationAndUpdateNumber('x');
		}
		else if(numberOne.join('') && mathStatus == 'nothing'){
    changeMathStatusAndUpdateNumber('x');
		}
		break;

		
	case '%':
	case '/':
		if(numberTwo.join('') && mathStatus == 'division'){
    makeCalculationAndUpdateNumber('%');
		}
		else if(numberOne.join('') && mathStatus == 'nothing'){
    changeMathStatusAndUpdateNumber('%');
		}
		break;



	case '0':
		pushAndReflesh(0);
		break;

	case '1':
		pushAndReflesh(1);
		break;

	case '2':
		pushAndReflesh(2);
		break;

	case '3':
		pushAndReflesh(3);
		break;

	case '4':
		pushAndReflesh(4);
		break;

	case '5':
		pushAndReflesh(5);
		break;

	case '6':
		pushAndReflesh(6);
		break;

	case '7':
	case sevenText:
		pushAndReflesh(7);
		break;
		
	case '8':
		pushAndReflesh(8);
		break;

	case '9':
		pushAndReflesh(9);
		break;
	  	
		}
}









function operationWithClick(e){
console.log(e.target);
switch(e.target){

	case changeTypeButton:
	case changeTypeButtonText:
		changeNumberTypeAndRefleshPage();
		break;


	case clearButton:
	case clearButtonText:
		clearBothNumbersAndRefleshPage();
		break;
	

	case deleteButton:
	case deleteButtonText:
		deteleLastNumberAndReflesh();
		break;


	case pointSymbol:
	case pointSymbolText:
		pushAndReflesh(`.`);
		break;


	case equalitySymbol:
	case equalitySymbolText:
		makeCalculationDependingOnMathStatus();
		break;
		





	case addition:
	case additionText:
		if(numberTwo.join('') && mathStatus == 'addition'){
    makeCalculationAndUpdateNumber('+');
		}
		else if(numberOne.join('') && mathStatus == 'nothing'){
    changeMathStatusAndUpdateNumber('+');
		}
		break;


	case substraction:
	case substractionText:
		if(numberTwo.join('') && mathStatus == 'substraction'){
    makeCalculationAndUpdateNumber('-');
		}
		else if(numberOne.join('') && mathStatus == 'nothing'){
    changeMathStatusAndUpdateNumber('-');
		}
		break;


	case multiplication:
	case multiplicationText:
		if(numberTwo.join('') && mathStatus == 'multiplication'){
    makeCalculationAndUpdateNumber('x');
		}
		else if(numberOne.join('') && mathStatus == 'nothing'){
    changeMathStatusAndUpdateNumber('x');
		}
		break;

		
	case division:
	case divisionText:
		if(numberTwo.join('') && mathStatus == 'division'){
    makeCalculationAndUpdateNumber('%');
		}
		else if(numberOne.join('') && mathStatus == 'nothing'){
    changeMathStatusAndUpdateNumber('%');
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




function changeNumberTypeAndRefleshPage(){
if(!numberTwo.join(``)){
changeNumberType(numberOne);
numberOne = `${result}`.split('');
refleshNumberOnPage();
}
else{
changeNumberType(numberTwo);
numberTwo = `${result}`.split('');
smallText.innerHTML = `${numberOne.slice(0,16).join('')}`;
showDifferentSymbolsDependingOnMathStatus();
}


}


function deteleLastNumberAndReflesh(){
if(!numberTwo.join(``)){
numberOne.pop();
refleshNumberOnPage();
}
else{
numberTwo.pop();
refleshNumberOnPage();
}
}


function clearBothNumbersAndRefleshPage(){
numberOne = [];
numberTwo = [];
refleshNumberOnPage('', empty = true);
}

function changeMathStatusAndUpdateNumber(mathType){
switch(mathType){
	case '+':
  mathStatus = 'addition';
	smallText.innerHTML = `${numberOne.slice(0,16).join('')}`;
	bigText.innerHTML = '+';

	break;

	case '-':
  mathStatus = 'substraction';
	smallText.innerHTML = `${numberOne.slice(0,16).join('')}`;
	bigText.innerHTML = '-';
	break;

	case 'x':
  mathStatus = 'multiplication';
	smallText.innerHTML = `${numberOne.slice(0,16).join('')}`;
	bigText.innerHTML = 'x';
	break;

	case '%':
  mathStatus = 'division';
	smallText.innerHTML = `${numberOne.slice(0,16).join('')}`;
	bigText.innerHTML = '%';
	break;
}


}


function makeCalculationDependingOnMathStatus(){
if(numberTwo.join(``)){
switch(mathStatus){
	case 'addition':
		calculateAndRefleshNumberAndRestartMathStatus('+');
		break;
	case 'substraction':
		calculateAndRefleshNumberAndRestartMathStatus('-');
		break;
	case 'multiplication':
		calculateAndRefleshNumberAndRestartMathStatus('x');
		break;
	case 'division':
		calculateAndRefleshNumberAndRestartMathStatus('%');
		break;
}
}
}


function calculateAndRefleshNumberAndRestartMathStatus(mathType){
switch(mathType){
	case '+':
	addNumbers();
	refleshNumberOnPage();
	mathStatus = 'nothing';
	break;

	case '-':
	substractNumbers();
	refleshNumberOnPage();
	mathStatus = 'nothing';
	break;

	case 'x':
	multiplyNumbers();
	refleshNumberOnPage();
	mathStatus = 'nothing';
	break;

	case '%':
	divideNumbers();
	refleshNumberOnPage();
	mathStatus = 'nothing';
	break;
}
}



function makeCalculationAndUpdateNumber(mathType){
switch(mathType){
	case '+':
  bigText.innerHTML = `${mathType}`;
  addNumbers();
  smallText.innerHTML = `${numberOne.slice(0,16).join('')}`;
	break;

	case '-':
  bigText.innerHTML = `${mathType}`;
  substractNumbers();
  smallText.innerHTML = `${numberOne.slice(0,16).join('')}`;
	break;

	case 'x':
  bigText.innerHTML = `${mathType}`;
  multiplyNumbers();
  smallText.innerHTML = `${numberOne.slice(0,16).join('')}`;
	break;

	case '%':
  bigText.innerHTML = `${mathType}`;
  divideNumbers();
  smallText.innerHTML = `${numberOne.slice(0,16).join('')}`;
	break;
}
}









function showDifferentSymbolsDependingOnMathStatus(){
if(mathStatus == 'nothing'){
showSymbolOnBigNumber();
bigText.innerHTML = `${numberTwo.slice(0,16).join('')}`;
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
bigText.innerHTML = `${symbol}${numberTwo.slice(0,16).join('')}`;
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


function refleshNumberOnPage(symbol = '', empty= false){
if(!symbol){
bigText.innerHTML = `${numberOne.slice(0,16).join('')}`;
}
else{
bigText.innerHTML = `${symbol}${numberTwo.slice(0,16).join('')}`;
smallText.innerHTML = `${numberOne.slice(0,16).join('')}`;

}
if(empty){
bigText.innerHTML = ``;
smallText.innerHTML = ``;

}

}





let result;

function changeNumberType(number){
if(Number(number.join('')) >= 0){
result = 0 - Number(number.join(''));
}
else if(Number(number.join('')) < 0){
number.shift();
result = 0 + Number(number.join(''));
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
