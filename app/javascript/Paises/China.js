//CHINA.
// Create an array that contains the statement and questions.
var China = {
		enunciado:"",
		resps: new Array(),
		respC:-1,
};
// Question 1
var chiPregunta1 = {
		chiPregunta: "¿Cuál es el nombre oficial de China?",
		Respuestas: ["República Comunista de China.","República Popular China.","Comunidad China.","Unión de China."],
		Correcta: 1
};
// Question 2
var chiPregunta2 = {
		chiPregunta: "En China se encuentra en Gingko ¿Qué es?",
		Respuestas: ["El árbol más antiguo del mundo.","Una zona de fósiles protegida.","Un mamífero típico.","El lago más progundo del mundo."],
		Correcta: 0
};
//Question 3
var chiPregunta3 = {	
		chiPregunta: "¿Cuántos son los animales del zoodiaco Chino?",
		Respuestas: ["12.","10.","13.","14."],
		Correcta: 0
};
//Question 4
var chiPregunta4 = {
		chiPregunta: "¿Cuántos km tiene la gran muralla China?",
		Respuestas: ["Menos de 1000 km.","3500 km.","Más de 5.000 km.","300 km."],
		Correcta: 2
};
//Question 5
var chiPregunta5 = {
		chiPregunta: "¿Cuáles de estos son inventos chinos?",
		Respuestas: ["La vela, las señales de tránsito, el ábaco.","El yoga, las artes marciales.","La brújula, el papel, la pólvora y la impresión.","El champagne, la rueda, los sellos postales."],
		Correcta: 2
};
//Question 6 
var chiPregunta6 = {
		chiPregunta: "¿Qué color es considerado de suerte en china?",
		Respuestas: ["Verde.","Rojo.","Blanco.","Amarillo."],
		Correcta: 1
};
//Question 7
var chiPregunta7 = {
		chiPregunta: "¿Qué significa el rojo en su bandera?",
		Respuestas: ["La sangre derramada a lo largo de la revolución.","Buen augurio.","El color del cielo al atardecer.","Es un color aleatorio, no significa nada en particular."],
		Correcta: 0
};
//Question 8
var chiPregunta8 = {
		chiPregunta: "¿Qué es el Ejército de Terracota?",
		Respuestas: ["Un grupo de piezas milenarias de arte chino.","Un museo en Beijing.","El nombre oficial del ejército chino.","Un conjunto de más de 7000 figuras de guerreros y caballos de terracota a tamaño real."],
		Correcta: 3
};
//Question 9
var chiPregunta9 = {
		chiPregunta: "¿Qué funcionario chino construyó el primer reloj mecánico entre 1088 y 1092?",
		Respuestas: ["Song Sun.","Su Song.","Ming Choo.","Chun Sun."],
		Correcta: 1
};
//Question 10
var chiPregunta10 = {
		chiPregunta: "¿Cuál es la capital de China?",
		Respuestas: ["Shangai.","Pekin.","Cantón.","Gobi."],
		Correcta: 1
};
//Question 11 
var chiPregunta11 = {
		chiPregunta: "¿De qué fruta China es el mayor productor?",
		Respuestas: ["Manzanas.","Peras.","Sandías.","Kiwis."],
		Correcta: 0
};
//Question 12
var chiPregunta12 = {
		chiPregunta: "¿Cuál es una de las principales características de la Plaza de Tian'anmen?",
		Respuestas: ["Es el mayor espacio verde de China.","Es la mayor plaza pública del mundo.","Es 100% tecnológica.","Posee un microclima."],
		Correcta: 1
};
//Question 13 
var chiPregunta13 = {
		chiPregunta: "¿En qué año se realizaron los últimos Juegos Olímpicos en China?",
		Respuestas: ["1982.","2012.","2008.","1992."],
		Correcta: 2
};
//Question 14 
var chiPregunta14 = {
		chiPregunta: "¿Cómo llaman los chinos al Monte Everest?",
		Respuestas: ["Monte Chino.","Soonunoj.","Qomolangma.","Monte de la Gran Muralla."],
		Correcta: 2
};
//Question 15 
var chiPregunta15 = {
		chiPregunta: "¿Qué cantidad de osos panda, aproximadamente, viven en estado salvaje en China?",
		Respuestas: ["100.","30.","1600.","3000"],
		Correcta: 2
};
//
//Function .random that randomize the question to display and returns the data in this. js
China.generarPregunta = function(){
	//Generate 
	var random = Math.floor(Math.random()*10) % 15;
	switch(random){
	//Question 1.
	case 0:
		China.enunciado = chiPregunta1.chiPregunta;
		for(var i = 0; i < 4; i++){
			China.resps[i] = chiPregunta1.Respuestas[i];
		}
		China.respC = chiPregunta1.Correcta;
		break;
	//Question 2.
	case 1:
		China.enunciado = chiPregunta2.chiPregunta;
		for(var i = 0; i < 4; i++){
			China.resps[i] = chiPregunta2.Respuestas[i];			
		}
		China.respC = chiPregunta2.Correcta;
		break;
	//Question 3.
	case 2:
		China.enunciado = chiPregunta3.chiPregunta;
		for(var i = 0; i < 4; i++){
			China.resps[i] = chiPregunta3.Respuestas[i];			
		}
		China.respC = chiPregunta3.Correcta;
		break;				
	//Question 4.
	case 3:
		China.enunciado = chiPregunta4.chiPregunta;
		for(var i = 0; i < 4; i++){
			China.resps[i] = chiPregunta4.Respuestas[i];			
		}
		China.respC = chiPregunta4.Correcta;
		break;	
	//Question 5.
	case 4:
		China.enunciado = chiPregunta5.chiPregunta;
		for(var i = 0; i < 4; i++){
			China.resps[i] = chiPregunta5.Respuestas[i];			
		}
		China.respC = chiPregunta5.Correcta;
		break;
	//Question 6.
	case 5:
		China.enunciado = chiPregunta6.chiPregunta;
		for(var i = 0; i < 4; i++){
			China.resps[i] = chiPregunta6.Respuestas[i];			
		}
		China.respC = chiPregunta6.Correcta;
		break;
	//Question 7.
	case 6:
		China.enunciado = chiPregunta7.chiPregunta;
		for(var i = 0; i < 4; i++){
			China.resps[i] = chiPregunta7.Respuestas[i];			
		}
		China.respC = chiPregunta7.Correcta;
		break;
	//Question 8.
	case 7:
		China.enunciado = chiPregunta8.chiPregunta;
		for(var i = 0; i < 4; i++){
			China.resps[i] = chiPregunta8.Respuestas[i];			
		}
	China.respC = chiPregunta8.Correcta;
	break;
	//Question 9.
	case 8:
		China.enunciado = chiPregunta9.chiPregunta;
		for(var i = 0; i < 4; i++){
			China.resps[i] = chiPregunta9.Respuestas[i];			
		}
	China.respC = chiPregunta9.Correcta;
	break;
	//Question 10.
	case 9:
		China.enunciado = chiPregunta10.chiPregunta;
		for(var i = 0; i < 4; i++){
			China.resps[i] = chiPregunta10.Respuestas[i];			
		}
	China.respC = chiPregunta10.Correcta;
	break;
	//Question 11.
	case 10:
		China.enunciado = chiPregunta11.chiPregunta;
		for(var i = 0; i < 4; i++){
			China.resps[i] = chiPregunta11.Respuestas[i];			
		}
	China.respC = chiPregunta11.Correcta;
	break;
	//Question 12.
	case 11:
		China.enunciado = chiPregunta12.chiPregunta;
		for(var i = 0; i < 4; i++){
			China.resps[i] = chiPregunta12.Respuestas[i];			
		}
	China.respC = chiPregunta12.Correcta;
	break;
	//Question 13.
	case 12:
		China.enunciado = chiPregunta13.chiPregunta;
		for(var i = 0; i < 4; i++){
			China.resps[i] = chiPregunta13.Respuestas[i];			
		}
	China.respC = chiPregunta13.Correcta;
	break;
	//Question 14.
	case 13:
		China.enunciado = chiPregunta14.chiPregunta;
		for(var i = 0; i < 4; i++){
			China.resps[i] = chiPregunta14.Respuestas[i];			
		}
	China.respC = chiPregunta14.Correcta;
	break;
	//Question 15.
	case 14:
		China.enunciado = chiPregunta15.chiPregunta;
		for(var i = 0; i < 4; i++){
			China.resps[i] = chiPregunta15.Respuestas[i];			
		}
	China.respC = chiPregunta15.Correcta;
	break;
	};
};
