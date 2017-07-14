function full_screen(w,h,plik,typ) {
mx=screen.width;
my=screen.height;
typ=typ.toString().toLowerCase();
if(typ=="0"||typ=="image"||typ=="obraz"){ss="src"}
if(typ=="1"||typ=="video"||typ=="wideo"){ss="dynsrc"}
aa=window.open("","","fullscreen=yes");
aa.document.write('<html><body bgcolor=black onclick=\"window.close()\" scroll=no style=\"margin:0px\"><table border=0><td style=\"position:absolute;left:-1px;top:-1px;align:center;vertical-align:middle\" width='+mx+' height='+my+'><img id=\"film1\" '+ss+'=\"'+plik+'\" style=\"border:none\" ');
if(w>h){aa.document.write('width=100%')}else{aa.document.write('height=100%')}
aa.document.write(' loop=infinite></img></td></table></body></html>');
}