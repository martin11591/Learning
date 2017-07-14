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