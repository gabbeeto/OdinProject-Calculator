let numberOne = [];
let numberTwo = [];
let mathStatus = 'nothing';

let calculator =document.querySelector('#mainCalculator');
calculator.addEventListener('click', operation);


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




let seven = document.querySelector('#seven') 
let sevenText = document.querySelector('#seven p');

let bigText = document.querySelector('#bigText');
let smallText = document.querySelector('#smallText');


let equalitySymbol = document.querySelector('#equalitySymbol');
let equalitySymbolText = document.querySelector('#equalitySymbol p');


let pointSymbol = document.querySelector('#pointSymbol');
let pointSymbolText = document.querySelector('#pointSymbol');



function operation(e){
console.log(e.target);
switch(e.target){
	case changeTypeButton:
	case changeTypeButtonText:
		if(!numberTwo.join(``)){
		changeNumberType(numberOne);
    numberOne = `${result}`.split('');
		smallText.innerHTML = `${numberOne.join('')}`;
		bigText.innerHTML = `${numberTwo.join('')}`;
		}
		else{
		changeNumberType(numberTwo);
    numberTwo = `${result}`.split('');
		smallText.innerHTML = `${numberOne.join('')}`;
		if(mathStatus == 'nothing'){
		bigText.innerHTML = `${numberTwo.join('')}`;
		}
		else if(mathStatus == 'addition'){
		bigText.innerHTML = `+${numberTwo.join('')}`;
		}
		else if(mathStatus == 'substraction'){
		bigText.innerHTML = `-${numberTwo.join('')}`;
		}
		else if(mathStatus == 'multiplication'){
		bigText.innerHTML = `x${numberTwo.join('')}`;
		}
		else if(mathStatus == 'division'){
		bigText.innerHTML = `/${numberTwo.join('')}`;
		}
		}
		break;




	case clearButton:
	case clearButtonText:
		numberOne = [];
		numberTwo = [];
		smallText.innerHTML = `${numberOne.join('')}`;
		bigText.innerHTML = `${numberTwo.join('')}`;
		break;
	



	case deleteButton:
	case deleteButtonText:
    if(!numberTwo.join(``)){
		numberOne.pop();
		smallText.innerHTML = `${numberOne.join('')}`;
		bigText.innerHTML = `${numberTwo.join('')}`;
		}
		else{
		numberTwo.pop();
		smallText.innerHTML = `${numberOne.join('')}`;
		bigText.innerHTML = `${numberTwo.join('')}`;
		}
		break;


	case pointSymbol:
	case pointSymbolText:
    if(!numberTwo.join(``)){
		numberOne.push('.');
		smallText.innerHTML = `${numberOne.join('')}`;
		bigText.innerHTML = `${numberTwo.join('')}`;
		}
		else{
		numberTwo.push('.');
		smallText.innerHTML = `${numberOne.join('')}`;
		bigText.innerHTML = `${numberTwo.join('')}`;
		}
		break;



	case equalitySymbol:
	case equalitySymbolText:
		if(numberTwo.join(``) && mathStatus == 'addition'){
		addNumbers();
		smallText.innerHTML = `${numberOne.join('')}`;
		bigText.innerHTML = `${numberTwo.join('')}`;
		mathStatus = 'nothing';
		}
		else if(numberTwo.join(``) && mathStatus == 'substraction'){
		substractNumbers();
		smallText.innerHTML = `${numberOne.join('')}`;
		bigText.innerHTML = `${numberTwo.join('')}`;
		mathStatus = 'nothing';
		}
		else if(numberTwo.join(``) && mathStatus == 'multiplication'){
		multiplyNumbers();
		smallText.innerHTML = `${numberOne.join('')}`;
		bigText.innerHTML = `${numberTwo.join('')}`;
		mathStatus = 'nothing';
		}
		else if(numberTwo.join(``) && mathStatus == 'division'){
		divideNumbers();
		smallText.innerHTML = `${numberOne.join('')}`;
		bigText.innerHTML = `${numberTwo.join('')}`;
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




	case seven:
	case sevenText:
		if(mathStatus == 'nothing'){
		numberOne.push(7);
		bigText.innerHTML = `${numberOne.join('')}`;
		smallText.innerHTML = `${numberTwo.join('')}`;
		}
	  else if(mathStatus == 'addition'){
		numberTwo.push(7);
		bigText.innerHTML = `+${numberTwo.join('')}`;
		smallText.innerHTML = `${numberOne.join('')}`;
		}
	  else if(mathStatus == 'substraction'){
		numberTwo.push(7);
		bigText.innerHTML = `-${numberTwo.join('')}`;
		smallText.innerHTML = `${numberOne.join('')}`;
		}
	  else if(mathStatus == 'multiplication'){
		numberTwo.push(7);
		bigText.innerHTML = `x${numberTwo.join('')}`;
		smallText.innerHTML = `${numberOne.join('')}`;
		}
		else if(mathStatus == 'division'){
		numberTwo.push(7);
		bigText.innerHTML = `%${numberTwo.join('')}`;
		smallText.innerHTML = `${numberOne.join('')}`;
		}
		break;
		
	  	
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
