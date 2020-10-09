var tutorialScript = {
		
};

	var widgetAPI = new Common.API.Widget(); // Creates Common module
	
	var tvKey = new Common.API.TVKeyValue();
	
	var boton = 0;
	
	var pantalla = 0;
	
	var random;
	
	tutorialScript.pantalla1 = function(keyCode){
		switch(keyCode){
		   
		   case(tvKey.KEY_ENTER):
			   
			   pantalla = 1;
		   	   layout.setTutorial2Layout();
		   	   boton = 0;
		   	   tutorialScript.enfocar();
		   	   
			   break;
			   
		   case(tvKey.KEY_LEFT):
			   boton--;
		   		
		   	   if(boton<0){
		   		   boton = 0;
		   		   
		   	   }
			   break;
		   
		   case(tvKey.KEY_RIGHT):
			   boton++;
	   		
		   	   if(boton>1){
		   		   boton = 1;
		   		   
		   	   }
			   break;
			  
			   
		   case 21: //Amarillo
			   pantalla = 1;
		   	   layout.setTutorial2Layout();
		   	   boton = 0;
		   	   tutorialScript.enfocar();
			   break;
		   }
		
		
		
	}
	
	tutorialScript.pantalla2 = function(keyCode){
		switch(keyCode){
		   
		   case(tvKey.KEY_ENTER):
			   switch(boton){
			   case 0:
				   layout.setTutorial1Layout();
				   pantalla = 0;
				   boton = 0;
				   tutorialScript.enfocar();
				   break;
				   
			   case 1:
				   layout.setTutorial3Layout();
				   pantalla = 2;
				   boton = 0;
				   tutorialScript.enfocar();
			   
			   }
			   break;
			   
		   case(tvKey.KEY_LEFT):
			   boton--;
		   		
		   	   if(boton<0){
		   		   boton = 0;
		   		   
		   	   }
			   break;
		   
		   case(tvKey.KEY_RIGHT):
			   boton++;
	   		
		   	   if(boton>1){
		   		   boton = 1;
		   		   
		   	   }
			   break;
			   
		   case 20: //Verde
			   layout.setTutorial1Layout();
			   pantalla = 0;
			   boton = 0;
			   tutorialScript.enfocar();
			   break;
			   
		   case 21: //Amarillo
			   layout.setTutorial3Layout();
			   pantalla = 2;
			   boton = 0;
			   tutorialScript.enfocar();
			   break;
			   
		}
			   
		   
		
	}
	
	tutorialScript.pantalla3 = function(keyCode){
		switch(keyCode){
		   
		   case(tvKey.KEY_ENTER):
			   switch(boton){
			   case 0:
				   layout.setTutorial2Layout();
				   pantalla = 1;
				   boton = 0;
				   tutorialScript.enfocar();
				   break;
				   
			   case 1:
				   layout.destruirPopup('tutorial');
				   pantalla = 0;
				   apuntadorPantallas = 0;
			   
			   }
			   break;
			   
		   case(tvKey.KEY_LEFT):
			   boton--;
		   		
		   	   if(boton<0){
		   		   boton = 0;
		   		   
		   	   }
			   break;
		   
		   case(tvKey.KEY_RIGHT):
			   boton++;
	   		
		   	   if(boton>1){
		   		   boton = 1;
		   		   
		   	   }
			   break;
			   
		   case 22: //Azul;
			   random = (Math.floor(Math.random()*10) % 6) + 1;
			   document.getElementById("dado").setAttribute('src', "app/img/Tutorial/d" 
					   + random + ".png");
			   break;
			   
		   case 20: //Verde
			   pantalla = 1;
		   	   layout.setTutorial2Layout();
		   	   boton = 0;
		   	   tutorialScript.enfocar();
			   break;
			   
		   case 21: //Amarillo
			   layout.destruirPopup('tutorial');
			   pantalla = 0;
			   apuntadorPantallas = 0;
			   break;
			   
		   
		   }
		
	}
	
	tutorialScript.keyDown = function(){ // Key handler
		 
		   var keyCode = event.keyCode; 
		 
		   alert("Main Key code : " + keyCode);
		   
		   
		   switch(pantalla){
		   
		   case 0:
			   tutorialScript.pantalla1(keyCode);
			   break;
		   
		   case 1:
			   tutorialScript.pantalla2(keyCode);
			   break;
			   
		   case 2:
			   tutorialScript.pantalla3(keyCode);
			   break;
			   
		   }
		   
		   tutorialScript.enfocar();
		 
		    
		 
	}
	
	tutorialScript.enfocar = function(){
		
		switch(pantalla){
		
		case 0:
			document.getElementById("bot1").setAttribute("style", 
			"color:#000000; background-color:#DDDDDD");
			break;
			
		case 1:
			for(var i = 0; i < 2; i++){
				if(boton == i){
					document.getElementById("bot" + i).setAttribute("style", 
							"color:#000000; background-color:#DDDDDD");
					
				}else{
					document.getElementById("bot" + i).setAttribute("style", 
							"color:#000000; background-color:transparent");
					
				}
			}
			break;
			
		case 2:
			for(var i = 0; i < 2; i++){
				if(boton == i){
					document.getElementById("bot" + i).setAttribute("style", 
							"color:#000000; background-color:#DDDDDD");
					
				}else{
					document.getElementById("bot" + i).setAttribute("style", 
							"color:#000000; background-color:transparent");
					
				}
			}
			break;
			
		}
		
	
	
	}