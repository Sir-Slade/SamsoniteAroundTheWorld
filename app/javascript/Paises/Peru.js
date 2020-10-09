//PERU
// Create an array that contains the statement and questions.
var Peru = {
		enunciado:"",
		resps: new Array(),
		respC:-1,
};
// Question 1
var perPregunta1 = {
		perPregunta: "¿Qué significa la palabra Perú?",
		Respuestas: ["Abundancia.","Valle.","Riqueza.","Pobreza."],
		Correcta: 0
};
// Question 2
var perPregunta2 = {
		perPregunta: "¿En qué año Cuzco fue declarado Patrimonio Histórico de la Humanidad?",
		Respuestas: ["En 1983.","En 1960.","En 1950.","En 1975."],
		Correcta: 0
};
//Question 3
var perPregunta3 = {	
		perPregunta: "¿A qué altura se encuentra la Ciudad Perdida de los Incas en el Machu Picchu?",
		Respuestas: ["2430 metros de altura.","3000 metros de altura.","3250 metros de altura.","1500 metros de altura."],
		Correcta: 0
};
//Question 4
var perPregunta4 = {
		perPregunta: "¿Cómo llegaban los quemuchas a Machu Picchu?",
		Respuestas: ["A través de un sistema de lianas.","Por los ríos.","Por las laderas de la montaña.","A través del Camino del Inca."],
		Correcta: 3
};
//Question 5
var perPregunta5 = {
		perPregunta: "¿Cuántos sitios arqueológicos hay aproximadamente en Peru?",
		Respuestas: ["Alrededor de 100.000 sitios arqueológicos.","Alrededor de 500 sitios arqueológicos.","Alrededor de 10.000 sitios arqueológicos.","Alrededor de 500.000 sitios arqueológicos."],
		Correcta: 0
};
//Question 6 
var perPregunta6 = {
		perPregunta: "¿Cuántos platos típicos tiene la gastronomía peruana?",
		Respuestas: ["Aproximadamente 50.","Aproximadamente 500.","Aproximadamente 5000.","Aproximadamente 100."],
		Correcta: 1
};
//Question 7
var perPregunta7 = {
		perPregunta: "¿De qué estilo es la Catedral de Cuzco?",
		Respuestas: ["Renacentista.","Griego.","Clásico.","Barroco."],
		Correcta: 3
};
//Question 8
var perPregunta8 = {
		perPregunta: "¿Cuál de estos platos es tradicional de la gastronomía peruana?",
		Respuestas: ["Locro.","Feijoada.","Ceviche.","Asado."],
		Correcta: 2
};
//Question 9
var perPregunta9 = {
		perPregunta: "El lago más grande de Sudamérica se encuentra en Perú. ¿Cómo se llama?",
		Respuestas: ["Lago Titicaca.","Lago Grande.","Lago Perú.","Lago Tupac."],
		Correcta: 0
};
//Question 10
var perPregunta10 = {
		perPregunta: "Perú es el mayor productor de... ¿Cuáles metales?",
		Respuestas: ["Plata y Oro.","Oro y Zinc.","Zinc y Plata.","Cobre y Oro."],
		Correcta: 1
};
//Question 11 
var perPregunta11 = {
		perPregunta: "¿En qué año fueron descubiertas las ruinas de Machu Picchu?",
		Respuestas: ["En 1980.","En 1911.","En 1820.","En 1953."],
		Correcta: 1
};
//Question 12
var perPregunta12 = {
		perPregunta: "¿Qué superficie ocupan las Líneas de Nazca?",
		Respuestas: ["3.000 metros de largo.","1.900 metros de largo.","1.500 metros de largo.","200 metros de largo."],
		Correcta: 2
};
//Question 13 
var perPregunta13 = {
		perPregunta: "¿Cómo se llamaba el historiador y explorador que descubrió el Machu Pichu?",
		Respuestas: ["Robert Johnson.","Hiram Bingham.","Matt Roberts.","Dorothea Lange."],
		Correcta: 1
};
//Question 14 
var perPregunta14 = {
		perPregunta: "El punto más alto del Perú se encuentra a 6.768 metros de altura… ¿Cómo se llama?",
		Respuestas: ["Nevado Eterno.","Picos Altos.","Nevado del Perú.","Nevado Huascarán."],
		Correcta: 3
};
//Question 15 
var perPregunta15 = {
		perPregunta: "¿Cómo se llama la moneda peruana?",
		Respuestas: ["Peso Inca.","Sol.","Peso Peruano.","Inca."],
		Correcta: 0
};
//
//Function .random that randomize the question to display and returns the data in this. js
Peru.generarPregunta = function(){
	//Generate 
	var random = Math.floor(Math.random()*10) % 15;
	switch(random){
	//Question 1.
	case 0:
		Peru.enunciado = perPregunta1.perPregunta;
		for(var i = 0; i < 4; i++){
			Peru.resps[i] = perPregunta1.Respuestas[i];
		}
		Peru.respC = perPregunta1.Correcta;
		break;
	//Question 2.
	case 1:
		Peru.enunciado = perPregunta2.perPregunta;
		for(var i = 0; i < 4; i++){
			Peru.resps[i] = perPregunta2.Respuestas[i];			
		}
		Peru.respC = perPregunta2.Correcta;
		break;
	//Question 3.
	case 2:
		Peru.enunciado = perPregunta3.perPregunta;
		for(var i = 0; i < 4; i++){
			Peru.resps[i] = perPregunta3.Respuestas[i];			
		}
		Peru.respC = perPregunta3.Correcta;
		break;				
	//Question 4.
	case 3:
		Peru.enunciado = perPregunta4.perPregunta;
		for(var i = 0; i < 4; i++){
			Peru.resps[i] = perPregunta4.Respuestas[i];			
		}
		Peru.respC = perPregunta4.Correcta;
		break;	
	//Question 5.
	case 4:
		Peru.enunciado = perPregunta5.perPregunta;
		for(var i = 0; i < 4; i++){
			Peru.resps[i] = perPregunta5.Respuestas[i];			
		}
		Peru.respC = perPregunta5.Correcta;
		break;
	//Question 6.
	case 5:
		Peru.enunciado = perPregunta6.perPregunta;
		for(var i = 0; i < 4; i++){
			Peru.resps[i] = perPregunta6.Respuestas[i];			
		}
		Peru.respC = perPregunta6.Correcta;
		break;
	//Question 7.
	case 6:
		Peru.enunciado = perPregunta7.perPregunta;
		for(var i = 0; i < 4; i++){
			Peru.resps[i] = perPregunta7.Respuestas[i];			
		}
		Peru.respC = perPregunta7.Correcta;
		break;
	//Question 8.
	case 7:
		Peru.enunciado = perPregunta8.perPregunta;
		for(var i = 0; i < 4; i++){
			Peru.resps[i] = perPregunta8.Respuestas[i];			
		}
	Peru.respC = perPregunta8.Correcta;
	break;
	//Question 9.
	case 8:
		Peru.enunciado = perPregunta9.perPregunta;
		for(var i = 0; i < 4; i++){
			Peru.resps[i] = perPregunta9.Respuestas[i];			
		}
	Peru.respC = perPregunta9.Correcta;
	break;
	//Question 10.
	case 9:
		Peru.enunciado = perPregunta10.perPregunta;
		for(var i = 0; i < 4; i++){
			Peru.resps[i] = perPregunta10.Respuestas[i];			
		}
	Peru.respC = perPregunta10.Correcta;
	break;
	//Question 11.
	case 10:
		Peru.enunciado = perPregunta11.perPregunta;
		for(var i = 0; i < 4; i++){
			Peru.resps[i] = perPregunta11.Respuestas[i];			
		}
	Peru.respC = perPregunta11.Correcta;
	break;
	//Question 12.
	case 11:
		Peru.enunciado = perPregunta12.perPregunta;
		for(var i = 0; i < 4; i++){
			Peru.resps[i] = perPregunta12.Respuestas[i];			
		}
	Peru.respC = perPregunta12.Correcta;
	break;
	//Question 13.
	case 12:
		Peru.enunciado = perPregunta13.perPregunta;
		for(var i = 0; i < 4; i++){
			Peru.resps[i] = perPregunta13.Respuestas[i];			
		}
	Peru.respC = perPregunta13.Correcta;
	break;
	//Question 14.
	case 13:
		Peru.enunciado = perPregunta14.perPregunta;
		for(var i = 0; i < 4; i++){
			Peru.resps[i] = perPregunta14.Respuestas[i];			
		}
	Peru.respC = perPregunta14.Correcta;
	break;
	//Question 15.
	case 14:
		Peru.enunciado = perPregunta15.perPregunta;
		for(var i = 0; i < 4; i++){
			Peru.resps[i] = perPregunta15.Respuestas[i];			
		}
	Peru.respC = perPregunta15.Correcta;
	break;
	};
};