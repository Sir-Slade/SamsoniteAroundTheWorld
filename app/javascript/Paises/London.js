//LONDON.
// Create an array that contains the statement and questions.
var London = {
		enunciado:"",
		resps: new Array(),
		respC:-1,
};
// Question 1
var lonPregunta1 = {
		lonPregunta: "¿Qué hay dentro de la Torre de Londres?",
		Respuestas: ["Oficinas.","Las joyas de la Corona.","Archivos Secretos.","Departamentos."],
		Correcta: 1
};
// Question 2
var lonPregunta2 = {
		lonPregunta: "¿Cuál es el principal aeropuerto de Londres?",
		Respuestas: ["Aeropuerto de Heatrow.","Aeropuerto de Gatwick.","Aeropuerto de Stansted.","Aeropuerto de Galle."],
		Correcta: 0
};
//Question 3
var lonPregunta3 = {	
		lonPregunta: "¿Cuánto mide el Río Támesis?",
		Respuestas: ["340 kilómetros.","300 kilómetros.","50 kilómetros.","4 kilómetros."],
		Correcta: 0
};
//Question 4
var lonPregunta4 = {
		lonPregunta: "¿Cómo se llama la famosa noria mirador de Londres?",
		Respuestas: ["Big Wheel.","Big London.","The Eye.","London Eye."],
		Correcta: 3
};
//Question 5
var lonPregunta5 = {
		lonPregunta: "¿Cómo se llama la zona por donde pasa el meridiano de Greenwich?",
		Respuestas: ["East London.","South London.","North London.","West London."],
		Correcta: 1
};
//Question 6 
var lonPregunta6 = {
		lonPregunta: "¿Qué es el Big Ben?",
		Respuestas: ["La campana principal dentro de la torre.","El nombre de la torre.","El nombre de la zona.","El nombre del hombre que cuida la torre."],
		Correcta: 0
};
//Question 7
var lonPregunta7 = {
		lonPregunta: "¿Qué particularidad tiene la sala de lectura del British Museum?",
		Respuestas: ["Allí Marx escribió El Capital.","Allí Shakspeare solía escribir.","Hay una cafetería.","hay un mostrador de atención."],
		Correcta: 0
};
//Question 8
var lonPregunta8 = {
		lonPregunta: "¿En qué año Londres ardió casi en su totalidad?",
		Respuestas: ["En 1620.","En 1890.","En 1960.","En 1666."],
		Correcta: 3
};
//Question 9
var lonPregunta9 = {
		lonPregunta: "¿Quién fue el diseñador de las famosas cabinas telefónicas rojas de Londres?",
		Respuestas: ["Sir Gilbert Mathews.","Sir Giles Gilbert Scott.","Sir John Goodman.","Sir Scott Richard."],
		Correcta: 1
};
//Question 10
var lonPregunta10 = {
		lonPregunta: "El metro de Londres es el más antiguo del mundo. ¿En qué año se inaguró?",
		Respuestas: ["1863.","1800.","1900.","1925."],
		Correcta: 0
};
//Question 11 
var lonPregunta11 = {
		lonPregunta: "¿Qué famosa celebración se lleva a cabo en Londres entre enero y febrero?",
		Respuestas: ["El Año Nuevo Chino.","El compleaños de la Reina.","La Navidad.","El Año Nuevo Inglés."],
		Correcta: 0
};
//Question 12
var lonPregunta12 = {
		lonPregunta: "¿Cómo se llama el rascacielos más alto de Londres?",
		Respuestas: ["Canary Wharf Tower.","London Tower.","Big Tower.","Big Shine Tower."],
		Correcta: 0
};
//Question 13 
var lonPregunta13 = {
		lonPregunta: "¿Cuántas estaciones tiene el metro londinense?",
		Respuestas: ["366 estaciones.","163 estaciones.","100 estaciones.","274 estaciones."],
		Correcta: 3
};
//Question 14 
var lonPregunta14 = {
		lonPregunta: "¿Cómo se llama la torre en donde se encuentra el Big Ben?",
		Respuestas: ["St. Tower.","St. Stephen.","St. Philips.","St. York."],
		Correcta: 1
};
//Question 15 
var lonPregunta15 = {
		lonPregunta: "¿Cómo se llama el primer puente peatonal que cruza el Támesis desde el año 1900?",
		Respuestas: ["Tamesis Bridge.","The Important Bridge.","Millenium Bridge.","Big River."],
		Correcta: 2
};
//
//Function .random that randomize the question to display and returns the data in this. js
London.generarPregunta = function(){
	//Generate 
	var random = Math.floor(Math.random()*10) % 15;
	switch(random){
	//Question 1.
	case 0:
		London.enunciado = lonPregunta1.lonPregunta;
		for(var i = 0; i < 4; i++){
			London.resps[i] = lonPregunta1.Respuestas[i];
		}
		London.respC = lonPregunta1.Correcta;
		break;
	//Question 2.
	case 1:
		London.enunciado = lonPregunta2.lonPregunta;
		for(var i = 0; i < 4; i++){
			London.resps[i] = lonPregunta2.Respuestas[i];			
		}
		London.respC = lonPregunta2.Correcta;
		break;
	//Question 3.
	case 2:
		London.enunciado = lonPregunta3.lonPregunta;
		for(var i = 0; i < 4; i++){
			London.resps[i] = lonPregunta3.Respuestas[i];			
		}
		London.respC = lonPregunta3.Correcta;
		break;				
	//Question 4.
	case 3:
		London.enunciado = lonPregunta4.lonPregunta;
		for(var i = 0; i < 4; i++){
			London.resps[i] = lonPregunta4.Respuestas[i];			
		}
		London.respC = lonPregunta4.Correcta;
		break;	
	//Question 5.
	case 4:
		London.enunciado = lonPregunta5.lonPregunta;
		for(var i = 0; i < 4; i++){
			London.resps[i] = lonPregunta5.Respuestas[i];			
		}
		London.respC = lonPregunta5.Correcta;
		break;
	//Question 6.
	case 5:
		London.enunciado = lonPregunta6.lonPregunta;
		for(var i = 0; i < 4; i++){
			London.resps[i] = lonPregunta6.Respuestas[i];			
		}
		London.respC = lonPregunta6.Correcta;
		break;
	//Question 7.
	case 6:
		London.enunciado = lonPregunta7.lonPregunta;
		for(var i = 0; i < 4; i++){
			London.resps[i] = lonPregunta7.Respuestas[i];			
		}
		London.respC = lonPregunta7.Correcta;
		break;
	//Question 8.
	case 7:
		London.enunciado = lonPregunta8.lonPregunta;
		for(var i = 0; i < 4; i++){
			London.resps[i] = lonPregunta8.Respuestas[i];			
		}
	London.respC = lonPregunta8.Correcta;
	break;
	//Question 9.
	case 8:
		London.enunciado = lonPregunta9.lonPregunta;
		for(var i = 0; i < 4; i++){
			London.resps[i] = lonPregunta9.Respuestas[i];			
		}
	London.respC = lonPregunta9.Correcta;
	break;
	//Question 10.
	case 9:
		London.enunciado = lonPregunta10.lonPregunta;
		for(var i = 0; i < 4; i++){
			London.resps[i] = lonPregunta10.Respuestas[i];			
		}
	London.respC = lonPregunta10.Correcta;
	break;
	//Question 11.
	case 10:
		London.enunciado = lonPregunta11.lonPregunta;
		for(var i = 0; i < 4; i++){
			London.resps[i] = lonPregunta11.Respuestas[i];			
		}
	London.respC = lonPregunta11.Correcta;
	break;
	//Question 12.
	case 11:
		London.enunciado = lonPregunta12.lonPregunta;
		for(var i = 0; i < 4; i++){
			London.resps[i] = lonPregunta12.Respuestas[i];			
		}
	London.respC = lonPregunta12.Correcta;
	break;
	//Question 13.
	case 12:
		London.enunciado = lonPregunta13.lonPregunta;
		for(var i = 0; i < 4; i++){
			London.resps[i] = lonPregunta13.Respuestas[i];			
		}
	London.respC = lonPregunta13.Correcta;
	break;
	//Question 14.
	case 13:
		London.enunciado = lonPregunta14.lonPregunta;
		for(var i = 0; i < 4; i++){
			London.resps[i] = lonPregunta14.Respuestas[i];			
		}
	London.respC = lonPregunta14.Correcta;
	break;
	//Question 15.
	case 14:
		London.enunciado = lonPregunta15.lonPregunta;
		for(var i = 0; i < 4; i++){
			London.resps[i] = lonPregunta15.Respuestas[i];			
		}
	London.respC = lonPregunta15.Correcta;
	break;
	};
};