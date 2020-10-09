var turno=1;
var ptsp1=0;
var ptsp2=0;
var ptsp3=0;
var ptsp4=0;
var ptswp1=0;
var ptswp2=0;
var ptswp3=0;
var ptswp4=0;
var casp1=0;
var casp2=0;
var casp3=0;
var casp4=0;
var ban1=1;
var ban2=1;
var ban3=1;
var ban4=1;
var respCas1=0;
var respCas2=0;
var respCas3=0;
var respCas4=0;
var resp;
var corAux;
var cor;
function uno()
{
		turno=2;
		if(p1==0)
			{
				cor=[0,0,160,585,120,585,80,585,40,585];
			}
		
		if(casp1 == 0)
		{
			dado = giroDado();
			p1 += dado ;
		}
		else if (casp1 >= 0)
		{
			casp1 -= 1;
			ban1 -= 1;
		}
	
		if(p1 > 28)
		{
			p1 -= 28;
			ptsp1 += 5;
			ptswp1 += 5;
		}
		document.getElementById("texto").innerHTML= "p1 = "+ p1 + " Dado = " + dado;
		corAux = fp(p1,cor);
		cor[2]= corAux[0];
		cor[3]= corAux[1];
		
	//	Validacion Casillas especiales
		if(p1 == 4 || p1 == 11 || p1 == 18 || p1 == 22 || p1 == 25)
			{
				ptsp1 += 3;
				ptswp1 += 3;
			}
		else if(p1 == 8)
			{
				turno = 1;
			}
		else if(p1 == 14)
			{
				if(respCas1 == 0 && ban1 == 1)
					{
						casp1 = 1;
					}
				else
					{
						ptsp1 -= 5;
						ptswp1 -= 5;
					}
			}	
		document.getElementById("i1").style.left = cor[2]+'px';
		document.getElementById("i1").style.top = cor[3]+'px';
		document.getElementById("i2").style.left = cor[4]+'px';
		document.getElementById("i2").style.top = cor[5]+'px';
		document.getElementById("i3").style.left = cor[6]+'px';
		document.getElementById("i3").style.top = cor[7]+'px';
		document.getElementById("i4").style.left = cor[8]+'px';
		document.getElementById("i4").style.top = cor[9]+'px';
		
	    alert("enter");
	    layout.crearQuestion(p1);
	    apuntadorPantallas = 1;
	    questionScript.enfocar();	    
	    
	    resp = questionScript.getResp();
	    
	    if(resp == 1)
		{
			ptsp4 += 2;
			ptswp4 += 2;
			resp = 0;
		}
	
document.getElementById("texto1").innerHTML=turno + "  "+ resp + " P1 = " + ptsp1 + "P2 = " + ptsp2 + "P3 = " + ptsp3 + "P4 = " + ptsp4;

//Validación Premio
if(ptsp1 >= 10)
	{
	ptsp1 -=10;
	document.getElementById("texto").innerHTML= "P1 = Premio";
	}

//Validación Fin Juego
if(ptswp1 >= 20)
	{
	document.getElementById("texto").innerHTML= "P1 = Ganador";
	ptswp2=0;
	}
}	
			
function dos(pI1,pI2)
{
	if(turno == 1)
	{
		turno=2;
		if(p1==0)
			{
				cor=[0,0,160,585,120,585,80,585,40,585];
			}
		
		if(casp1 == 0)
		{
			dado = giroDado();
			p1 += dado ;
		}
		else if (casp1 >= 0)
		{
			casp1 -= 1;
			ban1 -= 1;
		}
	
		if(p1 > 28)
		{
			p1 -= 28;
			ptsp1 += 5;
			ptswp1 += 5;
		}
		document.getElementById("texto").innerHTML= "p1 = "+ p1 + " Dado = " + dado;
		corAux = fp(p1,cor);
		cor[2]= corAux[0];
		cor[3]= corAux[1];
		
	//	Validacion Casillas especiales
		if(p1 == 4 || p1 == 11 || p1 == 18 || p1 == 22 || p1 == 25)
			{
				ptsp1 += 3;
				ptswp1 += 3;
			}
		else if(p1 == 8)
			{
				turno = 1;
			}
		else if(p1 == 14)
			{
				if(respCas1 == 0 && ban1 == 1)
					{
						casp1 = 1;
					}
				else
					{
						ptsp1 -= 5;
						ptswp1 -= 5;
					}
			}	
		document.getElementById("i1").style.left = cor[2]+'px';
		document.getElementById("i1").style.top = cor[3]+'px';
		document.getElementById("i2").style.left = cor[4]+'px';
		document.getElementById("i2").style.top = cor[5]+'px';
		document.getElementById("i3").style.left = cor[6]+'px';
		document.getElementById("i3").style.top = cor[7]+'px';
		document.getElementById("i4").style.left = cor[8]+'px';
		document.getElementById("i4").style.top = cor[9]+'px';
		
	    alert("enter");
	    layout.crearQuestion(p1);
	    apuntadorPantallas = 1;
	    questionScript.enfocar();	    
	    
	    resp = questionScript.getResp();
	    
	    if(resp == 1)
		{
			ptsp4 += 2;
			ptswp4 += 2;
			resp = 0;
		}
		}

else if(turno == 2 )
	{
		turno=1;
		if(casp2 == 0)
		{
			dado = giroDado();
			p2 += dado ;
		}
		else if (casp2 >= 0)
		{
			casp2 -= 1;
			ban2 -= 1;
		}
	
		if(p2 > 28)
		{
			p2 -= 28;
			ptsp2 += 5;
			ptswp2 += 5;
		}
		document.getElementById("texto").innerHTML= "p2 = "+ p2 + " Dado = " + dado;
		
		
		corAux = fp(p2,cor);
		
		
		if(p2 < 14 || p2 > 22)
			{
			cor[4]= corAux[0]-20;
			cor[5]= corAux[1];
			}
		else
			{
			cor[4]= corAux[0]+20;
			cor[5]= corAux[1];
			}
		
	//	Validacion Casillas especiales
		if(p2 == 4 || p2 == 11 || p2 == 18 || p2 == 22 || p2 == 25)
			{
				ptsp2 += 3;
				ptswp2 += 3;
			}
		else if(p2 == 8)
			{
				turno = 2;
			}
		else if(p2 == 14)
			{
				if(respCas2 == 0 && ban2 == 1)
					{
						casp2 = 1;
					}
				else
					{
						ptsp2 -= 5;
						ptswp2 -= 5;
					}
			}
		
		document.getElementById("i1").style.left = cor[2]+'px';
		document.getElementById("i1").style.top = cor[3]+'px';
		document.getElementById("i2").style.left = cor[4]+'px';
		document.getElementById("i2").style.top = cor[5]+'px';
		document.getElementById("i3").style.left = cor[6]+'px';
		document.getElementById("i3").style.top = cor[7]+'px';
		document.getElementById("i4").style.left = cor[8]+'px';
		document.getElementById("i4").style.top = cor[9]+'px';
	    alert("enter");
	    layout.crearQuestion(p2);
	    apuntadorPantallas = 1;
	    questionScript.enfocar();
	    
	    resp = questionScript.getResp();
	    
	    if(resp == 1)
		{
			ptsp1 += 2;
			ptswp1 += 2;
			resp = 0;
		}
}
	
document.getElementById("texto1").innerHTML=turno + "  "+ resp + " P1 = " + ptsp1 + "P2 = " + ptsp2 + "P3 = " + ptsp3 + "P4 = " + ptsp4;

//Validación Premio
if(ptsp1 >= 10)
	{
	ptsp1 -=10;
	document.getElementById("texto").innerHTML= "P1 = Premio";
	}
else if (ptsp2 >= 10)
	{
	ptsp2 -=10;
	document.getElementById("texto").innerHTML= "P2 = Premio";	
	}


//Validación Fin Juego
if(ptswp1 >= 20)
	{
	document.getElementById("texto").innerHTML= "P1 = Ganador";
	ptswp2=0;
	}
else if (ptswp2 >= 20)
	{
	document.getElementById("texto").innerHTML= "P2 = Ganador";
	ptswp1=0;
	}

}	

function tres(pI1,pI2,pI3)
{
	if(turno == 1)
	{
		turno=2;
		if(p1==0)
			{
				cor=[0,0,160,585,120,585,80,585,40,585];
			}
		
		if(casp1 == 0)
		{
			dado = giroDado();
			p1 += dado ;
		}
		else if (casp1 >= 0)
		{
			casp1 -= 1;
			ban1 -= 1;
		}
	
		if(p1 > 28)
		{
			p1 -= 28;
			ptsp1 += 5;
			ptswp1 += 5;
		}
		document.getElementById("texto").innerHTML= "p1 = "+ p1 + " Dado = " + dado;
		corAux = fp(p1,cor);
		cor[2]= corAux[0];
		cor[3]= corAux[1];
		
	//	Validacion Casillas especiales
		if(p1 == 4 || p1 == 11 || p1 == 18 || p1 == 22 || p1 == 25)
			{
				ptsp1 += 3;
				ptswp1 += 3;
			}
		else if(p1 == 8)
			{
				turno = 1;
			}
		else if(p1 == 14)
			{
				if(respCas1 == 0 && ban1 == 1)
					{
						casp1 = 1;
					}
				else
					{
						ptsp1 -= 5;
						ptswp1 -= 5;
					}
			}	
		document.getElementById("i1").style.left = cor[2]+'px';
		document.getElementById("i1").style.top = cor[3]+'px';
		document.getElementById("i2").style.left = cor[4]+'px';
		document.getElementById("i2").style.top = cor[5]+'px';
		document.getElementById("i3").style.left = cor[6]+'px';
		document.getElementById("i3").style.top = cor[7]+'px';
		document.getElementById("i4").style.left = cor[8]+'px';
		document.getElementById("i4").style.top = cor[9]+'px';
		
	    alert("enter");
	    layout.crearQuestion(p1);
	    apuntadorPantallas = 1;
	    questionScript.enfocar();	    
	    
	    resp = questionScript.getResp();
	    
	    if(resp == 1)
		{
			ptsp4 += 2;
			ptswp4 += 2;
			resp = 0;
		}
		}

else if(turno == 2 )
	{
		turno=3;
		if(casp2 == 0)
		{
			dado = giroDado();
			p2 += dado ;
		}
		else if (casp2 >= 0)
		{
			casp2 -= 1;
			ban2 -= 1;
		}
	
		if(p2 > 28)
		{
			p2 -= 28;
			ptsp2 += 5;
			ptswp2 += 5;
		}
		document.getElementById("texto").innerHTML= "p2 = "+ p2 + " Dado = " + dado;
		
		
		corAux = fp(p2,cor);
		
		
		if(p2 < 14 || p2 > 22)
			{
			cor[4]= corAux[0]-20;
			cor[5]= corAux[1];
			}
		else
			{
			cor[4]= corAux[0]+20;
			cor[5]= corAux[1];
			}
		
	//	Validacion Casillas especiales
		if(p2 == 4 || p2 == 11 || p2 == 18 || p2 == 22 || p2 == 25)
			{
				ptsp2 += 3;
				ptswp2 += 3;
			}
		else if(p2 == 8)
			{
				turno = 2;
			}
		else if(p2 == 14)
			{
				if(respCas2 == 0 && ban2 == 1)
					{
						casp2 = 1;
					}
				else
					{
						ptsp2 -= 5;
						ptswp2 -= 5;
					}
			}
		
		document.getElementById("i1").style.left = cor[2]+'px';
		document.getElementById("i1").style.top = cor[3]+'px';
		document.getElementById("i2").style.left = cor[4]+'px';
		document.getElementById("i2").style.top = cor[5]+'px';
		document.getElementById("i3").style.left = cor[6]+'px';
		document.getElementById("i3").style.top = cor[7]+'px';
		document.getElementById("i4").style.left = cor[8]+'px';
		document.getElementById("i4").style.top = cor[9]+'px';
	    alert("enter");
	    layout.crearQuestion(p2);
	    apuntadorPantallas = 1;
	    questionScript.enfocar();
	    
	    resp = questionScript.getResp();
	    
	    if(resp == 1)
		{
			ptsp1 += 2;
			ptswp1 += 2;
			resp = 0;
		}
}
else if(turno == 3 )
{
	turno=1;
//	Validación Casilla Trampa
	if(casp3 == 0)
	{
		dado = giroDado();
		p3 += dado ;
	}
	else if (casp3 >= 0)
	{
		casp3 -= 1;
		ban3 -= 1;
	}

	if(p3 > 28)
	{
		p3 -= 28;
		ptsp3 += 5;
		ptswp3 += 5;
	}
	document.getElementById("texto").innerHTML= "p3 = "+ p3 + " Dado = " + dado;
	corAux = fp(p3,cor);
	
	if(p3 < 14 || p3 > 22)
	{
		cor[6]= corAux[0]-40;
		cor[7]= corAux[1];
	}
	
//	Validacion Casillas especiales
	if(p3 == 4 || p3 == 11 || p3 == 18 || p3 == 33 || p3 == 25)
		{
			ptsp3 += 3;
			ptswp3 += 3;
		}
	else if(p3 == 8)
		{
			turno = 3;
		}
	else if(p3 == 14)
		{
			if(respCas3 == 0 && ban3 == 1)
				{
					casp3 = 1;
				}
			else
				{
					ptsp3 -= 5;
					ptswp3 -= 5;
				}
		}
	document.getElementById("i1").style.left = cor[2]+'px';
	document.getElementById("i1").style.top = cor[3]+'px';
	document.getElementById("i2").style.left = cor[4]+'px';
	document.getElementById("i2").style.top = cor[5]+'px';
	document.getElementById("i3").style.left = cor[6]+'px';
	document.getElementById("i3").style.top = cor[7]+'px';
	document.getElementById("i4").style.left = cor[8]+'px';
	document.getElementById("i4").style.top = cor[9]+'px';
    alert("enter");
    layout.crearQuestion(p3);
    apuntadorPantallas = 1;
    questionScript.enfocar();
    
    resp = questionScript.getResp();
    
    if(resp == 1)
	{
		ptsp2 += 2;
		ptswp2 += 2;
		resp = 0;
	}
}


document.getElementById("texto1").innerHTML=turno + "  "+ resp + " P1 = " + ptsp1 + "P2 = " + ptsp2 + "P3 = " + ptsp3 + "P4 = " + ptsp4;

//Validación Premio
if(ptsp1 >= 10)
	{
	ptsp1 -=10;
	document.getElementById("texto").innerHTML= "P1 = Premio";
	}
else if (ptsp2 >= 10)
	{
	ptsp2 -=10;
	document.getElementById("texto").innerHTML= "P2 = Premio";	
	}
else if (ptsp3 >= 10)
	{
	ptsp3 -=10;
	document.getElementById("texto").innerHTML= "P3 =Premio";
	}


//Validación Fin Juego
if(ptswp1 >= 20)
	{
	document.getElementById("texto").innerHTML= "P1 = Ganador";
	ptswp2=0;
	ptswp3=0;
	}
else if (ptswp2 >= 20)
	{
	document.getElementById("texto").innerHTML= "P2 = Ganador";
	ptswp1=0;
	ptswp3=0;
	}
else if (ptswp3 >= 20)
	{
	document.getElementById("texto").innerHTML= "P3 = Ganador";
	ptswp1=0;
	ptswp2=0;
	}

}

function cuatro(pI1,pI2,pI3,pI4)
{	
	if(turno == 1)
		{
			turno=2;
			if(p1==0)
				{
					cor=[0,0,160,585,120,585,80,585,40,585];
				}
			
			if(casp1 == 0)
			{
				dado = giroDado();
				p1 += dado ;
			}
			else if (casp1 >= 0)
			{
				casp1 -= 1;
				ban1 -= 1;
			}
		
			if(p1 > 28)
			{
				p1 -= 28;
				ptsp1 += 5;
				ptswp1 += 5;
			}
			document.getElementById("texto").innerHTML= "p1 = "+ p1 + " Dado = " + dado;
			corAux = fp(p1,cor);
			cor[2]= corAux[0];
			cor[3]= corAux[1];
			
		//	Validacion Casillas especiales
			if(p1 == 4 || p1 == 11 || p1 == 18 || p1 == 22 || p1 == 25)
				{
					ptsp1 += 3;
					ptswp1 += 3;
				}
			else if(p1 == 8)
				{
					turno = 1;
				}
			else if(p1 == 14)
				{
					if(respCas1 == 0 && ban1 == 1)
						{
							casp1 = 1;
						}
					else
						{
							ptsp1 -= 5;
							ptswp1 -= 5;
						}
				}	
			document.getElementById("i1").style.left = cor[2]+'px';
			document.getElementById("i1").style.top = cor[3]+'px';
			document.getElementById("i2").style.left = cor[4]+'px';
			document.getElementById("i2").style.top = cor[5]+'px';
			document.getElementById("i3").style.left = cor[6]+'px';
			document.getElementById("i3").style.top = cor[7]+'px';
			document.getElementById("i4").style.left = cor[8]+'px';
			document.getElementById("i4").style.top = cor[9]+'px';
			
		    alert("enter");
		    layout.crearQuestion(p1);
		    apuntadorPantallas = 1;
		    questionScript.enfocar();	    
		    
		    resp = questionScript.getResp();
		    
		    if(resp == 1)
			{
				ptsp4 += 2;
				ptswp4 += 2;
				resp = 0;
			}
			}
	
	else if(turno == 2 )
		{
			turno=3;
			if(casp2 == 0)
			{
				dado = giroDado();
				p2 += dado ;
			}
			else if (casp2 >= 0)
			{
				casp2 -= 1;
				ban2 -= 1;
			}
		
			if(p2 > 28)
			{
				p2 -= 28;
				ptsp2 += 5;
				ptswp2 += 5;
			}
			document.getElementById("texto").innerHTML= "p2 = "+ p2 + " Dado = " + dado;
			
			
			corAux = fp(p2,cor);
			
			
			if(p2 < 14 || p2 > 22)
				{
				cor[4]= corAux[0]-20;
				cor[5]= corAux[1];
				}
			else
				{
				cor[4]= corAux[0]+20;
				cor[5]= corAux[1];
				}
			
		//	Validacion Casillas especiales
			if(p2 == 4 || p2 == 11 || p2 == 18 || p2 == 22 || p2 == 25)
				{
					ptsp2 += 3;
					ptswp2 += 3;
				}
			else if(p2 == 8)
				{
					turno = 2;
				}
			else if(p2 == 14)
				{
					if(respCas2 == 0 && ban2 == 1)
						{
							casp2 = 1;
						}
					else
						{
							ptsp2 -= 5;
							ptswp2 -= 5;
						}
				}
			
			document.getElementById("i1").style.left = cor[2]+'px';
			document.getElementById("i1").style.top = cor[3]+'px';
			document.getElementById("i2").style.left = cor[4]+'px';
			document.getElementById("i2").style.top = cor[5]+'px';
			document.getElementById("i3").style.left = cor[6]+'px';
			document.getElementById("i3").style.top = cor[7]+'px';
			document.getElementById("i4").style.left = cor[8]+'px';
			document.getElementById("i4").style.top = cor[9]+'px';
		    alert("enter");
		    layout.crearQuestion(p2);
		    apuntadorPantallas = 1;
		    questionScript.enfocar();
		    
		    resp = questionScript.getResp();
		    
		    if(resp == 1)
			{
				ptsp1 += 2;
				ptswp1 += 2;
				resp = 0;
			}
	}
	else if(turno == 3 )
	{
		turno=4;
//		Validación Casilla Trampa
		if(casp3 == 0)
		{
			dado = giroDado();
			p3 += dado ;
		}
		else if (casp3 >= 0)
		{
			casp3 -= 1;
			ban3 -= 1;
		}
	
		if(p3 > 28)
		{
			p3 -= 28;
			ptsp3 += 5;
			ptswp3 += 5;
		}
		document.getElementById("texto").innerHTML= "p3 = "+ p3 + " Dado = " + dado;
		corAux = fp(p3,cor);
		
		if(p3 < 14 || p3 > 22)
		{
			cor[6]= corAux[0]-40;
			cor[7]= corAux[1];
		}
		
	//	Validacion Casillas especiales
		if(p3 == 4 || p3 == 11 || p3 == 18 || p3 == 33 || p3 == 25)
			{
				ptsp3 += 3;
				ptswp3 += 3;
			}
		else if(p3 == 8)
			{
				turno = 3;
			}
		else if(p3 == 14)
			{
				if(respCas3 == 0 && ban3 == 1)
					{
						casp3 = 1;
					}
				else
					{
						ptsp3 -= 5;
						ptswp3 -= 5;
					}
			}
		document.getElementById("i1").style.left = cor[2]+'px';
		document.getElementById("i1").style.top = cor[3]+'px';
		document.getElementById("i2").style.left = cor[4]+'px';
		document.getElementById("i2").style.top = cor[5]+'px';
		document.getElementById("i3").style.left = cor[6]+'px';
		document.getElementById("i3").style.top = cor[7]+'px';
		document.getElementById("i4").style.left = cor[8]+'px';
		document.getElementById("i4").style.top = cor[9]+'px';
	    alert("enter");
	    layout.crearQuestion(p3);
	    apuntadorPantallas = 1;
	    questionScript.enfocar();
	    
	    resp = questionScript.getResp();
	    
	    if(resp == 1)
		{
			ptsp2 += 2;
			ptswp2 += 2;
			resp = 0;
		}
	}
	else if(turno == 4 )
	{
		turno=1;
//		Validación Casilla Trampa
		if(casp4 == 0)
		{
			dado = giroDado();
			p4 += dado ;
		}
		else if (casp4 >= 0)
		{
			casp4 -= 1;
			ban4 -= 1;
		}
	
		if(p4 > 28)
		{
			p4 -= 28;
			ptsp4 += 5;
			ptswp4 += 5;
		}
		document.getElementById("texto").innerHTML= "p4 = "+ p4 + " Dado = " + dado;
		cor = fp(p4,cor);
		
		if(p4 < 14 || p4 > 22)
		{
			cor[8]= corAux[0]-60;
			cor[9]= corAux[1];
		}
		else
		{
			cor[8]= corAux[0]+60;
			cor[9]= corAux[1];
		}
	//	Validacion Casillas especiales
		if(p4 == 4 || p4 == 11 || p4 == 18 || p4 == 33 || p4 == 25)
			{
				ptsp4 += 3;
				ptswp4 += 3;
			}
		else if(p4 == 8)
			{
				turno = 4;
			}
		else if(p4 == 14)
			{
				if(respCas4 == 0 && ban4 == 1)
					{
						casp4 = 1;
					}
				else
					{
						ptsp4 -= 5;
						ptswp4 -= 5;
					}
			}
		document.getElementById("i1").style.left = cor[2]+'px';
		document.getElementById("i1").style.top = cor[3]+'px';
		document.getElementById("i2").style.left = cor[4]+'px';
		document.getElementById("i2").style.top = cor[5]+'px';
		document.getElementById("i3").style.left = cor[6]+'px';
		document.getElementById("i3").style.top = cor[7]+'px';
		document.getElementById("i4").style.left = cor[8]+'px';
		document.getElementById("i4").style.top = cor[9]+'px';
	    alert("enter");
	    layout.crearQuestion(p4);
	    apuntadorPantallas = 1;
	    questionScript.enfocar();
	    
	    resp = questionScript.getResp();
	    
	    if(resp == 1)
		{
			ptsp3 += 2;
			ptswp3 += 2;
			resp = 0;
		}
	    
	}	
	
	document.getElementById("texto1").innerHTML=turno + "  "+ resp + " P1 = " + ptsp1 + "P2 = " + ptsp2 + "P3 = " + ptsp3 + "P4 = " + ptsp4;
	
//	Validación Premio
	if(ptsp1 >= 10)
		{
		ptsp1 -=10;
		document.getElementById("texto").innerHTML= "P1 = Premio";
		}
	else if (ptsp2 >= 10)
		{
		ptsp2 -=10;
		document.getElementById("texto").innerHTML= "P2 = Premio";	
		}
	else if (ptsp3 >= 10)
		{
		ptsp3 -=10;
		document.getElementById("texto").innerHTML= "P3 =Premio";
		}
	else if (ptsp4 >= 10 )
		{
		ptsp4 -=10;
		document.getElementById("texto").innerHTML= "P4 = Premio";
		} 
	
//	Validación Fin Juego
	if(ptswp1 >= 20)
		{
		document.getElementById("texto").innerHTML= "P1 = Ganador";
		ptswp2=0;
		ptswp3=0;
		ptswp4=0;
		}
	else if (ptswp2 >= 20)
		{
		document.getElementById("texto").innerHTML= "P2 = Ganador";
		ptswp1=0;
		ptswp3=0;
		ptswp4=0;
		}
	else if (ptswp3 >= 20)
		{
		document.getElementById("texto").innerHTML= "P3 = Ganador";
		ptswp1=0;
		ptswp2=0;
		ptswp4=0;
		}
	else if (ptswp4 >= 20 )
		{
		document.getElementById("texto").innerHTML= "P4 = Ganador";
		ptswp1=0;
		ptswp2=0;
		ptswp3=0;
		} 
	
}

