
// Jeœli ktoœ zastanawia siê, dlaczego ja piszê takie d³ugie zmienne
// to niech wie, ¿e ja piszê skrypty uniwersalne i jeœli ktoœ chcia³by
// sobie ten skrypt do³o¿yæ do strony, to chodzi o to, ¿eby nie powodowaæ
// problemów z innymi zmiennymi (myœlê, ¿e te zmienne raczej nie s¹ wykorzystywane)
//
// TEN SKRYPT JEST PISANY TYLKO I WY£¥CZNIE POD INTERNET EXPLORERA!
function ruchFalistyPrzygotujObiekty(ruchFalistyStartX,ruchFalistyH,ruchFalistyW,ruchFalistyI) {
  this.X=ruchFalistyStartX;	// Przypisujê obiektowi zmienne
  this.Y=0;			// podane na wejœciu
  this.H=ruchFalistyH;
  this.W=ruchFalistyW;
  this.I=ruchFalistyI;
}
function ruchFalistyDodajObiekt(ruchFalistyNazwaTabeli,ruchFalistyNumerIndeksu,ruchFalistyStartPosX,ruchFalistySzerokosc,ruchFalistyWysokosc,ruchFalistyI,ruchFalistyKolorTla)
{
  if (!eval(ruchFalistyNazwaTabeli)) {eval(ruchFalistyNazwaTabeli+"=new Array()")}	// Sprawdzamy, czy dana tabela istnieje - jeœli nie, to j¹ tworzymy
  eval (ruchFalistyNazwaTabeli+"["+ruchFalistyNumerIndeksu+"]=new ruchFalistyPrzygotujObiekty("+ruchFalistyStartPosX+",\""+ruchFalistySzerokosc+"\",\""+ruchFalistyWysokosc+"\","+ruchFalistyI+")");	// Ta linia wywo³uje funkcjê podobn¹ do "tabela=new ruchFalistyPrzygotujObiekty(posX,posY,H,W,0,0)" tyle, ¿e wartoœci s¹ inne
  document.write("<img id=\""+ruchFalistyNazwaTabeli+ruchFalistyNumerIndeksu+"\" style=\"background-color:"+ruchFalistyKolorTla+";position:absolute;left:"+ruchFalistyStartPosX+"px;width:"+ruchFalistySzerokosc+";height:"+ruchFalistyWysokosc+";z-index:"+eval("-400-"+ruchFalistyNumerIndeksu)+"\"></img>");	// Wypisujemy na ekran obiekt
}
function ruchFalistyAnimuj (ruchFalistyNazwaTabeli,ruchFalistyLiczbaIndeksow,ruchFalistySzybkoscKrokow) {
  my=(document.body.clientHeight-10)/2;
  for (var i=0; i<=ruchFalistyLiczbaIndeksow; i++) {
    eval (ruchFalistyNazwaTabeli+"["+i+"].Y="+my+"+Math.cos("+ruchFalistyNazwaTabeli+"["+i+"].I)*"+my);
    eval (ruchFalistyNazwaTabeli+"["+i+"].I+="+ruchFalistySzybkoscKrokow);
    eval ("dc."+ruchFalistyNazwaTabeli+i+".style.top="+ruchFalistyNazwaTabeli+"["+i+"].Y+document.body.scrollTop");
  }
}