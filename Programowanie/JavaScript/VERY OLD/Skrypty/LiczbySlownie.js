function dataICzas(jak) {
if (!jak||jak==null||jak==undefined||(jak!="num"&&jak!="str")) {jak="num"}
jak=jak.toString().toLowerCase().substring(0,3);
czasTeraz=new Date();
dataDzien=czasTeraz.getDate();
dataDzienTyg=czasTeraz.getDay();
dataMiesiac=czasTeraz.getMonth()+1;
dataRok=czasTeraz.getFullYear();
dataGodzina=czasTeraz.getHours();
dataMinuta=czasTeraz.getMinutes();
dataSekunda=czasTeraz.getSeconds();
dataMiliSekunda=czasTeraz.getTime()%1000;
switch (dataDzienTyg) {
case 1: {dataDzienTygS="Poniedzia�ek";break}
case 2: {dataDzienTygS="Wtorek";break}
case 3: {dataDzienTygS="�roda";break}
case 4: {dataDzienTygS="Czwartek";break}
case 5: {dataDzienTygS="Pi�tek";break}
case 6: {dataDzienTygS="Sobota";break}
case 0: {dataDzienTygS="Niedziela";break}
}
if (jak=="num") {
data=dataDzien+"."+dopiszZera(dataMiesiac,2)+"."+dataRok+" ("+dataDzienTygS+") "+dataGodzina+":"+dopiszZera(dataMinuta,2)+":"+dopiszZera(dataSekunda,2)+"."+dopiszZera(dataMiliSekunda,3);
}
if (jak=="str") {
dataDzienS=slownie(dataDzien,1,"");
switch (dataMiesiac) {
case 01: {dataMiesiacS="stycznia";break}
case 02: {dataMiesiacS="lutego";break}
case 03: {dataMiesiacS="marca";break}
case 04: {dataMiesiacS="kwietnia";break}
case 05: {dataMiesiacS="maja";break}
case 06: {dataMiesiacS="czerwca";break}
case 07: {dataMiesiacS="lipca";break}
case 08: {dataMiesiacS="sierpnia";break}
case 09: {dataMiesiacS="wrze�nia";break}
case 10: {dataMiesiacS="pa�dziernika";break}
case 11: {dataMiesiacS="listopada";break}
case 12: {dataMiesiacS="grudnia";break}
}
dataRokS=slownie(dataRok,1,"");
dataGodzinaS=slownie(dataGodzina,1,".replace(/\\By/g,'a')");
dataMinutaS=slownie(dataMinuta,0,".replace(/\\bdwa\\b/g,'dwie')");
if (dataMinutaS=="jeden") {dataMinutaS="jedna"}
dataSekundaS=slownie(dataSekunda,0,".replace(/\\bdwa\\b/g,'dwie')");
if (dataSekundaS=="jeden") {dataSekundaS="jedna"}
dataMiliSekundaS=slownie(dataMiliSekunda,0,".replace(/\\bdwa\\b/g,'dwie')");
if (dataMiliSekundaS=="jeden") {dataMiliSekundaS="jedna"}
data="Dzi� jest "+dataDzienS+" "+dataMiesiacS+" "+dataRokS+" rok ("+dataDzienTygS+"), godzina "+dataGodzinaS+", "+dataMinutaS+" "+liczebnik(dataMinuta,"minut","a","y","")+", "+dataSekundaS+" "+liczebnik(dataSekunda,"sekund","a","y","")+" i "+dataMiliSekundaS+" "+liczebnik(dataMiliSekunda,"milisekund","a","y","")+".";
}
return data;
}
function ostatniaAktualizacja(jak) {
if (!jak||jak==null||jak==undefined||(jak!="num"&&jak!="str")) {jak="num"}
jak=jak.toString().toLowerCase().substring(0,3);
dataOstAkt=document.lastModified.toString();
dataMiesiac=Math.floor(parseFloat(dataOstAkt.substring(0,dataOstAkt.indexOf("\/"))));
dataOstAkt=dataOstAkt.substring(dataOstAkt.indexOf("\/")+1);
dataDzien=Math.floor(parseFloat(dataOstAkt.substring(0,dataOstAkt.indexOf("\/"))));
dataOstAkt=dataOstAkt.substring(dataOstAkt.indexOf("\/")+1);
dataRok=Math.floor(parseFloat(dataOstAkt.substring(0,dataOstAkt.indexOf(" "))));
dataOstAkt=dataOstAkt.substring(dataOstAkt.indexOf(" ")+1);
dataGodzina=Math.floor(parseFloat(dataOstAkt.substring(0,dataOstAkt.indexOf(":"))));
dataOstAkt=dataOstAkt.substring(dataOstAkt.indexOf(":")+1);
dataMinuta=Math.floor(parseFloat(dataOstAkt.substring(0,dataOstAkt.indexOf(":"))));
dataOstAkt=dataOstAkt.substring(dataOstAkt.indexOf(":")+1);
dataSekunda=Math.floor(parseFloat(dataOstAkt));
wtedy=new Date(dataRok,dataMiesiac-1,dataDzien);
wtedyDzienTyg=wtedy.getDay();
switch (wtedyDzienTyg) {
case 1: {wtedyDzienTyg="Poniedzia�ek";break}
case 2: {wtedyDzienTyg="Wtorek";break}
case 3: {wtedyDzienTyg="�roda";break}
case 4: {wtedyDzienTyg="Czwartek";break}
case 5: {wtedyDzienTyg="Pi�tek";break}
case 6: {wtedyDzienTyg="Sobota";break}
case 0: {wtedyDzienTyg="Niedziela";break}
}
data="";
if (jak=="num") {
data+=dataDzien+"."+dopiszZera(dataMiesiac,2)+"."+dataRok+" ("+wtedyDzienTyg+") o "+dataGodzina+":"+dopiszZera(dataMinuta,2)+":"+dopiszZera(dataSekunda,2);
}
if (jak=="str") {
dataSlownie=slownie(dataDzien,2,"")+" ";
switch (dataMiesiac) {
case 1: {dataSlownie+="stycznia";break}
case 2: {dataSlownie+="lutego";break}
case 3: {dataSlownie+="marca";break}
case 4: {dataSlownie+="kwietnia";break}
case 5: {dataSlownie+="maja";break}
case 6: {dataSlownie+="czerwca";break}
case 7: {dataSlownie+="lipca";break}
case 8: {dataSlownie+="sierpnia";break}
case 9: {dataSlownie+="wrze�nia";break}
case 10: {dataSlownie+="pa�dziernika";break}
case 11: {dataSlownie+="listopada";break}
case 12: {dataSlownie+="grudnia";break}
}
dataSlownie+=" "+slownie(dataRok,2,"")+" roku ("+wtedyDzienTyg+")";
data+=dataSlownie.toLowerCase()+" o godzinie ";
dataM=slownie(dataMinuta,0,".replace(/\\bdwa\\b/g,'dwie')");
if (dataM=="jeden") {dataM="jedna"}
dataS=slownie(dataSekunda,0,".replace(/\\bdwa\\b/g,'dwie')");
if (dataS=="jeden") {dataS="jedna"}
godzinaSlownie=slownie(dataGodzina,2,".replace(/ego/g,'ej')")+", "+dataM+" "+liczebnik(dataMinuta,"minut","a","y","")+" i "+dataS+" "+liczebnik(dataSekunda,"sekund","a","y","");
data+=godzinaSlownie.toLowerCase();
}
return data;
}
function slownie(liczba,typ,kodDoWykonania) {
tempTXT="";
liczba=Math.floor(parseFloat(liczba));
if (Math.floor(liczba%10000/1000)>0) {tempTXT+=slownie(Math.floor(liczba%10000/1000),0)+" "+liczebnik(Math.floor(liczba%10000/1000),"tysi","�c","�ce","�cy")+" "}
switch (Math.floor(liczba%1000/100)) {
case 1: {tempTXT+="sto ";break}
case 2: {tempTXT+="dwie�cie ";break}
case 3: {tempTXT+="trzysta ";break}
case 4: {tempTXT+="czterysta ";break}
case 5: {tempTXT+="pi��set ";break}
case 6: {tempTXT+="sze��set ";break}
case 7: {tempTXT+="siedemset ";break}
case 8: {tempTXT+="osiemset ";break}
case 9: {tempTXT+="dziewi��set ";break}
}
switch (Math.floor(liczba%100/10)) {
case 2: {
if (typ==0) {tempTXT+="dwadzie�cia "}
if (typ==1) {tempTXT+="dwudziesty "}
if (typ==2) {tempTXT+="dwudziestego "}
break;
}
case 3: {
if (typ==0) {tempTXT+="trzydzie�ci "}
if (typ==1) {tempTXT+="trzydziesty "}
if (typ==2) {tempTXT+="trzydziestego "}
break;
}
case 4: {
if (typ==0) {tempTXT+="czterdzie�ci "}
if (typ==1) {tempTXT+="czterdziesty "}
if (typ==2) {tempTXT+="czterdziestego "}
break;
}
case 5: {
if (typ==0) {tempTXT+="pi��dziesi�t "}
if (typ==1) {tempTXT+="pi��dziesi�ty "}
if (typ==2) {tempTXT+="pi��dziesi�tego "}
break;
}
case 6: {
if (typ==0) {tempTXT+="sze��dziesi�t "}
if (typ==1) {tempTXT+="sze��dziesi�ty "}
if (typ==2) {tempTXT+="sze��dziesi�tego "}
break;
}
case 7: {
if (typ==0) {tempTXT+="siedemdziesi�t "}
if (typ==1) {tempTXT+="siedemdziesi�ty "}
if (typ==2) {tempTXT+="siedemdziesi�tego "}
break;
}
case 8: {
if (typ==0) {tempTXT+="osiemdziesi�t "}
if (typ==1) {tempTXT+="osiemdziesi�ty "}
if (typ==2) {tempTXT+="osiemdziesi�tego "}
break;
}
case 9: {
if (typ==0) {tempTXT+="dziewi��dziesi�t "}
if (typ==1) {tempTXT+="dziewi��dziesi�ty "}
if (typ==2) {tempTXT+="dziewi��dziesi�tego "}
break;
}
}
if (liczba<10||liczba>19) {
liczba2=liczba.toString();
liczba2=Math.floor(liczba2.charAt(liczba2.length-1));
switch (liczba2) {
case 0: {
if (liczba==0) {tempTXT+="zero "}
break;
}
case 1: {
if (typ==0) {tempTXT+="jeden "}
if (typ==1) {tempTXT+="pierwszy "}
if (typ==2) {tempTXT+="pierwszego "}
break;
}
case 2: {
if (typ==0) {tempTXT+="dwa "}
if (typ==1) {tempTXT+="drugi "}
if (typ==2) {tempTXT+="drugiego "}
break;
}
case 3: {
if (typ==0) {tempTXT+="trzy "}
if (typ==1) {tempTXT+="trzeci "}
if (typ==2) {tempTXT+="trzeciego "}
break;
}
case 4: {
if (typ==0) {tempTXT+="cztery "}
if (typ==1) {tempTXT+="czwarty "}
if (typ==2) {tempTXT+="czwartego "}
break;
}
case 5: {
if (typ==0) {tempTXT+="pi�� "}
if (typ==1) {tempTXT+="pi�ty "}
if (typ==2) {tempTXT+="pi�tego "}
break;
}
case 6: {
if (typ==0) {tempTXT+="sze�� "}
if (typ==1) {tempTXT+="sz�sty "}
if (typ==2) {tempTXT+="sz�stego "}
break;
}
case 7: {
if (typ==0) {tempTXT+="siedem "}
if (typ==1) {tempTXT+="si�dmy "}
if (typ==2) {tempTXT+="si�dmego "}
break;
}
case 8: {
if (typ==0) {tempTXT+="osiem "}
if (typ==1) {tempTXT+="�smy "}
if (typ==2) {tempTXT+="�smego "}
break;
}
case 9: {
if (typ==0) {tempTXT+="dziewi�� "}
if (typ==1) {tempTXT+="dziewi�ty "}
if (typ==2) {tempTXT+="dziewi�tego "}
break;
}
}
} else {
switch (liczba) {
case 10: {
if (typ==0) {tempTXT+="dziesi�� "}
if (typ==1) {tempTXT+="dziesi�ty "}
if (typ==2) {tempTXT+="dziesi�tego "}
break;
}
case 11: {
if (typ==0) {tempTXT+="jedena�cie "}
if (typ==1) {tempTXT+="jedenasty "}
if (typ==2) {tempTXT+="jedenastego "}
break;
}
case 12: {
if (typ==0) {tempTXT+="dwana�cie "}
if (typ==1) {tempTXT+="dwunasty "}
if (typ==2) {tempTXT+="dwunastego "}
break;
}
case 13: {
if (typ==0) {tempTXT+="trzyna�cie "}
if (typ==1) {tempTXT+="trzynasty "}
if (typ==2) {tempTXT+="trzynastego "}
break;
}
case 14: {
if (typ==0) {tempTXT+="czterna�cie "}
if (typ==1) {tempTXT+="czternasty "}
if (typ==2) {tempTXT+="czternastego "}
break;
}
case 15: {
if (typ==0) {tempTXT+="pi�tna�cie "}
if (typ==1) {tempTXT+="pi�tnasty "}
if (typ==2) {tempTXT+="pi�tnastego "}
break;
}
case 16: {
if (typ==0) {tempTXT+="szesna�cie "}
if (typ==1) {tempTXT+="szesnasty "}
if (typ==2) {tempTXT+="szesnastego "}
break;
}
case 17: {
if (typ==0) {tempTXT+="siedemna�cie "}
if (typ==1) {tempTXT+="siedemnasty "}
if (typ==2) {tempTXT+="siedemnastego "}
break;
}
case 18: {
if (typ==0) {tempTXT+="osiemna�cie "}
if (typ==1) {tempTXT+="osiemnasty "}
if (typ==2) {tempTXT+="osiemnastego "}
break;
}
case 19: {
if (typ==0) {tempTXT+="dziewi�tna�cie "}
if (typ==1) {tempTXT+="dziewi�tnasty "}
if (typ==2) {tempTXT+="dziewi�tnastego "}
break;
}
}
}
tempTXT=tempTXT.substring(0,tempTXT.length-1);
if (kodDoWykonania!=undefined&&(kodDoWykonania!=""||kodDoWykonania!=null)) {kodDoWykonania="tempTXT=tempTXT"+kodDoWykonania;eval(kodDoWykonania)}
return tempTXT;
}
function liczebnik(liczebnikliczba,liczebnikrdzen,liczebnikjeden,liczebnikdwaCztery,liczebnikszescWGore,liczebnikpoprzecinku) {
liczebnikproba=liczebnikliczba.toString();
if (liczebnikproba.indexOf(".")!=-1) {return liczebnikrdzen+liczebnikpoprzecinku}
liczebnikliczba=Math.floor(Math.abs(liczebnikliczba));
liczebnikjed=liczebnikliczba%10;
liczebnikdwa=liczebnikliczba%100;
if (liczebnikliczba==1) {return liczebnikrdzen+liczebnikjeden}
if (liczebnikjed>=2&&liczebnikjed<=4) {
if (liczebnikdwa>=10&&liczebnikdwa<=20) {return liczebnikrdzen+liczebnikszescWGore}
return liczebnikrdzen+liczebnikdwaCztery;
}
return liczebnikrdzen+liczebnikszescWGore;
}
function dopiszZera(dopiszZeraLiczba,dopiszZeraDlugoscLiczby) {
dopiszZeraLiczba=dopiszZeraLiczba.toString();
dopiszZeraLiczbaZer=dopiszZeraDlugoscLiczby-dopiszZeraLiczba.length;
for (var i=1; i<=dopiszZeraLiczbaZer; i++) {dopiszZeraLiczba="0"+dopiszZeraLiczba}
return dopiszZeraLiczba;
}