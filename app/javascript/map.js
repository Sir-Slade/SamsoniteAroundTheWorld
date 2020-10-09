function fp(p,corP)
{
	switch (p) 
	{
	case 1:
		corP[0]=275;
		corP[1]=585;
		break;
	case 2:
		corP[0]=382;
		corP[1]=585;
		break;
	case 3:
		corP[0]=489;
		corP[1]=585;
		break;
	case 4:
		corP[0]=658;
		corP[1]=585;
		break;
	case 5:
		corP[0]=765;
		corP[1]=585;
		break;
	case 6:
		corP[0]=872;
		corP[1]=585;
		break;
	case 7:
		corP[0]=979;
		corP[1]=585;
		break;
	case 8:
		corP[0]=1150;
		corP[1]=585;
		break;
	case 9:
		corP[0]=1150;
		corP[1]=494;
		break;
	case 10:
		corP[0]=1150;
		corP[1]=403;
		break;
	case 11:
		corP[0]=1150;
		corP[1]=312;
		break;
	case 12:
		corP[0]=1150;
		corP[1]=221;
		break;
	case 13:
		corP[0]=1150;
		corP[1]=129;
		break;
	case 14:
		corP[0]=1012;
		corP[1]=33;
		break;
	case 15:
		corP[0]=906;
		corP[1]=33;
		break;
	case 16:
		corP[0]=800;
		corP[1]=33;
		break;
	case 17:
		corP[0]=694;
		corP[1]=33;
		break;
	case 18:
		corP[0]=520;
		corP[1]=33;
		break;
	case 19:
		corP[0]=414;
		corP[1]=33;
		break;
	case 20:
		corP[0]=308;
		corP[1]=33;
		break;
	case 21:
		corP[0]=202;
		corP[1]=33;
		break;
	case 22:
		corP[0]=28;
		corP[1]=33;
		break;
	case 23:
		corP[0]=104;
		corP[1]=125;
		break;
	case 24:
		corP[0]=104;
		corP[1]=217;
		break;
	case 25:
		corP[0]=140;
		corP[1]=309;
		break;
	case 26:
		corP[0]=104;
		corP[1]=401;
		break;
	case 27:
		corP[0]=104;
		corP[1]=493;
		break;
	default:
		corP[0]=160;
		corP[1]=585;
		document.getElementById("texto").innerHTML= "1 Vuelta";
		break;
	}
	return corP;
}
