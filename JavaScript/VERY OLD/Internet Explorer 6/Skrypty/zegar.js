function zegar() 
{ 
teraz=new Date(); 
godzina=teraz.getHours(); 
minuta=teraz.getMinutes(); 
sekunda=teraz.getSeconds(); 
dzien=teraz.getDate(); 
miesiac=teraz.getMonth()+1; 
rok=teraz.getYear(); 
ld=teraz.getDay();
if (ld==0) {nd="niedziela"};
if (ld==1) {nd="poniedzia³ek"};
if (ld==2) {nd="wtorek"};
if (ld==3) {nd="œroda"};
if (ld==4) {nd="czwartek"};
if (ld==5) {nd="pi¹tek"}
if (ld==6) {nd="sobota"}
if (miesiac==1) {nm="stycznia"};
if (miesiac==2) {nm="luty"};
if (miesiac==3) {nm="marca"};
if (miesiac==4) {nm="kwietnia"};
if (miesiac==5) {nm="maja"};
if (miesiac==6) {nm="czerwca"};
if (miesiac==7) {nm="lipca"};
if (miesiac==8) {nm="sierpnia"};
if (miesiac==9) {nm="wrzeœnia"};
if (miesiac==10) {nm="paŸdziernika"};
if (miesiac==11) {nm="listopada"};
if (miesiac==12) {nm="grudnia"};
if (sekunda < 10) {sekunda="0"+sekunda};
if (minuta < 10) {minuta="0"+minuta};
if (godzina < 10) {godzina="0"+godzina};
if (dzien < 10) {dzien="0"+dzien};
if (miesiac < 10) {miesiac="0"+miesiac};
czas="Czas:"+godzina+":"+minuta+":"+sekunda+"      ";
czas2="Czas:"+godzina+":"+minuta+":"+sekunda+"<br>"; 
data="Data:"+dzien+"."+miesiac+"."+rok+" ("+dzien+" "+nm+" "+rok+")      Dzisiaj jest "+nd;
data2="Data:"+dzien+"."+miesiac+"."+rok+"&nbsp("+dzien+"&nbsp"+nm+"&nbsp"+rok+")<br>Dzisiaj jest "+nd;
if (dzien==09&&miesiac==06) {data=data+"      Urodziny S³awomira Podraza";data2=data2+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<b>Urodziny S³awomira Podraza</b>"};
if (dzien==02&&miesiac==10) {data=data+"      Urodziny Wioletty Podraza";data2=data2+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<b>Urodziny Wioletty Podraza</b>"};
if (dzien==15&&miesiac==10) {data=data+"      Urodziny Marcina Podraza";data2=data2+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<b>Urodziny Marcina Podraza</b>"};
if (dzien==24&&miesiac==10) {data=data+"      Imieniny Marcina Podraza";data2=data2+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<b>Imieniny Marcina Podraza</b>"};
if (dzien==31&&miesiac==12) {data=data+"      Œwiêto:SYLWESTER";data2=data2+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<font color=red><b>Œwiêto:SYLWESTER</b></font>"};
if (dzien==1&&miesiac==1) {data=data+"      Œwiêto:NOWY ROK";data2=data2+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<font color=red><b>Œwiêto:NOWY ROK</b></font>"};
defaultStatus=czas+data;
document.form.cz.value=czas2+data2;
zegarek.innerHTML='<font size=+3 color=orange>'+czas2+data2;
setTimeout("zegar()",1000);
}