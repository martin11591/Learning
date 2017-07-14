/* Do dokumentu nale¿y dopisaæ:
<div id="info1">Dzisiaj jest </div>
<div id="info2">Jesteœ tutaj ju¿ przez </div>
<input type=radio name="typ" id="liczbowo" checked>Liczbowo
<input type=radio name="typ" id="slownie" >S³ownie */
function Liczebnik(ile,rdzen,konc1,konc2,konc5){
var N0,N1,N2,R0;
N0=Math.floor(Math.abs(ile));
N1=N0%10;
N2=N0%100;
R0=konc1;
if(N0==1)R0=konc1
else if((N2>4)&&(N2<22)) R0=konc5
else if((N1>1)&&(N1<=4)) R0=konc2
else R0=konc5;
return rdzen+R0;
}
starttime=new Date();
startsecs=starttime.getTime();
zawdod="";
licznik();
show_info();
zegar();
function zegar() {
zaw1="Dzisiaj jest ";
czas=new Date();
dzien=czas.getDate();
miesiac=czas.getMonth()+1;
rok=czas.getYear();
godziny=czas.getHours();
minuty=czas.getMinutes();
sekundy=czas.getSeconds();
dzientygodnia=czas.getDay();
if(miesiac==1){nazwamiesiaca="&nbsp;stycznia&nbsp;"}
if(miesiac==2){nazwamiesiaca="&nbsp;lutego&nbsp;"}
if(miesiac==3){nazwamiesiaca="&nbsp;marca&nbsp;"}
if(miesiac==4){nazwamiesiaca="&nbsp;kwietnia&nbsp;"}
if(miesiac==5){nazwamiesiaca="&nbsp;maja&nbsp;"}
if(miesiac==6){nazwamiesiaca="&nbsp;czerwca&nbsp;"}
if(miesiac==7){nazwamiesiaca="&nbsp;lipca&nbsp;"}
if(miesiac==8){nazwamiesiaca="&nbsp;sierpnia&nbsp;"}
if(miesiac==9){nazwamiesiaca="&nbsp;wrzeœnia&nbsp;"}
if(miesiac==10){nazwamiesiaca="&nbsp;paŸdziernika&nbsp;"}
if(miesiac==11){nazwamiesiaca="&nbsp;listopada&nbsp;"}
if(miesiac==12){nazwamiesiaca="&nbsp;grudnia&nbsp;"}
if(miesiac<10){miesiac="0"+miesiac}
if(dzientygodnia==0){nazwadnia="&nbsp;(Niedziela)&nbsp;&nbsp;&nbsp;&nbsp;"}
if(dzientygodnia==1){nazwadnia="&nbsp;(Poniedzia³ek)&nbsp;&nbsp;&nbsp;&nbsp;"}
if(dzientygodnia==2){nazwadnia="&nbsp;(Wtorek)&nbsp;&nbsp;&nbsp;&nbsp;"}
if(dzientygodnia==3){nazwadnia="&nbsp;(Œroda)&nbsp;&nbsp;&nbsp;&nbsp;"}
if(dzientygodnia==4){nazwadnia="&nbsp;(Czwartek)&nbsp;&nbsp;&nbsp;&nbsp;"}
if(dzientygodnia==5){nazwadnia="&nbsp;(Pi¹tek)&nbsp;&nbsp;&nbsp;&nbsp;"}
if(dzientygodnia==6){nazwadnia="&nbsp;(Sobota)&nbsp;&nbsp;&nbsp;&nbsp;"}
if(minuty<10){minuty="0"+minuty}
if(sekundy<10){sekundy="0"+sekundy}
if(document.all.liczbowo.checked){if(dzien<10){dzien="0"+dzien}}
if(document.all.liczbowo.checked){zaw1+=dzien+"."+miesiac+"."+rok+"r."+nazwadnia+godziny+":"+minuty+":"+sekundy}
if(document.all.slownie.checked){zaw1+=dzien+nazwamiesiaca+rok+" rok"+nazwadnia+godziny+":"+minuty+":"+sekundy}
info1.innerHTML=zaw1;
setTimeout("zegar()",1);
}
function licznik() {
s=init()%60;
m=parseInt(init()/60%60);
h=parseInt(init()/3600);
if (h==0&&m==1&&s==0) {addinfo("Co ciê tak zainteresowa³o, ¿e jesteœ tu a¿ jedn¹ minutê ?",3500)}
if (h==0&&m==2&&s==0) {addinfo("Jesteœ zaciekawiony czy œpisz skoro jesteœ ju¿ drug¹ minutê na tej stronie ?",4000)}
setTimeout("licznik()",1);
}
function show_info() {
zaw2="Jesteœ tutaj ju¿ przez ";
if(h==0&&m==0&&s==0){
zaw2+=" "+s;
if(document.all.liczbowo.checked){zaw2+="s"} else {zaw2+=Liczebnik(s," sekund","ê","y","")}
}
if(h>0){
zaw2+=h;
if(document.all.liczbowo.checked){zaw2+="h"} else {zaw2+=Liczebnik(h," godzin","ê","y","")}
}
if(m>0){
zaw2+=" "+m;
if(document.all.liczbowo.checked){zaw2+="m"} else {zaw2+=Liczebnik(m," minut","ê","y","")}
}
if(s>0){
zaw2+=" "+s;
if(document.all.liczbowo.checked){zaw2+="s"} else {zaw2+=Liczebnik(s," sekund","ê","y","")}
}
zaw2+=".";
info2.innerHTML=zaw2+zawdod;
setTimeout("show_info()",1);
}
function init() {
cz=new Date();
teraz=cz.getTime();
clock=parseInt((teraz-startsecs)/1000);
return clock;
}
function addinfo(txt,timer) {
this.zawdod="<br>"+txt;
setTimeout("this.zawdod=''",timer);
}