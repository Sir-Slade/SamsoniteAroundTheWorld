var widgetAPI = new Common.API.Widget();
var tvKey = new Common.API.TVKeyValue();
var apuntadorPantallas = 0;


var mapa =
{

};

var nj;
var arreglo;
mapa.onLoad = function()
{
	// Enable key event processing
	this.enableKeys();
	widgetAPI.sendReadyEvent();
	var qs = parent.document.URL.substring(parent.document.URL.indexOf('='), parent.document.URL.length);
	var aux = qs.split(',');
	aux[0] = aux[0].replace("=","");
	nj = parseInt(aux[0]);
	alert(aux[0]);
	arreglo = new Array(aux.length-1);
	alert("NumJug = " + nj);
	for(var i = 0; i< aux.length-1; i++){
		arreglo[i]= aux[i+1];
		alert(arreglo[i]);
	}
	alert(parent.document.URL);
	playersLoad(nj, arreglo);
};

mapa.onUnload = function()
{

};

mapa.enableKeys = function()
{
	document.getElementById("anchor").focus();
};

mapa.keyDown = function()
{
	var keyCode = event.keyCode;
	alert("Key pressed: " + keyCode);
	if (apuntadorPantallas == 0)
		{
		switch(keyCode)
		{
			case tvKey.KEY_RETURN:
			case tvKey.KEY_PANEL_RETURN:
				alert("RETURN");
				widgetAPI.sendReturnEvent();
				break;
			case tvKey.KEY_LEFT:
				alert("LEFT");
				break;
			case tvKey.KEY_RIGHT:
				alert("RIGHT");
				break;
			case tvKey.KEY_UP:
				alert("UP");
				break;
			case tvKey.KEY_DOWN:
				alert("DOWN");
				break;
			case tvKey.KEY_ENTER:
			case tvKey.KEY_PANEL_ENTER:
				alert("ENTER");
				break;
			case 108:
				players();
				break;
			default:
				alert("Unhandled key");
				break;
		}
		}
	else
		{
			questionScript.keyDown();
		}
	
};
