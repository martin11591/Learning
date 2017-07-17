function przelicznik(typ,argument) {
if (typ!="hx2nm") {var argument=parseFloat(argument)}
if (typ!="hx2nm") {if (isNaN(argument)) {argument=0}}
if (typ=="km2m") {
return argument/1.609;
}
if (typ=="m2km") {
return Math.round(argument*1.609);
}
if (typ=="cm2in") {
return argument/2.54;
}
if (typ=="in2cm") {
return Math.round(argument*2.54);
}
if (typ=="ft2m") {
return argument*0.3048;
}
if (typ=="m2ft") {
return Math.round(argument/0.3048);
}
if (typ=="tb2gb") {
return argument*1024;
}
if (typ=="tb2mb") {
return argument*1024*1024;
}
if (typ=="tb2kb") {
return argument*1024*1024*1024;
}
if (typ=="tb2b") {
return argument*1024*1024*1024*1024;
}
if (typ=="gb2tb") {
return Math.round(argument/1024*1000)/1000;
}
if (typ=="gb2mb") {
return argument*1024;
}
if (typ=="gb2kb") {
return argument*1024*1024;
}
if (typ=="gb2b") {
return argument*1024*1024*1024;
}
if (typ=="mb2tb") {
return Math.round(argument/1024/1024*1000)/1000;
}
if (typ=="mb2gb") {
return Math.round(argument/1024*1000)/1000;
}
if (typ=="mb2kb") {
return argument*1024;
}
if (typ=="mb2b") {
return argument*1024*1024;
}
if (typ=="kb2tb") {
return Math.round(argument/1024/1024/1024*1000)/1000;
}
if (typ=="kb2gb") {
return Math.round(argument/1024/1024*1000)/1000;
}
if (typ=="kb2mb") {
return Math.round(argument/1024*1000)/1000;
}
if (typ=="kb2b") {
return argument*1024;
}
if (typ=="b2tb") {
return Math.round(argument/1024/1024/1024/1024*1000)/1000;
}
if (typ=="b2gb") {
return Math.round(argument/1024/1024/1024*1000)/1000;
}
if (typ=="b2mb") {
return Math.round(argument/1024/1024*1000)/1000;
}
if (typ=="b2kb") {
return Math.round(argument/1024*1000)/1000;
}
if (typ=="pt2in") {
return Math.round(argument/72*1000)/1000;
}
if (typ=="pt2cm") {
return Math.round(argument/72*2.54*1000)/1000;
}
if (typ=="in2pt") {
return Math.round(argument*72*1000)/1000;
}
if (typ=="cm2pt") {
return Math.round(argument*72/2.54*1000)/1000;
}
if (typ=="nm2hx") {
j=1;
while (j<=argument) {j*=16}
j/=16;
hex="";
while (j>=1) {
dz=Math.floor(Math.abs(argument/j));
if (dz>=0&&dz<=9) {hex+=(dz.toString()).substring(0,1)}
if (dz==10) {hex+="A"}
if (dz==11) {hex+="B"}
if (dz==12) {hex+="C"}
if (dz==13) {hex+="D"}
if (dz==14) {hex+="E"}
if (dz==15) {hex+="F"}
argument-=dz*j;
j/=16;
}
ile=2;
while (ile<hex.length) {ile*=2}
return zera(hex,ile);
}
if (typ=="hx2nm") {
argument=argument.toString();
j=Math.pow(16,argument.length-1);
l=0;
for (var i=0; i<argument.length; i++) {
zn=argument.substring(i,i+1).toUpperCase();
if (zn=="1") {l+=j}
if (zn=="2") {l+=j*2}
if (zn=="3") {l+=j*3}
if (zn=="4") {l+=j*4}
if (zn=="5") {l+=j*5}
if (zn=="6") {l+=j*6}
if (zn=="7") {l+=j*7}
if (zn=="8") {l+=j*8}
if (zn=="9") {l+=j*9}
if (zn=="A") {l+=j*10}
if (zn=="B") {l+=j*11}
if (zn=="C") {l+=j*12}
if (zn=="D") {l+=j*13}
if (zn=="E") {l+=j*14}
if (zn=="F") {l+=j*15}
j/=16;
}
return l;
}
}
function zera(zmiennaTekstowa,liczbaWszystkichCyfr) {
zer="000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";
return zer.substring(0,liczbaWszystkichCyfr-zmiennaTekstowa.length)+zmiennaTekstowa;
}