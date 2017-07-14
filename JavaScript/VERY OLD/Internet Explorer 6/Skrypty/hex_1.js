/* Ten skrypt przelicza liczby z granicy 0-255 na liczby systemu szesnastkowego */
/* Autor: M.A.R.T.I.N. */
/* e-Mail: marcinpodraza@poczta.onet.pl */
/* Nie zapewniam natychmiastowej odpowiedzi na Wasze listy */
function licz(liczba) {
l1=parseInt(liczba/16);
if(l1>=0&&l1<=9){hex=l1.toString()}
if(l1==10){hex="A"}
if(l1==11){hex="B"}
if(l1==12){hex="C"}
if(l1==13){hex="D"}
if(l1==14){hex="E"}
if(l1==15){hex="F"}
l2=liczba%16;
if(l2>=0&&l2<=9){hex+=l2.toString()}
if(l2==10){hex+="A"}
if(l2==11){hex+="B"}
if(l2==12){hex+="C"}
if(l2==13){hex+="D"}
if(l2==14){hex+="E"}
if(l2==15){hex+="F"}
return hex;
}