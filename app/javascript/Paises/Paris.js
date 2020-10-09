//PARIS
// Create an array that contains the statement and questions.
var Paris = {
		parEnunciado:"",
		resps: new Array(),
		parRespC:-1,
};
// Question 1
var parPregunta1 = {
		parPregunta: "¿Cuántas personas vosotan la Torre Eiffel por año?",
		parRespuestas: ["7 millones de personas.", "1 millón de personas.", "500 mil personas.", "150 mil personas."],
		parCorrecta: 0
};
// Question 2
var parPregunta2 = {
		parPregunta: "¿En qué lugar de París se encuentra el kilómetro 0 de todas las carrreteras en Francia?",
		parRespuestas: ["El Arco del Triunfo.", "Frente al museo del Louvre.", "Debajo de la Torre Eiffel", "En la plaza donde se localiza la Catedral de Notre Dame."],
		parCorrecta: 3
};
//Question 3
var parPregunta3 = {	
		parPregunta: "La famosa pirámide del Museo Lauvre posee las mismas proporciones que...",
		parRespuestas: ["La pirámide de Kukulcán en Chichén Itzá", "La pirámide de Keops en Egipto", "La pirámide de Gizeh en Egipto.", "La pirámide del Sol en Teotihuacan."],
		parCorrecta: 1
};
//Question 4
var parPregunta4 = {
		parPregunta: "¿Qué se exibe en el Musée du Service des Objets Trouvés?",
		parRespuestas: ["Obras de artistas franceses solamente.", "Objetos perdidos.", "Trajes de la historia francesa.", "Joyas."],
		parCorrecta: 1
};
//Question 5
var parPregunta5 = {
		parPregunta: "¿Cuánto mide el Arco del Triunfo?",
		parRespuestas: ["60 metros de alto y 20 de ancho", "49 metros de altura y 45 de ancho", "60 metros de alto y 60 de ancho", "45 metros de altura y 70 de ancho."],
		parCorrecta: 1
};
//Question 6 
var parPregunta6 = {
		parPregunta: "La Avena 'Campos Elíseos' es la más importante de París. ¿Cuánto mide?",
		parRespuestas: ["1880 metros.", "2500 metros", "1000 metros", "6000 metros"],
		parCorrecta: 0
};
//Question 7
var parPregunta7 = {
		parPregunta: "¿Cuál de estos cuatros no está en el Museo de Louvre?",
		parRespuestas: ["La Gioconda de Leonardo Da Vinci.", "La Victoria Alada de Samotracia.", "La Libertad guiando al pueblo de Delacroix", "La Ronda Nocturna de Rembrandt."],
		parCorrecta: 3
};
//Question 8
var parPregunta8 = {
		parPregunta: "¿Qué es La Savoyarde?",
		parRespuestas: ["El nombre de una famosa modelo francesa.", "Un restaurante de comida gourmet en el centro de París.", "Una de las acenidas más importantes de París.", "La campana más grande de Francia, ubicada en la Basílica de Sacré Coeur."],
		parCorrecta: 3
};
//Question 9
var parPregunta9 = {
		parPregunta: "¿En qué año París fue sede olímpica?",
		parRespuestas: ["1980.", "1900.", "1890.", "2012."],
		parCorrecta: 1
};
//Question 10
var parPregunta10 = {
		parPregunta: "¿Por qué es conocido el barrio de Montparnasse?",
		parRespuestas: ["Por la gran cantidad de museos que hay en la zona.", "Por sus cafés y bares cerca del Sena.", "Por ser la zona tecnológica de París.", "Por ser una zona fábril."],
		parCorrecta: 1
};
//Question 11 
var parPregunta11 = {
		parPregunta: "La Plaza de La Bastilla es considerada un símbolo de...",
		parRespuestas: ["La guerra.", "La unidad entre los pueblos.", "La Revolución Francesa.", "Del primer rey francés."],
		parCorrecta: 2
};
//Question 12
var parPregunta12 = {
		parPregunta: "¿Cuál es el estilo del Palacio de la Opera de París?",
		parRespuestas: ["Barroco.", "Futurista.", "Neobarroco.", "Clásico."],
		parCorrecta: 2
};
//Question 13 
var parPregunta13 = {
		parPregunta: "¿Qué museo se encuentra en lo que fuera un tiempo atrás la estación de ferrocarril de Orsay?",
		parRespuestas: ["El Museo Rodin.", "El Museo de Orsay.", "El Musée du Service des Objets Trouvés.", "El Museo del Louvre."],
		parCorrecta: 1 
};
//Question 14 
var parPregunta14 = {
		parPregunta: "¿Qué idioma se hablaba en el Barrio Latino de París hasta el siglo XVIII?",
		parRespuestas: ["Latín.", "Inglés.", "Griego.", "Portugués."],
		parCorrecta: 0
};
//Question 15 
var parPregunta15 = {
		parPregunta: "¿Qué funcionaba dentro de Les Invalides anteriormente?",
		parRespuestas: ["Una residencia para soldados, liciados y ancianos.", "Un hotel de lujo.", "Un restaurante de comida rápida.", "Un museo."],
		parCorrecta: 0 
};
//
//Function .random that randomize the question to display and returns the data in this. js
Paris.generarPregunta = function(){
	//Generate 
	var random = Math.floor(Math.random()*10) % 15;
	switch(random){
	//Question 1.
	case 0:
		Paris.parEnunciado = parPregunta1.parPregunta;
		for(var i = 0; i < 4; i++){
			Paris.resps[i] = parPregunta1.parRespuestas[i];
		}
		Paris.parRespC = parPregunta1.parCorrecta;
		break;
	//Question 2.
	case 1:
		Paris.parEnunciado = parPregunta2.parPregunta;
		for(var i = 0; i < 4; i++){
			Paris.resps[i] = parPregunta2.parRespuestas[i];			
		}
		Paris.parRespC = parPregunta2.parCorrecta;
		break;
	//Question 3.
	case 2:
		Paris.parEnunciado = parPregunta3.parPregunta;
		for(var i = 0; i < 4; i++){
			Paris.resps[i] = parPregunta3.parRespuestas[i];			
		}
		Paris.parRespC = parPregunta3.parCorrecta;
		break;				
	//Question 4.
	case 3:
		Paris.parEnunciado = parPregunta4.parPregunta;
		for(var i = 0; i < 4; i++){
			Paris.resps[i] = parPregunta4.parRespuestas[i];			
		}
		Paris.parRespC = parPregunta4.parCorrecta;
		break;	
	//Question 5.
	case 4:
		Paris.parEnunciado = parPregunta5.parPregunta;
		for(var i = 0; i < 4; i++){
			Paris.resps[i] = parPregunta5.parRespuestas[i];			
		}
		Paris.parRespC = parPregunta5.parCorrecta;
		break;
	//Question 6.
	case 5:
		Paris.parEnunciado = parPregunta6.parPregunta;
		for(var i = 0; i < 4; i++){
			Paris.resps[i] = parPregunta6.parRespuestas[i];			
		}
		Paris.parRespC = parPregunta6.parCorrecta;
		break;
	//Question 7.
	case 6:
		Paris.parEnunciado = parPregunta7.parPregunta;
		for(var i = 0; i < 4; i++){
			Paris.resps[i] = parPregunta7.parRespuestas[i];			
		}
		Paris.parRespC = parPregunta7.parCorrecta;
		break;
	//Question 8.
	case 7:
		Paris.parEnunciado = parPregunta8.parPregunta;
		for(var i = 0; i < 4; i++){
			Paris.resps[i] = parPregunta8.parRespuestas[i];			
		}
	Paris.parRespC = parPregunta8.parCorrecta;
	break;
	//Question 9.
	case 8:
		Paris.parEnunciado = parPregunta9.parPregunta;
		for(var i = 0; i < 4; i++){
			Paris.resps[i] = parPregunta9.parRespuestas[i];			
		}
	Paris.parRespC = parPregunta9.parCorrecta;
	break;
	//Question 10.
	case 9:
		Paris.parEnunciado = parPregunta10.parPregunta;
		for(var i = 0; i < 4; i++){
			Paris.resps[i] = parPregunta10.parRespuestas[i];			
		}
	Paris.parRespC = parPregunta10.parCorrecta;
	break;
	//Question 11.
	case 10:
		Paris.parEnunciado = parPregunta11.parPregunta;
		for(var i = 0; i < 4; i++){
			Paris.resps[i] = parPregunta11.parRespuestas[i];			
		}
	Paris.parRespC = parPregunta11.parCorrecta;
	break;
	//Question 12.
	case 11:
		Paris.parEnunciado = parPregunta12.parPregunta;
		for(var i = 0; i < 4; i++){
			Paris.resps[i] = parPregunta12.parRespuestas[i];			
		}
	Paris.parRespC = parPregunta12.parCorrecta;
	break;
	//Question 13.
	case 12:
		Paris.parEnunciado = parPregunta13.parPregunta;
		for(var i = 0; i < 4; i++){
			Paris.resps[i] = parPregunta13.parRespuestas[i];			
		}
	Paris.parRespC = parPregunta13.parCorrecta;
	break;
	//Question 14.
	case 13:
		Paris.parEnunciado = parPregunta14.parPregunta;
		for(var i = 0; i < 4; i++){
			Paris.resps[i] = parPregunta14.parRespuestas[i];			
		}
	Paris.parRespC = parPregunta14.parCorrecta;
	break;
	//Question 15.
	case 14:
		Paris.parEnunciado = parPregunta15.parPregunta;
		for(var i = 0; i < 4; i++){
			Paris.resps[i] = parPregunta15.parRespuestas[i];			
		}
	Paris.parRespC = parPregunta15.parCorrecta;
	break;
	};
};
