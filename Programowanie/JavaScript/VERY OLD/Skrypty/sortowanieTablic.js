\*

	Skrypt pozwala na przenoszenie
	Elementów tablicy w górê lub w dó³
	Oraz ich usuwanie i sortowanie

						*\
function elementNaSamaGore(nazwaTablicy,numerIndeksu) {
temp=new Array();
danaTablica=eval(nazwaTablicy);
if (danaTablica.length<=1) {return}
if (numerIndeksu==1) {return}
numerIndeksu-=1;
temp.push(danaTablica[numerIndeksu]);
for (var i=0; i<danaTablica.length; i++) {
if (i!=numerIndeksu) {temp.push(danaTablica[i])}
}
eval(nazwaTablicy+"=temp");
}
function elementWGore(nazwaTablicy,numerIndeksu) {
temp=new Array();
danaTablica=eval(nazwaTablicy);
if (danaTablica.length<=1) {return}
if (numerIndeksu==1) {return}
numerIndeksu-=1;
for (var i=0; i<danaTablica.length; i++) {
if ((i+1)==numerIndeksu) {temp.push(danaTablica[i+1]);temp.push(danaTablica[i]);i+=1}
else {temp.push(danaTablica[i])}
}
eval(nazwaTablicy+"=temp");
}
function usunElement(nazwaTablicy,numerIndeksu) {
temp=new Array();
danaTablica=eval(nazwaTablicy);
numerIndeksu-=1;
for (i in danaTablica) {
if (i!=numerIndeksu) {temp.push(danaTablica[i])}
}
eval(nazwaTablicy+"=temp");
}
function elementWDol(nazwaTablicy,numerIndeksu) {
temp=new Array();
danaTablica=eval(nazwaTablicy);
if (danaTablica.length<=1) {return}
if (numerIndeksu>=danaTablica.length) {return}
numerIndeksu-=1;
for (var i=0; i<danaTablica.length; i++) {
if (i==numerIndeksu) {temp.push(danaTablica[i+1]);temp.push(danaTablica[i]);i+=1}
else {temp.push(danaTablica[i])}
}
eval(nazwaTablicy+"=temp");
}
function elementNaSamDol(nazwaTablicy,numerIndeksu) {
temp=new Array();
danaTablica=eval(nazwaTablicy);
if (danaTablica.length<=1) {return}
numerIndeksu-=1;
if (numerIndeksu>=danaTablica.length) {return}
for (var i=0; i<danaTablica.length; i++) {
if (i!=numerIndeksu) {temp.push(danaTablica[i])}
}
temp.push(danaTablica[numerIndeksu]);
eval(nazwaTablicy+"=temp");
}
function sortujDane(nazwaTablicy,jakSortowac,typDanych) {
danaTablica=eval(nazwaTablicy);
jakSortowac=jakSortowac.toString().toLowerCase();
typDanych=typDanych.toString().toLowerCase();
if (typDanych=="txt"||typDanych=="text"||typDanych=="tekst") {
temp1=new Array();
temp2=new Array();
for (i in danaTablica) {temp1.push((usunPolskieZnaki(danaTablica[i])+dopiszZera(i,20)).toLowerCase())}
if (jakSortowac==">"||jakSortowac=="ros"||jakSortowac=="rosn¹co"||jakSortowac=="rosnaco"||jakSortowac=="+") {
temp1.sort();
for (i in temp1) {
temp2.push(danaTablica[eval(temp1[i].substring(temp1[i].length-20))]);
}
}
if (jakSortowac=="<"||jakSortowac=="mal"||jakSortowac=="malej¹co"||jakSortowac=="malejaco"||jakSortowac=="-") {
temp1.sort();
for (i in temp1) {
temp2.push(danaTablica[eval(temp1[i].substring(temp1[i].length-20))]);
}
temp2.reverse();
}
eval(nazwaTablicy+"=temp2");
}
if (typDanych=="num"||typDanych=="number"||typDanych=="numbers"||typDanych=="liczba"||typDanych=="liczby") {
temp=new Array();
lmin=0;
lmax=0;if (jakSortowac==">"||jakSortowac=="ros"||jakSortowac=="rosn¹co"||jakSortowac=="rosnaco"||jakSortowac=="+") {
for (i in danaTablica) {
if (danaTablica[i]>lmin) {lmax=danaTablica[i]}
for (j in danaTablica) {
if (danaTablica[j]<lmax&&danaTablica[j]>lmin) {temp.push(danaTablica[j]);lmin=danaTablica[j]}
}
}
lmax=0;
for (i in danaTablica) {
if (danaTablica[i]>lmax) {lmax=danaTablica[i]}
}
temp.push(lmax);
}
if (jakSortowac=="<"||jakSortowac=="mal"||jakSortowac=="malej¹co"||jakSortowac=="malejaco"||jakSortowac=="-") {
for (i in danaTablica) {
if (danaTablica[i]>lmin) {lmax=danaTablica[i]}
for (j in danaTablica) {
if (danaTablica[j]<lmax&&danaTablica[j]>lmin) {temp.push(danaTablica[j]);lmin=danaTablica[j]}
}
}
lmax=0;
for (i in danaTablica) {
if (danaTablica[i]>lmax) {lmax=danaTablica[i]}
}
temp.push(lmax);
temp.reverse();
}
eval(nazwaTablicy+"=temp");
}
}
function dopiszZera(liczba,dlugoscLiczby) {
liczba=liczba.toString();
liczbaZer=dlugoscLiczby-liczba.length;
for (var i=1; i<=liczbaZer; i++) {liczba="0"+liczba}
return liczba;
}
function usunPolskieZnaki(tekst) {
return tekst.replace(/¥/g,"A").replace(/Æ/g,"C").replace(/Ê/g,"E").replace(/£/g,"L").replace(/Ñ/g,"N").replace(/Ó/g,"O").replace(/Œ/g,"S").replace(//g,"Z").replace(/¯/g,"Z").replace(/¹/g,"a").replace(/æ/g,"c").replace(/ê/g,"e").replace(/³/g,"l").replace(/ñ/g,"n").replace(/ó/g,"o").replace(/œ/g,"s").replace(/€/g,"u").replace(/Ÿ/g,"z").replace(/¿/g,"z");
}