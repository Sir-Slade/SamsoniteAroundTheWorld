//INDIA.
// Create an array that contains the statement and questions.
var India = {
		enunciado:"",
		resps: new Array(),
		respC:-1,
};
// Question 1
var indPregunta1 = {
		indPregunta: "La India es la democracia más grande del mundo ¿cuántos estados tiene?",
		Respuestas: ["28 Estados.","30 Estados.","32 Estados.","12 Estados."],
		Correcta: 0
};
// Question 2
var indPregunta2 = {
		indPregunta: "¿Qué animal está considerado sagrado en la India?",
		Respuestas: ["La vaca.","El conejo.","El perro.","El gato."],
		Correcta: 0
};
//Question 3
var indPregunta3 = {	
		indPregunta: "¿Qué famoso juego de mesa tiene orígen en la India?",
		Respuestas: ["Los naipes.","El dominó.","El ajedrez.","Las damas."],
		Correcta: 2
};
//Question 4
var indPregunta4 = {
		indPregunta: "¿Cómo se llama uno de los principales ríos de la India?",
		Respuestas: ["Sena.","Ganges.","Bangladésh.","Bengala."],
		Correcta: 1
};
//Question 5
var indPregunta5 = {
		indPregunta: "¿Cuáles son las dos lenguas oficiales de la India?",
		Respuestas: ["Hindi y el Inglés.","Hindi y el Francés.","Hindi y el Alemán.","Latín y el Francés."],
		Correcta: 0
};
//Question 6 
var indPregunta6 = {
		indPregunta: "¿Qué es la Ayurveda?",
		Respuestas: ["La forma de medicina mas antigua conocida por la humanidad.","El nombre en hindi de las vacas.","La capital de la India.","Un plato típico."],
		Correcta: 0
};
//Question 7
var indPregunta7 = {
		indPregunta: "¿Cómo llaman comunmente a la industria cinematográfica de la India?",
		Respuestas: ["Hollywood.","Cinema Delhi.","India Films.","Bollywood."],
		Correcta: 3
};
//Question 8
var indPregunta8 = {
		indPregunta: "En la India se encuentra la construcción religiosa más grande del mundo. ¿Cómo se llama?",
		Respuestas: ["Templo Angkor Wat.","Templo Delhi.","Templo Bayón.","Templo Desham Wat."],
		Correcta: 0
};
//Question 9
var indPregunta9 = {
		indPregunta: "¿Qué tradicional disciplina física y mental se originó en la India hace 5000 años?",
		Respuestas: ["El Yoga.","La Meditación.","El Maratón.","El Triatlón."],
		Correcta: 0
};
//Question 10
var indPregunta10 = {
		indPregunta: "¿Cada cuánto se celebra el festival hindu Kumbh Mela?",
		Respuestas: ["Todos los años.","Cada 5 años.","Cada 12 años.","Cada 10 años."],
		Correcta: 2
};
//Question 11 
var indPregunta11 = {
		indPregunta: "¿Cuáles son, en India, los símbolos del animal nacional?",
		Respuestas: ["El Pavo Real y la Vaca.","El Tigre y el Pavo Real.","La Vaca y el Tigre.","El Tigre y el Elefante."],
		Correcta: 2
};
//Question 12
var indPregunta12 = {
		indPregunta: "¿En qué año la India logró su independencia de Inglaterra?",
		Respuestas: ["1930.","1947.","1975.","1900."],
		Correcta: 1
};
//Question 13 
var indPregunta13 = {
		indPregunta: "India posee el puente más alto del mundo ¿Cómo se llama?",
		Respuestas: ["Gandhi Bridge.","Thantus.","Delhi Bridge.","Baily Bridge."],
		Correcta: 3
};
//Question 14 
var indPregunta14 = {
		indPregunta: "¿Cuál es la capital de India?",
		Respuestas: ["Kota.","Nueva Delhi.","Bangalore.","Nagpur."],
		Correcta: 1
};
//Question 15 
var indPregunta15 = {
		indPregunta: "India posee la población habitada más antigua del mundo ¿Cuál es su nombre?",
		Respuestas: ["Nueva Delhi.","Varanasi.","Bangladésh.","Bangalore."],
		Correcta: 1
};
//
//Function .random that randomize the question to display and returns the data in this. js
India.generarPregunta = function(){
	//Generate 
	var random = Math.floor(Math.random()*10) % 15;
	switch(random){
	//Question 1.
	case 0:
		India.enunciado = indPregunta1.indPregunta;
		for(var i = 0; i < 4; i++){
			India.resps[i] = indPregunta1.Respuestas[i];
		}
		India.respC = indPregunta1.Correcta;
		break;
	//Question 2.
	case 1:
		India.enunciado = indPregunta2.indPregunta;
		for(var i = 0; i < 4; i++){
			India.resps[i] = indPregunta2.Respuestas[i];			
		}
		India.respC = indPregunta2.Correcta;
		break;
	//Question 3.
	case 2:
		India.enunciado = indPregunta3.indPregunta;
		for(var i = 0; i < 4; i++){
			India.resps[i] = indPregunta3.Respuestas[i];			
		}
		India.respC = indPregunta3.Correcta;
		break;				
	//Question 4.
	case 3:
		India.enunciado = indPregunta4.indPregunta;
		for(var i = 0; i < 4; i++){
			India.resps[i] = indPregunta4.Respuestas[i];			
		}
		India.respC = indPregunta4.Correcta;
		break;	
	//Question 5.
	case 4:
		India.enunciado = indPregunta5.indPregunta;
		for(var i = 0; i < 4; i++){
			India.resps[i] = indPregunta5.Respuestas[i];			
		}
		India.respC = indPregunta5.Correcta;
		break;
	//Question 6.
	case 5:
		India.enunciado = indPregunta6.indPregunta;
		for(var i = 0; i < 4; i++){
			India.resps[i] = indPregunta6.Respuestas[i];			
		}
		India.respC = indPregunta6.Correcta;
		break;
	//Question 7.
	case 6:
		India.enunciado = indPregunta7.indPregunta;
		for(var i = 0; i < 4; i++){
			India.resps[i] = indPregunta7.Respuestas[i];			
		}
		India.respC = indPregunta7.Correcta;
		break;
	//Question 8.
	case 7:
		India.enunciado = indPregunta8.indPregunta;
		for(var i = 0; i < 4; i++){
			India.resps[i] = indPregunta8.Respuestas[i];			
		}
	India.respC = indPregunta8.Correcta;
	break;
	//Question 9.
	case 8:
		India.enunciado = indPregunta9.indPregunta;
		for(var i = 0; i < 4; i++){
			India.resps[i] = indPregunta9.Respuestas[i];			
		}
	India.respC = indPregunta9.Correcta;
	break;
	//Question 10.
	case 9:
		India.enunciado = indPregunta10.indPregunta;
		for(var i = 0; i < 4; i++){
			India.resps[i] = indPregunta10.Respuestas[i];			
		}
	India.respC = indPregunta10.Correcta;
	break;
	//Question 11.
	case 10:
		India.enunciado = indPregunta11.indPregunta;
		for(var i = 0; i < 4; i++){
			India.resps[i] = indPregunta11.Respuestas[i];			
		}
	India.respC = indPregunta11.Correcta;
	break;
	//Question 12.
	case 11:
		India.enunciado = indPregunta12.indPregunta;
		for(var i = 0; i < 4; i++){
			India.resps[i] = indPregunta12.Respuestas[i];			
		}
	India.respC = indPregunta12.Correcta;
	break;
	//Question 13.
	case 12:
		India.enunciado = indPregunta13.indPregunta;
		for(var i = 0; i < 4; i++){
			India.resps[i] = indPregunta13.Respuestas[i];			
		}
	India.respC = indPregunta13.Correcta;
	break;
	//Question 14.
	case 13:
		India.enunciado = indPregunta14.indPregunta;
		for(var i = 0; i < 4; i++){
			India.resps[i] = indPregunta14.Respuestas[i];			
		}
	India.respC = indPregunta14.Correcta;
	break;
	//Question 15.
	case 14:
		India.enunciado = indPregunta15.indPregunta;
		for(var i = 0; i < 4; i++){
			India.resps[i] = indPregunta15.Respuestas[i];			
		}
	India.respC = indPregunta15.Correcta;
	break;
	};
};