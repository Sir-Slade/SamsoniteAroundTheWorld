//VIENNA.
// Create an array that contains the statement and questions.
var Vienna = {
		enunciado:"",
		resps: new Array(),
		respC:-1,
};
// Question 1
var viePregunta1 = {
		viePregunta: "¿A orillas de qué río se ubica la ciudad de Viena?",
		Respuestas: ["A orillas del Danubio.","A orillas del Ring.","A orillas del Támesis.","A orillas del Amazonia."],
		Correcta: 0
};
// Question 2
var viePregunta2 = {
		viePregunta: "¿Cuál es el idioma oficial de Viena?",
		Respuestas: ["El francés.","El latín.","El inglés.","El alemán."],
		Correcta: 3
};
//Question 3
var viePregunta3 = {	
		viePregunta: "¿En qué año se inauguró la red de subterraneos de Viena?",
		Respuestas: ["En 1990.","En 1898.","En 1980.","En 1850."],
		Correcta: 1
};
//Question 4
var viePregunta4 = {
		viePregunta: "¿De qué estilo es la Ópera de Viena?",
		Respuestas: ["Romántico.","Neoromántico.","Clásico.","Futurista."],
		Correcta: 1
};
//Question 5
var viePregunta5 = {
		viePregunta: "¿Cuáles de estos músicos nacieron en Viena?",
		Respuestas: ["Schubert, Waltz, Strauss.","Mozart, Chopin, Listz.","Beethoven, Handel, Bach.","Vivaldi, Verdi, Wagner."],
		Correcta: 0
};
//Question 6 
var viePregunta6 = {
		viePregunta: "¿Qué sitio vienés fue declarado patrimonio de la Humanidad por la Unesco?",
		Respuestas: ["El centro histórico de Viena.","La Millennium Tower de Viena.","El Palacio de Belvedere.","El Centro Internacional de Viena."],
		Correcta: 0
};
//Question 7
var viePregunta7 = {
		viePregunta: "¿Cuántos barrios tiene la ciudad de Viena?",
		Respuestas: ["50.","23.","15.","36."],
		Correcta: 1
};
//Question 8
var viePregunta8 = {
		viePregunta: "¿Cómo se llama el más famoso postre vienés?",
		Respuestas: ["Desfrutedel.","Apfelstrudel.","Tarta de moras.","Tafelspitz."],
		Correcta: 1
};
//Question 9
var viePregunta9 = {
		viePregunta: "¿Qué significa la palabra Viena?",
		Respuestas: ["Famosa.","La grande.","Altura.","Colina."],
		Correcta: 0
};
//Question 10
var viePregunta10 = {
		viePregunta: "¿Qué tipo de material se expone en el Kriminalmuseum?",
		Respuestas: ["Deitos cometidos en Viena en los últimos 100 años.","Obras de más de un millón de dólares.","Vestidos de alta costura.","La historia de la música de la ciudad."],
		Correcta: 0
};
//Question 11 
var viePregunta11 = {
		viePregunta: "¿Cuánta gente visita por año el Palacio Schönbrunn?",
		Respuestas: ["7 millones de visitantes.","1 millones de visitantes.","3 millones de visitantes.","500.000 visitantes."],
		Correcta: 0
};
//Question 12
var viePregunta12 = {
		viePregunta: "¿Qué estilo es el Ayuntamiento de Viena?",
		Respuestas: ["Romántico.","Clásico.","Neogótico.","Gótico."],
		Correcta: 2
};
//Question 13 
var viePregunta13 = {
		viePregunta: "¿Qué famoso psicoanalista nació en Viena?",
		Respuestas: ["Jacques Lacan.","Carl Jung.","Sigmund Freud.","Abraham Maslow."],
		Correcta: 2
};
//Question 14 
var viePregunta14 = {
		viePregunta: "¿Cuál es la moneda oficial de Austria?",
		Respuestas: ["El Dólar.","El EURO.","La Libra.","El Rublo."],
		Correcta: 1
};
//Question 15 
var viePregunta15 = {
		viePregunta: "¿Cuál  de estas obras se encuentra en el Museo de Historia del Arte de Viena?",
		Respuestas: ["Virgen del Prado de Rafael.","La Gioconda de Leonardo.","Guernica de Picasso.","Ronda Nocturna de Rembrandt."],
		Correcta: 0
};
//
//Function .random that randomize the question to display and returns the data in this. js
Vienna.generarPregunta = function(){
	//Generate 
	var random = Math.floor(Math.random()*10) % 15;
	switch(random){
	//Question 1.
	case 0:
		Vienna.enunciado = viePregunta1.viePregunta;
		for(var i = 0; i < 4; i++){
			Vienna.resps[i] = viePregunta1.Respuestas[i];
		}
		Vienna.respC = viePregunta1.Correcta;
		break;
	//Question 2.
	case 1:
		Vienna.enunciado = viePregunta2.viePregunta;
		for(var i = 0; i < 4; i++){
			Vienna.resps[i] = viePregunta2.Respuestas[i];			
		}
		Vienna.respC = viePregunta2.Correcta;
		break;
	//Question 3.
	case 2:
		Vienna.enunciado = viePregunta3.viePregunta;
		for(var i = 0; i < 4; i++){
			Vienna.resps[i] = viePregunta3.Respuestas[i];			
		}
		Vienna.respC = viePregunta3.Correcta;
		break;				
	//Question 4.
	case 3:
		Vienna.enunciado = viePregunta4.viePregunta;
		for(var i = 0; i < 4; i++){
			Vienna.resps[i] = viePregunta4.Respuestas[i];			
		}
		Vienna.respC = viePregunta4.Correcta;
		break;	
	//Question 5.
	case 4:
		Vienna.enunciado = viePregunta5.viePregunta;
		for(var i = 0; i < 4; i++){
			Vienna.resps[i] = viePregunta5.Respuestas[i];			
		}
		Vienna.respC = viePregunta5.Correcta;
		break;
	//Question 6.
	case 5:
		Vienna.enunciado = viePregunta6.viePregunta;
		for(var i = 0; i < 4; i++){
			Vienna.resps[i] = viePregunta6.Respuestas[i];			
		}
		Vienna.respC = viePregunta6.Correcta;
		break;
	//Question 7.
	case 6:
		Vienna.enunciado = viePregunta7.viePregunta;
		for(var i = 0; i < 4; i++){
			Vienna.resps[i] = viePregunta7.Respuestas[i];			
		}
		Vienna.respC = viePregunta7.Correcta;
		break;
	//Question 8.
	case 7:
		Vienna.enunciado = viePregunta8.viePregunta;
		for(var i = 0; i < 4; i++){
			Vienna.resps[i] = viePregunta8.Respuestas[i];			
		}
	Vienna.respC = viePregunta8.Correcta;
	break;
	//Question 9.
	case 8:
		Vienna.enunciado = viePregunta9.viePregunta;
		for(var i = 0; i < 4; i++){
			Vienna.resps[i] = viePregunta9.Respuestas[i];			
		}
	Vienna.respC = viePregunta9.Correcta;
	break;
	//Question 10.
	case 9:
		Vienna.enunciado = viePregunta10.viePregunta;
		for(var i = 0; i < 4; i++){
			Vienna.resps[i] = viePregunta10.Respuestas[i];			
		}
	Vienna.respC = viePregunta10.Correcta;
	break;
	//Question 11.
	case 10:
		Vienna.enunciado = viePregunta11.viePregunta;
		for(var i = 0; i < 4; i++){
			Vienna.resps[i] = viePregunta11.Respuestas[i];			
		}
	Vienna.respC = viePregunta11.Correcta;
	break;
	//Question 12.
	case 11:
		Vienna.enunciado = viePregunta12.viePregunta;
		for(var i = 0; i < 4; i++){
			Vienna.resps[i] = viePregunta12.Respuestas[i];			
		}
	Vienna.respC = viePregunta12.Correcta;
	break;
	//Question 13.
	case 12:
		Vienna.enunciado = viePregunta13.viePregunta;
		for(var i = 0; i < 4; i++){
			Vienna.resps[i] = viePregunta13.Respuestas[i];			
		}
	Vienna.respC = viePregunta13.Correcta;
	break;
	//Question 14.
	case 13:
		Vienna.enunciado = viePregunta14.viePregunta;
		for(var i = 0; i < 4; i++){
			Vienna.resps[i] = viePregunta14.Respuestas[i];			
		}
	Vienna.respC = viePregunta14.Correcta;
	break;
	//Question 15.
	case 14:
		Vienna.enunciado = viePregunta15.viePregunta;
		for(var i = 0; i < 4; i++){
			Vienna.resps[i] = viePregunta15.Respuestas[i];			
		}
	Vienna.respC = viePregunta15.Correcta;
	break;
	};
};