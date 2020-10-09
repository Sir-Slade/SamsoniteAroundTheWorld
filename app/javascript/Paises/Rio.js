//RIO DE JANEIRO CITY.
// Create an array that contains the statement and questions.
var Rio = {
		enunciado:"",
		resps: new Array(),
		respC:-1,
};
// Question 1
var rioPregunta1 = {
		rioPregunta: "¿Cómo es conocida popularmente la ciudad de Rio de Janeiro?",
		Respuestas: ["Cidade Maravilhosa.","Nova Cidade.","Cidade Esplêndida.","Cidade Mágica."],
		Correcta: 0
};
// Question 2
var rioPregunta2 = {
		rioPregunta: "¿Qué significa la palabra 'Carioca'?",
		Respuestas: ["Casa del mar.","Casa del sol.","Casa de viento.","Cada de blancos."],
		Correcta: 3
};
//Question 3
var rioPregunta3 = {	
		rioPregunta: "¿Cuántas favelas existen en la ciudad de Rio de Janeiro?",
		Respuestas: ["Entre 200 y 400.","Menos de 100.","Menos de 300.","Más de 750."],
		Correcta: 3
};
//Question 4
var rioPregunta4 = {
		rioPregunta: "¿Cuáles son las playas más famosas de Rio de Janeiro?",
		Respuestas: ["Botafogo y Leblon.","Copacabana e Ipanema.","Vermelha y Arpoador.","Barra de Tijuca."],
		Correcta: 1
};
//Question 5
var rioPregunta5 = {
		rioPregunta: "",
		Respuestas: ["","","",""],
		Correcta: 0
};
//Question 6 
var rioPregunta6 = {
		rioPregunta: "¿Cuál es el nombre del cerro en donde se encuentra el Cristo Redentor?",
		Respuestas: ["Cerro de Ipanema.","Cerro de Río.","Cerro del Corcovado.","Cerro Redentor."],
		Correcta: 2
};
//Question 7
var rioPregunta7 = {
		rioPregunta: "¿Cuántos metros mide el Cristo Redentor?",
		Respuestas: ["100 metros.","38 metros.","50 metros.","20 metros."],
		Correcta: 1
};
//Question 8
var rioPregunta8 = {
		rioPregunta: "¿Cuál es el estadio deportivo más famoso de Rio?",
		Respuestas: ["Estadio Maracaná.","Estadio Monumental.","Estadio São Januário.","Estadio João Havelange."],
		Correcta: 0
};
//Question 9
var rioPregunta9 = {
		rioPregunta: "En el año 2009 la revista Forbes eligió a Rio como...",
		Respuestas: ["La ciudad más feliz del mundo.","La ciudad más turística del mundo.","La ciudad más soleada del mundo.","La ciudad más aburrida del mundo."],
		Correcta: 0
};
//Question 10
var rioPregunta10 = {
		rioPregunta: "¿Cuál es la celebración más importante y mundialmente famosa de Río?",
		Respuestas: ["La Navidad.","Los mundiales de Fútbol.","El Año Nuevo en el Corcovado.","El Carnaval de Río de Janeiro."],
		Correcta: 3
};
//Question 11 
var rioPregunta11 = {
		rioPregunta: "La mayor televisora de América Latina y la tercera del mundo esta en Rio ¿Cuál es?",
		Respuestas: ["CNN.","Rede Globo.","CBS.","Rede Brasil."],
		Correcta: 1
};
//Question 12
var rioPregunta12 = {
		rioPregunta: "¿En qué año Rio de Janeiro dejó de ser la capital de Brasil?",
		Respuestas: ["1960.","1860.","1980.","1900."],
		Correcta: 0
};
//Question 13 
var rioPregunta13 = {
		rioPregunta: "¿Cuál es el nombre completo de la ciudad de Rio?",
		Respuestas: ["Sao Rio de Janeiro.","Sao Sebastiao do Rio de Janeiro.","Sao Carlos do Rio de Janeiro.","Sao Damian do Rio."],
		Correcta: 1
};
//Question 14 
var rioPregunta14 = {
		rioPregunta: "¿Cuántos barrios posee Rio de Janeiro?",
		Respuestas: ["230.","30.","160.","50."],
		Correcta: 2
};
//Question 15 
var rioPregunta15 = {
		rioPregunta: "¿Cuál es la religión mayoritaria de Río de Janeiro?",
		Respuestas: ["Catolicismo.","Espiritismo.","Judaismo.","Protestantismo."],
		Correcta: 0
};
//
//Function .random that randomize the question to display and returns the data in this. js
Rio.generarPregunta = function(){
	//Generate 
	var random = Math.floor(Math.random()*10) % 15;
	switch(random){
	//Question 1.
	case 0:
		Rio.enunciado = rioPregunta1.rioPregunta;
		for(var i = 0; i < 4; i++){
			Rio.resps[i] = rioPregunta1.Respuestas[i];
		}
		Rio.respC = rioPregunta1.Correcta;
		break;
	//Question 2.
	case 1:
		Rio.enunciado = rioPregunta2.rioPregunta;
		for(var i = 0; i < 4; i++){
			Rio.resps[i] = rioPregunta2.Respuestas[i];			
		}
		Rio.respC = rioPregunta2.Correcta;
		break;
	//Question 3.
	case 2:
		Rio.enunciado = rioPregunta3.rioPregunta;
		for(var i = 0; i < 4; i++){
			Rio.resps[i] = rioPregunta3.Respuestas[i];			
		}
		Rio.respC = rioPregunta3.Correcta;
		break;				
	//Question 4.
	case 3:
		Rio.enunciado = rioPregunta4.rioPregunta;
		for(var i = 0; i < 4; i++){
			Rio.resps[i] = rioPregunta4.Respuestas[i];			
		}
		Rio.respC = rioPregunta4.Correcta;
		break;	
	//Question 5.
	case 4:
		Rio.enunciado = rioPregunta5.rioPregunta;
		for(var i = 0; i < 4; i++){
			Rio.resps[i] = rioPregunta5.Respuestas[i];			
		}
		Rio.respC = rioPregunta5.Correcta;
		break;
	//Question 6.
	case 5:
		Rio.enunciado = rioPregunta6.rioPregunta;
		for(var i = 0; i < 4; i++){
			Rio.resps[i] = rioPregunta6.Respuestas[i];			
		}
		Rio.respC = rioPregunta6.Correcta;
		break;
	//Question 7.
	case 6:
		Rio.enunciado = rioPregunta7.rioPregunta;
		for(var i = 0; i < 4; i++){
			Rio.resps[i] = rioPregunta7.Respuestas[i];			
		}
		Rio.respC = rioPregunta7.Correcta;
		break;
	//Question 8.
	case 7:
		Rio.enunciado = rioPregunta8.rioPregunta;
		for(var i = 0; i < 4; i++){
			Rio.resps[i] = rioPregunta8.Respuestas[i];			
		}
	Rio.respC = rioPregunta8.Correcta;
	break;
	//Question 9.
	case 8:
		Rio.enunciado = rioPregunta9.rioPregunta;
		for(var i = 0; i < 4; i++){
			Rio.resps[i] = rioPregunta9.Respuestas[i];			
		}
	Rio.respC = rioPregunta9.Correcta;
	break;
	//Question 10.
	case 9:
		Rio.enunciado = rioPregunta10.rioPregunta;
		for(var i = 0; i < 4; i++){
			Rio.resps[i] = rioPregunta10.Respuestas[i];			
		}
	Rio.respC = rioPregunta10.Correcta;
	break;
	//Question 11.
	case 10:
		Rio.enunciado = rioPregunta11.rioPregunta;
		for(var i = 0; i < 4; i++){
			Rio.resps[i] = rioPregunta11.Respuestas[i];			
		}
	Rio.respC = rioPregunta11.Correcta;
	break;
	//Question 12.
	case 11:
		Rio.enunciado = rioPregunta12.rioPregunta;
		for(var i = 0; i < 4; i++){
			Rio.resps[i] = rioPregunta12.Respuestas[i];			
		}
	Rio.respC = rioPregunta12.Correcta;
	break;
	//Question 13.
	case 12:
		Rio.enunciado = rioPregunta13.rioPregunta;
		for(var i = 0; i < 4; i++){
			Rio.resps[i] = rioPregunta13.Respuestas[i];			
		}
	Rio.respC = rioPregunta13.Correcta;
	break;
	//Question 14.
	case 13:
		Rio.enunciado = rioPregunta14.rioPregunta;
		for(var i = 0; i < 4; i++){
			Rio.resps[i] = rioPregunta14.Respuestas[i];			
		}
	Rio.respC = rioPregunta14.Correcta;
	break;
	//Question 15.
	case 14:
		Rio.enunciado = rioPregunta15.rioPregunta;
		for(var i = 0; i < 4; i++){
			Rio.resps[i] = rioPregunta15.Respuestas[i];			
		}
	Rio.respC = rioPregunta15.Correcta;
	break;
	}
};