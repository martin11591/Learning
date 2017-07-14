function Liczebnik( ile, rdzen, konc1, konc2, konc5 ) { //  Autor Romuald Zylla
var N0, N1, N2, R0;
  N0 = Math.floor( Math.abs( ile ) );  // funkcja ma sens dla liczb ca³kowitych
  N1 = N0 % 10;
  N2 = N0 % 100;
  R0 = konc1;
  if (N0 == 1)   R0 = konc1
	else if ((N2 > 4) && (N2 < 22))   R0 = konc5
		else if ((N1 > 1) && (N1 <= 4))   R0 = konc2
			else R0 = konc5;
  return rdzen + R0;
}