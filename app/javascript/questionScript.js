var  resp=0;

var questionScript = { 
		}; 
		var widgetAPI = new Common.API.Widget(); // Creates Common module
		var tvKey = new Common.API.TVKeyValue(); 
		var apuntadorRespuesta = 0;
		var pregContestada = false; //Checa si el usuario ya contestó la pregunta

		function handlerRespuesta(){
			var titulo;
			var contPopup;
			pregContestada = true;
			layout.setAnswerLayout();
			if(apuntadorRespuesta == Paris.parRespC){
				titulo = "¡¡¡Correcto!!!";
				contPopup = "Acabas de ganar no se que accesorio"; //Obviamente algo mejor
				questionScript.setResp(1);
			}
			else if(apuntadorRespuesta == LasVegas.respC)
			{
				titulo = "¡¡¡Correcto!!!";
				contPopup = "Acabas de ganar no se que accesorio"; //Obviamente algo mejor
				questionScript.setResp(1);
			}
			else if(apuntadorRespuesta == Rio.respC)
			{
				titulo = "¡¡¡Correcto!!!";
				contPopup = "Acabas de ganar no se que accesorio"; //Obviamente algo mejor
				questionScript.setResp(1);
			}
			else if(apuntadorRespuesta == London.respC)
			{
				titulo = "¡¡¡Correcto!!!";
				contPopup = "Acabas de ganar no se que accesorio"; //Obviamente algo mejor
				questionScript.setResp(1);
			}
			else if(apuntadorRespuesta == Peru.respC)
			{
				titulo = "¡¡¡Correcto!!!";
				contPopup = "Acabas de ganar no se que accesorio"; //Obviamente algo mejor
				questionScript.setResp(1);
			}
			else if(apuntadorRespuesta == Vienna.respC)
			{
				titulo = "¡¡¡Correcto!!!";
				contPopup = "Acabas de ganar no se que accesorio"; //Obviamente algo mejor
				resp = 1;
			}
			else if(apuntadorRespuesta == Netherlands.respC)
			{
				titulo = "¡¡¡Correcto!!!";
				contPopup = "Acabas de ganar no se que accesorio"; //Obviamente algo mejor
				questionScript.setResp(1);
			}
			else if(apuntadorRespuesta == Rusia.respC)
			{
				titulo = "¡¡¡Correcto!!!";
				contPopup = "Acabas de ganar no se que accesorio"; //Obviamente algo mejor
				questionScript.setResp(1);
			}
			else if(apuntadorRespuesta == Australia.respC)
			{
				titulo = "¡¡¡Correcto!!!";
				contPopup = "Acabas de ganar no se que accesorio"; //Obviamente algo mejor
				questionScript.setResp(1);
			}
			else if(apuntadorRespuesta == Rome.respC)
			{
				titulo = "¡¡¡Correcto!!!";
				contPopup = "Acabas de ganar no se que accesorio"; //Obviamente algo mejor
				questionScript.setResp(1);
			}
//			else if(apuntadorRespuesta == India.respC)
//			{
//				titulo = "¡¡¡Correcto!!!";
//				contPopup = "Acabas de ganar no se que accesorio"; //Obviamente algo mejor
//			}
			else if(apuntadorRespuesta == India.respC)
			{
				titulo = "¡¡¡Correcto!!!";
				contPopup = "Acabas de ganar no se que accesorio"; //Obviamente algo mejor
				questionScript.setResp(1);
			}
			else if(apuntadorRespuesta == SouthAfrica.respC)
			{
				titulo = "¡¡¡Correcto!!!";
				contPopup = "Acabas de ganar no se que accesorio"; //Obviamente algo mejor
				questionScript.setResp(1);
			}
			else if(apuntadorRespuesta == Jamaica.respC)
			{
				titulo = "¡¡¡Correcto!!!";
				contPopup = "Acabas de ganar no se que accesorio"; //Obviamente algo mejor
				questionScript.setResp(1);
			}
			else if(apuntadorRespuesta == China.respC)
			{
				titulo = "¡¡¡Correcto!!!";
				contPopup = "Acabas de ganar no se que accesorio"; //Obviamente algo mejor
				questionScript.setResp(1);
			}
			else if(apuntadorRespuesta == Canada.respC)
			{
				titulo = "¡¡¡Correcto!!!";
				contPopup = "Acabas de ganar no se que accesorio"; //Obviamente algo mejor
				questionScript.setResp(1);
			}
			else if(apuntadorRespuesta == Germany.respC)
			{
				titulo = "¡¡¡Correcto!!!";
				contPopup = "Acabas de ganar no se que accesorio"; //Obviamente algo mejor
				questionScript.setResp(1);
			}
			else if(apuntadorRespuesta == Iceland.respC)
			{
				titulo = "¡¡¡Correcto!!!";
				contPopup = "Acabas de ganar no se que accesorio"; //Obviamente algo mejor
				questionScript.setResp(1);
			}
			else if(apuntadorRespuesta == Indonesia.respC)
			{
				titulo = "¡¡¡Correcto!!!";
				contPopup = "Acabas de ganar no se que accesorio"; //Obviamente algo mejor
				questionScript.setResp(1);
			}
//			else if(apuntadorRespuesta == Israel.respC)
//			{
//				titulo = "¡¡¡Correcto!!!";
//				contPopup = "Acabas de ganar no se que accesorio"; //Obviamente algo mejor
//				questionScript.setResp(1);
//			}
//			else if(apuntadorRespuesta == NewZealand.respC)
//			{
//				titulo = "¡¡¡Correcto!!!";
//				contPopup = "Acabas de ganar no se que accesorio"; //Obviamente algo mejor
//				questionScript.setResp(1);
//			}
			else{
				titulo = "Incorrecto";
				questionScript.setResp(0);
				contPopup = "Incorrecto" + "Aca toy =)" + resp;
			}
			document.getElementById("titulo").innerHTML = titulo;
			document.getElementById("contPopup").innerHTML = contPopup + "Resp = " +resp;
		}
		
		questionScript.pregunta = function(keyCode){
			switch (keyCode) { 
			   
			   case tvKey.KEY_DOWN:
				   apuntadorRespuesta++;
					if (apuntadorRespuesta>3){
						apuntadorRespuesta = 0;
					}
				   break;
			
			   case tvKey.KEY_UP:
				   apuntadorRespuesta--;
					if (apuntadorRespuesta<0){
						apuntadorRespuesta = 3;
					}
				   break;
			   case tvKey.KEY_ENTER:
				   handlerRespuesta();
			       break;
			   case 22: //Azul
				   apuntadorRespuesta = 3;
				   handlerRespuesta();
				   break;
			   case 20: //Verde
				   apuntadorRespuesta = 1;
				   handlerRespuesta();
				   break;
			   case 21: //Amarillo
				   apuntadorRespuesta = 2;
				   handlerRespuesta();
				   break;
			   case 108: //Rojo;
				   apuntadorRespuesta = 0;
				   handlerRespuesta();
				   break;
			 
			   default:
			 
				   	 break; 
			 
			   }
			questionScript.enfocar();
		};
		
		questionScript.respuesta = function(keyCode){
			switch (keyCode) { 
				   
			   case tvKey.KEY_ENTER:
				   layout.destruirPopup('mpopup');
				   apuntadorRespuesta = 0;
				   pregContestada = false;
				   apuntadorPantallas = 0; //Regresa al control de la pantalla principal
			       break;
			       
			   default:
				   	 break; 
			 
			   }
		};
		
		questionScript.enfocar = function(){			
			if(!pregContestada){
				for(var i = 1; i <= 4; i++){
					if(apuntadorRespuesta+1 == i){
						document.getElementById("resp" + i).setAttribute("style", 
								"color:#" + layout.colorResp[i-1] + "; background-color:#DDDDDD");
					}else{
						document.getElementById("resp" + i).setAttribute("style", 
								"color:#" + layout.colorResp[i-1] + "; background-color:transparent");
					}
				}
			}			
		};
		
		questionScript.getResp = function ()
		{
			return resp;
		};
		
		questionScript.setResp = function (res)
		{
			resp = res;
		};
		 
		questionScript.keyDown = function(){ // Key handler		 
		   var keyCode = event.keyCode; 		 
		   alert("Main Key code : " + keyCode);		   
		   if(!pregContestada){
			   questionScript.pregunta(keyCode);			   
		   }else{
			   questionScript.respuesta(keyCode);			 
		   } 
		};