//AUSTRALIA.
// Create an array that contains the statement and questions.
var Australia = {
		enunciado:"",
		resps: new Array(),
		respC:-1,
};
// Question 1
var austPregunta1 = {
		austPregunta: "¿Cuál es la capital de Australia?",
		Respuestas: ["Canberra.","Sidney.","Melbourne.","Adelaide."],
		Correcta: 0
};
// Question 2
var austPregunta2 = {
		austPregunta: "¿Quién fue el diseñador de la Opera de Sydney?",
		Respuestas: ["Le Chorbusier.","Jorn Utzon.","Da Vinci.","Kevin Rudd."],
		Correcta: 1
};
//Question 3
var austPregunta3 = {	
		austPregunta: "La Gran Barrera de Coral es el arrecife de coral más grande del mundo ¿en dónde se encuentra?",
		Respuestas: ["En el Mar del Coral, frente a la costa de Queensland.","En el Mar de Timor, en australia del Oeste.","En la Gran Bahía Australiana.","En el Mar de Tasmania, frente a Victoria."],
		Correcta: 0
};
//Question 4
var austPregunta4 = {
		austPregunta: "¿Qué significa la palabra 'Canguro'?",
		Respuestas: ["No te entiendo.","Mamífero saltarín.","Mamífero australiano.","Animal grande."],
		Correcta: 0
};
//Question 5
var austPregunta5 = {
		austPregunta: "¿Qué lugar ocupa Australia en cuanto a su extensión?",
		Respuestas: ["Es el sexto país más grande del mundo.","Es el segundo país más grande del mundo.","Es el octavo país más grande del mundo.","Es el primer país más grande del mundo."],
		Correcta: 0
};
//Question 6 
var austPregunta6 = {
		austPregunta: "¿En dónde se encuentra la Galería Nacional de Australia?",
		Respuestas: ["En Victoria.","En Adelaide.","En Sidney.","En Canberra."],
		Correcta: 3
};
//Question 7
var austPregunta7 = {
		austPregunta: "¿En qué año se realizó el primero campeonato de surf de Australia?",
		Respuestas: ["1964.","1980.","1970.","2012."],
		Correcta: 0
};
//Question 8
var austPregunta8 = {
		austPregunta: "¿Cuántos volcanes activos posee Australia?",
		Respuestas: ["Cero.","Uno.","Trece.","Tres."],
		Correcta: 0
};
//Question 9
var austPregunta9 = {
		austPregunta: "¿En qué ciudad se encuentra el Museo de los Incencios?",
		Respuestas: ["En Victoria.","En Queensland.","En Penrith.","En Melbourne."],
		Correcta: 2
};
//Question 10
var austPregunta10 = {
		austPregunta: "¿En qué año fue la ciudad de Sidney sede olímpica?",
		Respuestas: ["2000.","2012.","1954.","1900."],
		Correcta: 2
};
//Question 11 
var austPregunta11 = {
		austPregunta: "¿Cuál es la principal característica de la Isla Fraser?",
		Respuestas: ["Es la más pequeña del mundo.","No posee vegetación.","Es la isla de arena más grande del mundo.","No hay fauna."],
		Correcta: 0
};
//Question 12
var austPregunta12 = {
		austPregunta: "¿Cómo se llama la famosa roca con forma de ola ubicada en Australia?",
		Respuestas: ["Wave Rock.","Surfers Rock.","Sea Rock.","The Rock."],
		Correcta: 0
};
//Question 13 
var austPregunta13 = {
		austPregunta: "¿Cuántas estrellas tiene la bandera de Australia?",
		Respuestas: ["6.","7.","3.","Ninguna."],
		Correcta: 0
};
//Question 14 
var austPregunta14 = {
		austPregunta: "¿Cuál es el significado de la palabra Australia?			",
		Respuestas: ["Del Sur.","Tierra de canguros.","Tierra de koalas.","Del mar."],
		Correcta: 0
};
//Question 15 
var austPregunta15 = {
		austPregunta: "¿Qué se exhibe en el Museo Ripley de Australia?",
		Respuestas: ["Fotografías de surfistas.","Obras de arte.","Objetos e historias impactantes de todo el mundo.","Muebles."],
		Correcta: 2
};
//
//Function .random that randomize the question to display and returns the data in this. js
Australia.generarPregunta = function(){
	//Generate 
	var random = Math.floor(Math.random()*10) % 15;
	switch(random){
	//Question 1.
	case 0:
		Australia.enunciado = austPregunta1.austPregunta;
		for(var i = 0; i < 4; i++){
			Australia.resps[i] = austPregunta1.Respuestas[i];
		}
		Australia.respC = austPregunta1.Correcta;
		break;
	//Question 2.
	case 1:
		Australia.enunciado = austPregunta2.austPregunta;
		for(var i = 0; i < 4; i++){
			Australia.resps[i] = austPregunta2.Respuestas[i];			
		}
		Australia.respC = austPregunta2.Correcta;
		break;
	//Question 3.
	case 2:
		Australia.enunciado = austPregunta3.austPregunta;
		for(var i = 0; i < 4; i++){
			Australia.resps[i] = austPregunta3.Respuestas[i];			
		}
		Australia.respC = austPregunta3.Correcta;
		break;				
	//Question 4.
	case 3:
		Australia.enunciado = austPregunta4.austPregunta;
		for(var i = 0; i < 4; i++){
			Australia.resps[i] = austPregunta4.Respuestas[i];			
		}
		Australia.respC = austPregunta4.Correcta;
		break;	
	//Question 5.
	case 4:
		Australia.enunciado = austPregunta5.austPregunta;
		for(var i = 0; i < 4; i++){
			Australia.resps[i] = austPregunta5.Respuestas[i];			
		}
		Australia.respC = austPregunta5.Correcta;
		break;
	//Question 6.
	case 5:
		Australia.enunciado = austPregunta6.austPregunta;
		for(var i = 0; i < 4; i++){
			Australia.resps[i] = austPregunta6.Respuestas[i];			
		}
		Australia.respC = austPregunta6.Correcta;
		break;
	//Question 7.
	case 6:
		Australia.enunciado = austPregunta7.austPregunta;
		for(var i = 0; i < 4; i++){
			Australia.resps[i] = austPregunta7.Respuestas[i];			
		}
		Australia.respC = austPregunta7.Correcta;
		break;
	//Question 8.
	case 7:
		Australia.enunciado = austPregunta8.austPregunta;
		for(var i = 0; i < 4; i++){
			Australia.resps[i] = austPregunta8.Respuestas[i];			
		}
	Australia.respC = austPregunta8.Correcta;
	break;
	//Question 9.
	case 8:
		Australia.enunciado = austPregunta9.austPregunta;
		for(var i = 0; i < 4; i++){
			Australia.resps[i] = austPregunta9.Respuestas[i];			
		}
	Australia.respC = austPregunta9.Correcta;
	break;
	//Question 10.
	case 9:
		Australia.enunciado = austPregunta10.austPregunta;
		for(var i = 0; i < 4; i++){
			Australia.resps[i] = austPregunta10.Respuestas[i];			
		}
	Australia.respC = austPregunta10.Correcta;
	break;
	//Question 11.
	case 10:
		Australia.enunciado = austPregunta11.austPregunta;
		for(var i = 0; i < 4; i++){
			Australia.resps[i] = austPregunta11.Respuestas[i];			
		}
	Australia.respC = austPregunta11.Correcta;
	break;
	//Question 12.
	case 11:
		Australia.enunciado = austPregunta12.austPregunta;
		for(var i = 0; i < 4; i++){
			Australia.resps[i] = austPregunta12.Respuestas[i];			
		}
	Australia.respC = austPregunta12.Correcta;
	break;
	//Question 13.
	case 12:
		Australia.enunciado = austPregunta13.austPregunta;
		for(var i = 0; i < 4; i++){
			Australia.resps[i] = austPregunta13.Respuestas[i];			
		}
	Australia.respC = austPregunta13.Correcta;
	break;
	//Question 14.
	case 13:
		Australia.enunciado = austPregunta14.austPregunta;
		for(var i = 0; i < 4; i++){
			Australia.resps[i] = austPregunta14.Respuestas[i];			
		}
	Australia.respC = austPregunta14.Correcta;
	break;
	//Question 15.
	case 14:
		Australia.enunciado = austPregunta15.austPregunta;
		for(var i = 0; i < 4; i++){
			Australia.resps[i] = austPregunta15.Respuestas[i];			
		}
	Australia.respC = austPregunta15.Correcta;
	break;
	};
};
