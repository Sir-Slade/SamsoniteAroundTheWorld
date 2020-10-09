//GERMANY.
// Create an array that contains the statement and questions.
var Germany = {
		enunciado:"",
		resps: new Array(),
		respC:-1,
};
// Question 1
var gerPregunta1 = {
		gerPregunta: "¿Qué cantidad aproximada hay de castillos en Alemania?",
		Respuestas: ["13 castillos.","50 castillos.","100 castillos.","150 castillos."],
		Correcta: 3
};
// Question 2
var gerPregunta2 = {
		gerPregunta: "¿En qué castillo de Alemania está inspirado el castillo de la Bella Durmiente de Eurodisney?",
		Respuestas: ["En el Castillo Hohenschwangau.","En el castillo de Neuschwanstein que esta en Baviera.","En el castillo de Eltz en las colinas del río Mosela.","En el castillo de Schwerin en Schwerin."],
		Correcta: 1
};
//Question 3
var gerPregunta3 = {	
		gerPregunta: "¿Cuál de estos filósofos no es alemán?",
		Respuestas: ["Nietzsche.","Saussure.","Hegel.","Kant."],
		Correcta: 1
};
//Question 4
var gerPregunta4 = {
		gerPregunta: "¿Cuál de estas iglesias alemanas es Patrimonio de la Humanidad?",
		Respuestas: ["La Catedral de Colonia.","La Catedral de Essen.","La Catedral de San Pedro de Bremen.","La Catedral de Naumburgo."],
		Correcta: 0
};
//Question 5
var gerPregunta5 = {
		gerPregunta: "¿Qué es el Círculo Goseck?",
		Respuestas: ["Un observatorio solar prehistórico.","Un museo exéntrico en el centro de Berlin.","Una logia alemana secreta.","Un restaurante de moda de Munich."],
		Correcta: 0
};
//Question 6 
var gerPregunta6 = {
		gerPregunta: "¿Cuál es el deporte más popular de Alemania?",
		Respuestas: ["El rugby.","El atletismo.","El cricket.","El fútbol."],
		Correcta: 3
};
//Question 7
var gerPregunta7 = {
		gerPregunta: "¿En dónde se encuentra el Edificio del Reichstag?",
		Respuestas: ["En Braviera.","En Berlín.","En Munich.","En Brandeburgo."],
		Correcta: 1
};
//Question 8
var gerPregunta8 = {
		gerPregunta: "¿En qué plaza se encuentra la Puerta de Brandeburgo?",
		Respuestas: ["En la Plaza Brandeburgo.","En la Plaza Paris.","En la Plaza Italia.","En la Plaza Unter den Linden."],
		Correcta: 1
};
//Question 9
var gerPregunta9 = {
		gerPregunta: "¿Qué es el Museumsinsel?",
		Respuestas: ["Una zona comercial de moda en Berlin.","Una isla en donde está el polo tecnológico de Munich.","Una isla en donde se encuentra la mayoría de los museos de Berlin.","La zona de los restaurantes."],
		Correcta: 2
};
//Question 10
var gerPregunta10 = {
		gerPregunta: "¿Qué es la Staatliche Bauhaus?",
		Respuestas: ["Una escuela de artesanía, diseño, arte y arquitectura fundada en 1919.","Una marca alemana de construcción que ya fundió.","Un río caudaloso que pasa por Munich.","Una zona de casas residenciales en el centro de Baviera."],
		Correcta: 0
};
//Question 11 
var gerPregunta11 = {
		gerPregunta: "¿Cuántas letras tiene la palabra más larga en el idioma alemán?",
		Respuestas: ["99 letras.","35 letras.","80 letras.","150 letras."],
		Correcta: 2
};
//Question 12
var gerPregunta12 = {
		gerPregunta: "¿Cuándo fue derribado el Muro de Berlin?",
		Respuestas: ["El 9 de noviembre de 1989.","El 3 de julio de 1989.","El 20 de agosto de 1986.","El 12 de septiembre de 1987."],
		Correcta: 0
};
//Question 13 
var gerPregunta13 = {
		gerPregunta: "¿Cuántos tipos de cerveza hay, aproximadamente, en Alemania?",
		Respuestas: ["5.000 tipos de cerveza.","150 tipos de cerveza.","300 tipos de cerveza.","2.700 tipos de cerveza."],
		Correcta: 0
};
//Question 14 
var gerPregunta14 = {
		gerPregunta: "¿Cuándo se realizó el primer Oktoberfest?",
		Respuestas: ["1810.","1910.","1950.","1803."],
		Correcta: 0
};
//Question 15 
var gerPregunta15 = {
		gerPregunta: "¿Cuál es el significado de la palabra Berlin?",
		Respuestas: ["Tierra de bávaros.","Ciudad que brilla.","Tierra pantanosa.","Sitio de zorros."],
		Correcta: 2
};
//
//Function .random that randomize the question to display and returns the data in this. js
Germany.generarPregunta = function(){
	//Generate 
	var random = Math.floor(Math.random()*10) % 15;
	switch(random){
	//Question 1.
	case 0:
		Germany.enunciado = gerPregunta1.gerPregunta;
		for(var i = 0; i < 4; i++){
			Germany.resps[i] = gerPregunta1.Respuestas[i];
		}
		Germany.respC = gerPregunta1.Correcta;
		break;
	//Question 2.
	case 1:
		Germany.enunciado = gerPregunta2.gerPregunta;
		for(var i = 0; i < 4; i++){
			Germany.resps[i] = gerPregunta2.Respuestas[i];			
		}
		Germany.respC = gerPregunta2.Correcta;
		break;
	//Question 3.
	case 2:
		Germany.enunciado = gerPregunta3.gerPregunta;
		for(var i = 0; i < 4; i++){
			Germany.resps[i] = gerPregunta3.Respuestas[i];			
		}
		Germany.respC = gerPregunta3.Correcta;
		break;				
	//Question 4.
	case 3:
		Germany.enunciado = gerPregunta4.gerPregunta;
		for(var i = 0; i < 4; i++){
			Germany.resps[i] = gerPregunta4.Respuestas[i];			
		}
		Germany.respC = gerPregunta4.Correcta;
		break;	
	//Question 5.
	case 4:
		Germany.enunciado = gerPregunta5.gerPregunta;
		for(var i = 0; i < 4; i++){
			Germany.resps[i] = gerPregunta5.Respuestas[i];			
		}
		Germany.respC = gerPregunta5.Correcta;
		break;
	//Question 6.
	case 5:
		Germany.enunciado = gerPregunta6.gerPregunta;
		for(var i = 0; i < 4; i++){
			Germany.resps[i] = gerPregunta6.Respuestas[i];			
		}
		Germany.respC = gerPregunta6.Correcta;
		break;
	//Question 7.
	case 6:
		Germany.enunciado = gerPregunta7.gerPregunta;
		for(var i = 0; i < 4; i++){
			Germany.resps[i] = gerPregunta7.Respuestas[i];			
		}
		Germany.respC = gerPregunta7.Correcta;
		break;
	//Question 8.
	case 7:
		Germany.enunciado = gerPregunta8.gerPregunta;
		for(var i = 0; i < 4; i++){
			Germany.resps[i] = gerPregunta8.Respuestas[i];			
		}
	Germany.respC = gerPregunta8.Correcta;
	break;
	//Question 9.
	case 8:
		Germany.enunciado = gerPregunta9.gerPregunta;
		for(var i = 0; i < 4; i++){
			Germany.resps[i] = gerPregunta9.Respuestas[i];			
		}
	Germany.respC = gerPregunta9.Correcta;
	break;
	//Question 10.
	case 9:
		Germany.enunciado = gerPregunta10.gerPregunta;
		for(var i = 0; i < 4; i++){
			Germany.resps[i] = gerPregunta10.Respuestas[i];			
		}
	Germany.respC = gerPregunta10.Correcta;
	break;
	//Question 11.
	case 10:
		Germany.enunciado = gerPregunta11.gerPregunta;
		for(var i = 0; i < 4; i++){
			Germany.resps[i] = gerPregunta11.Respuestas[i];			
		}
	Germany.respC = gerPregunta11.Correcta;
	break;
	//Question 12.
	case 11:
		Germany.enunciado = gerPregunta12.gerPregunta;
		for(var i = 0; i < 4; i++){
			Germany.resps[i] = gerPregunta12.Respuestas[i];			
		}
	Germany.respC = gerPregunta12.Correcta;
	break;
	//Question 13.
	case 12:
		Germany.enunciado = gerPregunta13.gerPregunta;
		for(var i = 0; i < 4; i++){
			Germany.resps[i] = gerPregunta13.Respuestas[i];			
		}
	Germany.respC = gerPregunta13.Correcta;
	break;
	//Question 14.
	case 13:
		Germany.enunciado = gerPregunta14.gerPregunta;
		for(var i = 0; i < 4; i++){
			Germany.resps[i] = gerPregunta14.Respuestas[i];			
		}
	Germany.respC = gerPregunta14.Correcta;
	break;
	//Question 15.
	case 14:
		Germany.enunciado = gerPregunta15.gerPregunta;
		for(var i = 0; i < 4; i++){
			Germany.resps[i] = gerPregunta15.Respuestas[i];			
		}
	Germany.respC = gerPregunta15.Correcta;
	break;
	};
};
