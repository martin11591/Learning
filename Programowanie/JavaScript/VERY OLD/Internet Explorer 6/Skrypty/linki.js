a=new Array ('#0000ff','#1111ff','#2222ff','#3333ff','#4444ff','#5555ff','#6666ff','#7777ff','#8888ff','#9999ff','#aaaaff','#bbbbff','#ccccff','#ddddff','#eeeeff','#ffffff')
b=new Array ('#ff0000','#ff1111','#ff2222','#ff3333','#ff4444','#ff5555','#ff6666','#ff7777','#ff8888','#ff9999','#ffaaaa','#ffbbbb','#ffcccc','#ffdddd','#ffeeee','#ffffff')
c=new Array ('#00ff00','#11ff11','#22ff22','#33ff33','#44ff44','#55ff55','#66ff66','#77ff77','#88ff88','#99ff99','#aaffaa','#bbffbb','#ccffcc','#ddffdd','#eeffee','#ffffff')
aa=0
bb=7
cc=15
ak=1
bk=1
ck=1
function linki() 
{
document.linkColor=a[aa];
document.vlinkColor=b[bb];
sa=aa+ak;
sb=bb+bk;
sc=cc+ck;
if (sa<0||sa>15) {ak=-ak}
if (sb<0||sb>15) {bk=-bk}
if (sc<0||sc>15) {ck=-ck}
aa=aa+ak;
bb=bb+bk;
cc=cc+ck;
setTimeout("linki()",0)
}