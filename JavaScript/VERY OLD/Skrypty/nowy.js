wlacz=0
function set(warstwa,x,y,w,h,p) {
if (warstwa==null||warstwa=="") {return} else {this.warstwa=warstwa}
if (x==null) {x=document.all[warstwa].style.left}
if (y==null) {y=document.all[warstwa].style.top}
if (w==null) {w=document.all[warstwa].width}
if (h==null) {h=document.all[warstwa].height}
if (w<1) {w=1}
if (h<1) {h=1}
if (p<0) {p=0}
if (p==null||p>100) {p=100}
with (document.all[warstwa].style)
{
left=x;
top=y;
width=w;
height=h;
filter="alpha(opacity="+p+")";
}
}
function ruch(warstwa,k1,w1,k2,w2,szybkosc,typ,czas) {
if (wlacz>0) {stopp(warstwa)}
wlacz=1;
this.dk=0;
this.dw=0;
if (warstwa==null||warstwa=="") {return} else {this.warstwa=warstwa}
if (k1==null) {k1=document.all[warstwa].style.left} else {this.k1=k1}
if (k2==null) {k2=document.all[warstwa].style.left} else {this.k2=k2}
if (w1==null) {w1=document.all[warstwa].style.top} else {this.w1=w1}
if (w2==null) {w2=document.all[warstwa].style.top} else {this.w2=w2}
if (szybkosc==null) {szybkosc=1}
if (typ==null||typ<0||typ>3) {typ=1}
if (czas<1) {this.czas=1} else {this.czas=czas}
qw=Math.abs(k2-k1);
er=Math.abs(w2-w1);
if (qw<er) {qw=er}
this.dk=szybkosc*(k2-k1)/qw;
this.dw=szybkosc*(w2-w1)/qw;
this.kk=k1;
this.ww=w1;
if (typ==1) {norm()}
if (typ==2) {odbij()}
if (typ==3) {wkolo()}
}
function norm() {
this.a=1;
with (document.all[warstwa].style) {left=kk;top=ww}
kk=kk+dk;
ww=ww+dw;
if (kk>k2||ww>w2) {this.a=-1;return}
rr=setTimeout("norm()",czas);
}
function odbij() {
with (document.all[warstwa].style) {left=kk;top=ww}
kk=kk+dk;ww=ww+dw;
if (kk<k1||ww<w1) {dk=-dk;dw=-dw}
if (kk>k2||ww>w2) {dk=-dk;dw=-dw}
rr=setTimeout("odbij()",czas);
}
function wkolo() {
with (document.all[warstwa].style) {left=kk;top=ww}
kk=kk+dk;ww=ww+dw;
if (kk>k2||ww>w2) {kk=k1;ww=w1}
rr=setTimeout("wkolo()",czas);
}
function stopp(warstwa) {
clearTimeout(rr);
with (document.all[warstwa].style) {left=k1;top=w1}
wlacz=0;
}
function stopm(warstwa) {
clearTimeout(rr);
wlacz=0;
}
function stopk(warstwa) {
clearTimeout(rr);
with (document.all[warstwa].style) {left=k2;top=w2}
wlacz=0;
}