//RUSSIA.
// Create an array that contains the statement and questions.
var Rusia = {
		enunciado:"",
		resps: new Array(),
		respC:-1,
};
// Question 1
var rusPregunta1 = {
		rusPregunta: "¿Cuál es el nombre oficial de Rusia?",
		Respuestas: ["Rusajka.","Russsiasias.","Rossiyskaya Federatsiya.","Rosiyaka Federa."],
		Correcta: 2
};
// Question 2
var rusPregunta2 = {
		rusPregunta: "¿Cuántos países limitan con Rusia?",
		Respuestas: ["18.","25.","13.","5."],
		Correcta: 0
};
//Question 3
var rusPregunta3 = {	
		rusPregunta: "¿A orilla de qué río se encuenta el Museo del Hermitage?",
		Respuestas: ["Del río Neva.","Del río Ring.","Del río Volga.","Del río Támesis."],
		Correcta: 0
};
//Question 4
var rusPregunta4 = {
		rusPregunta: "¿Quién ordenó la construcción de la Catedral de San Basilio?",
		Respuestas: ["John Lyde-Brown.","Catalina la Grande.","Ivan el Terrible.","Heinrich von Brühl."],
		Correcta: 2
};
//Question 5
var rusPregunta5 = {
		rusPregunta: "¿Qué es el Kremlin?",
		Respuestas: ["Una típica comida de Rusia.","Un conjunto de edificios políticos y religiosos de Moscú.","Un idioma.","La catedral de Rusia."],
		Correcta: 1
};
//Question 6 
var rusPregunta6 = {
		rusPregunta: "¿Dónde se encuentra el km 0 de Rusia?",
		Respuestas: ["En el Palacio del Senado.","En la Catedral de los Doce Apóstole.","En el Museo del Hermitage.","En la Plaza Roja."],
		Correcta: 3
};
//Question 7
var rusPregunta7 = {
		rusPregunta: "¿Por qué la Plaza Roja tiene ese nombre?",
		Respuestas: ["Por un rio que pasaba por Moscú.","Por que era el color de la bandera.","Por el color de los edificios circundantes.","Porque el término ruso 'Rojo' antiguamente tambien significaba 'Bonita'."],
		Correcta: 3
};
//Question 8
var rusPregunta8 = {
		rusPregunta: "¿En qué famoso videojuego aparece la imagen de la Catedral de San Basilio?",
		Respuestas: ["Mortal Kombat.","Tetris.","Street Fighter.","Pacman."],
		Correcta: 1
};
//Question 9
var rusPregunta9 = {
		rusPregunta: "¿Cuántos aeropuertos principales tiene Moscú?",
		Respuestas: ["5.","1.","3.","15."],
		Correcta: 0
};
//Question 10
var rusPregunta10 = {
		rusPregunta: "¿En qué año fue fundada Moscú?",
		Respuestas: ["1823.","1562.","1147.","1900."],
		Correcta: 2
};
//Question 11 
var rusPregunta11 = {
		rusPregunta: "¿En dónde está ubicado el Monumento a los Conquistadores del Espacio?",
		Respuestas: ["En la Plaza del Kremlin.","En la zona de los Museos.","Centro de Exhibiciones de Rusia.","En el aeropuerto principal."],
		Correcta: 2
};
//Question 12
var rusPregunta12 = {
		rusPregunta: "¿En qué año se creó la Casa de la Fotografía de Moscú?",
		Respuestas: ["1996.","1958.","2010.","1985."],
		Correcta: 0
};
//Question 13 
var rusPregunta13 = {
		rusPregunta: "El Teatro Bolshói es uno de los más importantes de Moscú. ¿Qué significa Bolshói?",
		Respuestas: ["Opera.","Clásico.","Grande.","Pequeño."],
		Correcta: 2
};
//Question 14 
var rusPregunta14 = {
		rusPregunta: "¿En qué año fue Rusia sede de los Juegos Olímpicos de Verano?",
		Respuestas: ["1986.","1980.","2012.","1915."],
		Correcta: 1
};
//Question 15 
var rusPregunta15 = {
		rusPregunta: "¿Cuál de estos compositores de música clásica es ruso?",
		Respuestas: ["Mozart.","Stravinski.","Vivaldi.","Chopin."],
		Correcta: 0
};
//
//Function .random that randomize the question to display and returns the data in this. js
Rusia.generarPregunta = function(){
	//Generate 
	var random = Math.floor(Math.random()*10) % 15;
	switch(random){
	//Question 1.
	case 0:
		Rusia.enunciado = rusPregunta1.rusPregunta;
		for(var i = 0; i < 4; i++){
			Rusia.resps[i] = rusPregunta1.Respuestas[i];
		}
		Rusia.respC = rusPregunta1.Correcta;
		break;
	//Question 2.
	case 1:
		Rusia.enunciado = rusPregunta2.rusPregunta;
		for(var i = 0; i < 4; i++){
			Rusia.resps[i] = rusPregunta2.Respuestas[i];			
		}
		Rusia.respC = rusPregunta2.Correcta;
		break;
	//Question 3.
	case 2:
		Rusia.enunciado = rusPregunta3.rusPregunta;
		for(var i = 0; i < 4; i++){
			Rusia.resps[i] = rusPregunta3.Respuestas[i];			
		}
		Rusia.respC = rusPregunta3.Correcta;
		break;				
	//Question 4.
	case 3:
		Rusia.enunciado = rusPregunta4.rusPregunta;
		for(var i = 0; i < 4; i++){
			Rusia.resps[i] = rusPregunta4.Respuestas[i];			
		}
		Rusia.respC = rusPregunta4.Correcta;
		break;	
	//Question 5.
	case 4:
		Rusia.enunciado = rusPregunta5.rusPregunta;
		for(var i = 0; i < 4; i++){
			Rusia.resps[i] = rusPregunta5.Respuestas[i];			
		}
		Rusia.respC = rusPregunta5.Correcta;
		break;
	//Question 6.
	case 5:
		Rusia.enunciado = rusPregunta6.rusPregunta;
		for(var i = 0; i < 4; i++){
			Rusia.resps[i] = rusPregunta6.Respuestas[i];			
		}
		Rusia.respC = rusPregunta6.Correcta;
		break;
	//Question 7.
	case 6:
		Rusia.enunciado = rusPregunta7.rusPregunta;
		for(var i = 0; i < 4; i++){
			Rusia.resps[i] = rusPregunta7.Respuestas[i];			
		}
		Rusia.respC = rusPregunta7.Correcta;
		break;
	//Question 8.
	case 7:
		Rusia.enunciado = rusPregunta8.rusPregunta;
		for(var i = 0; i < 4; i++){
			Rusia.resps[i] = rusPregunta8.Respuestas[i];			
		}
	Rusia.respC = rusPregunta8.Correcta;
	break;
	//Question 9.
	case 8:
		Rusia.enunciado = rusPregunta9.rusPregunta;
		for(var i = 0; i < 4; i++){
			Rusia.resps[i] = rusPregunta9.Respuestas[i];			
		}
	Rusia.respC = rusPregunta9.Correcta;
	break;
	//Question 10.
	case 9:
		Rusia.enunciado = rusPregunta10.rusPregunta;
		for(var i = 0; i < 4; i++){
			Rusia.resps[i] = rusPregunta10.Respuestas[i];			
		}
	Rusia.respC = rusPregunta10.Correcta;
	break;
	//Question 11.
	case 10:
		Rusia.enunciado = rusPregunta11.rusPregunta;
		for(var i = 0; i < 4; i++){
			Rusia.resps[i] = rusPregunta11.Respuestas[i];			
		}
	Rusia.respC = rusPregunta11.Correcta;
	break;
	//Question 12.
	case 11:
		Rusia.enunciado = rusPregunta12.rusPregunta;
		for(var i = 0; i < 4; i++){
			Rusia.resps[i] = rusPregunta12.Respuestas[i];			
		}
	Rusia.respC = rusPregunta12.Correcta;
	break;
	//Question 13.
	case 12:
		Rusia.enunciado = rusPregunta13.rusPregunta;
		for(var i = 0; i < 4; i++){
			Rusia.resps[i] = rusPregunta13.Respuestas[i];			
		}
	Rusia.respC = rusPregunta13.Correcta;
	break;
	//Question 14.
	case 13:
		Rusia.enunciado = rusPregunta14.rusPregunta;
		for(var i = 0; i < 4; i++){
			Rusia.resps[i] = rusPregunta14.Respuestas[i];			
		}
	Rusia.respC = rusPregunta14.Correcta;
	break;
	//Question 15.
	case 14:
		Rusia.enunciado = rusPregunta15.rusPregunta;
		for(var i = 0; i < 4; i++){
			Rusia.resps[i] = rusPregunta15.Respuestas[i];			
		}
	Rusia.respC = rusPregunta15.Correcta;
	break;
	};
};