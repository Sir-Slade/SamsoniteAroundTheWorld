var p1,p2,p3,p4;
var cor;
var dado;
var jug;
var pI1,pI2,pI3,pI4;
function playersLoad(nj, arreglo)
{
	jug = nj;
	p1=0;
	p2=0;
	p3=0;
	p4=0;
	for(var i = 0; i<nj; i++){
		document.getElementById("i"+(i+1)).setAttribute('src', arreglo[i]);
	}
	
	if(jug == 1)
	{
		document.getElementById("i1").style.display = '';
		document.getElementById("i2").style.display = 'none';
		document.getElementById("i3").style.display = 'none';
		document.getElementById("i4").style.display = 'none';
	}
	if(jug == 2)
	{
		document.getElementById("i1").style.display = '';
		document.getElementById("i2").style.display = '';
		document.getElementById("i3").style.display = 'none';
		document.getElementById("i4").style.display = 'none';
	}
	if(jug == 3)
	{	
		document.getElementById("i1").style.display = '';
		document.getElementById("i2").style.display = '';
		document.getElementById("i3").style.display = '';
		document.getElementById("i4").style.display = 'none';
	}
	if(jug == 4)
	{
		document.getElementById("i1").style.display = '';
		document.getElementById("i2").style.display = '';
		document.getElementById("i3").style.display = '';
		document.getElementById("i4").style.display = '';
	}
}

function players()
{
	switch (jug) 
	{
	case 1:
		uno(pI1);
		break;
	case 2:
		dos(pI1,pI2);
		break;
	case 3:
		tres(pI1,pI2,pI3);
		break;
	case 4:
		cuatro(pI1,pI2,pI3,pI4);
		break;
	default:
		break;
	}
}


