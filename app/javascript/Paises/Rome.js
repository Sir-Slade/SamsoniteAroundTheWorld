//ROME.
// Create an array that contains the statement and questions.
var Rome = {
		enunciado:"",
		resps: new Array(),
		respC:-1,
};
// Question 1
var romPregunta1 = {
		romPregunta: "¿Cuál de estos lugares de Roma está considerado una Maravilla del Mundo?",
		Respuestas: ["El Campo di Fiori.","La Fontana di Trevi.","El Vaticano.","El Coliseo Romano."],
		Correcta: 0
};
// Question 2
var romPregunta2 = {
		romPregunta: "¿Qué sucede, según la tradición, con todos aquellos que arrojan una moneda a la Fontana di Trevi?",
		Respuestas: ["Vuelven a Roma.","Tienen un hijo.","Dan la vuelta al mundo.","Se casan."],
		Correcta: 0
};
//Question 3
var romPregunta3 = {	
		romPregunta: "¿Cuál es la principal curiosidad de la plaza Largo di Torre Argentina?",
		Respuestas: ["Hay un refugio para gatos.","Hay un café tradicional.","Está lleno de rosas.","Hay un hotel de 5 estrellas."],
		Correcta: 0
};
//Question 4
var romPregunta4 = {
		romPregunta: "¿En qué plaza se encuentra la Fuente de los Cuatro Ríos?",
		Respuestas: ["En la Plaza Barberini.","En la Plaza Navona.","En la Plaza Largo di Torre Argentina.","En la Plaza Colonna."],
		Correcta: 1
};
//Question 5
var romPregunta5 = {
		romPregunta: "¿Qué forma tiene el Panteón de Agripa?",
		Respuestas: ["Circular.","Forma de cruz.","Triangular.","Cuadrada."],
		Correcta: 0
};
//Question 6 
var romPregunta6 = {
		romPregunta: "¿Cómo es conocida tradicionalmente la ciudad de Roma?",
		Respuestas: ["La Ciudad Eterna.","LA Ciudad del Amor.","La Ciudad del Rock.","La Ciudad que no duerme."],
		Correcta: 0
};
//Question 7
var romPregunta7 = {
		romPregunta: "¿Cómo se llama el local, ubicado en Roma, que desde hace 200 años realiza las vestimentas papales ?",
		Respuestas: ["Guistiniani.","Gammarelli","Romamanolli","Pope Rome"],
		Correcta: 1
};
//Question 8
var romPregunta8 = {
		romPregunta: "¿Cómo se llama el mural que pintó Miguel Angel en la Capilla Sixtina?",
		Respuestas: ["La Salvación.","El Juicio Final.","Epifanía.","Dios y sus siervos."],
		Correcta: 1
};
//Question 9
var romPregunta9 = {
		romPregunta: "¿En qué año Roma fue sede de los juegos Olímpicos?",
		Respuestas: ["1982.","1960.","2010.","2000."],
		Correcta: 1
};
//Question 10
var romPregunta10 = {
		romPregunta: "¿Quién proyectó la Plaza del Campidoglio?",
		Respuestas: ["Miguel Angel.","Da Vinci.","Rafael.","Picasso."],
		Correcta: 0
};
//Question 11 
var romPregunta11 = {
		romPregunta: "¿Para qué se usaba el Coliseo Romano?",
		Respuestas: ["Era la residencia del Emperador.","Un hospital.","Una base militar.","Era un anfiteatro."],
		Correcta: 3
};
//Question 12
var romPregunta12 = {
		romPregunta: "¿Por qué se distingue la Archibasílica del Salvador y de los santos Juan Bautista y Juan Evangelista?",
		Respuestas: ["Está repleta de obras de arte.","Es una histórica iglesia abandonada.","Es la Catedral de Roma.","Es la iglesia más antigua del mundo."],
		Correcta: 2
};
//Question 13 
var romPregunta13 = {
		romPregunta: "¿En qué años fue sede del Mundial de Fútbol?",
		Respuestas: ["1934 y 1990.","1994 y 2010.","1932 y 1960.","1982 y 1986."],
		Correcta: 0
};
//Question 14 
var romPregunta14 = {
		romPregunta: "¿Quiénes fundaron la ciudad de Roma?",
		Respuestas: ["Herodes.","Leonardo da Vinci.","Rómulo y Remo.","Servio Tulio."],
		Correcta: 2
};
//Question 15 
var romPregunta15 = {
		romPregunta: "¿Cuál fue la primer lengua de Roma?",
		Respuestas: ["El italiano.","El latín.","El inglés.","El griego."],
		Correcta: 1
};
//
//Function .random that randomize the question to display and returns the data in this. js
Rome.generarPregunta = function(){
	//Generate 
	var random = Math.floor(Math.random()*10) % 15;
	switch(random){
	//Question 1.
	case 0:
		Rome.enunciado = romPregunta1.romPregunta;
		for(var i = 0; i < 4; i++){
			Rome.resps[i] = romPregunta1.Respuestas[i];
		}
		Rome.respC = romPregunta1.Correcta;
		break;
	//Question 2.
	case 1:
		Rome.enunciado = romPregunta2.romPregunta;
		for(var i = 0; i < 4; i++){
			Rome.resps[i] = romPregunta2.Respuestas[i];			
		}
		Rome.respC = romPregunta2.Correcta;
		break;
	//Question 3.
	case 2:
		Rome.enunciado = romPregunta3.romPregunta;
		for(var i = 0; i < 4; i++){
			Rome.resps[i] = romPregunta3.Respuestas[i];			
		}
		Rome.respC = romPregunta3.Correcta;
		break;				
	//Question 4.
	case 3:
		Rome.enunciado = romPregunta4.romPregunta;
		for(var i = 0; i < 4; i++){
			Rome.resps[i] = romPregunta4.Respuestas[i];			
		}
		Rome.respC = romPregunta4.Correcta;
		break;	
	//Question 5.
	case 4:
		Rome.enunciado = romPregunta5.romPregunta;
		for(var i = 0; i < 4; i++){
			Rome.resps[i] = romPregunta5.Respuestas[i];			
		}
		Rome.respC = romPregunta5.Correcta;
		break;
	//Question 6.
	case 5:
		Rome.enunciado = romPregunta6.romPregunta;
		for(var i = 0; i < 4; i++){
			Rome.resps[i] = romPregunta6.Respuestas[i];			
		}
		Rome.respC = romPregunta6.Correcta;
		break;
	//Question 7.
	case 6:
		Rome.enunciado = romPregunta7.romPregunta;
		for(var i = 0; i < 4; i++){
			Rome.resps[i] = romPregunta7.Respuestas[i];			
		}
		Rome.respC = romPregunta7.Correcta;
		break;
	//Question 8.
	case 7:
		Rome.enunciado = romPregunta8.romPregunta;
		for(var i = 0; i < 4; i++){
			Rome.resps[i] = romPregunta8.Respuestas[i];			
		}
	Rome.respC = romPregunta8.Correcta;
	break;
	//Question 9.
	case 8:
		Rome.enunciado = romPregunta9.romPregunta;
		for(var i = 0; i < 4; i++){
			Rome.resps[i] = romPregunta9.Respuestas[i];			
		}
	Rome.respC = romPregunta9.Correcta;
	break;
	//Question 10.
	case 9:
		Rome.enunciado = romPregunta10.romPregunta;
		for(var i = 0; i < 4; i++){
			Rome.resps[i] = romPregunta10.Respuestas[i];			
		}
	Rome.respC = romPregunta10.Correcta;
	break;
	//Question 11.
	case 10:
		Rome.enunciado = romPregunta11.romPregunta;
		for(var i = 0; i < 4; i++){
			Rome.resps[i] = romPregunta11.Respuestas[i];			
		}
	Rome.respC = romPregunta11.Correcta;
	break;
	//Question 12.
	case 11:
		Rome.enunciado = romPregunta12.romPregunta;
		for(var i = 0; i < 4; i++){
			Rome.resps[i] = romPregunta12.Respuestas[i];			
		}
	Rome.respC = romPregunta12.Correcta;
	break;
	//Question 13.
	case 12:
		Rome.enunciado = romPregunta13.romPregunta;
		for(var i = 0; i < 4; i++){
			Rome.resps[i] = romPregunta13.Respuestas[i];			
		}
	Rome.respC = romPregunta13.Correcta;
	break;
	//Question 14.
	case 13:
		Rome.enunciado = romPregunta14.romPregunta;
		for(var i = 0; i < 4; i++){
			Rome.resps[i] = romPregunta14.Respuestas[i];			
		}
	Rome.respC = romPregunta14.Correcta;
	break;
	//Question 15.
	case 14:
		Rome.enunciado = romPregunta15.romPregunta;
		for(var i = 0; i < 4; i++){
			Rome.resps[i] = romPregunta15.Respuestas[i];			
		}
	Rome.respC = romPregunta15.Correcta;
	break;
	};
};