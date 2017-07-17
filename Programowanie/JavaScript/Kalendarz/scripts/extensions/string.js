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
//		  braki w adresie URL	    //
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
};

String.prototype.capitalize=function(ignore)
{
	cap=this.replace(/('|[0-9]){0,1}[a-ząćęłńóśźż]{1,}/gi,function(x)
	{
		if (x.charAt(0)=="'"||(ignore&&x.toUpperCase()==x||x.charAt(0)=="$"||x.toLowerCase()!=x||x=="cm"||x=="ft"||x=="feat"||x=="vs"||x=="and"||x=="or"||x=="m"||x=="mm"||x=="km")) {return x} else {return x.charAt(0).toUpperCase()+x.substring(1).toLowerCase()};
	});
	return cap;
};

String.prototype.fill=function(maxSize,char,where)
{
	maxSize=Math.floor(parseFloat(maxSize));
	if (!where||(where!=0&&where!=1&&where!="-"&&where!="+")) {where=0} else {where=where.toString().charAt(0)};
	size=this.length;
	fillTmp=this;
	for (var i=size; i<maxSize; i++)
	{
		fillTmp=where=="0"||where=="-"?char+fillTmp:fillTmp+char;
	};
	return fillTmp;
};

String.prototype.clean=function(feats)
{
	x=this.replace(/ {0,}- {0,}/g,"-").replace(/-{2,}/g,"-").replace(/[ _]/g," ").replace(/%20/g," ").replace(/-/g," - ").replace(/ {2,}/g," ");
	if (feats) {x=x.replace(/(feat|ft)/gi,"feat.").replace(/feat[.]{2,}/gi,"feat.")};
	return x;
};

String.prototype.count=function(expression,ignore)
{
	countExprRegExp=new RegExp(expression,(ignore)?"gi":"g");
	countExprCounter=this.match(countExprRegExp);
	return countExprCounter?countExprCounter.length:0;
};

String.prototype.cleanURL=function(docURL)
{
	if (!docURL) {docURL=document.URL};
	docURL=(docURL+"///").replace(/\\/g,"/").replace(/\/{3,}/g,"/");
	tmpURL=this.replace(/\\/g,"/").replace(/\/{3,}/g,"//");
	if (tmpURL.indexOf(":")!=-1&&tmpURL.charAt(tmpURL.indexOf(":")+2)=="/")
	{
		readProtocol=tmpURL.substring(0,tmpURL.indexOf(":"));
	}
	else
	{
		readProtocol=docURL.substring(0,docURL.indexOf(":"));
	};
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
			};
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
			};
		};
	}
	else
	{
		if (tmpURL.count(":")==1)
		{
			if (tmpURL.charAt(1)==":") {tmpURL="file://"+tmpURL} else {tmpURL="http://"+tmpURL};
		};
	};
	return readProtocol=="file"||readProtocol=="ftp"?tmpURL.replace(/%20/g," "):tmpURL.replace(/ /g,"%20");
};

String.prototype.readURL=function(docURL)
{
	tmpURL=this.cleanURL(docURL);
	if (readProtocol=="file"||readProtocol=="ftp")
	{
		readLocation=tmpURL.substring(tmpURL.indexOf(":")+3,tmpURL.lastIndexOf("/"));
		readFilename=tmpURL.substring(tmpURL.lastIndexOf("/")+1,tmpURL.lastIndexOf("."));
		readExtension=tmpURL.substring(tmpURL.lastIndexOf(".")+1).toLowerCase();
		readExtensionDescription=undefined;
		if (readExtension=="wav") {readExtensionDescription=lang.set.extensionWav};
		if (readExtension=="mp3") {readExtensionDescription=lang.set.extensionMp3};
		if (readExtension=="avi") {readExtensionDescription=lang.set.extensionAvi};
		return {protocol: readProtocol, location: readLocation, filename: readFilename, extension: readExtension, extensionDescription: readExtensionDescription, url: tmpURL};
	}
	else
	{
		readLocation=tmpURL.substring(tmpURL.indexOf(":")+3);
		readHomeSite=tmpURL.substring(tmpURL.indexOf(":")+3,tmpURL.indexOf("/",tmpURL.indexOf(":")+3));
		readDomain=readHomeSite.substring(readHomeSite.lastIndexOf(".")+1).toLowerCase();
		readDomainDescription=undefined;
		if (readDomain=="pl") {readDomainDescription=lang.set.domainPoland};
		if (readDomain=="eu") {readDomainDescription=lang.set.domainEurope};
		if (readDomain=="en") {readDomainDescription=lang.set.domainEngland};
		if (readDomain=="de") {readDomainDescription=lang.set.domainGermany};
		if (readDomain=="fr") {readDomainDescription=lang.set.domainFrance};
		if (readDomain=="ru") {readDomainDescription=lang.set.domainRussian};
		if (readDomain=="tv") {readDomainDescription=lang.set.domainTelevision};
		if (readDomain=="org") {readDomainDescription=lang.set.domainOrganisation};
		return {protocol: readProtocol, location: readLocation, homeSite: readHomeSite, domain: readDomain, domainDescription: readDomainDescription, url: tmpURL};
	};
	return {protocol: readProtocol, url: tmpURL};
};