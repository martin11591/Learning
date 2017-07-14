function odliczanie()
{
aa=a+"a";bb=b+"b";cc=c+"c";dd=d+"d";ee=e+"e";ff=f+"f";
document.image.licznik1.src=eval("c"+aa.substring(0,1)+".src");
document.image.licznik2.src=eval("c"+bb.substring(0,1)+".src");
document.image.licznik3.src=eval("c"+cc.substring(0,1)+".src");
document.image.licznik4.src=eval("c"+dd.substring(0,1)+".src");
document.image.licznik5.src=eval("c"+ee.substring(0,1)+".src");
document.image.licznik6.src=eval("c"+ff.substring(0,1)+".src");
f=f-1;
if (f<0) {f=9;e=e-1}
if (e<0) {e=5;d=d-1}
if (d<0) {d=9;c=c-1}
if (c<0) {c=5;b=b-1}
if (b<0) {b=9;a=a-1}
if (a<0) {a=2;b=3;c=5;d=9;e=5;f=9}
if (a==2&&b==3&&c==5&&d==9&&e==5&&f==9) {alert('Ju¿ nast¹pi³o!')}
setTimeout("licznik()",1000);
}