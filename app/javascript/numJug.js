

var numJug = { 
		 
		   // Main object
		 
		};
		 
		var widgetAPI = new Common.API.Widget(); // Creates Common module
		 
		var tvKey = new Common.API.TVKeyValue(); 
		
		var apuntadorOpcion = 0;
		
		var noJugadores;
		 
		numJug.selectHandler = function(){
			noJugadores = apuntadorOpcion + 1;
			window.open("perfiles.html?noJ="+noJugadores,"_self");
			
			
		}
		
		numJug.onLoad = function() { // called by body's onload event
			 
			   alert("numJug.onLoad()"); 
			 
			   widgetAPI.sendReadyEvent(); // Sends ready message to Application Manager
			 
			   document.getElementById("anchor").focus(); // Sets focus on Anchor for handling key inputs
			   // from the remote control
			   numJug.enfocar();
			 
		}
		
		numJug.enfocar = function(){
			
			document.getElementById('numJugs').setAttribute('src', 
					"app/img/num_jug_sin" + apuntadorOpcion + ".png");
			
			
		}
		
		numJug.keyDown = function(){ // Key handler
		 
		   var keyCode = event.keyCode; 
		 
		   alert("Main Key code : " + keyCode); 
		 
		   switch (keyCode) { 
		  
		   
			   case tvKey.KEY_RIGHT:
				   apuntadorOpcion++;
					if (apuntadorOpcion>3){
						apuntadorOpcion = 0;
						
					}
				   break;
			
			   case tvKey.KEY_LEFT:
				   apuntadorOpcion--;
					if (apuntadorOpcion<0){
						apuntadorOpcion = 3;
						
					}
				   break;
				   
			   case tvKey.KEY_UP:
				   apuntadorOpcion--;
				   apuntadorOpcion--;
					if (apuntadorOpcion<0){
						apuntadorOpcion = 0;
						
					}
				   break;
			
			   case tvKey.KEY_DOWN:
				   apuntadorOpcion++;
				   apuntadorOpcion++;
					if (apuntadorOpcion>3){
						apuntadorOpcion = 3;
						
					}
				   break;
				   
			   case 20: //Verde
				   apuntadorOpcion = 1;
				   numJug.selectHandler();
				   break;
				   
			   case 21: //Amarillo
				   apuntadorOpcion = 2;
				   numJug.selectHandler();
				   break;
				   
			   case 22: //Azul
				   apuntadorRespuesta = 3;
				   numJug.selectHandler();
				   break;
				   
			   case 108: //Rojo;
				   apuntadorOpcion = 0;
				   numJug.selectHandler();
				   break;
		 
		      case tvKey.KEY_ENTER:
		    	  
		    	  numJug.selectHandler();
		
		    	  break; 
		 
		      case tvKey.KEY_RETURN:
		 
		    	  break; 
		      
		      default:
		    	  break;
		 
		   } 
		   numJug.enfocar();
		 
		}
		
		numJug.getJugadores = function(){
			return noJugadores;
			
		}
		
