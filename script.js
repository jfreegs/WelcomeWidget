function typeWritter(selector, speed) { 
	var i = 0; 
	var clonedElement = selector.clone().insertAfter(selector); 
	selector.hide(); 
	clonedElement.text(''); 

		function addHtml() { 
			if ( i < selector.text().length) { 
				clonedElement.text(clonedElement.text() + selector.text().charAt(i)); 
				i++; 
				setTimeout(function(){ 
					addHtml(); 
				}, speed); 
			} 
		} 
	addHtml(); 
}

typeWritter($('h1'), 70);
