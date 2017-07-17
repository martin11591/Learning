//////////////////////////////////////////////////
//						//
// Obiekt zwracający informacje o przeglądarce: //
//						//
//////////////////////////////////////////////////
//						//
//     navi.name - nazwa przeglądarki		//
//						//
//      navi.ver - wersja przeglądarki		//
//						//
//  navi.HTMLver - wersja HTML w przeglądarce	//
//						//
// navi.fullName - pełna nazwa przeglądarki z	//
//		   wersją			//
//						//
//////////////////////////////////////////////////

navi=new Object();
naviUsr=navigator.userAgent;
if (naviUsr.indexOf("MSIE")!=-1)
{
	navi.ie=true;
	navi.moz=false;
	navi.name=navigator.appName;
	navi.ver=naviUsr.substring(naviUsr.indexOf("MSIE")+5,naviUsr.indexOf(";",naviUsr.indexOf(";")+1));
	navi.HTMLver=naviUsr.substring(naviUsr.indexOf("/")+1,naviUsr.indexOf(" "));
};
if (naviUsr.indexOf("Firefox")!=-1)
{
	navi.ie=false;
	navi.moz=true;
	navi.name=naviUsr.substring(0,naviUsr.indexOf("/"))+naviUsr.substring(naviUsr.lastIndexOf(" "),naviUsr.lastIndexOf("/"));
	navi.ver=naviUsr.substring(naviUsr.lastIndexOf("/")+1);
	navi.HTMLver=naviUsr.substring(naviUsr.indexOf("/")+1,naviUsr.indexOf(" "));
};
navi.fullName=navi.name+" "+navi.ver;