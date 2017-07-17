///////////////////////////////////////////////////
//						 //
// Funkcja dająca 'uchwyt' do obiektu o danym ID //
//						 //
///////////////////////////////////////////////////

function getID(id)
{
	if (document.all) {return document.all[id]} else {return document.layers?document.layers[id]:document.getElementById(id)};
};