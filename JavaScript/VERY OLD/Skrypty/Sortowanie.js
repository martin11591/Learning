/*	Autor:		Marcin Podraza
	Adres e-mail:	marcinpodraza@gmail.com
	Opis skryptu:	Skrypt sortuje tablice liczbowe i tekstowe malej¹co i rosn¹co zale¿nie od wyboru u¿ytkownika, sortowanie liczbowe nie wykorzystuje funkcji sort()
	Komentarz:	1. Te dziwne nazwy zmiennych pochodz¹ od tego, aby nie u¿ywaæ zmiennych, które s¹ ju¿ u¿yte (myœlê, ¿e nikt nie bêdzie u¿ywa³ tych samych zmiennych)
			2. Nie dodajê komentarzy do ka¿dego kroku, poniewa¿ mi to przeszkadza. Mo¿e kiedyœ zacznê wiêcej komentowaæ :)
			3. Tak samo nie uk³adam linii skryptu dla wygl¹du - piszê tak, jak jest mi wygodnie. */

function sortuj(sortowanieZmiennaTablica,sortowanieTyp1,sortowanieTyp2) {
sortowanieTyp1=sortowanieTyp1.toLowerCase();
sortowanieTyp2=sortowanieTyp2.toLowerCase().substring(0,3);
sortowanieTempArray=new Array();
sortowanieTempArray1=new Array();
sortowanieTwojaTablica=eval(sortowanieZmiennaTablica);
sortowanieCopyArray=eval(sortowanieZmiennaTablica);
if (sortowanieTyp1=="liczba") {
if (sortowanieTyp2=="mal") {
for (var sortowanieJ=0; sortowanieJ<sortowanieCopyArray.length; sortowanieJ++) {
sortowanieLiczbaNaj=0;
sortowanieLiczbaNajI=0;
for (var sortowanieI=0; sortowanieI<sortowanieTwojaTablica.length; sortowanieI++) {
if (sortowanieTwojaTablica[sortowanieI]>sortowanieLiczbaNaj) {sortowanieLiczbaNaj=sortowanieTwojaTablica[sortowanieI];sortowanieLiczbaNajI=sortowanieI}
}
sortowanieTempArray.push(sortowanieLiczbaNaj);
sortowanieUsunElementX("sortowanieTwojaTablica",sortowanieLiczbaNajI);
}
}
if (sortowanieTyp2=="ros") {
for (var sortowanieJ=0; sortowanieJ<sortowanieCopyArray.length; sortowanieJ++) {
sortowanieLiczbaNaj=0;
sortowanieLiczbaNajI=0;
for (var sortowanieI=0; sortowanieI<sortowanieTwojaTablica.length; sortowanieI++) {
if (sortowanieTwojaTablica[sortowanieI]>sortowanieLiczbaNaj) {sortowanieLiczbaNaj=sortowanieTwojaTablica[sortowanieI]}
}
for (var sortowanieI=0; sortowanieI<sortowanieTwojaTablica.length; sortowanieI++) {
if (sortowanieTwojaTablica[sortowanieI]<sortowanieLiczbaNaj) {sortowanieLiczbaNaj=sortowanieTwojaTablica[sortowanieI];sortowanieLiczbaNajI=sortowanieI}
}
sortowanieTempArray.push(sortowanieLiczbaNaj);
sortowanieUsunElementX("sortowanieTwojaTablica",sortowanieLiczbaNajI);
}
}
}
if (sortowanieTyp1=="nazwa") {
if (sortowanieTyp2=="mal") {
for (var sortowanieI=0; sortowanieI<sortowanieTwojaTablica.length; sortowanieI++) {sortowanieTempArray1.push(usunPolskieZnaki(sortowanieTwojaTablica[sortowanieI].toLowerCase())+","+sortowanieI)}
sortowanieTempArray1.sort();
for (var sortowanieI=0; sortowanieI<sortowanieTempArray1.length; sortowanieI++) {sortowanieTempArray.push(sortowanieTwojaTablica[sortowanieTempArray1[sortowanieI].substring(sortowanieTempArray1[sortowanieI].lastIndexOf(",")+1,sortowanieTempArray1[sortowanieI].length)])}
sortowanieTempArray1=new Array();
for (var sortowanieI=0; sortowanieI<sortowanieTempArray.length; sortowanieI++) {sortowanieTempArray1.push(sortowanieTempArray[sortowanieTempArray.length-1-sortowanieI])}
sortowanieTempArray=sortowanieTempArray1;
}
if (sortowanieTyp2=="ros") {
for (var sortowanieI=0; sortowanieI<sortowanieTwojaTablica.length; sortowanieI++) {sortowanieTempArray1.push(usunPolskieZnaki(sortowanieTwojaTablica[sortowanieI].toLowerCase())+","+sortowanieI)}
sortowanieTempArray1.sort();
for (var sortowanieI=0; sortowanieI<sortowanieTempArray1.length; sortowanieI++) {sortowanieTempArray.push(sortowanieTwojaTablica[sortowanieTempArray1[sortowanieI].substring(sortowanieTempArray1[sortowanieI].lastIndexOf(",")+1,sortowanieTempArray1[sortowanieI].length)])}
}
}
eval(sortowanieZmiennaTablica+"=sortowanieTempArray");
}
function sortowanieUsunElementX(sortowanieZmiennaTablica,sortowanieIndeX) {
sortowanieTempArrayX=new Array();
sortowanieTwojaTablicaX=eval(sortowanieZmiennaTablica);
for (var sortowanieIX=0; sortowanieIX<sortowanieTwojaTablicaX.length; sortowanieIX++) {
if (sortowanieIX!=sortowanieIndeX) {sortowanieTempArrayX.push(sortowanieTwojaTablicaX[sortowanieIX])}
}
eval(sortowanieZmiennaTablica+"=sortowanieTempArrayX");
}
function usunPolskieZnaki(txt) {
return txt.replace(/¥/g,"A").replace(/Æ/g,"C").replace(/Ê/g,"E").replace(/£/g,"L").replace(/Ñ/g,"N").replace(/Ó/g,"O").replace(/Œ/g,"S").replace(//g,"Z").replace(/¯/g,"Z").replace(/¹/g,"a").replace(/æ/g,"c").replace(/ê/g,"e").replace(/³/g,"l").replace(/ñ/g,"n").replace(/ó/g,"o").replace(/œ/g,"s").replace(/€/g,"u").replace(/Ÿ/g,"z").replace(/¿/g,"z");
}