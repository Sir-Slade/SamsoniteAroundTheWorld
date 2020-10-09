//CANADA.
// Create an array that contains the statement and questions.
var Canada = {
		enunciado:"",
		resps: new Array(),
		respC:-1,
};
// Question 1
var canPregunta1 = {
		canPregunta: "¿Qué significa la palabra Canadá?",
		Respuestas: ["Gran Aldea.","Pais Grande.","Gran Nevada.","País del Oso."],
		Correcta: 0
};
// Question 2
var canPregunta2 = {
		canPregunta: "¿Cuál es el deporte nacional en Canadá?",
		Respuestas: ["El fútbol.","El hockey.","El sky.","La natación."],
		Correcta: 1
};
//Question 3
var canPregunta3 = {	
		canPregunta: "¿Cuáles son los animales más comunes de Canadá?",
		Respuestas: ["El cuís, el castor y el zorro.","El picaflor, el alce y el gato.","El caballo, la ardilla y el búfalo.","El oso, la ardilla y el alce."],
		Correcta: 3
};
//Question 4
var canPregunta4 = {
		canPregunta: "¿De qué está hecho el Hôtel de Glace?",
		Respuestas: ["De madera.","De piel de oso.","De roca.","De hielo."],
		Correcta: 3
};
//Question 5
var canPregunta5 = {
		canPregunta: "Toronto posee una de las avenidas más largas del mundo ¿Cómo se llama?",
		Respuestas: ["Younge Street.","Long Avenue.","Stanford Avenue.","Street Number One."],
		Correcta: 0
};
//Question 6 
var canPregunta6 = {
		canPregunta: "¿Cuáles son las dos lenguas oficiales de Canadá?",
		Respuestas: ["Inglés y Español.","Inglés e Italiano.","Inglés y Francés.","Inglés y Alemán."],
		Correcta: 2
};
//Question 7
var canPregunta7 = {
		canPregunta: "¿En qué año se construyó el Estadio Olímpico de Montreal?",
		Respuestas: ["1980.","2010.","1976.","1950."],
		Correcta: 2
};
//Question 8
var canPregunta8 = {
		canPregunta: "¿Cuál es el ícono de la ciudad de Toronto?",
		Respuestas: ["La estación de trenes.","La Plaza Mayor.","El Edificio Legislativo.","La Torre CN."],
		Correcta: 3
};
//Question 9
var canPregunta9 = {
		canPregunta: "¿En qué ciudad se llevaron a cabo los Juegos Olímpicos de Invierno de 2010?",
		Respuestas: ["Vancouver.","Otawa.","Toronto.","Quebec."],
		Correcta: 0
};
//Question 10
var canPregunta10 = {
		canPregunta: "¿En qué ciudad se encuentra el Museo Canadiense de la Civilización?",
		Respuestas: ["Gatineau.","Winnipeg.","Calgary.","Toronto."],
		Correcta: 0
};
//Question 11 
var canPregunta11 = {
		canPregunta: "¿En qué fecha es el Día de Canadá?",
		Respuestas: ["31 de diciembre.","1 de julio.","3 de abril.","25 de noviembre."],
		Correcta: 1
};
//Question 12
var canPregunta12 = {
		canPregunta: "¿Qué son los Inukshuk?",
		Respuestas: ["Montículos de piedras construidos por los seres humanos.","Un plato característico de la zona hecho con pescado.","Una especie de abrigo polar.","Un animal exótico de la zona."],
		Correcta: 0
};
//Question 13 
var canPregunta13 = {
		canPregunta: "¿Qué es Whistler?",
		Respuestas: ["Una avenida principal de Otawa.","Un río que pasa por Toronto.","Una banda de rock canadiense.","Una estación de sky."],
		Correcta: 3
};
//Question 14 
var canPregunta14 = {
		canPregunta: "¿Cuántas provincias forman Canadá?",
		Respuestas: ["10.","13.","9.","14."],
		Correcta: 0
};
//Question 15 
var canPregunta15 = {
		canPregunta: "¿En qué ciudad se llevaron a cabo los Juegos Olímpicos de 1976?",
		Respuestas: ["Montreal.","Quebec.","Toronto.","Otawa."],
		Correcta: 0
};
//
//Function .random that randomize the question to display and returns the data in this. js
Canada.generarPregunta = function(){
	//Generate 
	var random = Math.floor(Math.random()*10) % 15;
	switch(random){
	//Question 1.
	case 0:
		Canada.enunciado = canPregunta1.canPregunta;
		for(var i = 0; i < 4; i++){
			Canada.resps[i] = canPregunta1.Respuestas[i];
		}
		Canada.respC = canPregunta1.Correcta;
		break;
	//Question 2.
	case 1:
		Canada.enunciado = canPregunta2.canPregunta;
		for(var i = 0; i < 4; i++){
			Canada.resps[i] = canPregunta2.Respuestas[i];			
		}
		Canada.respC = canPregunta2.Correcta;
		break;
	//Question 3.
	case 2:
		Canada.enunciado = canPregunta3.canPregunta;
		for(var i = 0; i < 4; i++){
			Canada.resps[i] = canPregunta3.Respuestas[i];			
		}
		Canada.respC = canPregunta3.Correcta;
		break;				
	//Question 4.
	case 3:
		Canada.enunciado = canPregunta4.canPregunta;
		for(var i = 0; i < 4; i++){
			Canada.resps[i] = canPregunta4.Respuestas[i];			
		}
		Canada.respC = canPregunta4.Correcta;
		break;	
	//Question 5.
	case 4:
		Canada.enunciado = canPregunta5.canPregunta;
		for(var i = 0; i < 4; i++){
			Canada.resps[i] = canPregunta5.Respuestas[i];			
		}
		Canada.respC = canPregunta5.Correcta;
		break;
	//Question 6.
	case 5:
		Canada.enunciado = canPregunta6.canPregunta;
		for(var i = 0; i < 4; i++){
			Canada.resps[i] = canPregunta6.Respuestas[i];			
		}
		Canada.respC = canPregunta6.Correcta;
		break;
	//Question 7.
	case 6:
		Canada.enunciado = canPregunta7.canPregunta;
		for(var i = 0; i < 4; i++){
			Canada.resps[i] = canPregunta7.Respuestas[i];			
		}
		Canada.respC = canPregunta7.Correcta;
		break;
	//Question 8.
	case 7:
		Canada.enunciado = canPregunta8.canPregunta;
		for(var i = 0; i < 4; i++){
			Canada.resps[i] = canPregunta8.Respuestas[i];			
		}
	Canada.respC = canPregunta8.Correcta;
	break;
	//Question 9.
	case 8:
		Canada.enunciado = canPregunta9.canPregunta;
		for(var i = 0; i < 4; i++){
			Canada.resps[i] = canPregunta9.Respuestas[i];			
		}
	Canada.respC = canPregunta9.Correcta;
	break;
	//Question 10.
	case 9:
		Canada.enunciado = canPregunta10.canPregunta;
		for(var i = 0; i < 4; i++){
			Canada.resps[i] = canPregunta10.Respuestas[i];			
		}
	Canada.respC = canPregunta10.Correcta;
	break;
	//Question 11.
	case 10:
		Canada.enunciado = canPregunta11.canPregunta;
		for(var i = 0; i < 4; i++){
			Canada.resps[i] = canPregunta11.Respuestas[i];			
		}
	Canada.respC = canPregunta11.Correcta;
	break;
	//Question 12.
	case 11:
		Canada.enunciado = canPregunta12.canPregunta;
		for(var i = 0; i < 4; i++){
			Canada.resps[i] = canPregunta12.Respuestas[i];			
		}
	Canada.respC = canPregunta12.Correcta;
	break;
	//Question 13.
	case 12:
		Canada.enunciado = canPregunta13.canPregunta;
		for(var i = 0; i < 4; i++){
			Canada.resps[i] = canPregunta13.Respuestas[i];			
		}
	Canada.respC = canPregunta13.Correcta;
	break;
	//Question 14.
	case 13:
		Canada.enunciado = canPregunta14.canPregunta;
		for(var i = 0; i < 4; i++){
			Canada.resps[i] = canPregunta14.Respuestas[i];			
		}
	Canada.respC = canPregunta14.Correcta;
	break;
	//Question 15.
	case 14:
		Canada.enunciado = canPregunta15.canPregunta;
		for(var i = 0; i < 4; i++){
			Canada.resps[i] = canPregunta15.Respuestas[i];			
		}
	Canada.respC = canPregunta15.Correcta;
	break;
	};
};
