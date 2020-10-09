
var layout = {
		
		colorResp:["FF0000", "00FF00", "FFF000", "0000FF"]
	
}

var popup;

var questionLayout = "<div class=\"popup_title\" id=\"titulo\""
			+ "style=\"text-align:center; font-size:xx-large\">Pregunta</div><br>"
			+ "<div class=\"popup_content\" id=\"contPopup\" style=\"text-align:center\">"
			+ "<div id=\"resp1\" style=\"color:#"+layout.colorResp[0]+"\">Respuesta 1</div>"
			+ "<div id=\"resp2\" style=\"color:#"+layout.colorResp[1]+"\">Respuesta 2</div>"
			+ "<div id=\"resp3\" style=\"color:#"+layout.colorResp[2]+"\">Respuesta 3</div>"
			+ "<div id=\"resp4\" style=\"color:#"+layout.colorResp[3]+"\">Respuesta 4</div></div>";

var answerLayout = "<div class=\"popup_title\" id=\"titulo\""
			+"style=\"text-align:center; font-size:xx-large\">Tu respuesta fue</div><br><br>"
			+"<div class=\"popup_content\" id=\"contPopup\" style=\"text-align:center\">Respuesta</div>";

var trampaLayout = "<div class=\"popup_title\" id=\"titulo\""
	+ "style=\"text-align:center; font-size:xx-large\">Contratiempo</div><br>"
	+ "<div class=\"popup_content\" id=\"contPopup\" style=\"text-align:center\">"
	+ "<div id=\"resp1\" style=\"color:#"+layout.colorResp[0]+"\">Pagar 5 puntos</div>"
	+ "<div id=\"resp2\" style=\"color:#"+layout.colorResp[1]+"\">Perder 1 turno</div>";

var tipLayout = "<div class=\"popup_title\" id=\"titulo\""
			+"style=\"text-align:center; font-size:xx-large\">Tip</div><br><br>"
			+"<div class=\"popup_content\" id=\"contPopup\" style=\"text-align:center\">Respuesta</div>";

var tutorialV1Layout = "<div class=\"popup_content\" id=\"contPopup\" style=\"text-align:center\">" 
			+ "<img alt=\"\" src=\"app/img/Tutorial/tutorial0.png\"></img>"
			+ "<div id=\"bot1\" sytle=\"display:inline\">Siguiente</div></div>";
			
var tutorialV2Layout = "<div class=\"popup_content\" id=\"contPopup\" style=\"text-align:center\">" 
			+ "<img alt=\"\" src=\"app/img/Tutorial/tutorial1.png\"></img>"
			+ "<div id=\"resp\" sytle=\"display:inline\"><div id=\"bot0\">Atras</div></div>"
			+ "<div id=\"bot1\">Siguiente</div></div></div>";

var tutorialV3Layout = "<div class=\"popup_content\" id=\"contPopup\" style=\"text-align:center\">" 
			+ "<div id=\"contenido\"> Presiona \"A\""
			+ "<img id=\"dado\" src=\"app/img/Tutorial/dados.png\"></img>"
			+ "<div id=\"tiraDado\">Tirar</div>"
			+ "<div id=\"resp\" sytle=\"display:inline\"><div id=\"bot0\">Atras</div></div>"
			+ "<div id=\"bot1\">Salir</div></div></div></div>";

			
layout.setQuestionLayout = function(){
	document.getElementById("mpopup").innerHTML = questionLayout;
};

layout.setAnswerLayout = function(){
	document.getElementById("mpopup").innerHTML = answerLayout;
	
};

layout.setTutorial1Layout = function(){
	document.getElementById("tutorial").innerHTML = tutorialV1Layout;
	
};

layout.setTutorial2Layout = function(){
	document.getElementById("tutorial").innerHTML = tutorialV2Layout;
	
};

layout.setTutorial3Layout = function(){
	document.getElementById("tutorial").innerHTML = tutorialV3Layout;
	
};

layout.setTipLayout = function(){
	document.getElementById("mpopup").innerHTML = tipLayout;
	
};

layout.setTrampaLayout = function(){
	document.getElementById("mpopup").innerHTML = trampaLayout;
	
};

layout.crearTip = function(){
	layout.setTipLayout();
	Tips.generarTip();
	document.getElementById("contPopup").innerHTML = Tips.enunciado;
	
};

layout.crearTrampa = function(){
	layout.setTrampaLayout();
	Trampa.generarTrampa();
	document.getElementById("contPopup").innerHTML = Trampa.enunciado;
	
};

layout.crearQuestion = function(idPais){
	layout.setQuestionLayout();
	switch(idPais){
	case 1:
		Paris.generarPregunta();
		document.getElementById("titulo").innerHTML = Paris.parEnunciado;
		for(var i = 1; i <= 4; i++){
			document.getElementById("resp" + i).innerHTML = Paris.resps[i-1];
		}
		break;
	case 2:
		LasVegas.generarPregunta();
		document.getElementById("titulo").innerHTML = LasVegas.enunciado;
		for(var i = 1; i <= 4; i++){
			document.getElementById("resp" + i).innerHTML = LasVegas.resps[i-1];
		}
		break;
	case 3:
		Rio.generarPregunta();
		document.getElementById("titulo").innerHTML = Rio.enunciado;
		alert(Rio.enunciado);
		for(var i = 1; i <= 4; i++){
			document.getElementById("resp" + i).innerHTML = Rio.resps[i-1];
		}
		break;
		
	case 5:
		London.generarPregunta();
		document.getElementById("titulo").innerHTML = London.enunciado;
		for(var i = 1; i <= 4; i++){
			document.getElementById("resp" + i).innerHTML = London.resps[i-1];
			
		}
		break;
		
	case 4:
		Tips.generarTip();
		document.getElementById("titulo").innerHTML = Tips.enunciado;
		for(var i = 1; i <= 4; i++){
			document.getElementById("resp" + i).innerHTML = "";
			
		}
		break;
		
	case 6:
		Peru.generarPregunta();
		document.getElementById("titulo").innerHTML = Peru.enunciado;
		for(var i = 1; i <= 4; i++){
			document.getElementById("resp" + i).innerHTML = Peru.resps[i-1];	
		}
		break;
		
	case 7:
		Vienna.generarPregunta();
		document.getElementById("titulo").innerHTML = Vienna.enunciado;
		for(var i = 1; i <= 4; i++){
			document.getElementById("resp" + i).innerHTML = Vienna.resps[i-1];
		}
		break;
	case 8:
		document.getElementById("titulo").innerHTML = "Tiro Extra";
		break;
		
	case 9:
		Netherlands.generarPregunta();
		document.getElementById("titulo").innerHTML = Netherlands.enunciado;
		for(var i = 1; i <= 4; i++){
			document.getElementById("resp" + i).innerHTML = Netherlands.resps[i-1];
			
		}
		break;
		
	case 10:
		Rusia.generarPregunta();
		document.getElementById("titulo").innerHTML = Rusia.enunciado;
		for(var i = 1; i <= 4; i++){
			document.getElementById("resp" + i).innerHTML = Rusia.resps[i-1];
			
		}
		break;
		
	case 11:
		Tips.generarTip();
		document.getElementById("titulo").innerHTML = Tips.enunciado;
		for(var i = 1; i <= 4; i++){
			document.getElementById("resp" + i).innerHTML = "";
		}
		break;
		
	case 12:
		Australia.generarPregunta();
		document.getElementById("titulo").innerHTML = Australia.enunciado;
		for(var i = 1; i <= 4; i++){
			document.getElementById("resp" + i).innerHTML = Australia.resps[i-1];
			
		}
		break;
		
	case 13:
		Rome.generarPregunta();
		document.getElementById("titulo").innerHTML = Rome.enunciado;
		for(var i = 1; i <= 4; i++){
			document.getElementById("resp" + i).innerHTML = Rome.resps[i-1];
			
		}
		break;
		
	case 14:
		Trampa.generarTrampa();
		for(var i = 1; i <= 4; i++){
			document.getElementById("resp" + i).innerHTML = "";
		}
		break;
		
	case 15:
		India.generarPregunta();
		document.getElementById("titulo").innerHTML = India.enunciado;
		for(var i = 1; i <= 4; i++){
			document.getElementById("resp" + i).innerHTML = India.resps[i-1];
			
		}
		break;
		
	case 16:
		SouthAfrica.generarPregunta();
		document.getElementById("titulo").innerHTML = SouthAfrica.enunciado;
		for(var i = 1; i <= 4; i++){
			document.getElementById("resp" + i).innerHTML = SouthAfrica.resps[i-1];
			
		}
		break;
		
	case 17:
		Jamaica.generarPregunta();
		document.getElementById("titulo").innerHTML = Jamaica.enunciado;
		for(var i = 1; i <= 4; i++){
			document.getElementById("resp" + i).innerHTML = Jamaica.resps[i-1];
			
		}
		break;
	case 18:
		Tips.generarTip();
		document.getElementById("titulo").innerHTML = Tips.enunciado;
		for(var i = 1; i <= 4; i++){
			document.getElementById("resp" + i).innerHTML = "";
			
		}
		break;
		
	case 19:
		China.generarPregunta();
		document.getElementById("titulo").innerHTML = China.enunciado;
		for(var i = 1; i <= 4; i++){
			document.getElementById("resp" + i).innerHTML = China.resps[i-1];
			
		}
		break;
		
	case 20:
		Canada.generarPregunta();
		document.getElementById("titulo").innerHTML = Canada.enunciado;
		for(var i = 1; i <= 4; i++){
			document.getElementById("resp" + i).innerHTML = Canada.resps[i-1];
			
		}
		break;
		
	case 21:
		Germany.generarPregunta();
		document.getElementById("titulo").innerHTML = Germany.enunciado;
		for(var i = 1; i <= 4; i++){
			document.getElementById("resp" + i).innerHTML = Germany.resps[i-1];
			
		}
		break;
		
	case 22:
		Tips.generarTip();
		document.getElementById("titulo").innerHTML = Tips.enunciado;
		for(var i = 1; i <= 4; i++){
			document.getElementById("resp" + i).innerHTML = "";
			
		}
		break;
		
	case 23:
		Iceland.generarPregunta();
		document.getElementById("titulo").innerHTML = Iceland.enunciado;
		for(var i = 1; i <= 4; i++){
			document.getElementById("resp" + i).innerHTML = Iceland.resps[i-1];
			
		}
		break;
		
	case 24:
		Indonesia.generarPregunta();
		document.getElementById("titulo").innerHTML = Indonesia.enunciado;
		for(var i = 1; i <= 4; i++){
			document.getElementById("resp" + i).innerHTML = Indonesia.resps[i-1];
			
		}
		break;
	
	case 25:
		Tips.generarTip();
		document.getElementById("titulo").innerHTML = Tips.enunciado;
		for(var i = 1; i <= 4; i++){
			document.getElementById("resp" + i).innerHTML = "";
			
		}
		break;
		
	case 26:
		Israel.generarPregunta();
		document.getElementById("titulo").innerHTML = Israel.enunciado;
		for(var i = 1; i <= 4; i++){
			document.getElementById("resp" + i).innerHTML = Israel.resps[i-1];
			
		}
		break;
		
	case 27:
		newZealand.generarPregunta();
		document.getElementById("titulo").innerHTML = newZealand.enunciado;
		for(var i = 1; i <= 4; i++){
			document.getElementById("resp" + i).innerHTML = newZealand.resps[i-1];
			
		}
		break;
		default:
			break;
		
		
	}
	
	
	popup = new Popup.Window('mpopup');
    popup.show();
	
}

layout.crearTutorial = function(){
	layout.setTutorial1Layout();
	
	popup = new Popup.Window('tutorial');
	popup.show();
};

layout.destruirPopup = function(popup){
	Element.closePopup(popup);
	popup = null;
	
};
