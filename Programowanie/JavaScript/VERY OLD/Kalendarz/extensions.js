/*	
	Skrypt dodaje dodatkowe możliwości
	obsługi ciągów znaków i tablic
	oraz dodaje funkcje matematyczne

						*/

///////////////////////////////////////////////////
//						 //
// Funkcja dająca 'uchwyt' do obiektu o danym ID //
//						 //
///////////////////////////////////////////////////

function getID(id)
{
	if (document.all) {return document.all[id]} else {return document.getElementById(id)}
}

/////////////////////////////////////////////////////////////
//							   //
// Funkcja działająca w przypadku zmiany wartości zmiennej //
//							   //
/////////////////////////////////////////////////////////////

variableChangeData=new Object();
variableChangeData.variables=new Array();
variableChangeData.conditions=new Array();
variableChangeData.executes=new Array();
window.onVariableChange=function(variable,conditions,execute)
{
	
}

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
}
if (naviUsr.indexOf("Firefox")!=-1)
{
	navi.ie=false;
	navi.moz=true;
	navi.name=naviUsr.substring(0,naviUsr.indexOf("/"))+naviUsr.substring(naviUsr.lastIndexOf(" "),naviUsr.lastIndexOf("/"));
	navi.ver=naviUsr.substring(naviUsr.lastIndexOf("/")+1);
	navi.HTMLver=naviUsr.substring(naviUsr.indexOf("/")+1,naviUsr.indexOf(" "));
}
navi.fullName=navi.name+" "+navi.ver;

//////////////////////////////////////////////
//					    //
// Dodatkowe funkcje doytczące ciągu znaków //
//					    //
//////////////////////////////////////////////
//					    //
//	   exPL - usuwanie polskich znaków  //
//		  			    //
//   capitalize - pierwsze litery duże,	    //
//		  reszta małe; co słowo	    //
//		  			    //
//	  clean - zamienianie podkreśleń    //
//		  (_) i ciągu '%20' na	    //
//		  odstępy; usuwanie wielu   //
//		  odstępów i pauz	    //
//					    //
//	   fill	- wypełnia ciąg znaków	    //
//		  dowolnym znakiem tak,	    //
//		  aby miał zadaną długość   //
//					    //
//	  count	- zwraca ilość wystąpień    //
//		  danego wyrażenia w ciagu  //
//					    //
//     cleanURL	- 'czyści' i uzupełnia	    //
//		  braki w adresu URL	    //
//		  			    //
//	readURL	- odczytuje dane z adresu   //
//		  URL			    //
//					    //
//////////////////////////////////////////////

String.prototype.exPL=function()
{
	return this.replace(/[ąćęłńóśźż]/gi,function(x)
	{
		big=(x.toUpperCase()==x)?true:false;
		x=x.toLowerCase();
		x=x=="ą"?"a":x=="ć"?"c":x=="ę"?"e":x=="ł"?"l":x=="ń"?"n":x=="ó"?"o":x=="ś"?"s":x=="ź"||x=="ż"?"z":x;
		return big?(x.toUpperCase()):x;
	});
}

String.prototype.capitalize=function(ignore)
{
	cap=this.replace(/('|[0-9]){0,1}[a-ząćęłńóśźż]{1,}/gi,function(x)
	{
		if (x.charAt(0)=="'"||(ignore&&x.toUpperCase()==x||x.charAt(0)=="$"||x.toLowerCase()!=x||x=="cm"||x=="ft"||x=="feat"||x=="vs"||x=="and"||x=="or"||x=="m"||x=="mm"||x=="km")) {return x} else {return x.charAt(0).toUpperCase()+x.substring(1).toLowerCase()}
	});
	return cap;
}

String.prototype.fill=function(maxSize,char,where)
{
	maxSize=Math.floor(parseFloat(maxSize));
	if (!where||(where!=0&&where!=1&&where!="-"&&where!="+")) {where=0} else {where=where.toString().charAt(0)}
	size=this.length;
	fillTmp=this;
	for (var i=size; i<maxSize; i++)
	{
		fillTmp=where=="0"||where=="-"?char+fillTmp:fillTmp+char;
	}
	return fillTmp;
}

String.prototype.clean=function(feats)
{
	x=this.replace(/ {0,}- {0,}/g,"-").replace(/-{2,}/g,"-").replace(/[ _]/g," ").replace(/%20/g," ").replace(/-/g," - ").replace(/ {2,}/g," ");
	if (feats) {x=x.replace(/(feat|ft)/gi,"feat.").replace(/feat[.]{2,}/gi,"feat.")}
	return x;
}

String.prototype.count=function(char,ignore)
{
	countTmp=this;
	if (ignore) {char=char.toLowerCase();countTmp=countTmp.toLowerCase()}
	return countTmp.split(char).length-1;
}

String.prototype.cleanURL=function(docURL)
{
	if (!docURL) {docURL=document.URL}
	docURL=(docURL+"///").replace(/\\/g,"/").replace(/\/{3,}/g,"/");
	tmpURL=this.replace(/\\/g,"/").replace(/\/{3,}/g,"//");
	if (tmpURL.indexOf(":")!=-1&&tmpURL.charAt(tmpURL.indexOf(":")+2)=="/")
	{
		readProtocol=tmpURL.substring(0,tmpURL.indexOf(":"));
	}
	else
	{
		readProtocol=docURL.substring(0,docURL.indexOf(":"));
	}
	readProtocol=readProtocol.toLowerCase();
	if (tmpURL.count(":")==0)
	{
		if (tmpURL.substring(0,2)=="./")
		{
			if (readProtocol=="file"||readProtocol=="ftp")
			{
				tmpURL=docURL.substring(0,docURL.lastIndexOf(":")+1)+tmpURL.substring(1);
			}
			else
			{
				tmpURL=docURL.substring(0,docURL.indexOf("/",docURL.indexOf(":")+3))+tmpURL.substring(1);
			}
		}
		else
		{
			if (tmpURL.substring(0,3)=="../")
			{
				docURL=docURL.substring(0,docURL.lastIndexOf("/",docURL.lastIndexOf("/")-1));
				tmpURL=tmpURL.substring(3).cleanURL(docURL);
			}
			else
			{
				if (tmpURL.charAt(0)=="/") {tmpURL=tmpURL.substring(1)}
				tmpURL=docURL+tmpURL;
			}
		}
	}
	else
	{
		if (tmpURL.count(":")==1)
		{
			if (tmpURL.charAt(1)==":") {tmpURL="file://"+tmpURL} else {tmpURL="http://"+tmpURL}
		}
	}
	return readProtocol=="file"||readProtocol=="ftp"?tmpURL.replace(/%20/g," "):tmpURL.replace(/ /g,"%20");
}

String.prototype.readURL=function(docURL)
{
	tmpURL=this.cleanURL(docURL);
	if (readProtocol=="file"||readProtocol=="ftp")
	{
		readLocation=tmpURL.substring(tmpURL.indexOf(":")+3,tmpURL.lastIndexOf("/"));
		readFilename=tmpURL.substring(tmpURL.lastIndexOf("/")+1,tmpURL.lastIndexOf("."));
		readExtension=tmpURL.substring(tmpURL.lastIndexOf(".")+1).toLowerCase();
		readExtensionDescription=undefined;
		if (readExtension=="wav") {readExtensionDescription=lang.set.extensionWav}
		if (readExtension=="mp3") {readExtensionDescription=lang.set.extensionMp3}
		if (readExtension=="avi") {readExtensionDescription=lang.set.extensionAvi}
		return {protocol: readProtocol, location: readLocation, filename: readFilename, extension: readExtension, extensionDescription: readExtensionDescription, url: tmpURL};
	}
	else
	{
		readLocation=tmpURL.substring(tmpURL.indexOf(":")+3);
		readHomeSite=tmpURL.substring(tmpURL.indexOf(":")+3,tmpURL.indexOf("/",tmpURL.indexOf(":")+3));
		readDomain=readHomeSite.substring(readHomeSite.lastIndexOf(".")+1).toLowerCase();
		readDomainDescription=undefined;
		if (readDomain=="pl") {readDomainDescription=lang.set.domainPoland}
		if (readDomain=="eu") {readDomainDescription=lang.set.domainEurope}
		if (readDomain=="en") {readDomainDescription=lang.set.domainEngland}
		if (readDomain=="de") {readDomainDescription=lang.set.domainGermany}
		if (readDomain=="fr") {readDomainDescription=lang.set.domainFrance}
		if (readDomain=="ru") {readDomainDescription=lang.set.domainRussian}
		if (readDomain=="tv") {readDomainDescription=lang.set.domainTelevision}
		if (readDomain=="org") {readDomainDescription=lang.set.domainOrganisation}
		return {protocol: readProtocol, location: readLocation, homeSite: readHomeSite, domain: readDomain, domainDescription: readDomainDescription, url: tmpURL};
	}
	return {protocol: readProtocol, url: tmpURL};
}

////////////////////////////////////////////////
//					      //
// Dodatkowe funkcje do zarządzania tablicami //
//					      //
////////////////////////////////////////////////
//					      //
//	   move	- przenosi element z pozycji  //
//		  A do pozycji B utrzymując   //
//		  kolejność elementów	      //
//					      //
//	  rePos	- zamienia pozycję elementu   //
//		  A z pozycją elementu B      //
//					      //
//	 insert	- wstawia element na	      //
//		  konkretną pozycję	      //
//					      //
//	 change	- podmienia jeden element na  //
//		  inny			      //
//					      //
//	 delPos	- usuwa element na zadanej    //
//		  pozycji		      //
//					      //
////////////////////////////////////////////////

Array.prototype.move=function(moveFrom,moveTo)
{
	if (moveFrom<0||moveFrom>this.length||moveTo<0||moveTo>this.length) {return this}
	moveTmp=new Array();
	for (var i=0; i<this.length; i++)
	{
		if (i==moveFrom) {continue}
		if (i==moveTo) {moveTmp.push(this[moveFrom])}
		moveTmp.push(this[i]);
	}
	return moveTmp;
}

Array.prototype.rePos=function(rePosFrom,rePosTo)
{
	if (rePosFrom<0||rePosFrom>this.length||rePosTo<0||rePosTo>this.length) {return this}
	rePosTmp=new Array();
	for (var i=0; i<this.length; i++)
	{
		if (i==rePosFrom) {rePosTmp.push(this[rePosTo]);continue}
		if (i==rePosTo) {rePosTmp.push(this[rePosFrom]);continue}
		rePosTmp.push(this[i]);
	}
	return rePosTmp;
}

Array.prototype.insert=function(insEl,insPos)
{
	if (insPos<0||insPos>this.length) {return this}
	insertTmp=new Array();
	for (var i=0; i<this.length; i++)
	{
		if (i==insPos) {insertTmp.push(insEl)}
		insertTmp.push(this[i]);
	}
	return insertTmp;
}

Array.prototype.change=function(chgEl,chgPos)
{
	if (chgPos<0||chgPos>this.length) {return this}
	changeTmp=new Array();
	for (var i=0; i<this.length; i++)
	{
		if (i==chgPos) {changeTmp.push(chgEl);continue}
		changeTmp.push(this[i]);
	}
	return changeTmp;
}

Array.prototype.delPos=function(delPosition)
{
	if (this.length<1||!delPosition||isNaN(delPosition)||delPosition==undefined||delPosition<0||delPosition>this.length) {return this}
	delPosTmp=new Array();
	for (var i=0; i<this.length; i++)
	{
		if (i==delPosition) {continue}
		delPosTmp.push(this[i]);
	}
	return delPosTmp;
}

/////////////////////////////////////////////////////
//						   //
//         Dodatkowe działania matematyczne        //
//						   //
/////////////////////////////////////////////////////
//						   //
// 	Math.round2 - przybliżanie liczby do	   //
//		      określonej liczby miejsc	   //
//		      przecinku			   //
//						   //
//     Math.percent - obliczanie procentów	   //
//		      z dowolnej liczby		   //
//						   //
// Math.timeToParam - przeliczanie czasu całko-	   //
//		      witego na konkretną	   //
//		      jednostkę			   //
//						   //
// Math.paramToTime - przeliczanie konkretnej	   //
//		      jednostki na czas całkowity  //
//						   //
// Math.timeElapsed - oblicza ile czasu upłynęło   //
//		      od jednej daty do drugiej	   //
//						   //
/////////////////////////////////////////////////////

Math.round2=function(num,pos)
{
	if (pos)
	{
		pos=Math.floor(parseFloat(pos));
		num=Math.round(num*Math.pow(10,pos))/Math.pow(10,pos);
	}
	return pos==0||!pos?Math.round(num):num;
}

Math.percent=function(actual,overall,pos,max)
{
	if (!max) {max=100}
	percentTmp=actual*max/overall;
	if (pos)
	{
		pos=Math.floor(parseFloat(pos));
		percentTmp=Math.round2(percentTmp,pos);
	}
	return pos==0?Math.round(percentTmp):percentTmp;
}

Math.timeToParam=function(data,parameter)
{
	parameter=parameter.substring(0,2).toLowerCase();
	if (parameter!="ms"&&parameter!="s"&&parameter!="m"&&parameter!="h"&&parameter!="d"&&parameter!="w"&&parameter!="y") {parameter="ms"}
	param=0;
	if (data.ms) {param=param+(Math.floor(parseFloat(data.ms))*(parameter=="s"?1/1000:parameter=="m"?1/60*1/1000:parameter=="h"?1/60*1/60*1/1000:parameter=="d"?1/24*1/60*1/60*1/1000:parameter=="w"?1/7*1/24*1/60*1/60*1/1000:parameter=="y"?1/(365.25/7)*1/7*1/24*1/60*1/60*1/1000:1))}
	if (data.s) {param=param+(Math.floor(parseFloat(data.s))*(parameter=="ms"?1000:parameter=="m"?1/60:parameter=="h"?1/60*1/60:parameter=="d"?1/24*1/60*1/60:parameter=="w"?1/7*1/24*1/60*1/60:parameter=="y"?1/(365.25/7)*1/7*1/24*1/60*1/60:1))}
	if (data.m) {param=param+(Math.floor(parseFloat(data.m))*(parameter=="ms"?60*1000:parameter=="s"?60:parameter=="h"?1/60:parameter=="d"?1/24*1/60:parameter=="w"?1/7*1/24*1/60:parameter=="y"?1/(365.25/7)*1/7*1/24*1/60:1))}
	if (data.h) {param=param+(Math.floor(parseFloat(data.h))*(parameter=="ms"?60*60*1000:parameter=="s"?60*60:parameter=="m"?60:parameter=="d"?1/24:parameter=="w"?1/7*1/24:parameter=="y"?1/(365.25/7)*1/7*1/24:1))}
	if (data.d) {param=param+(Math.floor(parseFloat(data.d))*(parameter=="ms"?24*60*60*1000:parameter=="s"?24*60*60:parameter=="m"?24*60:parameter=="h"?24:parameter=="w"?1/7:parameter=="y"?1/(365.25/7)*1/7:1))}
	if (data.w) {param=param+(Math.floor(parseFloat(data.w))*(parameter=="ms"?7*24*60*60*1000:parameter=="s"?7*24*60*60:parameter=="m"?7*24*60:parameter=="h"?7*24:parameter=="d"?7:parameter=="y"?1/(365.25/7):1))}
	if (data.y) {param=param+(Math.floor(parseFloat(data.y))*(parameter=="ms"?(365.25/7)*7*24*60*60*1000:parameter=="s"?(365.25/7)*7*24*60*60:parameter=="m"?(365.25/7)*7*24*60:parameter=="h"?(365.25/7)*7*24:parameter=="d"?(365.25/7)*7:parameter=="w"?(365.25/7):1))}
	return param;
}

Math.paramToTime=function(data,parameter)
{
	parameter=parameter.substring(0,2).toLowerCase();
	if (parameter!="ms"&&parameter!="s"&&parameter!="m"&&parameter!="h"&&parameter!="d"&&parameter!="w"&&parameter!="y") {parameter="ms"}
	data=data*(parameter=="s"?1000:parameter=="m"?60*1000:parameter=="h"?60*60*1000:parameter=="d"?24*60*60*1000:parameter=="w"?7*24*60*60*1000:parameter=="y"?(365.25/7)*7*24*60*60*1000:1);
	y=Math.floor(parseFloat(data/1000/60/60/24/7/(365.25/7)));
	data=data-y*1000*60*60*24*7*(365.25/7);
	w=Math.floor(parseFloat(data/1000/60/60/24/7));
	data=data-w*1000*60*60*24*7;
	d=Math.floor(parseFloat(data/1000/60/60/24));
	data=data-d*1000*60*60*24;
	h=Math.floor(parseFloat(data/1000/60/60));
	data=data-h*1000*60*60;
	m=Math.floor(parseFloat(data/1000/60));
	data=data-m*1000*60;
	s=Math.floor(parseFloat(data/1000));
	data=data-s*1000;
	ms=Math.floor(parseFloat(data));
	return {y: y, w: w, d: d, h: h, m: m, s: s, ms: ms}
}

Math.timeElapsed=function(date1,date2,resultType,parameter)
{
	if (!date1) {date1=new Date().getTime()}
	if (!date2) {date2=new Date().getTime()}
	if (date1==date2)
	{
		if (!resultType||resultType==0) {return {y: 0, w: 0, d: 0, h: 0, m: 0, s: 0, ms: 0}}
	}
}