//Travel Traps.
//
//Create an array that contains the trap to show.
var Trampa = {
		enunciado:""
};
//
//Array that contains all the travel traps.
var trampas = [
		"Se te poncha una llanta, pierdes dos turnos por cambiarla.",
		"Tu pasaporte no paso migración.",
		"El sol estaba tan fuerte que tu bloqueador nos sirvió. Por insolarte pierdes 2 turnos.",
		"Tu Visa expiró, pierdes 2 turnos para poder renovarla.",
		"Comiste una comida exótica y te enfermaste del estomago. Pierdes 2 turnos", 
		"Los mosquitos te picaron por no llevar repelente.",
		"Alguien por equivocación se llevo tu maleta.",
		"Al rentar un coche en el aeropuerto te dieron otro distinto al que pediste.",
		"Te confundiste de Gate y te tocó recorrer todo el aeropuerto, por lo tanto perdiste el vuelo.",
		"Un ladrón se llevo tu billetera. Tendrás que pedir un giro bancario que te tomará 2 turnos.", 
		"Tu cuarto de hotel tiene una fuga. Esperar el cambio de cuarto te tomará 2 turnos.", 
		"Tu vuelo estuvo lleno de turbulencia y tuviste mareos. Para recuperarte necesitas 2 turnos.", 
		"El bebé del asiento de al lado no te dejó dormir.  Pierdes 2 turnos por quedarte dormido en el hotel.", 
		"Hay una fuga de agua en tu habitación de hotel. Pierdes 2 turnos en lo que se arregla la fuga.", 
		"Te toco un cuarto en donde el ruido entra por todos lados y no puedes descansar. Pierdes 2 turnos.", 
		"La regadera de tu cuarto de hotel no tiene agua caliente, tendrás que buscar otro hotel y pierdes 2 turnos.", 
		"El aire acondicionado de tu auto no sirve. Repararlo te toma 2 turnos.", 
		"Te quedaste varado en medio de la nada y no tienes un teléfono para pedir ayuda.  Tardas 2 turnos en comunicarte.", 
		"No entiendes el idioma local por lo que todo te toma más tiempo. Pierdes dos turnos.", 
		"Quieres ir a un lugar elegante y no traes la ropa adecuada. Pierdes 2 turnos por ir a buscarla.",
		"Olvidaste empacar tu ropa interior, tienes que ir de compras para solucionarlo.", 
		"Se cancelo tu tour por la ciudad, tienes que esperar 2 turnos al siguiente disponible.", 
		"Llovió el día que visitaste el parque arqueológico, tendrás que esperar 2 turnos para regresar otro día.", 
		"Tu cámara se mojó y perdiste todas tus fotos, pierdes 2 turnos por tratar de recuperarla.", 
		"Perdiste tu celular, pierdes 2 turnos para conseguir un nuevo medio de comunicación.", 
		"No desbloqueaste tu tarjeta de crédito, pierdes 2 turnos en solucionarlo con el banco.", 
		"Olvidaste vacunarte contra la fiebre amarilla, pierdes 2 turnos por enfermarte.", 
		"Excediste el peso de tu equipaje y te tocó pagar más, por lo que pierdes 2 turnos.", 
		"Te detuvieron en aduana por llevar el encendedor que te regaló tu abuelo. Pierdes 2 turnos.", 
		"Olvidaste mencionar en aduana que llevabas cosas que habías comprado, pierdes 2 turnos para pagar impuestos.", 
		"Te perdiste en un barrio peligroso de la ciudad, pierdes 2 turnos para pedir indicaciones.", 
		"Se te derramo dentro de la maleta la botella que compraste en el aeropuerto, pierdes 2 turnos para limpiar todo.", 
		"Te torciste el tobillo en una caminata y tu seguro de viajero no estaba activado, pierdes 2 turnos en el hospital  público.", 
		"Te equivocaste de autobús y terminaste en una convención de matemáticas, pierdes 2 turnos para regresar al hotel.", 
		"Cancelaron la reservación de tu hotel, pierdes 2 turnos para conseguir una nueva.", 
		"Gracias a tu jetlag, no pudiste disfrutar el viaje. Pierdes 2 turnos para dormir una siesta.", 
		"Te peleaste con tu compañero/a de viaje. Pierdes 2 turnos en la reconciliación.", 
		"Eres homónimo de uno de los más buscado de la Interpol, por lo tanto no te dejan subir al avión hasta comprobar tu identidad, lo que te toma 2 turnos.", 
		"Te quedaste sin dinero, por lo que tienes que pedir dinero para el autobús durante 2 turnos.",
		"La aerolínea perdió tu equipaje, tardan 2 turnos en regresártelas."
]
//
//Function .random that randomize the trap to display and returns the data in this. js
Trampa.generarTrampa = function(){
	var random = Math.floor(Math.random()*40);
	Trampa.enunciado = trampas[random];
}