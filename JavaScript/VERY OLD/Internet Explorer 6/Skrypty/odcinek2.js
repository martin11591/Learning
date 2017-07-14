function odcinek(k1,w1,k2,w2) {
qw=Math.abs(k2-k1);
er=Math.abs(w2-w1);
if (qw<er) {qw=er}
ty=(k2-k1)/qw;
ui=(w2-w1)/qw;
op=k1;
as=w1;
for (var df=1; qw+1; df++) {
okno.document.write('<img src="img/tt.bmp" style="position:absolute;left:'+op+'px;top:'+as+'px">');
op=op+ty;
as=as+ui;
}
}