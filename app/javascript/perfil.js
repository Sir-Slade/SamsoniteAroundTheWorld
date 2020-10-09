
var perfil = {		
}

	var NUMPERFILES = 18;
	var qs = parent.document.URL.charAt(parent.document.URL.length -1);
	var numJugadores = parseInt(qs);
	var idJugador = 0;
	var avatares = new Array(numJugadores);
	var ordenTurnos = new Array(numJugadores);
	perfil.onLoad = function(){
		alert(numJugadores); 
		   widgetAPI.sendReadyEvent(); // Sends ready message to Application Manager
		   document.getElementById("anchor").focus(); // Sets focus on Anchor for handling key inputs
		   // from the remote control
	}
	
	perfil.regresarJugadores = function() {
		return numJugadores;
	}
	
	perfil.regresarArreglo = function(){
		return avatares;
	}
	
	perfil.sort = function(){
		var i, j, aux1, aux2;
        for(i =0;i<ordenTurnos.length-1;i++)
             for(j=0;j<ordenTurnos.length-i-1;j++)
                  if(ordenTurnos[j+1]<ordenTurnos[j]){
                     aux1=ordenTurnos[j+1];
                     ordenTurnos[j+1]=ordenTurnos[j];
                     ordenTurnos[j]=aux1;
                     aux2=avatares[j+1];
                     avatares[j+1]=avatares[j];
                     avatares[j]=aux2;
                  }
	}
	
	perfil.selectHandler = function(){
		avatares[idJugador] = "app/img/Perfiles/" + apuntadorOpcion + ".png";
		ordenTurnos[idJugador] = Math.floor(Math.random()*10) % 6;//Para decidir turnos
		if(idJugador<(numJugadores - 1)){
			idJugador++;
			alert(idJugador);
		}else{
			apuntadorOpcion = 0;
			perfil.sort();
			var k;
			alert("Ya terminó");
			var url = "mapa.html?orden=" + numJugadores + ",";
			alert("Aca voy 1");
			for(k = 0; k<numJugadores-1; k++){
				alert(ordenTurnos[k]);
				url = url +avatares[k]+",";
				alert("Aca voy 1" + k);
			}
			url = url + avatares[k];
			alert(url);
			window.open(url,'_self');
		}
	}
	
	perfil.update = function(){
		var ruta = "app/img/Perfiles/";
		document.getElementById('mainP').setAttribute('src', 
				ruta + apuntadorOpcion +".png");
	}
	
	perfil.keyDown = function(){ // Key handler
		   var keyCode = event.keyCode; 
		   alert("Main Key code : " + keyCode); 
		   switch (keyCode) { 
			   case tvKey.KEY_RIGHT:
				   apuntadorOpcion++;
					if (apuntadorOpcion>NUMPERFILES-1){
						apuntadorOpcion = 0;
					}
				   break;
			   case tvKey.KEY_LEFT:
				   apuntadorOpcion--;
					if (apuntadorOpcion<0){
						apuntadorOpcion = NUMPERFILES-1;
					}
				   break;
		      case tvKey.KEY_ENTER:
		    	  perfil.selectHandler();
		    	  break; 
		      case tvKey.KEY_RETURN:
		    	  break; 
		      default:
		    	  break;
		   } 
		   perfil.update();
		 
};