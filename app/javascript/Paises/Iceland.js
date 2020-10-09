//ICELAND.
// Create an array that contains the statement and questions.
var Iceland = {
		enunciado:"",
		resps: new Array(),
		respC:-1,
};
// Question 1
var icePregunta1 = {
		icePregunta: "¿Qué popular insecto no existe en Islandia?",
		Respuestas: ["Las cucarachas.","Las hormigas.","Las moscas.","Los grillos."],
		Correcta: 1
};
// Question 2
var icePregunta2 = {
		icePregunta: "¿Qué cantidad de volcanes posee Islandia?",
		Respuestas: ["200 volcanes.","50 volcanes.","2 volcanes.","1500 volcanes."],
		Correcta: 0
};
//Question 3
var icePregunta3 = {	
		icePregunta: "¿Cuál es la capital de Islandia?",
		Respuestas: ["Selfoss.","Reykiavik.","Hafnarfjörður."," Vestmannaeyjar."],
		Correcta: 1
};
//Question 4
var icePregunta4 = {
		icePregunta: "¿Qué cantidad de horas de luz hay durante el verano?",
		Respuestas: ["4  horas de luz.","24 horas de luz.","10 horas de luz.","3 horas de luz."],
		Correcta: 1
};
//Question 5
var icePregunta5 = {
		icePregunta: "¿Qué son los géiser, tan famosos en Islandia?",
		Respuestas: ["Un tipo especial de fuente termal.","Un tipo de montaña muy baja.","Una especie de volcán.","Un lago artificial."],
		Correcta: 0
};
//Question 6 
var icePregunta6 = {
		icePregunta: "¿Qué significa la palabra 'Islandia'?",
		Respuestas: ["Tierra de hielo.","Tierra insular.","Tierra fría.","Tierra de solitarios."],
		Correcta: 0
};
//Question 7
var icePregunta7 = {
		icePregunta: "¿Cómo se llama la gran fiesta de los bares en Reykiavik?",
		Respuestas: ["Runtur.","Géiser.","Rutkuy.","Kiyagak."],
		Correcta: 0
};
//Question 8
var icePregunta8 = {
		icePregunta: "¿Cuál es el clima predominante en Islandia?",
		Respuestas: ["Ecuatorial.","De montaña.","Semidesértico.","Subpolar Oceánico."],
		Correcta: 3
};
//Question 9
var icePregunta9 = {
		icePregunta: "¿Qué es el Eyjafjallajökull?",
		Respuestas: ["Una banda popular islandesa.","Un glaciar islandés.","Una calle del centro de Reykiavik.","Un plato típico."],
		Correcta: 1
};
//Question 10
var icePregunta10 = {
		icePregunta: "¿En qué ciudad nació la popular cantante islandesa Björk?",
		Respuestas: ["Ísafjörður.","Reykiavik.","Njarðvík.","Sauðárkrókur."],
		Correcta: 1
};
//Question 11 
var icePregunta11 = {
		icePregunta: "¿En qué año Islandia legalizó el matrimonio gay?",
		Respuestas: ["2010.","1980.","1996.","2003."],
		Correcta: 2
};
//Question 12
var icePregunta12 = {
		icePregunta: "Islandia es el sistema democrático más antiguo del mundo.  ¿Cuánto hace que son una democracia?",
		Respuestas: ["1000 años.","200 años.","2000 años.","154 años."],
		Correcta: 2
};
//Question 13 
var icePregunta13 = {
		icePregunta: "¿En qué fecha es el Día Nacional de Islandia?",
		Respuestas: ["17 de junio.","31 de julio.","2 de enero.","15 de febrero."],
		Correcta: 0
};
//Question 14 
var icePregunta14 = {
		icePregunta: "¿En qué año se abolieron las Fuerzas Armadas de Islandia?",
		Respuestas: ["En el siglo  XX.","En el siglo  XIII.","En el siglo XVIII.","En el siglo V."],
		Correcta: 1
};
//Question 15 
var icePregunta15 = {
		icePregunta: "¿Hasta que año estuvo prohibida la cerveza en Islandia?",
		Respuestas: ["Hasta 1990.","Hasta 1961.","Hasta 1989.","Hasta 1800."],
		Correcta: 0
};
//
Iceland.generarPregunta = function(){
	//Generate 
	var random = Math.floor(Math.random()*10) % 15;
	switch(random){
	//Question 1.
	case 0:
		Iceland.enunciado = icePregunta1.icePregunta;
		for(var i = 0; i < 4; i++){
			Iceland.resps[i] = icePregunta1.Respuestas[i];
		}
		Iceland.respC = icePregunta1.Correcta;
		break;
	//Question 2.
	case 1:
		Iceland.enunciado = icePregunta2.icePregunta;
		for(var i = 0; i < 4; i++){
			Iceland.resps[i] = icePregunta2.Respuestas[i];			
		}
		Iceland.respC = icePregunta2.Correcta;
		break;
	//Question 3.
	case 2:
		Iceland.enunciado = icePregunta3.icePregunta;
		for(var i = 0; i < 4; i++){
			Iceland.resps[i] = icePregunta3.Respuestas[i];			
		}
		Iceland.respC = icePregunta3.Correcta;
		break;				
	//Question 4.
	case 3:
		Iceland.enunciado = icePregunta4.icePregunta;
		for(var i = 0; i < 4; i++){
			Iceland.resps[i] = icePregunta4.Respuestas[i];			
		}
		Iceland.respC = icePregunta4.Correcta;
		break;	
	//Question 5.
	case 4:
		Iceland.enunciado = icePregunta5.icePregunta;
		for(var i = 0; i < 4; i++){
			Iceland.resps[i] = icePregunta5.Respuestas[i];			
		}
		Iceland.respC = icePregunta5.Correcta;
		break;
	//Question 6.
	case 5:
		Iceland.enunciado = icePregunta6.icePregunta;
		for(var i = 0; i < 4; i++){
			Iceland.resps[i] = icePregunta6.Respuestas[i];			
		}
		Iceland.respC = icePregunta6.Correcta;
		break;
	//Question 7.
	case 6:
		Iceland.enunciado = icePregunta7.icePregunta;
		for(var i = 0; i < 4; i++){
			Iceland.resps[i] = icePregunta7.Respuestas[i];			
		}
		Iceland.respC = icePregunta7.Correcta;
		break;
	//Question 8.
	case 7:
		Iceland.enunciado = icePregunta8.icePregunta;
		for(var i = 0; i < 4; i++){
			Iceland.resps[i] = icePregunta8.Respuestas[i];			
		}
	Iceland.respC = icePregunta8.Correcta;
	break;
	//Question 9.
	case 8:
		Iceland.enunciado = icePregunta9.icePregunta;
		for(var i = 0; i < 4; i++){
			Iceland.resps[i] = icePregunta9.Respuestas[i];			
		}
	Iceland.respC = icePregunta9.Correcta;
	break;
	//Question 10.
	case 9:
		Iceland.enunciado = icePregunta10.icePregunta;
		for(var i = 0; i < 4; i++){
			Iceland.resps[i] = icePregunta10.Respuestas[i];			
		}
	Iceland.respC = icePregunta10.Correcta;
	break;
	//Question 11.
	case 10:
		Iceland.enunciado = icePregunta11.icePregunta;
		for(var i = 0; i < 4; i++){
			Iceland.resps[i] = icePregunta11.Respuestas[i];			
		}
	Iceland.respC = icePregunta11.Correcta;
	break;
	//Question 12.
	case 11:
		Iceland.enunciado = icePregunta12.icePregunta;
		for(var i = 0; i < 4; i++){
			Iceland.resps[i] = icePregunta12.Respuestas[i];			
		}
	Iceland.respC = icePregunta12.Correcta;
	break;
	//Question 13.
	case 12:
		Iceland.enunciado = icePregunta13.icePregunta;
		for(var i = 0; i < 4; i++){
			Iceland.resps[i] = icePregunta13.Respuestas[i];			
		}
	Iceland.respC = icePregunta13.Correcta;
	break;
	//Question 14.
	case 13:
		Iceland.enunciado = icePregunta14.icePregunta;
		for(var i = 0; i < 4; i++){
			Iceland.resps[i] = icePregunta14.Respuestas[i];			
		}
	Iceland.respC = icePregunta14.Correcta;
	break;
	//Question 15.
	case 14:
		Iceland.enunciado = icePregunta15.icePregunta;
		for(var i = 0; i < 4; i++){
			Iceland.resps[i] = icePregunta15.Respuestas[i];			
		}
	Iceland.respC = icePregunta15.Correcta;
	break;
	};
};
