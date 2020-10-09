//
// Create an array that contains the statement and questions.
var NewZealand = {
		enunciado:"",
		resps: new Array(),
		respC:-1,
};
// Question 1
var nezPregunta1 = {
		nezPregunta: "¿Qué significa en maorí Nueva Zelanda?",
		Respuestas: ["Tierra del sol eterno.","Tierra de los prados verdes.","Tierra de la gran nube blanca.","Tierra insular solitaria."],
		Correcta: 2
};
// Question 2
var nezPregunta2 = {
		nezPregunta: "¿Cuál es la montaña más alta de nueva Zelanda?",
		Respuestas: ["Monte Zelanda.","Monte Hook.","Monte Cook.","Monte Tasman."],
		Correcta: 2
};
//Question 3
var nezPregunta3 = {	
		nezPregunta: "¿Cómo se llama la estación de trenes de Auckland?",
		Respuestas: ["Memorial Britomart Train.","Britomart Transport Centre.","Auckland Train Station.","Centre of Transport."],
		Correcta: 1
};
//Question 4
var nezPregunta4 = {
		nezPregunta: "¿Cuál es elemento más significativo de Auckland?",
		Respuestas: ["Auckland War Memorial Museum.","Eden Park.","Aotea Square.","Sky Tower."],
		Correcta: 3
};
//Question 5
var nezPregunta5 = {
		nezPregunta: "¿Cómo se llama comunmente a la selección de rugby de Nueva Zelanda?",
		Respuestas: ["All Black.","Fighters.","Pumas.","Rugby Blacks."],
		Correcta: 0
};
//Question 6 
var nezPregunta6 = {
		nezPregunta: "¿Qué es el haka?",
		Respuestas: ["La palabra que define una danza de guerra tribal maorí.","La palabra que define una danza de paz maorí.","La palabra que define una tipo de ave marítima de la zona.","La palabra que define a los primeros habitantes maorí."],
		Correcta: 0
};
//Question 7
var nezPregunta7 = {
		nezPregunta: "¿Sobre las costas de qué bahia está el Parque Nacional Abel Tasman?",
		Respuestas: ["Bahía Azul.","Bahía Dorada.","Bahía de Nueva Zelanda.","Bahía Única."],
		Correcta: 1
};
//Question 8
var nezPregunta8 = {
		nezPregunta: "¿Qué es la Sky Tower?",
		Respuestas: ["Una torre que simboliza la unión entre las naciones.","Una torre en desuso.","Una torre donde funciona un museo de tecnología.","Una torre de telecomunicaciones y difusión de radio y televisión."],
		Correcta: 3
};
//Question 9
var nezPregunta9 = {
		nezPregunta: "¿Cuál es el idioma oficial en Nueva Zelanda?",
		Respuestas: ["El inglés y el maorí.","El maorí y el francés.","El maorí.","El neocelandés."],
		Correcta: 0
};
//Question 10
var nezPregunta10 = {
		nezPregunta: "¿Cuál de estos es un pájaro no volador nativo de Nueva Zelanda?",
		Respuestas: ["El kagu.","El pingüino.","El kiwi.","El ñandú."],
		Correcta: 2
};
//Question 11 
var nezPregunta11 = {
		nezPregunta: "¿Dónde se ubica la Catedral de Christchurch?",
		Respuestas: ["En Christchurch.","Auckland.","Wellington.","Napier."],
		Correcta: 0
};
//Question 12
var nezPregunta12 = {
		nezPregunta: "¿Cuál es la capital de Nueva Zelanda?",
		Respuestas: ["Wellington.","Auckland.","Queenstown.","Palmerston North."],
		Correcta: 0
};
//Question 13 
var nezPregunta13 = {
		nezPregunta: "¿Cuál es la moneda de Nueva Zelanda?",
		Respuestas: ["El Euro neocelandés.","El Euro.","El dólar oceánico.","El dólar neozelandés."],
		Correcta: 3
};
//Question 14 
var nezPregunta14 = {
		nezPregunta: "¿Quién fue el neocelandés Edmund Percival Hillary?",
		Respuestas: ["El primero en llegar a la cima del Everest.","El conquistador que llegó a la isla por primera vez.","Un jugador de rugby, figura de los All Blacks.","Un artista plástico mundialmente famoso."],
		Correcta: 0
};
//Question 15 
var nezPregunta15 = {
		nezPregunta: "¿Cómo se llama a la selección de fútbol de Nueva Zelanda?",
		Respuestas: ["All Blacks.","All Zeland.","All Players.","All Withes."],
		Correcta: 3
};
//
//Function .random that randomize the question to display and returns the data in this. js
NewZealand.generarPregunta = function(){
	//Generate 
	var random = Math.floor(Math.random()*10) % 15;
	switch(random){
	//Question 1.
	case 0:
		NewZealand.enunciado = nezPregunta1.nezPregunta;
		for(var i = 0; i < 4; i++){
			NewZealand.resps[i] = nezPregunta1.Respuestas[i];
		}
		NewZealand.respC = nezPregunta1.Correcta;
		break;
	//Question 2.
	case 1:
		NewZealand.enunciado = nezPregunta2.nezPregunta;
		for(var i = 0; i < 4; i++){
			NewZealand.resps[i] = nezPregunta2.Respuestas[i];			
		}
		NewZealand.respC = nezPregunta2.Correcta;
		break;
	//Question 3.
	case 2:
		NewZealand.enunciado = nezPregunta3.nezPregunta;
		for(var i = 0; i < 4; i++){
			NewZealand.resps[i] = nezPregunta3.Respuestas[i];			
		}
		NewZealand.respC = nezPregunta3.Correcta;
		break;				
	//Question 4.
	case 3:
		NewZealand.enunciado = nezPregunta4.nezPregunta;
		for(var i = 0; i < 4; i++){
			NewZealand.resps[i] = nezPregunta4.Respuestas[i];			
		}
		NewZealand.respC = nezPregunta4.Correcta;
		break;	
	//Question 5.
	case 4:
		NewZealand.enunciado = nezPregunta5.nezPregunta;
		for(var i = 0; i < 4; i++){
			NewZealand.resps[i] = nezPregunta5.Respuestas[i];			
		}
		NewZealand.respC = nezPregunta5.Correcta;
		break;
	//Question 6.
	case 5:
		NewZealand.enunciado = nezPregunta6.nezPregunta;
		for(var i = 0; i < 4; i++){
			NewZealand.resps[i] = nezPregunta6.Respuestas[i];			
		}
		NewZealand.respC = nezPregunta6.Correcta;
		break;
	//Question 7.
	case 6:
		NewZealand.enunciado = nezPregunta7.nezPregunta;
		for(var i = 0; i < 4; i++){
			NewZealand.resps[i] = nezPregunta7.Respuestas[i];			
		}
		NewZealand.respC = nezPregunta7.Correcta;
		break;
	//Question 8.
	case 7:
		NewZealand.enunciado = nezPregunta8.nezPregunta;
		for(var i = 0; i < 4; i++){
			NewZealand.resps[i] = nezPregunta8.Respuestas[i];			
		}
	NewZealand.respC = nezPregunta8.Correcta;
	break;
	//Question 9.
	case 8:
		NewZealand.enunciado = nezPregunta9.nezPregunta;
		for(var i = 0; i < 4; i++){
			NewZealand.resps[i] = nezPregunta9.Respuestas[i];			
		}
	NewZealand.respC = nezPregunta9.Correcta;
	break;
	//Question 10.
	case 9:
		NewZealand.enunciado = nezPregunta10.nezPregunta;
		for(var i = 0; i < 4; i++){
			NewZealand.resps[i] = nezPregunta10.Respuestas[i];			
		}
	NewZealand.respC = nezPregunta10.Correcta;
	break;
	//Question 11.
	case 10:
		NewZealand.enunciado = nezPregunta11.nezPregunta;
		for(var i = 0; i < 4; i++){
			NewZealand.resps[i] = nezPregunta11.Respuestas[i];			
		}
	NewZealand.respC = nezPregunta11.Correcta;
	break;
	//Question 12.
	case 11:
		NewZealand.enunciado = nezPregunta12.nezPregunta;
		for(var i = 0; i < 4; i++){
			NewZealand.resps[i] = nezPregunta12.Respuestas[i];			
		}
	NewZealand.respC = nezPregunta12.Correcta;
	break;
	//Question 13.
	case 12:
		NewZealand.enunciado = nezPregunta13.nezPregunta;
		for(var i = 0; i < 4; i++){
			NewZealand.resps[i] = nezPregunta13.Respuestas[i];			
		}
	NewZealand.respC = nezPregunta13.Correcta;
	break;
	//Question 14.
	case 13:
		NewZealand.enunciado = nezPregunta14.nezPregunta;
		for(var i = 0; i < 4; i++){
			NewZealand.resps[i] = nezPregunta14.Respuestas[i];			
		}
	NewZealand.respC = nezPregunta14.Correcta;
	break;
	//Question 15.
	case 14:
		NewZealand.enunciado = nezPregunta15.nezPregunta;
		for(var i = 0; i < 4; i++){
			NewZealand.resps[i] = nezPregunta15.Respuestas[i];			
		}
	NewZealand.respC = nezPregunta15.Correcta;
	break;
	};
};