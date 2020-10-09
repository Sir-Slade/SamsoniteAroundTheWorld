
var Pais = {
		enunciado:"",
		resps: new Array(),
		respC:-1,
		
}


var pregunta1 = {
		
		Pregunta: "Pregunta1",
		Respuestas: ["Respuesta 1", "Respuesta 2", "Respuesta 3", "Respuesta 4"],
		Correcta: 0
		
}

var pregunta2 = {
		
		Pregunta: "Pregunta2",
		Respuestas: ["Respuesta 1", "Respuesta 2", "Respuesta 3", "Respuesta 4"],
		Correcta: 2
		
}

Pais.generarPregunta = function(){
	
	var random = Math.floor(Math.random()*10) % 2;//El 2 es porque solo hay 2
												//preguntas y no se cuantas sean
	
	switch(random){
	
	case 0:
		Pais.enunciado = pregunta1.Pregunta;
		for(var i = 0; i < 4; i++){
			Pais.resps[i] = pregunta1.Respuestas[i];
			
		}
		Pais.respC = pregunta1.Correcta;
		break;
		
	case 1:
		Pais.enunciado = pregunta2.Pregunta;
		for(var i = 0; i < 4; i++){
			Pais.resps[i] = pregunta2.Respuestas[i];
			
		}
		Pais.respC = pregunta2.Correcta;
		break;
		
	}
	
	
}

