//LAS VEGAS CITY
// Create an array that contains the statement and questions.
var LasVegas = {
		enunciado:"",
		resps: new Array(),
		respC:-1,
};
// Question 1
var lsvPregunta1 = {
		lsvPregunta: "Si pusieras en línea recta todas las luces de neón de Las Vegas, ¿Cuánto crees que ocuparían?",
		Respuestas: ["15.000 kilómetros de largo.","1 kilómetro de largo.","100 kilómetros de largo.","25.000 kilómetros de largo."],
		Correcta: 0
};
// Question 2
var lsvPregunta2 = {
		lsvPregunta: "¿Cuánto crees que gasta, en promedio, un visitante en un casino de Las Vegas?",
		Respuestas: ["560 dólares.","1000 dólares.","25000 dólares.","100 dólares"],
		Correcta: 0
};
//Question 3
var lsvPregunta3 = {	
		lsvPregunta: "¿Cuál es la Avenida más famosa de Las Vegas?",
		Respuestas: ["Viking Road.","Avenida Tropicana.","Avenida Polaris.","Las Vegas Strip."],
		Correcta: 3
};
//Question 4
var lsvPregunta4 = {
		lsvPregunta: "¿Quién diseñó el famoso letrero Welcome to Las Vegas?",
		Respuestas: ["Betty Page","Betty Willis","Tom Ford","Marcel Duchamp"],
		Correcta: 0
};
//Question 5
var lsvPregunta5 = {
		lsvPregunta: "¿Cuántas habitaciones de hotel posee Las Vegas?",
		Respuestas: ["148.941", "500.236","499.999", "25.333"],
		Correcta: 0
};
//Question 6 
var lsvPregunta6 = {
		lsvPregunta: "¿Cuántas parejas se casan por día en Las Vegas?",
		Respuestas: ["315.","1562.","63.","5."],
		Correcta: 0
};
//Question 7
var lsvPregunta7 = {
		lsvPregunta: "¿En qué gran hotel de la ciudad se encuentra la disco Studio 54?",
		Respuestas: ["En el hotel Ceasars Palace.","En el hotel MGM Grand.","En el hotel Luxor.","En el hotel Wynn."],
		Correcta: 1
};
//Question 8
var lsvPregunta8 = {
		lsvPregunta: "¿En qué estado se encuentra la ciudad de Las Vegas?",
		Respuestas: ["Arizona.","Utah.","California.","Nevada."],
		Correcta: 3
};
//Question 9
var lsvPregunta9 = {
		lsvPregunta: "¿Cuál fue el primer hotel y casino de Las Vegas?",
		Respuestas: ["Circus Circus.","The Venetian.","Luxor.","Golden Gate Casino and Hotel."],
		Correcta: 3
};
//Question 10
var lsvPregunta10 = {
		lsvPregunta: "¿Cuántos años cumplió la ciudad de Las Vegas en mayo de 2005?",
		Respuestas: ["150 años.","50 años.","100 años.","200 años."],
		Correcta: 2
};
//Question 11 
var lsvPregunta11 = {
		lsvPregunta: "¿Cuál fue el primer hotel casino que contó con bailarinas en topless?",
		Respuestas: ["Hotel Dunes.","The Venetian.","Hotel Ceasars Palace.","Hotel Wynn."],
		Correcta: 0
};
//Question 12
var lsvPregunta12 = {
		lsvPregunta: "¿Cuál es el elemento que falta en todos los casinos de Las Vegas?",
		Respuestas: ["Cervezas.","Relojes.","Tragamonedas.","Sillones."],
		Correcta: 1
};
//Question 13 
var lsvPregunta13 = {
		lsvPregunta: "¿De dónde provienen la mayor parte de turistan que visitan Las Vegas?",
		Respuestas: ["De América Latina.","De Europa.","De Nueva York.","De Los Angeles, San Francisco, San Diego y otras zonas de California."],
		Correcta: 13
};
//Question 14 
var lsvPregunta14 = {
		lsvPregunta: "¿Cómo se conocer popularmente a Las Vegas?",
		Respuestas: ["La Capital del Mundo.","La Ciudad del Amor.","La Ciudad del Pecado.","La Ciudad de los Niños."],
		Correcta: 2
};
//Question 15 
var lsvPregunta15 = {
		lsvPregunta: "¿Cuál es la cantidad promedio de casinos en Las Vegas?",
		Respuestas: ["350.","8000.","1700.","200."],
		Correcta: 0 
};
//
//Function .random that randomize the question to display and returns the data in this. js
LasVegas.generarPregunta = function(){
	//Generate 
	var random = Math.floor(Math.random()*10) % 15;
	switch(random){
	//Question 1.
	case 0:
		LasVegas.enunciado = lsvPregunta1.lsvPregunta;
		for(var i = 0; i < 4; i++){
			LasVegas.resps[i] = lsvPregunta1.Respuestas[i];
		}
		LasVegas.respC = lsvPregunta1.Correcta;
		break;
	//Question 2.
	case 1:
		LasVegas.enunciado = lsvPregunta2.lsvPregunta;
		for(var i = 0; i < 4; i++){
			LasVegas.resps[i] = lsvPregunta2.Respuestas[i];			
		}
		LasVegas.respC = lsvPregunta2.Correcta;
		break;
	//Question 3.
	case 2:
		LasVegas.enunciado = lsvPregunta3.lsvPregunta;
		for(var i = 0; i < 4; i++){
			LasVegas.resps[i] = lsvPregunta3.Respuestas[i];			
		}
		LasVegas.respC = lsvPregunta3.Correcta;
		break;				
	//Question 4.
	case 3:
		LasVegas.enunciado = lsvPregunta4.lsvPregunta;
		for(var i = 0; i < 4; i++){
			LasVegas.resps[i] = lsvPregunta4.Respuestas[i];			
		}
		LasVegas.respC = lsvPregunta4.Correcta;
		break;	
	//Question 5.
	case 4:
		LasVegas.enunciado = lsvPregunta5.lsvPregunta;
		for(var i = 0; i < 4; i++){
			LasVegas.resps[i] = lsvPregunta5.Respuestas[i];			
		}
		LasVegas.respC = lsvPregunta5.Correcta;
		break;
	//Question 6.
	case 5:
		LasVegas.enunciado = lsvPregunta6.lsvPregunta;
		for(var i = 0; i < 4; i++){
			LasVegas.resps[i] = lsvPregunta6.Respuestas[i];			
		}
		LasVegas.respC = lsvPregunta6.Correcta;
		break;
	//Question 7.
	case 6:
		LasVegas.enunciado = lsvPregunta7.lsvPregunta;
		for(var i = 0; i < 4; i++){
			LasVegas.resps[i] = lsvPregunta7.Respuestas[i];			
		}
		LasVegas.respC = lsvPregunta7.Correcta;
		break;
	//Question 8.
	case 7:
		LasVegas.enunciado = lsvPregunta8.lsvPregunta;
		for(var i = 0; i < 4; i++){
			LasVegas.resps[i] = lsvPregunta8.Respuestas[i];			
		}
	LasVegas.respC = lsvPregunta8.Correcta;
	break;
	//Question 9.
	case 8:
		LasVegas.enunciado = lsvPregunta9.lsvPregunta;
		for(var i = 0; i < 4; i++){
			LasVegas.resps[i] = lsvPregunta9.Respuestas[i];			
		}
	LasVegas.respC = lsvPregunta9.Correcta;
	break;
	//Question 10.
	case 9:
		LasVegas.enunciado = lsvPregunta10.lsvPregunta;
		for(var i = 0; i < 4; i++){
			LasVegas.resps[i] = lsvPregunta10.Respuestas[i];			
		}
	LasVegas.respC = lsvPregunta10.Correcta;
	break;
	//Question 11.
	case 10:
		LasVegas.enunciado = lsvPregunta11.lsvPregunta;
		for(var i = 0; i < 4; i++){
			LasVegas.resps[i] = lsvPregunta11.Respuestas[i];			
		}
	LasVegas.respC = lsvPregunta11.Correcta;
	break;
	//Question 12.
	case 11:
		LasVegas.enunciado = lsvPregunta12.lsvPregunta;
		for(var i = 0; i < 4; i++){
			LasVegas.resps[i] = lsvPregunta12.Respuestas[i];			
		}
	LasVegas.respC = lsvPregunta12.Correcta;
	break;
	//Question 13.
	case 12:
		LasVegas.enunciado = lsvPregunta13.lsvPregunta;
		for(var i = 0; i < 4; i++){
			LasVegas.resps[i] = lsvPregunta13.Respuestas[i];			
		}
	LasVegas.respC = lsvPregunta13.Correcta;
	break;
	//Question 14.
	case 13:
		LasVegas.enunciado = lsvPregunta14.lsvPregunta;
		for(var i = 0; i < 4; i++){
			LasVegas.resps[i] = lsvPregunta14.Respuestas[i];			
		}
	LasVegas.respC = lsvPregunta14.Correcta;
	break;
	//Question 15.
	case 14:
		LasVegas.enunciado = lsvPregunta15.lsvPregunta;
		for(var i = 0; i < 4; i++){
			LasVegas.resps[i] = lsvPregunta15.Respuestas[i];			
		}
	LasVegas.respC = lsvPregunta15.Correcta;
	break;
	};
};
