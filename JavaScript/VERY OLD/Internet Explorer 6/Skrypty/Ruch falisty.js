
// Je�li kto� zastanawia si�, dlaczego ja pisz� takie d�ugie zmienne
// to niech wie, �e ja pisz� skrypty uniwersalne i je�li kto� chcia�by
// sobie ten skrypt do�o�y� do strony, to chodzi o to, �eby nie powodowa�
// problem�w z innymi zmiennymi (my�l�, �e te zmienne raczej nie s� wykorzystywane)
//
// TEN SKRYPT JEST PISANY TYLKO I WY��CZNIE POD INTERNET EXPLORERA!
function ruchFalistyPrzygotujObiekty(ruchFalistyStartX,ruchFalistyH,ruchFalistyW,ruchFalistyI) {
  this.X=ruchFalistyStartX;	// Przypisuj� obiektowi zmienne
  this.Y=0;			// podane na wej�ciu
  this.H=ruchFalistyH;
  this.W=ruchFalistyW;
  this.I=ruchFalistyI;
}
function ruchFalistyDodajObiekt(ruchFalistyNazwaTabeli,ruchFalistyNumerIndeksu,ruchFalistyStartPosX,ruchFalistySzerokosc,ruchFalistyWysokosc,ruchFalistyI,ruchFalistyKolorTla)
{
  if (!eval(ruchFalistyNazwaTabeli)) {eval(ruchFalistyNazwaTabeli+"=new Array()")}	// Sprawdzamy, czy dana tabela istnieje - je�li nie, to j� tworzymy
  eval (ruchFalistyNazwaTabeli+"["+ruchFalistyNumerIndeksu+"]=new ruchFalistyPrzygotujObiekty("+ruchFalistyStartPosX+",\""+ruchFalistySzerokosc+"\",\""+ruchFalistyWysokosc+"\","+ruchFalistyI+")");	// Ta linia wywo�uje funkcj� podobn� do "tabela=new ruchFalistyPrzygotujObiekty(posX,posY,H,W,0,0)" tyle, �e warto�ci s� inne
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