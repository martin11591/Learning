/*
Najpierw nale¿y sporz¹dziæ listê œcie¿ek plików muzycznych (f[a]),
a potem czasów trwania tych plików muzycznych (t[a]) w milisekundach (np. t[0]=291520)
np.
var f=new Array ('Track2.wav','Track3,wav');
var t=new Array (291520,231270);

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
*/
document.oncontextmenu=anuluj;
spd=55;
b=0;
trc=t.length-1;
this.a=trc;
this.ct=0;
mute=-1;
muz()
function muz() {
czas();
setTimeout("muz()",t[b]);
b=b+1;
a=a+1;
if (b>trc) {b=b-trc-1}
if (a>trc) {a=a-trc-1}
}
function czas() {
if (ct==1) {clearTimeout(timer)}
this.ct=1;
this.m1=0;this.m2=0;this.s1=0;this.s2=0;this.ts1=0;this.ts2=0;this.ts3=0;
ti=parseInt(t[b]/1000);
tm=parseInt(ti/60);
ts=ti-tm*60;
ts=ts.toString();
tti=t[b];
tti=tti.toString()
ts=ts+"."+tti.substring(tti.length-3,tti.length);
if (tm<10) {tm="0"+tm}
if (ts<10) {ts="0"+ts}
this.mm1=parseInt(tm.substring(0,1));
this.mm2=parseInt(tm.substring(1,2));
this.ss1=parseInt(ts.substring(0,1));
this.ss2=parseInt(ts.substring(1,2));
this.tss1=parseInt(ts.substring(3,4));
this.tss2=parseInt(ts.substring(4,5));
this.tss3=parseInt(ts.substring(5,6));
document.all.music.src=f[b];
setTimeout("licz()",0);
}
function licz() {
typzn=f[a].indexOf("\/");
if (typzn<0) {znak="\\"} else {znak="\/"}
fmuz=f[a];
nazwapliku=fmuz.substring(fmuz.lastIndexOf(znak)+1,fmuz.lastIndexOf("."));
if (fmuz.indexOf(znak)<0) {sciezka=document.URL;sciezka=sciezka.substring(7,sciezka.lastIndexOf("\\"))} else {sciezka=fmuz.substring(0,fmuz.lastIndexOf(znak))}
inf="Czas:"+m1+m2+":"+s1+s2+"."+ts1+ts2+ts3+"\\"+tm+":"+ts+"<br>Do koñca:"+mm1+mm2+":"+ss1+ss2+"."+tss1+tss2+tss3+"\\"+tm+":"+ts+"<br>Plik muzyczny:"+nazwapliku+"<br>Typ:"+f[a].substring(f[a].lastIndexOf('.')+1,f[a].length).toUpperCase()+"<br>Œcie¿ka:"+sciezka;
if (mute==1) {inf=inf+"<br>Muzyka wyciszona"}
stat.innerHTML=inf;
sped=spd.toString();
if (sped.length==3) {sped="0"+sped}
if (sped.length==2) {sped="00"+sped}
if (sped.length==1) {sped="000"+sped}
st2=parseInt(sped.substring(0,1));
t1=parseInt(sped.substring(1,2));
t2=parseInt(sped.substring(2,3));
t3=parseInt(sped.substring(3,4));
s2=s2+st2;ts1=ts1+t1;ts2=ts2+t2;ts3=ts3+t3;
ss2=ss2-st2;tss1=tss1-t1;tss2=tss2-t2;tss3=tss3-t3;
if (ts3>9) {ts3=ts3-10;ts2=ts2+1}
if (ts2>9) {ts2=ts2-10;ts1=ts1+1}
if (ts1>9) {ts1=ts1-10;s2=s2+1}
if (s2>9) {s1=s1+1;s2=s2-10}
if (s1>5) {s1=s1-6;m2=m2+1}
if (m1>9) {m1=m1-10;m2=m2+1}
if (tss3<0) {tss3=tss3+10;tss2=tss2-1}
if (tss2<0) {tss2=tss2+10;tss1=tss1-1}
if (tss1<0) {tss1=tss1+10;ss2=ss2-1}
if (ss2<0) {ss2=ss2+10;ss1=ss1-1}
if (ss1<0) {mm2=mm2-1;ss1=ss1+6}
if (mm2<0) {mm1=mm1-1;mm2=mm2+10}
if (mm1<0) {mm1=mm1+10}
timer=setTimeout("licz()",spd);
}
function anuluj() {return false}
function ster() {
if (event.keyCode==77) {
mute=-mute;
if (mute==-1) {document.all.music.volume=0}
if (mute==1) {document.all.music.volume=-10000}
}
}