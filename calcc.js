
var keys = document.querySelectorAll('#calculator span');
var operators = ['+', '-', '/', '*'];
var input = document.querySelector('.input');
var resultDisplayed, decimalAdded;
;
var init = function() {
	input.innerHTML = '0';
	decimalAdded = false;
	resultDisplayed = false;
}
init();


for(var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) {
		
		var inputVal = input.innerHTML;
		var lastChar = inputVal[inputVal.length - 1]
		var btnVal = this.getAttribute("data-value");
				
		if (btnVal == 'C') {
			init();
		}
		
		else if(btnVal == '=') {
							
			if(operators.indexOf(lastChar) > -1 || lastChar == '.') {
				inputVal = inputVal.replace(/.$/, ''); 
			}
		
			if(inputVal) { 
				input.innerHTML = eval(inputVal);
			}
			decimalAdded = false;
			resultDisplayed = true;
		}
		
		else if(operators.indexOf(btnVal) > -1) { 
			
			if (resultDisplayed) {
				resultDisplayed = false;
			}		
	
			if(inputVal !== '0' && operators.indexOf(lastChar) == -1)  {
				input.innerHTML += btnVal;
			}
			
			else if(inputVal === '0' && btnVal == '-') {
				input.innerHTML = btnVal;
			}
			
			else if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) { 
				input.innerHTML = inputVal.replace(/.$/, btnVal); 
			}
		
			decimalAdded = false;
		}
		
		else if (btnVal == '.') {
			if (resultDisplayed) {
				resultDisplayed = false;
			}	
			if (!decimalAdded) {
				input.innerHTML += btnVal;
				decimalAdded = true;
			}
		}
		else if (btnVal == '%') {
				input.innerHTML = parseFloat(inputVal * 0.01);
				decimalAdded = true;
		}
		else if (btnVal == '+/-') {
			if (input.innerHTML >0) {
				input.innerHTML = -input.innerHTML;
			}
			else {
				input.innerHTML = input.innerHTML.replace(/-/g, '');
			}
		}
		
		else {
			
			if (input.innerHTML === '0' || resultDisplayed) {
				input.innerHTML='';
				input.innerHTML += btnVal;
				resultDisplayed = false;
			}
			else {
				input.innerHTML += btnVal;
			}
		}
		
		e.preventDefault();
	} 
}