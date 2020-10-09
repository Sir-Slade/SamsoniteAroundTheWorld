//NETHERLANDS.
// Create an array that contains the statement and questions.
var Netherlands = {
		enunciado:"",
		resps: new Array(),
		respC:-1,
};
// Question 1
var netPregunta1 = {
		netPregunta: "¿Cuál es la flor típica de Holanda?",
		Respuestas: ["Los Tulipanes.","Las Rosas.","Las Margaritas.","Los Jazmines."],
		Correcta: 0
};
// Question 2
var netPregunta2 = {
		netPregunta: "¿Qué había antiguamente en el espacio que hoy ocupa el Aeropuerto de Schiphol?",
		Respuestas: ["Un hotel 5 estrellas.","Un lago.","Edificios.","Un prado."],
		Correcta: 0
};
//Question 3
var netPregunta3 = {	
		netPregunta: "¿Cuánto mide la montaña más alta de Holanda?",
		Respuestas: ["3000 metros de altura.","1002 metros de altura.","323 metros de altura.","500 metros de altura."],
		Correcta: 2
};
//Question 4
var netPregunta4 = {
		netPregunta: "¿Cuál es el medio de transporte que abunda en Holanda?",
		Respuestas: ["Taxis.","Autos.","Motos.","Bicicletas."],
		Correcta: 3
};
//Question 5
var netPregunta5 = {
		netPregunta: "¿Cuál es el idioma oficial?",
		Respuestas: ["Alemán.","Francés.","Inglés.","Holandés."],
		Correcta: 3
};
//Question 6 
var netPregunta6 = {
		netPregunta: "¿Cómo se llama el barrio en donde abundan los museos en Amsterdan?",
		Respuestas: ["Musseumplein.","Musneigbourhood.","Museum Zone.","Mussem."],
		Correcta: 0
};
//Question 7
var netPregunta7 = {
		netPregunta: "¿Qué se expone en el Stichting Nationaal Brilmuseum?",
		Respuestas: ["Libros.","Juguetes.","Gafas.","Vasos."],
		Correcta: 2
};
//Question 8
var netPregunta8 = {
		netPregunta: "¿Cuál es la calle más antigua de la ciudad?",
		Respuestas: ["Katten.","Nieuwendijk.","Voldenpark.","Jordaan Plein."],
		Correcta: 0
};
//Question 9
var netPregunta9 = {
		netPregunta: "¿En que año se legalizó la prostitución en Amsterdam?",
		Respuestas: ["En 1810.","En 1600.","En 1985.","En 1850."],
		Correcta: 0
};
//Question 10
var netPregunta10 = {
		netPregunta: "¿Cuál es la principal característica de las casas en Holanda?",
		Respuestas: ["Tienen una inclinación muy pronunciada hacia delante.","En extremadamente bajas.","Están pintadas de colores estridentes.","Las fachadas son lisas."],
		Correcta: 0
};
//Question 11 
var netPregunta11 = {
		netPregunta: "¿Cuál es el color característico de Holanda?",
		Respuestas: ["Rosa.","Amarillo.","Naranja.","Verde."],
		Correcta: 2
};
//Question 12
var netPregunta12 = {
		netPregunta: "¿A orillas de qué río se encuentra Amsterdam?",
		Respuestas: ["Del río Amstel.","Del río Ring.","Del río Volga.","Del río Támesis."],
		Correcta: 0
};
//Question 13 
var netPregunta13 = {
		netPregunta: "¿Cuántas provincias tiene Holanda?",
		Respuestas: ["12.","10.","16.","17."],
		Correcta: 0
};
//Question 14 
var netPregunta14 = {
		netPregunta: "¿Cuál es su forma de gobierno?",
		Respuestas: ["Dictadura.","Presidencialismo.","Monarquía Constitucional.","Monarquía Absoluta."],
		Correcta: 2
};
//Question 15 
var netPregunta15 = {
		netPregunta: "¿Cómo se llama el único molino de Amsterdam que se abre al público?",
		Respuestas: ["Volga.","Molino de Sliten.","Molino de Amsterdam.","Molino de Park."],
		Correcta: 1
};
//
//Function .random that randomize the question to display and returns the data in this. js
Netherlands.generarPregunta = function(){
	//Generate 
	var random = Math.floor(Math.random()*10) % 15;
	switch(random){
	//Question 1.
	case 0:
		Netherlands.enunciado = netPregunta1.netPregunta;
		for(var i = 0; i < 4; i++){
			Netherlands.resps[i] = netPregunta1.Respuestas[i];
		}
		Netherlands.respC = netPregunta1.Correcta;
		break;
	//Question 2.
	case 1:
		Netherlands.enunciado = netPregunta2.netPregunta;
		for(var i = 0; i < 4; i++){
			Netherlands.resps[i] = netPregunta2.Respuestas[i];			
		}
		Netherlands.respC = netPregunta2.Correcta;
		break;
	//Question 3.
	case 2:
		Netherlands.enunciado = netPregunta3.netPregunta;
		for(var i = 0; i < 4; i++){
			Netherlands.resps[i] = netPregunta3.Respuestas[i];			
		}
		Netherlands.respC = netPregunta3.Correcta;
		break;				
	//Question 4.
	case 3:
		Netherlands.enunciado = netPregunta4.netPregunta;
		for(var i = 0; i < 4; i++){
			Netherlands.resps[i] = netPregunta4.Respuestas[i];			
		}
		Netherlands.respC = netPregunta4.Correcta;
		break;	
	//Question 5.
	case 4:
		Netherlands.enunciado = netPregunta5.netPregunta;
		for(var i = 0; i < 4; i++){
			Netherlands.resps[i] = netPregunta5.Respuestas[i];			
		}
		Netherlands.respC = netPregunta5.Correcta;
		break;
	//Question 6.
	case 5:
		Netherlands.enunciado = netPregunta6.netPregunta;
		for(var i = 0; i < 4; i++){
			Netherlands.resps[i] = netPregunta6.Respuestas[i];			
		}
		Netherlands.respC = netPregunta6.Correcta;
		break;
	//Question 7.
	case 6:
		Netherlands.enunciado = netPregunta7.netPregunta;
		for(var i = 0; i < 4; i++){
			Netherlands.resps[i] = netPregunta7.Respuestas[i];			
		}
		Netherlands.respC = netPregunta7.Correcta;
		break;
	//Question 8.
	case 7:
		Netherlands.enunciado = netPregunta8.netPregunta;
		for(var i = 0; i < 4; i++){
			Netherlands.resps[i] = netPregunta8.Respuestas[i];			
		}
	Netherlands.respC = netPregunta8.Correcta;
	break;
	//Question 9.
	case 8:
		Netherlands.enunciado = netPregunta9.netPregunta;
		for(var i = 0; i < 4; i++){
			Netherlands.resps[i] = netPregunta9.Respuestas[i];			
		}
	Netherlands.respC = netPregunta9.Correcta;
	break;
	//Question 10.
	case 9:
		Netherlands.enunciado = netPregunta10.netPregunta;
		for(var i = 0; i < 4; i++){
			Netherlands.resps[i] = netPregunta10.Respuestas[i];			
		}
	Netherlands.respC = netPregunta10.Correcta;
	break;
	//Question 11.
	case 10:
		Netherlands.enunciado = netPregunta11.netPregunta;
		for(var i = 0; i < 4; i++){
			Netherlands.resps[i] = netPregunta11.Respuestas[i];			
		}
	Netherlands.respC = netPregunta11.Correcta;
	break;
	//Question 12.
	case 11:
		Netherlands.enunciado = netPregunta12.netPregunta;
		for(var i = 0; i < 4; i++){
			Netherlands.resps[i] = netPregunta12.Respuestas[i];			
		}
	Netherlands.respC = netPregunta12.Correcta;
	break;
	//Question 13.
	case 12:
		Netherlands.enunciado = netPregunta13.netPregunta;
		for(var i = 0; i < 4; i++){
			Netherlands.resps[i] = netPregunta13.Respuestas[i];			
		}
	Netherlands.respC = netPregunta13.Correcta;
	break;
	//Question 14.
	case 13:
		Netherlands.enunciado = netPregunta14.netPregunta;
		for(var i = 0; i < 4; i++){
			Netherlands.resps[i] = netPregunta14.Respuestas[i];			
		}
	Netherlands.respC = netPregunta14.Correcta;
	break;
	//Question 15.
	case 14:
		Netherlands.enunciado = netPregunta15.netPregunta;
		for(var i = 0; i < 4; i++){
			Netherlands.resps[i] = netPregunta15.Respuestas[i];			
		}
	Netherlands.respC = netPregunta15.Correcta;
	break;
	};
};