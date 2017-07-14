/*	Autor:		Marcin Podraza
	Adres e-mail:	marcinpodraza@gmail.com
	Opis skryptu:	Skrypt sortuje tablice liczbowe i tekstowe malej�co i rosn�co zale�nie od wyboru u�ytkownika, sortowanie liczbowe nie wykorzystuje funkcji sort()
	Komentarz:	1. Te dziwne nazwy zmiennych pochodz� od tego, aby nie u�ywa� zmiennych, kt�re s� ju� u�yte (my�l�, �e nikt nie b�dzie u�ywa� tych samych zmiennych)
			2. Nie dodaj� komentarzy do ka�dego kroku, poniewa� mi to przeszkadza. Mo�e kiedy� zaczn� wi�cej komentowa� :)
			3. Tak samo nie uk�adam linii skryptu dla wygl�du - pisz� tak, jak jest mi wygodnie. */

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
return txt.replace(/�/g,"A").replace(/�/g,"C").replace(/�/g,"E").replace(/�/g,"L").replace(/�/g,"N").replace(/�/g,"O").replace(/�/g,"S").replace(/�/g,"Z").replace(/�/g,"Z").replace(/�/g,"a").replace(/�/g,"c").replace(/�/g,"e").replace(/�/g,"l").replace(/�/g,"n").replace(/�/g,"o").replace(/�/g,"s").replace(/�/g,"u").replace(/�/g,"z").replace(/�/g,"z");
}