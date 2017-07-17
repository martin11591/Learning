newwin=window.open();
newwin.focus();
newwin.moveTo(-5,-5);
newwin.resizeTo(screen.availWidth+10,screen.availHeight+10);
newwin.document.write('<html><body scroll=auto><style>img{position:absolute}</style>');
function line(pk1,pw1,pk2,pw2) {
this.df=1;
this.pk1=pk1;
this.pw1=pw1;
this.pk2=pk2;
this.pw2=pw2;
qw=Math.abs(pk2-pk1);
er=Math.abs(pw2-pw1);
if (qw<er) {qw=er}
ty=(pk2-pk1)/qw;
ui=(pw2-pw1)/qw;
this.op=pk1;
this.as=pw1;
this.qw=qw;
this.ty=ty;
this.ui=ui;
kropka="DHTML/img/tt.bmp";
rysuj();
}
function rysuj() {
if (op>-1||op<document.body.clientWidth-1||as>-1||as<document.body.clientHeight-1) {newwin.document.write('<img src='+kropka+' style="left:'+Math.round(op)+'px;top:'+Math.round(as)+'px"></img>')}
op=op+ty;
as=as+ui;
this.df=df+1;
if (df<qw+1) {setTimeout("rysuj()",1)}
}