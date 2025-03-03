const car = ["graphics/3.png","graphics/4.png","graphics/5.png"];

document.getElementById('number-hold2').innerHTML = '<div id="galfade2"><img src="' + car[0] + '"></div>';
    
var amt = car.length - 1;
    
var counter = 0;

var sstime = 10000;

timervar = setInterval(timer, sstime);

let pauseVar = true;

    
    
function imgcarNext() {


if (counter == 0) {

counter = counter + 1;

document.getElementById('number-hold').innerHTML = '<div id="galfade"><img src="' + car[0] + '"></div>';

document.getElementById('number-hold2').innerHTML = '<div id="galfade2"><img src="' + car[1] + '"></div>';

}
    
    else if (counter < amt) {
    
    document.getElementById('number-hold').innerHTML = '<div id="galfade"><img src="' + car[counter] + '"></div>';
	   
    document.getElementById('number-hold2').innerHTML = '<div id="galfade2"><img src="' + car[counter + 1] + '"></div>';
	
    counter = counter + 1;    
              
    
} else {
   
   document.getElementById('number-hold').innerHTML = '<div id="galfade"><img src="' + car[amt] + '"></div>';
       
	document.getElementById('number-hold2').innerHTML = '<div id="galfade2"><img src="' + car[0] + '"></div>';

	counter = 0;   

}

	if (pauseVar == false) {
	clearInterval(timervar);
} else {
	clearInterval(timervar);
	    timervar = setInterval(timer, sstime);
}
	
};
    
    
function imgcarPrev() {
    
    if (counter == 0) {
        
    counter = amt;
        
    document.getElementById('number-hold').innerHTML = '<div id="galfade"><img src="' + car[0] + '"></div>';
	
	document.getElementById('number-hold2').innerHTML = '<div id="galfade2"><img src="' + car[amt] + '"></div>';
        
    } else {
       
    
    document.getElementById('number-hold').innerHTML = '<div id="galfade"><img src="' + car[counter] + '"></div>';
    
	document.getElementById('number-hold2').innerHTML = '<div id="galfade2"><img src="' + car[counter - 1] + '"></div>';

	counter = counter - 1; 

}

if (pauseVar == false) {
	clearInterval(timervar);
} else {
	clearInterval(timervar);
	    timervar = setInterval(timer, sstime);
}

};


		function timer(){

		document.getElementById('number-hold').innerHTML = '<div id="galfade"><img src="' + car[counter] + '"></div>';

		document.getElementById('number-hold2').innerHTML = '<div id="galfade2"><img src="' + car[counter + 1] + '"></div>';

		counter = counter + 1;
		
		if (counter == amt + 1) {
		
			counter = 0;
			
			document.getElementById('number-hold2').innerHTML = '<div id="galfade2"><img src="' + car[0] + '"></div>';
		}

		};



function imgcarPause() {

	if (pauseVar == true) {

	document.getElementById('pauseholder').innerHTML = '⏵';
		
	clearInterval(timervar);
	
	pauseVar = false;

} else {

document.getElementById('pauseholder').innerHTML = '<div style="margin:-1px 0 0 0">⏸︎</div>';

		if (counter == amt) {
   
			document.getElementById('number-hold').innerHTML = '<div id="galfade"><img src="' + car[amt] + '"></div>';
       
			document.getElementById('number-hold2').innerHTML = '<div id="galfade2"><img src="' + car[0] + '"></div>';

			counter = 0;   
		
		} else {
  	 	
	    document.getElementById('number-hold').innerHTML = '<div id="galfade"><img src="' + car[counter] + '"></div>';
	   
		document.getElementById('number-hold2').innerHTML = '<div id="galfade2"><img src="' + car[counter + 1] + '"></div>';
		counter = counter + 1;
		
		};

clearInterval(timervar);
timervar = setInterval(timer, sstime);
pauseVar = true;
}

};