var tipScript = {
		
};

	var widgetAPI = new Common.API.Widget(); // Creates Common module
	
	var tvKey = new Common.API.TVKeyValue();
	
	tipScript.keyDown = function(){
		
		var keyCode = event.keyCode; 
		
		switch(keyCode){
		
		case(tvKey.ENTER):
			layout.destruirPopup('mpopup');
			apuntadorPantallas = 0;
			break;
			
		case(108):
			layout.destruirPopup('mpopup');
			apuntadorPantallas = 0;
			break;
			
		default:
			break;
		
		}
	}

