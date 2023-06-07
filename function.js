let numberOne = [];
let numberTwo = [];
let mathStatus = 'nothing';

let calculator =document.querySelector('#mainCalculator');
calculator.addEventListener('click', operation);

let addition = document.querySelector('#additionSymbol');
let additionText = document.querySelector('#additionSymbol p');


let seven = document.querySelector('#seven') 
let sevenText = document.querySelector('#seven p');

let bigText = document.querySelector('#bigText');
let smallText = document.querySelector('#smallText');


let equalitySymbol = document.querySelector('#equalitySymbol');
let equalitySymbolText = document.querySelector('#equalitySymbol p');


function operation(e){
console.log(e.target);
switch(e.target){
	case addition:
	case additionText:

		if(numberTwo.join('') && mathStatus == 'addition'){
		smallText.innerHTML = `${numberOne.join('')}`
		bigText.innerHTML = '+'
		addNumbers();
		smallText.innerHTML = `${numberOne.join('')}`
		}
		else if(numberOne.join('') && mathStatus == 'nothing'){
    mathStatus = 'addition';
		smallText.innerHTML = `${numberOne.join('')}`
		bigText.innerHTML = '+'
		}
		break;
	case seven:
	case sevenText:
		if(mathStatus == 'nothing'){
		numberOne.push(7);
		bigText.innerHTML = `${numberOne.join('')}`
		smallText.innerHTML = `${numberTwo.join('')}`
		}
	  else if(mathStatus = 'addition'){
		numberTwo.push(7);
		bigText.innerHTML = `+${numberTwo.join('')}`
		smallText.innerHTML = `${numberOne.join('')}`
		}
		break;
		
	  	
		}
}





let result;

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
result = Number(numberOne.join('')) % Number(numberTwo.join(''));
numberOne = `${result}`.split('');
numberTwo = [];
}
