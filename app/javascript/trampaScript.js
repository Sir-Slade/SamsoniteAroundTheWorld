var trampaScript = {
		enunciado:""
			
};

	var widgetAPI = new Common.API.Widget(); // Creates Common module
	
	var tvKey = new Common.API.TVKeyValue();
	
	var apuntadorRespuesta = 0;
	
	trampaScript.handlerRespuesta = function(){
		layout.destruirPopup('mpopup');
		apuntadorPantallas = 0;
		return apuntadorRespuesta;
		
	}
	
	trampaScript.keyDown = function(){
		
		var keyCode = event.keyCode; 
		
		switch(keyCode){
		
		case(tvKey.KEY_UP):
			apuntadorRespuesta--;
			if(apuntadorRespuesta<0){
				apuntadorRespuesta = 1;
				
			}
			break;
			
		case(tvKey.KEY_DOWN):
			apuntadorRespuesta++;
			if(apuntadorRespuesta>1){
				apuntadorRespuesta = 0;
				
			}
			break;
			
		case(tvKey.KEY_ENTER):
			handlerRespuesta();
			break;
			
		case 108: //Rojo;
			   apuntadorRespuesta = 0;
			   handlerRespuesta();
			   break;
			   
		case 20: //Verde
			   apuntadorRespuesta = 1;
			   handlerRespuesta();
			   break;
		}
	}