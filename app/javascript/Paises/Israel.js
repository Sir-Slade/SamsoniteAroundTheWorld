//ISRAEL.
// Create an array that contains the statement and questions.
var Israel = {
		enunciado:"",
		resps: new Array(),
		respC:-1,
};
// Question 1
var isrPregunta1 = {
		isrPregunta: "¿En que año fue la única vez que Israel calificó para un Campeonato Mundial de Fútbol?",
		Respuestas: ["México 1970.","México 1986.","Italia 1990.","USA 1994."],
		Correcta: 0
};
// Question 2
var isrPregunta2 = {
		isrPregunta: "¿Cuál es la capital de Israel?",
		Respuestas: ["Tel Aviv.","Jerusalen.","Haifa.","Herzliya."],
		Correcta: 1
};
//Question 3
var isrPregunta3 = {	
		isrPregunta: "¿En qué museo de Israel se encuentran los Manuscritos del Mar Muerto?",
		Respuestas: ["En el Museo de Israel.","En el Museo de la Diáspora.","En el Museo del Holocausto.","En el Museo de Jerusalén."],
		Correcta: 0
};
//Question 4
var isrPregunta4 = {
		isrPregunta: "¿Qué es un kibutz?",
		Respuestas: ["El nombre tradicional con que llaman a las estaciones de trenes.","Un libro sagrado.","Un animal de la zona.","Una comuna agrícola israelí."],
		Correcta: 3
};
//Question 5
var isrPregunta5 = {
		isrPregunta: "¿Cuál es la ciudad israelí que tiene un gran porcentaje per cápita de Grandes Maestros de ajedrez?",
		Respuestas: ["Herzliya.","Beerseba.","Haifa.","Megido."],
		Correcta: 1
};
//Question 6 
var isrPregunta6 = {
		isrPregunta: "¿En qué ciudad se ubica el Muro de las Lamentaciones?",
		Respuestas: ["Herzliya.","Jerusalén","Haifa.","Tel Aviv."],
		Correcta: 1
};
//Question 7
var isrPregunta7 = {
		isrPregunta: "¿Cuál es el estilo arquitectónico del Santo Sepulcro?",
		Respuestas: ["Clásico.","Posmodernista.","Románico - Barroco.","Renacentista."],
		Correcta: 2
};
//Question 8
var isrPregunta8 = {
		isrPregunta: "¿Cuál es el gentilicio en español del habitante de Jerusalén?",
		Respuestas: ["Jerosónito.","Jerosolimitano.","Jerusalénico.","Jesónico."],
		Correcta: 1
};
//Question 9
var isrPregunta9 = {
		isrPregunta: "¿Qué significa la palabra Tel Aviv?",
		Respuestas: ["La colina de la estrella sagrada.","La colina costera.","La colina de la primavera.","La colina de Israel."],
		Correcta: 2
};
//Question 10
var isrPregunta10 = {
		isrPregunta: "¿Cuáles son los idiomas oficiales?",
		Respuestas: ["Ciertos tipos de dialectos.","El árabe y el francés.","El hebreo y el árabe.","El inglés."],
		Correcta: 2
};
//Question 11 
var isrPregunta11 = {
		isrPregunta: "¿Sobre qué costas está el Estado de Israel?",
		Respuestas: ["Sobre el Mar Negro.","Sobre el Mar Mediterráneo.","Sobre el Mar Caspio.","Sobre el Mar de Arab."],
		Correcta: 1
};
//Question 12
var isrPregunta12 = {
		isrPregunta: "¿Cuál es la moneda de curso legal en Israel?",
		Respuestas: ["El Nuevo Shéque.","El Euro.","El Dólar Israelí.","La Rupia."],
		Correcta: 0
};
//Question 13 
var isrPregunta13 = {
		isrPregunta: "¿Quién fundó la Orquesta Filarmónica de Israel?",
		Respuestas: ["Arturo Toscanini.","Bronisław Huberman.","Leonard Bernstein.","Zubin Mehta."],
		Correcta: 1
};
//Question 14 
var isrPregunta14 = {
		isrPregunta: "¿Qué porcentaje del territorio de Israel es desértico?",
		Respuestas: ["60%","2%","10%","95%"],
		Correcta: 0
};
//Question 15 
var isrPregunta15 = {
		isrPregunta: "¿Cómo se llama el servicio secreto de Israel?",
		Respuestas: ["Side.","FBI.","Servicio Federal de Seguridad.","Mosad."],
		Correcta: 0
};
//
//Function .random that randomize the question to display and returns the data in this. js
Israel.generarPregunta = function(){
	//Generate 
	var random = Math.floor(Math.random()*10) % 15;
	switch(random){
	//Question 1.
	case 0:
		Israel.enunciado = isrPregunta1.isrPregunta;
		for(var i = 0; i < 4; i++){
			Israel.resps[i] = isrPregunta1.Respuestas[i];
		}
		Israel.respC = isrPregunta1.Correcta;
		break;
	//Question 2.
	case 1:
		Israel.enunciado = isrPregunta2.isrPregunta;
		for(var i = 0; i < 4; i++){
			Israel.resps[i] = isrPregunta2.Respuestas[i];			
		}
		Israel.respC = isrPregunta2.Correcta;
		break;
	//Question 3.
	case 2:
		Israel.enunciado = isrPregunta3.isrPregunta;
		for(var i = 0; i < 4; i++){
			Israel.resps[i] = isrPregunta3.Respuestas[i];			
		}
		Israel.respC = isrPregunta3.Correcta;
		break;				
	//Question 4.
	case 3:
		Israel.enunciado = isrPregunta4.isrPregunta;
		for(var i = 0; i < 4; i++){
			Israel.resps[i] = isrPregunta4.Respuestas[i];			
		}
		Israel.respC = isrPregunta4.Correcta;
		break;	
	//Question 5.
	case 4:
		Israel.enunciado = isrPregunta5.isrPregunta;
		for(var i = 0; i < 4; i++){
			Israel.resps[i] = isrPregunta5.Respuestas[i];			
		}
		Israel.respC = isrPregunta5.Correcta;
		break;
	//Question 6.
	case 5:
		Israel.enunciado = isrPregunta6.isrPregunta;
		for(var i = 0; i < 4; i++){
			Israel.resps[i] = isrPregunta6.Respuestas[i];			
		}
		Israel.respC = isrPregunta6.Correcta;
		break;
	//Question 7.
	case 6:
		Israel.enunciado = isrPregunta7.isrPregunta;
		for(var i = 0; i < 4; i++){
			Israel.resps[i] = isrPregunta7.Respuestas[i];			
		}
		Israel.respC = isrPregunta7.Correcta;
		break;
	//Question 8.
	case 7:
		Israel.enunciado = isrPregunta8.isrPregunta;
		for(var i = 0; i < 4; i++){
			Israel.resps[i] = isrPregunta8.Respuestas[i];			
		}
	Israel.respC = isrPregunta8.Correcta;
	break;
	//Question 9.
	case 8:
		Israel.enunciado = isrPregunta9.isrPregunta;
		for(var i = 0; i < 4; i++){
			Israel.resps[i] = isrPregunta9.Respuestas[i];			
		}
	Israel.respC = isrPregunta9.Correcta;
	break;
	//Question 10.
	case 9:
		Israel.enunciado = isrPregunta10.isrPregunta;
		for(var i = 0; i < 4; i++){
			Israel.resps[i] = isrPregunta10.Respuestas[i];			
		}
	Israel.respC = isrPregunta10.Correcta;
	break;
	//Question 11.
	case 10:
		Israel.enunciado = isrPregunta11.isrPregunta;
		for(var i = 0; i < 4; i++){
			Israel.resps[i] = isrPregunta11.Respuestas[i];			
		}
	Israel.respC = isrPregunta11.Correcta;
	break;
	//Question 12.
	case 11:
		Israel.enunciado = isrPregunta12.isrPregunta;
		for(var i = 0; i < 4; i++){
			Israel.resps[i] = isrPregunta12.Respuestas[i];			
		}
	Israel.respC = isrPregunta12.Correcta;
	break;
	//Question 13.
	case 12:
		Israel.enunciado = isrPregunta13.isrPregunta;
		for(var i = 0; i < 4; i++){
			Israel.resps[i] = isrPregunta13.Respuestas[i];			
		}
	Israel.respC = isrPregunta13.Correcta;
	break;
	//Question 14.
	case 13:
		Israel.enunciado = isrPregunta14.isrPregunta;
		for(var i = 0; i < 4; i++){
			Israel.resps[i] = isrPregunta14.Respuestas[i];			
		}
	Israel.respC = isrPregunta14.Correcta;
	break;
	//Question 15.
	case 14:
		Israel.enunciado = isrPregunta15.isrPregunta;
		for(var i = 0; i < 4; i++){
			Israel.resps[i] = isrPregunta15.Respuestas[i];			
		}
	Israel.respC = isrPregunta15.Correcta;
	break;
	};
};