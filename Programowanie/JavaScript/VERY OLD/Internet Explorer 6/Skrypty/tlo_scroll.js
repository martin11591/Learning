i=0;
ruch(5);
function ruch(di) {
this.di=di;
document.body.style.backgroundPositionY=i;
i+=di;
timerTlo=setTimeout("ruch(di)",1);
}