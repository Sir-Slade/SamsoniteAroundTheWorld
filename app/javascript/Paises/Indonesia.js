//
// Create an array that contains the statement and questions.
var Indonesia = {
		enunciado:"",
		resps: new Array(),
		respC:-1,
};
// Question 1
var indoPregunta1 = {
		indoPregunta: "¿Cuál es la atracción turística más visitada de Indonesia?",
		Respuestas: ["La Catedral de Yakarta.","El monte Semeru.","El templo Borobudur.","La Corte Suprema de Justicia."],
		Correcta: 2
};
// Question 2
var indoPregunta2 = {
		indoPregunta: "¿Cuántas islas posee Indonesia?",
		Respuestas: ["Más de 17.000 islas,","Más de 3.000 islas.","Más de 25.000 islas.","Más de 1.200 islas."],
		Correcta: 0
};
//Question 3
var indoPregunta3 = {	
		indoPregunta: "¿En dónde se encuentra el Parque nacional de Ujung Kulon?",
		Respuestas: ["En Kalimantán.","En el Estrecho de la Sonda.","En Gorontalo.","En Papúa."],
		Correcta: 1
};
//Question 4
var indoPregunta4 = {
		indoPregunta: "¿Cuáles son los deportes más populares de Indonesia?",
		Respuestas: ["Fútbol y el bádminton.","Natación y alpinismo.","Fútbol y squash.","Equitación y Surf."],
		Correcta: 0
};
//Question 5
var indoPregunta5 = {
		indoPregunta: "¿Cuál es la moneda de Indonesia?",
		Respuestas: ["Rupia Indonesia.","Euro.","Dólar.","Libra Indonesia."],
		Correcta: 0
};
//Question 6 
var indoPregunta6 = {
		indoPregunta: "¿Cuál es la capital de Indonesia?",
		Respuestas: ["Yakarta.","Java.","Kalimantán.","Papúa."],
		Correcta: 0
};
//Question 7
var indoPregunta7 = {
		indoPregunta: "¿Cómo se llama el templo hindú más grande de Java?",
		Respuestas: ["Trímurti.","Borobudur.","Kalimantán.","Prambanan."],
		Correcta: 3
};
//Question 8
var indoPregunta8 = {
		indoPregunta: "¿Cómo es conocido popularmente el Museo nacional de Indonesia?",
		Respuestas: ["Casa Yakarta","Edificio de las Artes Pictóricas.","Edificio Elefante.","Casa del Arte."],
		Correcta: 1
};
//Question 9
var indoPregunta9 = {
		indoPregunta: "¿En dónde se ubica el Museo del tsuenami en Indonesia?",
		Respuestas: ["En Surabaya.","En Banda Aceh.","En Borneo.","En Jakarta"],
		Correcta: 1
};
//Question 10
var indoPregunta10 = {
		indoPregunta: "¿Cómo se llaman los 3 lagos del volcán Kelimutu?",
		Respuestas: ["El Lago de los Ancianos, el Lago de los Hombres y Mujeres Jóvenes y el Lago Encantado.","El Lago de los Cisnes, el Lago de los Hombres y el Lago Maravilloso.","El Lago de Indonesia, el Lago del Mundo y el Lago Encantado.","El Lago Grande, el Lago Pequeño y Yaruka."],
		Correcta: 0
};
//Question 11 
var indoPregunta11 = {
		indoPregunta: "¿Cuál es la base de todas las comidas indonesias?",
		Respuestas: ["El pan.","La cebada.","El arroz.","La carne vacuna."],
		Correcta: 2
};
//Question 12
var indoPregunta12 = {
		indoPregunta: "¿Cuál fue el nombre de Yakarta durante el periodo colonial holandés?",
		Respuestas: ["Gulus.","Batavia.","Java.","Barona."],
		Correcta: 1
};
//Question 13 
var indoPregunta13 = {
		indoPregunta: "Marco Polo llegó a Islandia en 1293 ¿a qué isla?",
		Respuestas: ["Sumatra.","Java.","Molucas.","Islas menores de la Sonda."],
		Correcta: 0
};
//Question 14 
var indoPregunta14 = {
		indoPregunta: "¿En qué isla de Indonesia fue la erupción de  volcánica más importante y destructiva de la historia?",
		Respuestas: ["Isla de Sumatra.","Isla de Sumbawa.","Isla de Jakarta.","Isla de Krakatoa."],
		Correcta: 1
};
//Question 15 
var indoPregunta15 = {
		indoPregunta: "¿En qué año fue la última erupción del Volcán Krakatoa?",
		Respuestas: ["1926.","1990.","1986.","2002."],
		Correcta: 2
};
//
//Function .random that randomize the question to display and returns the data in this. js
Indonesia.generarPregunta = function(){
	//Generate 
	var random = Math.floor(Math.random()*10) % 15;
	switch(random){
	//Question 1.
	case 0:
		Indonesia.enunciado = indoPregunta1.indoPregunta;
		for(var i = 0; i < 4; i++){
			Indonesia.resps[i] = indoPregunta1.Respuestas[i];
		}
		Indonesia.respC = indoPregunta1.Correcta;
		break;
	//Question 2.
	case 1:
		Indonesia.enunciado = indoPregunta2.indoPregunta;
		for(var i = 0; i < 4; i++){
			Indonesia.resps[i] = indoPregunta2.Respuestas[i];			
		}
		Indonesia.respC = indoPregunta2.Correcta;
		break;
	//Question 3.
	case 2:
		Indonesia.enunciado = indoPregunta3.indoPregunta;
		for(var i = 0; i < 4; i++){
			Indonesia.resps[i] = indoPregunta3.Respuestas[i];			
		}
		Indonesia.respC = indoPregunta3.Correcta;
		break;				
	//Question 4.
	case 3:
		Indonesia.enunciado = indoPregunta4.indoPregunta;
		for(var i = 0; i < 4; i++){
			Indonesia.resps[i] = indoPregunta4.Respuestas[i];			
		}
		Indonesia.respC = indoPregunta4.Correcta;
		break;	
	//Question 5.
	case 4:
		Indonesia.enunciado = indoPregunta5.indoPregunta;
		for(var i = 0; i < 4; i++){
			Indonesia.resps[i] = indoPregunta5.Respuestas[i];			
		}
		Indonesia.respC = indoPregunta5.Correcta;
		break;
	//Question 6.
	case 5:
		Indonesia.enunciado = indoPregunta6.indoPregunta;
		for(var i = 0; i < 4; i++){
			Indonesia.resps[i] = indoPregunta6.Respuestas[i];			
		}
		Indonesia.respC = indoPregunta6.Correcta;
		break;
	//Question 7.
	case 6:
		Indonesia.enunciado = indoPregunta7.indoPregunta;
		for(var i = 0; i < 4; i++){
			Indonesia.resps[i] = indoPregunta7.Respuestas[i];			
		}
		Indonesia.respC = indoPregunta7.Correcta;
		break;
	//Question 8.
	case 7:
		Indonesia.enunciado = indoPregunta8.indoPregunta;
		for(var i = 0; i < 4; i++){
			Indonesia.resps[i] = indoPregunta8.Respuestas[i];			
		}
	Indonesia.respC = indoPregunta8.Correcta;
	break;
	//Question 9.
	case 8:
		Indonesia.enunciado = indoPregunta9.indoPregunta;
		for(var i = 0; i < 4; i++){
			Indonesia.resps[i] = indoPregunta9.Respuestas[i];			
		}
	Indonesia.respC = indoPregunta9.Correcta;
	break;
	//Question 10.
	case 9:
		Indonesia.enunciado = indoPregunta10.indoPregunta;
		for(var i = 0; i < 4; i++){
			Indonesia.resps[i] = indoPregunta10.Respuestas[i];			
		}
	Indonesia.respC = indoPregunta10.Correcta;
	break;
	//Question 11.
	case 10:
		Indonesia.enunciado = indoPregunta11.indoPregunta;
		for(var i = 0; i < 4; i++){
			Indonesia.resps[i] = indoPregunta11.Respuestas[i];			
		}
	Indonesia.respC = indoPregunta11.Correcta;
	break;
	//Question 12.
	case 11:
		Indonesia.enunciado = indoPregunta12.indoPregunta;
		for(var i = 0; i < 4; i++){
			Indonesia.resps[i] = indoPregunta12.Respuestas[i];			
		}
	Indonesia.respC = indoPregunta12.Correcta;
	break;
	//Question 13.
	case 12:
		Indonesia.enunciado = indoPregunta13.indoPregunta;
		for(var i = 0; i < 4; i++){
			Indonesia.resps[i] = indoPregunta13.Respuestas[i];			
		}
	Indonesia.respC = indoPregunta13.Correcta;
	break;
	//Question 14.
	case 13:
		Indonesia.enunciado = indoPregunta14.indoPregunta;
		for(var i = 0; i < 4; i++){
			Indonesia.resps[i] = indoPregunta14.Respuestas[i];			
		}
	Indonesia.respC = indoPregunta14.Correcta;
	break;
	//Question 15.
	case 14:
		Indonesia.enunciado = indoPregunta15.indoPregunta;
		for(var i = 0; i < 4; i++){
			Indonesia.resps[i] = indoPregunta15.Respuestas[i];			
		}
	Indonesia.respC = indoPregunta15.Correcta;
	break;
	};
};