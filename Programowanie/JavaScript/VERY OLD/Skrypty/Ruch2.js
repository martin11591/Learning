k=350
w=0
dk=-1
dw=-1
function ruch2() {
document.all['napis2'].style.left=k;
document.all['napis2'].style.top=w;
sk=k+dk;
sw=w+dw;
if (sk<0||sk>350) {dk=-dk}
if (sw<0||sw>320) {dw=-dw}
k=k+dk;
w=w+dw;
setTimeout("ruch2()",20);
}