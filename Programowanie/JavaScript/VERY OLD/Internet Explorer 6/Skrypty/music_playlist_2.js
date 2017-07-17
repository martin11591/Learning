/*
Najpierw nale¿y sporz¹dziæ listê œcie¿ek plików muzycznych (f[a]),
a potem czasów trwania tych plików muzycznych (t[a]) w milisekundach (np. t[0]=291520)
np.
var f=new Array ("Track2.wav","Track3,wav");
var t=new Array ("03:26","04:51");

Foldery trzeba oddzielaæ znakiem \\ lub / (np."D:\\Muzyka\\" lub "D:/Muzyka/")

Potem nale¿y podaæ definicjê t³a muzycznego z identyfikatorem (id) "music"
np.
dla IE
<bgsound id="music" src=""></bgsound>

dla NS
<embed id="music" src=""></embed>

Nastêpnie trzeba umieœciæ na stronie znacznik <div> z identyfikatorem (id) "stat"
np.
<div id="stat"></div>

Obs³uga klawiszy:
Enter - piosenka od pocz¹tku
[ - poprzednia piosenka
] - nastêpna piosenka
M - wyciszenie w³¹czone/wy³¹czone
+ - zwiêksz g³oœnoœæ
- - zmniejsz g³oœnoœæ
*/
document.oncontextmenu=anuluj;
document.onkeydown=ster;
b=0;
trc=f.length-1;
this.a=trc;
this.ct=0;
mute=-1;
stop=-1;
vol=0;
ivol=1;
document.write("<select name=\"plik\" onchange=\"eval(document.all.plik.value)\" style=\"font-family:Trebuchet MS;font-size:8pt;font-weight:bold\">\n");
for(i in f){
typzn=f[a].indexOf("\/");
if (typzn<0) {znak="\\"} else {znak="\/"}
document.write("<option value=\"clr();a="+(i-1)+";b="+i+";muz()\">"+f[i].substring(f[i].lastIndexOf(znak)+1,f[i].lastIndexOf("."))+"</option>\n");
}
document.write("</select>");
ctimer=setTimeout("ivol=0",1850);
i=0;
tcalosc=0;
czas_calosc();
muz();
status();
function muz() {
if(a<0){a=trc-a-1}
min=parseInt(t[b].substring(0,t[b].indexOf(":")));
sec=parseInt(t[b].substring(t[b].indexOf(":")+1,t[b].length));
this.len=(min*60+sec)*1000;
czas();
timer2=setTimeout("muz()",len);
b=b+1;
a=a+1;
if (b>trc) {b=b-trc-1}
if (a>trc) {a=a-trc-1}
}
function clr() {
clearTimeout(timer);
clearTimeout(timer2);
clearTimeout(timer3);
}
function czas() {
if (ct==1) {clearTimeout(timer)}
this.ct=1;
this.m=0;this.s=0;
this.mm=min;this.ss=sec;
if(s<10){strs="0"+s.toString()}else{strs=s.toString()}
if(m<10){strm="0"+m.toString()}else{strm=m.toString()}
if(ss<10){strss="0"+ss.toString()}else{strss=ss.toString()}
if(mm<10){strmm="0"+mm.toString()}else{strmm=mm.toString()}
document.all.plik.selectedIndex=b;
document.all.music.src=f[b];
timer3=setTimeout("licz()",950);
}
function licz() {
s+=1;
ss-=1;
if(s>59){s-=60;m+=1}
if(ss<0){ss+=60;mm-=1}
if(s<10){strs="0"+s.toString()}else{strs=s.toString()}
if(m<10){strm="0"+m.toString()}else{strm=m.toString()}
if(ss<10){strss="0"+ss.toString()}else{strss=ss.toString()}
if(mm<10){strmm="0"+mm.toString()}else{strmm=mm.toString()}
timer=setTimeout("licz()",1000);
}
function anuluj() {return false}
function ster() {
if (event.keyCode==77) {
mute=-mute;
if (mute==-1) {document.all.music.volume=-vol}
if (mute==1) {document.all.music.volume=-10000}
}
if (event.keyCode==83) {
stop=-stop;
if (stop==1) {clr();document.all.music.src=""}
if (stop==-1) {a-=1;b-=1;muz()}
}
if (event.keyCode==107) {
vol-=100;
ivol=1;
if (vol<0) {vol=0}
clearTimeout(ctimer);
ctimer=setTimeout("ivol=0",1500);
if (mute==1) {return false}
document.all.music.volume=-vol;
}
if (event.keyCode==109) {
vol+=100;
ivol=1;
if (vol>10000) {vol=10000}
clearTimeout(ctimer);
ctimer=setTimeout("ivol=0",1500);
if (mute==1) {return false}
document.all.music.volume=-vol;
}
if (event.keyCode==219) {
clr();
a-=2;
b-=2;
if(a<1){a=a+trc+1}
if(b<0){b=b+trc+1}
muz()}
if (event.keyCode==221) {clr();muz()}
if (event.keyCode==13) {clr();a-=1;b-=1;muz()}
}
function czas_calosc() {
alltime=0;
for (i in t) {
alltime+=parseInt(t[i].substring(0,t[i].indexOf(":"))*60)+parseInt(t[i].substring(t[i].indexOf(":")+1,t[i].length));
}
ctm=parseInt(alltime/60);
cts=parseInt(alltime%60);
if(ctm>60){
ct=ctm;
ctm=parseInt(ct/60)+":";
ctmm=parseInt(ct%60);
if(ctmm<10){ctm+="0"+ctmm}else{ctm+=ctmm}
}
}
function wylicz() {
cti=parseInt(tcalosc/1000);
ctm=parseInt(cti/60);
cts=cti-ctm*60;
cts=cts.toString();
ctti=tcalosc;
ctti=ctti.toString();
cts=cts+"."+ctti.substring(ctti.length-3,ctti.length);
if (ctm<10) {ctm="0"+ctm}
if (cts<10) {cts="0"+cts}
this.ctm=ctm;
this.cts=cts;
}
function status() {
typzn=f[a].indexOf("\/");
if (typzn<0) {znak="\\"} else {znak="\/"}
fmuz=f[a];
nazwapliku=fmuz.substring(fmuz.lastIndexOf(znak)+1,fmuz.lastIndexOf("."));
if (fmuz.indexOf(znak)<0) {sciezka=document.URL;sciezka=sciezka.substring(7,sciezka.lastIndexOf("\\"))} else {sciezka=fmuz.substring(0,fmuz.lastIndexOf(znak))}
inf="Do pocz¹tku:"+strm+":"+strs+"\\"+t[a]+"<br>Do koñca:"+strmm+":"+strss+"\\"+t[a]+"<br>Plik muzyczny:"+nazwapliku+"<br>Typ:"+f[a].substring(f[a].lastIndexOf('.')+1,f[a].length).toUpperCase()+"<br>Œcie¿ka:"+sciezka+"<br>Ca³oœæ:"+ctm+":"+cts;
if (ivol==1) {inf+="<br>G³oœnoœæ:"+parseInt((10000-vol)*100/10000)+"%"}
if (mute==1) {inf+="<br>Muzyka wyciszona"}
if (stop==1) {inf+="<br>Stop"}
stat.innerHTML=inf;
setTimeout("status()",1);
}