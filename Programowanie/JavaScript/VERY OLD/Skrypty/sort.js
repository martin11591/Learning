var sortujWedlug;			
var metoda;

function sortuj(id,index,sposob){
	var zawartoscWiersz, liczbaWierszy, liczbaKolumn;
	var tablicaWierszy = new Array();		
	var tablica;		

	sortujWedlug = index;
	metoda=sposob;
	tablica = document.getElementById(id);
	liczbaWierszy = tablica.rows.length;		
	liczbaKolumn = tablica.rows[0].cells.length;
	

	for (var i=1; i<liczbaWierszy; i++){
		for (var j=0; j<liczbaKolumn; j++){

			if (j == 0){
				tablicaWierszy[i-1] = tablica.rows[i].cells[j].firstChild.data;
			}
			else{
				tablicaWierszy[i-1] += "|" + tablica.rows[i].cells[j].firstChild.data;
			}
		}
	}
	

	tablicaWierszy.sort(porownaj);

	for (var i=1; i<liczbaWierszy; i++){
		zawartoscWierszy = tablicaWierszy[i-1].split("|");

		for (var j=0; j<liczbaKolumn; j++){
			tablica.rows[i].cells[j].firstChild.data = zawartoscWierszy[j];
		}
	}
}


function porownaj(a, b){
	
	var elementA = a.split("|");
	var elementB = b.split("|");
	if (metoda == 'nazwa'){
		if (exPL(elementA[sortujWedlug]) < exPL(elementB[sortujWedlug]))
			return -1;
		else
			return 1;
	}
	else if (metoda == 'liczba'){
		return elementA[sortujWedlug] - elementB[sortujWedlug];
	}
}

function exPL(x){ 
 return x.toLowerCase().replace(/[±ê¶æó³ñ¿¼]/g,function(s){ 
  return(s=='±'?'a':s=='ê'?'e':s=='¶'?'s':s=='æ'?'c':s=='ó'?'o':s=='³'?'l':s=='ñ'?'n':s=='¼'?'z':'z¿')+'¿'}) 
} 