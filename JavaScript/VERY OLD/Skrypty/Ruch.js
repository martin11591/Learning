x=0
y=0
dx=1
dy=1
function ruch() {
document.all['napis'].style.left=x;
document.all['napis'].style.top=y;
sx=x+dx;
sy=y+dy;
if (sx<0||sx>350) {dx=-dx}
if (sy<0||sy>320) {dy=-dy}
x=x+dx;
y=y+dy;
setTimeout("ruch()",0);
}