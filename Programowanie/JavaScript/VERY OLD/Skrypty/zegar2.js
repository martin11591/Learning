c0=new Image(); c0.src="img/0.bmp"
c1=new Image(); c1.src="img/1.bmp"
c2=new Image(); c2.src="img/2.bmp"
c3=new Image(); c3.src="img/3.bmp"
c4=new Image(); c4.src="img/4.bmp"
c5=new Image(); c5.src="img/5.bmp"
c6=new Image(); c6.src="img/6.bmp"
c7=new Image(); c7.src="img/7.bmp"
c8=new Image(); c8.src="img/8.bmp"
c9=new Image(); c9.src="img/9.bmp"
ods=new Image(); ods.src="img/odstep.bmp"

function zegar2()
{
teraz=new Date();
godzina=teraz.getHours();
minuta=teraz.getMinutes();
sekunda=teraz.getSeconds();
dzien=teraz.getDate();
miesiac=teraz.getMonth()+1;
rok="r"+teraz.getYear();
if (godzina<10) {
document.image.godz1.src=ods.src
document.image.godz2.src=eval("c"+godzina+".src")
}
else {
document.image.godz1.src=eval("c"+Math.floor(godzina/10)+".src")
document.image.godz2.src=eval("c"+(godzina%10)+".src")
}
if (minuta<10) {
document.image.min1.src=c0.src
document.image.min2.src=eval("c"+minuta+".src")
}
else {
document.image.min1.src=eval("c"+Math.floor(minuta/10)+".src")
document.image.min2.src=eval("c"+(minuta%10)+".src")
}
if (sekunda<10) {
document.image.sek1.src=c0.src
document.image.sek2.src=eval("c"+sekunda+".src")
}
else {
document.image.sek1.src=eval("c"+Math.floor(sekunda/10)+".src")
document.image.sek2.src=eval("c"+(sekunda%10)+".src")
}
if (dzien<10) {
document.image.dzien1.src=ods.src
document.image.dzien2.src=eval("c"+dzien+".src")
}
else {
document.image.dzien1.src=eval("c"+Math.floor(dzien/10)+".src")
document.image.dzien2.src=eval("c"+(dzien%10)+".src")
}
if (miesiac<10) {
document.image.miesiac1.src=c0.src
document.image.miesiac2.src=eval("c"+miesiac+".src")
}
else {
document.image.miesiac1.src=eval("c"+Math.floor(miesiac/10)+".src")
document.image.miesiac2.src=eval("c"+(miesiac%10)+".src")
}
document.image.rok1.src=eval("c"+rok.substring(1,2)+".src");
document.image.rok2.src=eval("c"+rok.substring(2,3)+".src");
document.image.rok3.src=eval("c"+rok.substring(3,4)+".src");
document.image.rok4.src=eval("c"+rok.substring(4,5)+".src");
setTimeout("zegar2()",1);
}