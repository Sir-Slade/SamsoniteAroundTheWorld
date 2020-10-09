

var Main = { 
		 
		   // Main object
		 
		};
		 
		var widgetAPI = new Common.API.Widget(); // Creates Common module
		 
		var tvKey = new Common.API.TVKeyValue(); 
		
		var apuntadorPantallas = 0;
		
		Main.onLoad = function() { // called by body's onload event
		 
		   alert("Main.onLoad()"); 
		 
		   widgetAPI.sendReadyEvent(); // Sends ready message to Application Manager
		 
		   document.getElementById("anchor").focus(); // Sets focus on Anchor for handling key inputs
		   // from the remote control
		   mainKeys.enfocar();
		   divSplash = document.getElementById("splash");
		   setInterval(function() {divSplash.style.display = "none";}, 3000);
		   
		 
		   /** * JavaScript code Here! */
		 
		} 
		 
		Main.keyDown = function(){ // Key handler
			
			switch(apuntadorPantallas){
			
			case 0:
				mainKeys.keyDown();
				break;
			
			case 1:
				tutorialScript.keyDown();
				break;
				
			default:
				break;
			}
		}
