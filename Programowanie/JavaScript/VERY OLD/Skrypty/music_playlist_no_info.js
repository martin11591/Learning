/*
Najpierw nale�y sporz�dzi� list� �cie�ek plik�w muzycznych (f[a]),
a potem czas�w trwania tych plik�w muzycznych (t[a]) w milisekundach (np. t[0]=291520)
np.
var f=new Array ('Track2.wav','Track3,wav');
var t=new Array (291520,231270);

Foldery trzeba oddziela� znakiem \\ lub / (np."D:\\Muzyka\\" lub "D:/Muzyka/")

Potem nale�y poda� definicj� t�a muzycznego z identyfikatorem (id) "music"
np.
dla IE
<bgsound id="music" src=""></bgsound>

dla NS
<embed id="music" src=""></embed>
*/
b=0;
trc=t.length-1;
muz()
function muz() {
document.all.music.src=f[b];
setTimeout("muz()",t[b]);
b=b+1;
if (b>trc) {b=b-trc-1}
}