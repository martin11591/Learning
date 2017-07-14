function Extender(G){
function V(v){
for (var i=0;i<v.length;) {
with (v[i]) {
A(v[i++],id);
if(ns4)V(document.layers);
}
}
}
function A(X,v) {
lay[v]=X;
if (ns4) {X.style=X}
X.pos=pozycja;
X.clip=ie?kadrujIE:kadrujNS;
X.disp=wyswietlanie;
X.write=ie?podmienIE:podmienNS;
X.alpha=ie?przezroczystoscIE:ns6?przezroczystoscNS:przezroczystoscNS4;
}
function pozycja(posX,posY) {
with (this.style) {left=posX;top=posY}
}
function kadrujIE(gora,prawo,dol,lewo) {
this.style.clip="rect("+gora+" "+prawo+" "+dol+" "+lewo+")";
}
function kadrujNS(gora,prawo,dol,lewo) {
with (this.clip) {top=gora;right=prawo;bottom=dol;left=lewo}
}
function wyswietlanie(opcja) {
opcja=opcja.toString().toLowerCase().replace(/¹/g,"a").replace(/æ/g,"c").replace(/ê/g,"e").replace(/³/g,"l").replace(/ñ/g,"n").replace(/ó/g,"o").replace(/œ/g,"s").replace(/[Ÿ¿]/g,"z").replace(/ /g,"");
if (opcja=="block"||opcja=="show"||opcja=="pokaz") {this.style.display="block"}
if (opcja=="visible"||opcja=="widoczny") {this.style.visibility="visible"}
if (opcja=="none"||opcja=="niewyswietlaj") {this.style.display="none"}
if (opcja=="hide"||opcja=="hidden"||opcja=="ukryj"||opcja=="ukryty") {this.style.visibility="hidden"}
}
function podmienIE(zawartosc,tryb) {
tryb=tryb.toString().toLowerCase();
if (tryb=="text"||tryb=="tekst"||tryb=="txt") {this.innerText=zawartosc}
if (tryb=="htm"||tryb=="html"||tryb=="kod") {this.innerHTML=zawartosc}
}
function podmienNS(zawartosc,tryb) {
tryb=tryb.toString().toLowerCase();
if (tryb=="text"||tryb=="tekst"||tryb=="txt") {with (this.document) {write(zawartosc.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/<br>/g,"\n"));close()}}
if (tryb=="htm"||tryb=="html"||tryb=="kod") {with (this.document) {write(zawartosc);close()}}
}
function przezroczystoscIE(poziom) {
this.style.filter="alpha(opacity="+poziom+")";
}
function przezroczystoscNS(poziom) {
this.style.MozOpacity=poziom/100;
}
function przezroczystoscNS4(poziom) {
(poziom<50)?this.disp="none":this.disp="block";
}
doc=document;
ie=doc.all;
ns4=doc.layers;
lay=[];
up5=doc.getElementById?doc.getElementsByTagName('div'):0;
ns6=up5&&!ie;
V(up5?up5:ie?ie.tags('div'):ns4);
up5=doc.getElementById?doc.getElementsByTagName('span'):0;
ns6=up5&&!ie;
V(up5?up5:ie?ie.tags('span'):ns4);
up5=doc.getElementById?doc.getElementsByTagName('img'):0;
ns6=up5&&!ie;
V(up5?up5:ie?ie.tags('img'):ns4);
up5=doc.getElementById?doc.getElementsByTagName('embed'):0;
ns6=up5&&!ie;
V(up5?up5:ie?ie.tags('embed'):ns4);
up5=doc.getElementById?doc.getElementsByTagName('input'):0;
ns6=up5&&!ie;
V(up5?up5:ie?ie.tags('input'):ns4);
up5=doc.getElementById?doc.getElementsByTagName('button'):0;
ns6=up5&&!ie;
V(up5?up5:ie?ie.tags('button'):ns4);
up5=doc.getElementById?doc.getElementsByTagName('select'):0;
ns6=up5&&!ie;
V(up5?up5:ie?ie.tags('select'):ns4);
up5=doc.getElementById?doc.getElementsByTagName('textarea'):0;
ns6=up5&&!ie;
V(up5?up5:ie?ie.tags('textarea'):ns4);
up5=doc.getElementById?doc.getElementsByTagName('font'):0;
ns6=up5&&!ie;
V(up5?up5:ie?ie.tags('font'):ns4);
}