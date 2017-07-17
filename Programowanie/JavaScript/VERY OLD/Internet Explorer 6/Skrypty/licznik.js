licznikA=new Date();
licznikStart=licznikA.getTime()/1000;
cyfry="../../Obrazy/DHTML/DHTML cd/img/cyrfy-lcd";
function stoper()
{
var licznikTeraz;
alert (licznikA+"\n"+licznikStart+"\n"+licznikTeraz+"\n"+cyfry);
licznikA=new Date();
licznikTeraz=licznikStart-licznikA.getTime()/1000.toString();
f=licznikTeraz.substring(5,6);
e=licznikTeraz.substring(4,5);
d=licznikTeraz.substring(3,4);
c=licznikTeraz.substring(2,3);
b=licznikTeraz.substring(1,2);
a=licznikTeraz.substring(0,1);
document.image.licznik1.src=cyfry+a+".png";
document.image.licznik2.src=cyfry+b+".png";
document.image.licznik3.src=cyfry+c+".png";
document.image.licznik4.src=cyfry+d+".png";
document.image.licznik5.src=cyfry+e+".png";
document.image.licznik6.src=cyfry+f+".png";
setTimeout("stoper()",1);
}