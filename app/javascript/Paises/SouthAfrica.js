//SOUTH AFRICA.
// Create an array that contains the statement and questions.
var SouthAfrica = {
		enunciado:"",
		resps: new Array(),
		respC:-1,
};
// Question 1
var suaPregunta1 = {
		suaPregunta: "¿Cuántas capitales posee Sudáfrica?",
		Respuestas: ["3.","1.","2.","5."],
		Correcta: 0
};
// Question 2
var suaPregunta2 = {
		suaPregunta: "¿En qué año se realizó el Mundial de Fútbol en Sudáfrica?",
		Respuestas: ["En 1986.","En 2013.","En 2010.","En 1990."],
		Correcta: 2
};
//Question 3
var suaPregunta3 = {	
		suaPregunta: "¿Cuántos son los idiomas oficiales de Sudáfrica?",
		Respuestas: ["11.","2.","3.","7."],
		Correcta: 0
};
//Question 4
var suaPregunta4 = {
		suaPregunta: "¿Cuál es la moneda de curso legar en Sudáfrica?",
		Respuestas: ["Rand.","Dólar.","Euro.","Rublo."],
		Correcta: 0
};
//Question 5
var suaPregunta5 = {
		suaPregunta: "¿Cuál es la ciudad más grande de Sudáfrica.?",
		Respuestas: ["Ciudad del Cabo.","Kinberley.","Durban.","Johannesburgo."],
		Correcta: 3
};
//Question 6 
var suaPregunta6 = {
		suaPregunta: "¿Cuál es la flor nacional de Sudáfrica?",
		Respuestas: ["El Tulipán.","La Protea.","La Rosa.","La Margarita."],
		Correcta: 1
};
//Question 7
var suaPregunta7 = {
		suaPregunta: "¿Qué es el Big Hole localizado en la ciudad de Kimberley?",
		Respuestas: ["Una mina a cielo abierto y subterránea.","Un cráter hecho por un meteorito.","Una cadena montañosa.","El río más caudaloso de Sudáfrica."],
		Correcta: 0
};
//Question 8
var suaPregunta8 = {
		suaPregunta: "¿Cómo se llama el museo de historia natural de Pretoria?",
		Respuestas: ["Museo del Transvaal.","Museo Histórico de Sudáfrica.","Pretoria´s Museum.","The Pretoria."],
		Correcta: 0
};
//Question 9
var suaPregunta9 = {
		suaPregunta: "J.R Tolkien, escritor de la trilogía de El Señor de los Anillos, nació en Suidáfrica. ¿En qué ciudad?",
		Respuestas: ["Ciudad el Cabo.","Bloemfontein.","Kinberley.","Pretoria."],
		Correcta: 1
};
//Question 10
var suaPregunta10 = {
		suaPregunta: "¿Cuál es el nombre de la selección de rugby de Sudáfrica?",
		Respuestas: ["Laureus.","All Blacks.","Hakas.","Springboks."],
		Correcta: 3
};
//Question 11 
var suaPregunta11 = {
		suaPregunta: "¿Cuál es el país que se encuentra enclavado dentro de Sudáfrica?",
		Respuestas: ["Zimbawe.","Nigeria.","Lituania.","Lesoto."],
		Correcta: 3
};
//Question 12
var suaPregunta12 = {
		suaPregunta: "¿Cómo se llama la reserva de caza más grande de Sudáfrica?",
		Respuestas: ["Parque Nacional Kruger.","Parque Nacional Sudafricano.","Parque Nacional Mozambique.","Parque Nacional Storker."],
		Correcta: 0
};
//Question 13 
var suaPregunta13 = {
		suaPregunta: "Sudáfrica alberga el  mamífero terrestre de mayor tamaño ¿A qué animal nos referimos?",
		Respuestas: ["La Jirafa.","El Elefante Africano.","El Mamut.","El Guepardo."],
		Correcta: 1
};
//Question 14 
var suaPregunta14 = {
		suaPregunta: "Sudáfrica alberga al animal más pequeño  ¿A qué animal nos referimos?",
		Respuestas: ["La Musaraña Pigmea.","El ratón enano.","La rata africana.","Topo de sudáfrica."],
		Correcta: 0
};
//Question 15 
var suaPregunta15 = {
		suaPregunta: "¿Quién es el presidente actual de Sudáfrica?",
		Respuestas: ["Jacob Zuma.","Kgalema Motlanthe.","Percy Montgomery.","Nelson Mandela."],
		Correcta: 0
};
//
//Function .random that randomize the question to display and returns the data in this. js
SouthAfrica.generarPregunta = function(){
	//Generate 
	var random = Math.floor(Math.random()*10) % 15;
	switch(random){
	//Question 1.
	case 0:
		SouthAfrica.enunciado = suaPregunta1.suaPregunta;
		for(var i = 0; i < 4; i++){
			SouthAfrica.resps[i] = suaPregunta1.Respuestas[i];
		}
		SouthAfrica.respC = suaPregunta1.Correcta;
		break;
	//Question 2.
	case 1:
		SouthAfrica.enunciado = suaPregunta2.suaPregunta;
		for(var i = 0; i < 4; i++){
			SouthAfrica.resps[i] = suaPregunta2.Respuestas[i];			
		}
		SouthAfrica.respC = suaPregunta2.Correcta;
		break;
	//Question 3.
	case 2:
		SouthAfrica.enunciado = suaPregunta3.suaPregunta;
		for(var i = 0; i < 4; i++){
			SouthAfrica.resps[i] = suaPregunta3.Respuestas[i];			
		}
		SouthAfrica.respC = suaPregunta3.Correcta;
		break;				
	//Question 4.
	case 3:
		SouthAfrica.enunciado = suaPregunta4.suaPregunta;
		for(var i = 0; i < 4; i++){
			SouthAfrica.resps[i] = suaPregunta4.Respuestas[i];			
		}
		SouthAfrica.respC = suaPregunta4.Correcta;
		break;	
	//Question 5.
	case 4:
		SouthAfrica.enunciado = suaPregunta5.suaPregunta;
		for(var i = 0; i < 4; i++){
			SouthAfrica.resps[i] = suaPregunta5.Respuestas[i];			
		}
		SouthAfrica.respC = suaPregunta5.Correcta;
		break;
	//Question 6.
	case 5:
		SouthAfrica.enunciado = suaPregunta6.suaPregunta;
		for(var i = 0; i < 4; i++){
			SouthAfrica.resps[i] = suaPregunta6.Respuestas[i];			
		}
		SouthAfrica.respC = suaPregunta6.Correcta;
		break;
	//Question 7.
	case 6:
		SouthAfrica.enunciado = suaPregunta7.suaPregunta;
		for(var i = 0; i < 4; i++){
			SouthAfrica.resps[i] = suaPregunta7.Respuestas[i];			
		}
		SouthAfrica.respC = suaPregunta7.Correcta;
		break;
	//Question 8.
	case 7:
		SouthAfrica.enunciado = suaPregunta8.suaPregunta;
		for(var i = 0; i < 4; i++){
			SouthAfrica.resps[i] = suaPregunta8.Respuestas[i];			
		}
	SouthAfrica.respC = suaPregunta8.Correcta;
	break;
	//Question 9.
	case 8:
		SouthAfrica.enunciado = suaPregunta9.suaPregunta;
		for(var i = 0; i < 4; i++){
			SouthAfrica.resps[i] = suaPregunta9.Respuestas[i];			
		}
	SouthAfrica.respC = suaPregunta9.Correcta;
	break;
	//Question 10.
	case 9:
		SouthAfrica.enunciado = suaPregunta10.suaPregunta;
		for(var i = 0; i < 4; i++){
			SouthAfrica.resps[i] = suaPregunta10.Respuestas[i];			
		}
	SouthAfrica.respC = suaPregunta10.Correcta;
	break;
	//Question 11.
	case 10:
		SouthAfrica.enunciado = suaPregunta11.suaPregunta;
		for(var i = 0; i < 4; i++){
			SouthAfrica.resps[i] = suaPregunta11.Respuestas[i];			
		}
	SouthAfrica.respC = suaPregunta11.Correcta;
	break;
	//Question 12.
	case 11:
		SouthAfrica.enunciado = suaPregunta12.suaPregunta;
		for(var i = 0; i < 4; i++){
			SouthAfrica.resps[i] = suaPregunta12.Respuestas[i];			
		}
	SouthAfrica.respC = suaPregunta12.Correcta;
	break;
	//Question 13.
	case 12:
		SouthAfrica.enunciado = suaPregunta13.suaPregunta;
		for(var i = 0; i < 4; i++){
			SouthAfrica.resps[i] = suaPregunta13.Respuestas[i];			
		}
	SouthAfrica.respC = suaPregunta13.Correcta;
	break;
	//Question 14.
	case 13:
		SouthAfrica.enunciado = suaPregunta14.suaPregunta;
		for(var i = 0; i < 4; i++){
			SouthAfrica.resps[i] = suaPregunta14.Respuestas[i];			
		}
	SouthAfrica.respC = suaPregunta14.Correcta;
	break;
	//Question 15.
	case 14:
		SouthAfrica.enunciado = suaPregunta15.suaPregunta;
		for(var i = 0; i < 4; i++){
			SouthAfrica.resps[i] = suaPregunta15.Respuestas[i];			
		}
	SouthAfrica.respC = suaPregunta15.Correcta;
	break;
	};
};