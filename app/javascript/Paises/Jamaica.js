//JAMAICA
// Create an array that contains the statement and questions.
var Jamaica = {
		enunciado:"",
		resps: new Array(),
		respC:-1,
};
// Question 1
var jamPregunta1 = {
		jamPregunta: "Antes de ser colonia británica ¿cuál era el nombre de Jamaica?",
		Respuestas: ["Damian.","Santiago.","Diego.","Sebastián."],
		Correcta: 1
};
// Question 2
var jamPregunta2 = {
		jamPregunta: "¿Cuál es, hoy en día, el deportista más conocido de ese país?",
		Respuestas: ["Erick Cantoná.","Percy Montgomery.","Diego Maradona.","Usain Bolt."],
		Correcta: 3
};
//Question 3
var jamPregunta3 = {	
		jamPregunta: "¿Qué significa Jamaica en en lengua indígena?",
		Respuestas: ["Tierra de la madera y el agua.","Lugar rodeado del mar.","Lugar de plata silvestre.","Tierra de las aves y sol."],
		Correcta: 0
};
//Question 4
var jamPregunta4 = {
		jamPregunta: "¿Cuál es el estilo musical que se originó en Jamaica?",
		Respuestas: ["Trash.","Rock.","Reggae.","Jazz."],
		Correcta: 2
};
//Question 5
var jamPregunta5 = {
		jamPregunta: "¿Cuál es el plato típico nacional?",
		Respuestas: ["El salmón.","El bacalao.","El caviar.","La carne vacuna."],
		Correcta: 1
};
//Question 6 
var jamPregunta6 = {
		jamPregunta: "¿Cuál era el verdadero nombre de Bob Marley?",
		Respuestas: ["Robert Booker Smith.","Robert Nesta Marley Booker.","James Nesta Marley Thompson.","Marley Stan Booker."],
		Correcta: 1
};
//Question 7
var jamPregunta7 = {
		jamPregunta: "¿En qué ciudad se encuentra el Bob Marley Museum?",
		Respuestas: ["Port Royal.","Montego Bay.","Duncans.","Kingston."],
		Correcta: 3
};
//Question 8
var jamPregunta8 = {
		jamPregunta: "¿En qué ciudad se encuentra el aeropuerto Sir Donald Sangster International?",
		Respuestas: ["Port Maria.","Montego Bay.","Duncans.","Ewarton."],
		Correcta: 1
};
//Question 9
var jamPregunta9 = {
		jamPregunta: "¿Cuál es la religión predominante en Jamaica?",
		Respuestas: ["Iglesia Unida.","Bethren.","Metodistas.","Cristiana."],
		Correcta: 3
};
//Question 10
var jamPregunta10 = {
		jamPregunta: "¿Cuál es el tipo de clima que posee Jamaica?",
		Respuestas: ["Oceánico.","Mediterráneo.","Ecuatorial.","Tropical."],
		Correcta: 3
};
//Question 11 
var jamPregunta11 = {
		jamPregunta: "¿Cuál es la marca del más famoso café jamaiquino?",
		Respuestas: ["Jamaican Coffee International.","Jamaican Coffee.","Jamaican Blue Mountain Coffee.","Jamaican Red Mountain Coffee."],
		Correcta: 2
};
//Question 12
var jamPregunta12 = {
		jamPregunta: "¿Cuál es la moneda oficial?",
		Respuestas: ["El Peso del Caribe.","El Dólar Jamaiquino.","El Peso Jamaiquino.","El Jamaiquis."],
		Correcta: 1
};
//Question 13 
var jamPregunta13 = {
		jamPregunta: "¿Cómo se llama la Primer Ministra?",
		Respuestas: ["Portia Simpson-Miller.","Alison Miller-Towers.","Daphne Miller Marley.","Alexandra Monton Rees."],
		Correcta: 0
};
//Question 14 
var jamPregunta14 = {
		jamPregunta: "¿Sobre qué mar está la isla de Jamaica?",
		Respuestas: ["Sobre el Mar de México.","Sobre el Mar Caribe.","Sobre el Mar Caspio.","Sobre el Mar de Jamaica."],
		Correcta: 1
};
//Question 15 
var jamPregunta15 = {
		jamPregunta: "¿A qué grupo de islas pertenece Jamaica?",
		Respuestas: ["Antillas Menores.","Antillas Mayores.","Islas Marquesas.","Archipiélago Catherine."],
		Correcta: 1
};
//
//Function .random that randomize the question to display and returns the data in this. js
Jamaica.generarPregunta = function(){
	//Generate 
	var random = Math.floor(Math.random()*10) % 15;
	switch(random){
	//Question 1.
	case 0:
		Jamaica.enunciado = jamPregunta1.jamPregunta;
		for(var i = 0; i < 4; i++){
			Jamaica.resps[i] = jamPregunta1.Respuestas[i];
		}
		Jamaica.respC = jamPregunta1.Correcta;
		break;
	//Question 2.
	case 1:
		Jamaica.enunciado = jamPregunta2.jamPregunta;
		for(var i = 0; i < 4; i++){
			Jamaica.resps[i] = jamPregunta2.Respuestas[i];			
		}
		Jamaica.respC = jamPregunta2.Correcta;
		break;
	//Question 3.
	case 2:
		Jamaica.enunciado = jamPregunta3.jamPregunta;
		for(var i = 0; i < 4; i++){
			Jamaica.resps[i] = jamPregunta3.Respuestas[i];			
		}
		Jamaica.respC = jamPregunta3.Correcta;
		break;				
	//Question 4.
	case 3:
		Jamaica.enunciado = jamPregunta4.jamPregunta;
		for(var i = 0; i < 4; i++){
			Jamaica.resps[i] = jamPregunta4.Respuestas[i];			
		}
		Jamaica.respC = jamPregunta4.Correcta;
		break;	
	//Question 5.
	case 4:
		Jamaica.enunciado = jamPregunta5.jamPregunta;
		for(var i = 0; i < 4; i++){
			Jamaica.resps[i] = jamPregunta5.Respuestas[i];			
		}
		Jamaica.respC = jamPregunta5.Correcta;
		break;
	//Question 6.
	case 5:
		Jamaica.enunciado = jamPregunta6.jamPregunta;
		for(var i = 0; i < 4; i++){
			Jamaica.resps[i] = jamPregunta6.Respuestas[i];			
		}
		Jamaica.respC = jamPregunta6.Correcta;
		break;
	//Question 7.
	case 6:
		Jamaica.enunciado = jamPregunta7.jamPregunta;
		for(var i = 0; i < 4; i++){
			Jamaica.resps[i] = jamPregunta7.Respuestas[i];			
		}
		Jamaica.respC = jamPregunta7.Correcta;
		break;
	//Question 8.
	case 7:
		Jamaica.enunciado = jamPregunta8.jamPregunta;
		for(var i = 0; i < 4; i++){
			Jamaica.resps[i] = jamPregunta8.Respuestas[i];			
		}
	Jamaica.respC = jamPregunta8.Correcta;
	break;
	//Question 9.
	case 8:
		Jamaica.enunciado = jamPregunta9.jamPregunta;
		for(var i = 0; i < 4; i++){
			Jamaica.resps[i] = jamPregunta9.Respuestas[i];			
		}
	Jamaica.respC = jamPregunta9.Correcta;
	break;
	//Question 10.
	case 9:
		Jamaica.enunciado = jamPregunta10.jamPregunta;
		for(var i = 0; i < 4; i++){
			Jamaica.resps[i] = jamPregunta10.Respuestas[i];			
		}
	Jamaica.respC = jamPregunta10.Correcta;
	break;
	//Question 11.
	case 10:
		Jamaica.enunciado = jamPregunta11.jamPregunta;
		for(var i = 0; i < 4; i++){
			Jamaica.resps[i] = jamPregunta11.Respuestas[i];			
		}
	Jamaica.respC = jamPregunta11.Correcta;
	break;
	//Question 12.
	case 11:
		Jamaica.enunciado = jamPregunta12.jamPregunta;
		for(var i = 0; i < 4; i++){
			Jamaica.resps[i] = jamPregunta12.Respuestas[i];			
		}
	Jamaica.respC = jamPregunta12.Correcta;
	break;
	//Question 13.
	case 12:
		Jamaica.enunciado = jamPregunta13.jamPregunta;
		for(var i = 0; i < 4; i++){
			Jamaica.resps[i] = jamPregunta13.Respuestas[i];			
		}
	Jamaica.respC = jamPregunta13.Correcta;
	break;
	//Question 14.
	case 13:
		Jamaica.enunciado = jamPregunta14.jamPregunta;
		for(var i = 0; i < 4; i++){
			Jamaica.resps[i] = jamPregunta14.Respuestas[i];			
		}
	Jamaica.respC = jamPregunta14.Correcta;
	break;
	//Question 15.
	case 14:
		Jamaica.enunciado = jamPregunta15.jamPregunta;
		for(var i = 0; i < 4; i++){
			Jamaica.resps[i] = jamPregunta15.Respuestas[i];			
		}
	Jamaica.respC = jamPregunta15.Correcta;
	break;
	};
};