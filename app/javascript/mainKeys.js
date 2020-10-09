

var mainKeys = { 
		 
		   // Main object
		 
		};
		 
		var widgetAPI = new Common.API.Widget(); // Creates Common module
		 
		var tvKey = new Common.API.TVKeyValue(); 
		
		var apuntadorOpcion = 0;
		
		 
		mainKeys.selectHandler = function(){
			switch(apuntadorOpcion){
				case 0:
					layout.crearTutorial();
					tutorialScript.enfocar();
					apuntadorPantallas = 1;
					
					break;
					
				case 1:
					window.open("numJug.html","_self");
					
				default:
					break;
			
			}
			
		}
		mainKeys.enfocar = function(){
			
			document.getElementById('fondo').setAttribute('src', 
					"app/img/960x560_inicio" + apuntadorOpcion + ".png");
			
			
		}

		mainKeys.keyDown = function(){ // Key handler
		 
		   var keyCode = event.keyCode; 
		 
		   alert("Main Key code : " + keyCode); 
		 
		   switch (keyCode) { 
		  
		   
			   case tvKey.KEY_RIGHT:
				   apuntadorOpcion++;
					if (apuntadorOpcion>2){
						apuntadorOpcion = 0;
						
					}
				   break;
			
			   case tvKey.KEY_LEFT:
				   apuntadorOpcion--;
					if (apuntadorOpcion<0){
						apuntadorOpcion = 2;
						
					}
				   break;
				   
			   case 20: //Verde
				   apuntadorOpcion = 1;
				   mainKeys.selectHandler();
				   break;
				   
			   case 21: //Amarillo
				   apuntadorOpcion = 2;
				   mainKeys.selectHandler();
				   break;
				   
			   case 108: //Rojo;
				   apuntadorOpcion = 0;
				   mainKeys.selectHandler();
				   break;
		 
		      case tvKey.KEY_ENTER:
		    	  
		    	  mainKeys.selectHandler();
		
		    	  break; 
		 
		      case tvKey.KEY_RETURN:
		 
		    	  break; 
		      
		      default:
		    	  break;
		 
		   } 
		   mainKeys.enfocar();
		 
		}
