	function removeUnnecessaryElements() {
			removeElementsByClass('dashboard-tabs tabs vertical')
			removeElementsByClass('column first')
			removeElement('footer')
			removeElement('header')
			removeElement('dash-options')
			removeElement('gadget-14306-renderbox')
			removeElementsByClass('piechart-center-primary')
			removeElementsByClass('piechart-center-secondary')
		}
		
	function removeElement(elementId) {
		var element = document.getElementById(elementId);
		if(element != null ){
			element.parentNode.removeChild(element);
		}
	}
	
	function removeElementsByClass(className){
		var elements = document.getElementsByClassName(className);
		var i = 1;
		while(elements.length > 0){
			elements[elements.length - i].parentNode.removeChild(elements[elements.length - i]);
			i--
		}
	}
	
	function removeElementBySelector(selector){
		var elements = document.querySelectorAll(selector);
		var i = elements.length - 1;
		while(i => 0){
			try{
				elements[i].parentNode.removeChild(elements[i]);
			} catch(error ){
				break;
			}
			i--;
		}
	}