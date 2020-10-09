//
// Create an array that contains the statement and questions.
var Pais = {
		enunciado:"",
		resps: new Array(),
		respC:-1,
};
// Question 1
var pregunta1 = {
		Pregunta: "",
		Respuestas: ["","","",""],
		Correcta: 0
};
// Question 2
var pregunta2 = {
		Pregunta: "",
		Respuestas: ["","","",""],
		Correcta: 0
};
//Question 3
var pregunta3 = {	
		Pregunta: "",
		Respuestas: ["","","",""],
		Correcta: 0
};
//Question 4
var pregunta4 = {
		Pregunta: "",
		Respuestas: ["","","",""],
		Correcta: 0
};
//Question 5
var pregunta5 = {
		Pregunta: "",
		Respuestas: ["","","",""],
		Correcta: 0
};
//Question 6 
var pregunta6 = {
		Pregunta: "",
		Respuestas: ["","","",""],
		Correcta: 0
};
//Question 7
var pregunta7 = {
		Pregunta: "",
		Respuestas: ["","","",""],
		Correcta: 0
};
//Question 8
var pregunta8 = {
		Pregunta: "",
		Respuestas: ["","","",""],
		Correcta: 0
};
//Question 9
var pregunta9 = {
		Pregunta: "",
		Respuestas: ["","","",""],
		Correcta: 0
};
//Question 10
var pregunta10 = {
		Pregunta: "",
		Respuestas: ["","","",""],
		Correcta: 0
};
//Question 11 
var pregunta11 = {
		Pregunta: "",
		Respuestas: ["","","",""],
		Correcta: 0
};
//Question 12
var pregunta12 = {
		Pregunta: "",
		Respuestas: ["","","",""],
		Correcta: 0
};
//Question 13 
var pregunta13 = {
		Pregunta: "",
		Respuestas: ["","","",""],
		Correcta: 0
};
//Question 14 
var pregunta14 = {
		Pregunta: "",
		Respuestas: ["","","",""],
		Correcta: 0
};
//Question 15 
var pregunta15 = {
		Pregunta: "",
		Respuestas: ["","","",""],
		Correcta: 0
};
//
//Function .random that randomize the question to display and returns the data in this. js
Pais.generarPregunta = function(){
	//Generate 
	var random = Math.floor(Math.random()*10) % 15;
	switch(random){
	//Question 1.
	case 0:
		Pais.enunciado = pregunta1.Pregunta;
		for(var i = 0; i < 4; i++){
			Pais.resps[i] = pregunta1.Respuestas[i];
		}
		Pais.respC = pregunta1.Correcta;
		break;
	//Question 2.
	case 1:
		Pais.enunciado = pregunta2.Pregunta;
		for(var i = 0; i < 4; i++){
			Pais.resps[i] = pregunta2.Respuestas[i];			
		}
		Pais.respC = pregunta2.Correcta;
		break;
	//Question 3.
	case 2:
		Pais.enunciado = pregunta3.Pregunta;
		for(var i = 0; i < 4; i++){
			Pais.resps[i] = pregunta3.Respuestas[i];			
		}
		Pais.respC = pregunta3.Correcta;
		break;				
	//Question 4.
	case 3:
		Pais.enunciado = pregunta4.Pregunta;
		for(var i = 0; i < 4; i++){
			Pais.resps[i] = pregunta4.Respuestas[i];			
		}
		Pais.respC = pregunta4.Correcta;
		break;	
	//Question 5.
	case 4:
		Pais.enunciado = pregunta5.Pregunta;
		for(var i = 0; i < 4; i++){
			Pais.resps[i] = pregunta5.Respuestas[i];			
		}
		Pais.respC = pregunta5.Correcta;
		break;
	//Question 6.
	case 5:
		Pais.enunciado = pregunta6.Pregunta;
		for(var i = 0; i < 4; i++){
			Pais.resps[i] = pregunta6.Respuestas[i];			
		}
		Pais.respC = pregunta6.Correcta;
		break;
	//Question 7.
	case 6:
		Pais.enunciado = pregunta7.Pregunta;
		for(var i = 0; i < 4; i++){
			Pais.resps[i] = pregunta7.Respuestas[i];			
		}
		Pais.respC = pregunta7.Correcta;
		break;
	//Question 8.
	case 7:
		Pais.enunciado = pregunta8.Pregunta;
		for(var i = 0; i < 4; i++){
			Pais.resps[i] = pregunta8.Respuestas[i];			
		}
	Pais.respC = pregunta8.Correcta;
	break;
	//Question 9.
	case 8:
		Pais.enunciado = pregunta9.Pregunta;
		for(var i = 0; i < 4; i++){
			Pais.resps[i] = pregunta9.Respuestas[i];			
		}
	Pais.respC = pregunta9.Correcta;
	break;
	//Question 10.
	case 9:
		Pais.enunciado = pregunta10.Pregunta;
		for(var i = 0; i < 4; i++){
			Pais.resps[i] = pregunta10.Respuestas[i];			
		}
	Pais.respC = pregunta10.Correcta;
	break;
	//Question 11.
	case 10:
		Pais.enunciado = pregunta11.Pregunta;
		for(var i = 0; i < 4; i++){
			Pais.resps[i] = pregunta11.Respuestas[i];			
		}
	Pais.respC = pregunta11.Correcta;
	break;
	//Question 12.
	case 11:
		Pais.enunciado = pregunta12.Pregunta;
		for(var i = 0; i < 4; i++){
			Pais.resps[i] = pregunta12.Respuestas[i];			
		}
	Pais.respC = pregunta12.Correcta;
	break;
	//Question 13.
	case 12:
		Pais.enunciado = pregunta13.Pregunta;
		for(var i = 0; i < 4; i++){
			Pais.resps[i] = pregunta13.Respuestas[i];			
		}
	Pais.respC = pregunta13.Correcta;
	break;
	//Question 14.
	case 13:
		Pais.enunciado = pregunta14.Pregunta;
		for(var i = 0; i < 4; i++){
			Pais.resps[i] = pregunta14.Respuestas[i];			
		}
	Pais.respC = pregunta14.Correcta;
	break;
	//Question 15.
	case 14:
		Pais.enunciado = pregunta15.Pregunta;
		for(var i = 0; i < 4; i++){
			Pais.resps[i] = pregunta15.Respuestas[i];			
		}
	Pais.respC = pregunta15.Correcta;
	break;
	};
};