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
//    Math.binToDec - zamiana liczby systemu bi-   //
//		      narnego na dziesiętny	   //
//						   //
//    Math.decToBin - zamiana liczby systemu dzie- //
//		      siętnego na binarny	   //
//						   //
//    Math.hexToDec - zamiana liczby systemu he-   //
//		      ksadecymalnego na dziesiętny //
//						   //
//    Math.decToHex - zamiana liczby systemu dzie- //
//		      siętnego na heksadecymalny   //
//						   //
/////////////////////////////////////////////////////

Math.round2=function(num,pos)
{
	if (pos)
	{
		pos=Math.floor(parseFloat(pos));
		num=Math.round(num*Math.pow(10,pos))/Math.pow(10,pos);
	};
	return pos==0||!pos?Math.round(num):num;
};

Math.percent=function(actual,overall,pos,max)
{
	if (!max) {max=100};
	percentTmp=actual*max/overall;
	if (pos)
	{
		pos=Math.floor(parseFloat(pos));
		percentTmp=Math.round2(percentTmp,pos);
	};
	return pos==0?Math.round(percentTmp):percentTmp;
};

Math.timeToParam=function(data,parameter)
{
	parameter=parameter.toString().toLowerCase().substring(0,4);
	if (parameter!="msec"&&parameter!="sec"&&parameter!="min"&&parameter!="hrs"&&parameter!="day"&&parameter!="week"&&parameter!="mnth"&&parameter!="year") {parameter="msec"};
	param=0;
	if (!data.msec) {data.msec=0};
	if (!data.sec) {data.sec=0};
	if (!data.min) {data.min=0};
	if (!data.hrs) {data.hrs=0};
	if (!data.day) {data.day=0};
	if (!data.week) {data.week=0};
	if (!data.mnth) {data.mnth=0};
	if (!data.year) {data.year=0};
	if (data.msec!=0) {param=param+(Math.floor(parseFloat(Math.abs(data.msec)))*(parameter=="sec"?1/1000:parameter=="min"?1/60*1/1000:parameter=="hrs"?1/60*1/60*1/1000:parameter=="day"?1/24*1/60*1/60*1/1000:parameter=="week"?1/7*1/24*1/60*1/60*1/1000:parameter=="mnth"?1/(30.4375/7)*1/7*1/24*1/60*1/60*1/1000:parameter=="year"?1/12*1/(30.4375/7)*1/7*1/24*1/60*1/60*1/1000:1))};
	if (data.sec!=0) {param=param+(Math.floor(parseFloat(Math.abs(data.sec)))*(parameter=="msec"?1000:parameter=="min"?1/60:parameter=="hrs"?1/60*1/60:parameter=="day"?1/24*1/60*1/60:parameter=="week"?1/7*1/24*1/60*1/60:parameter=="mnth"?1/(30.4375/7)*1/7*1/24*1/60:parameter=="year"?1/12*1/(30.4375/7)*1/7*1/24*1/60*1/60:1))};
	if (data.min!=0) {param=param+(Math.floor(parseFloat(Math.abs(data.min)))*(parameter=="msec"?60*1000:parameter=="sec"?60:parameter=="hrs"?1/60:parameter=="day"?1/24*1/60:parameter=="week"?1/7*1/24*1/60:parameter=="mnth"?1/(30.4375/7)*1/7*1/24*1/60:parameter=="year"?1/12*1/(30.4375/7)*1/7*1/24*1/60:1))};
	if (data.hrs!=0) {param=param+(Math.floor(parseFloat(Math.abs(data.hrs)))*(parameter=="msec"?60*60*1000:parameter=="sec"?60*60:parameter=="min"?60:parameter=="day"?1/24:parameter=="week"?1/7*1/24:parameter=="mnth"?1/(30.4375/7)*1/7*1/24:parameter=="year"?1/12*1/(30.4375/7)*1/7*1/24:1))};
	if (data.day!=0) {param=param+(Math.floor(parseFloat(Math.abs(data.day)))*(parameter=="msec"?24*60*60*1000:parameter=="sec"?24*60*60:parameter=="min"?24*60:parameter=="hrs"?24:parameter=="week"?1/7:parameter=="mnth"?1/(30.4375/7)*1/7:parameter=="year"?1/12*1/(30.4375/7)*1/7:1))};
	if (data.week!=0) {param=param+(Math.floor(parseFloat(Math.abs(data.week)))*(parameter=="msec"?7*24*60*60*1000:parameter=="sec"?7*24*60*60:parameter=="min"?7*24*60:parameter=="hrs"?7*24:parameter=="day"?7:parameter=="mnth"?1/(30.4375/7):parameter=="year"?1/12*1/(30.4375/7):1))};
	if (data.mnth!=0) {param=param+(Math.floor(parseFloat(Math.abs(data.mnth)))*(parameter=="msec"?(30.4375/7)*7*24*60*60*1000:parameter=="sec"?(30.4375/7)*7*24*60*60:parameter=="min"?(30.4375/7)*7*24*60:parameter=="hrs"?(30.4375/7)*7*24:parameter=="day"?(30.4375/7)*7:parameter=="week"?(30.4375/7):parameter=="year"?1/(30.4375/7):1))};
	if (data.year!=0) {param=param+(Math.floor(parseFloat(Math.abs(data.year)))*(parameter=="msec"?12*(30.4375/7)*7*24*60*60*1000:parameter=="sec"?12*(30.4375/7)*7*24*60*60:parameter=="min"?12*(30.4375/7)*7*24*60:parameter=="hrs"?12*(30.4375/7)*7*24:parameter=="day"?12*(30.4375/7)*7:parameter=="week"?12*(30.4375/7):parameter=="mnth"?12:1))};
	if (data.abs||data.abs==true) {param=-param}
	return param;
};

Math.paramToTime=function(data,parameter)
{
	if (!parameter)
	{
		data=data.toString();
		parameter=parameter.substring(0,2).toLowerCase();
	}
	if (parameter!="msec"&&parameter!="sec"&&parameter!="min"&&parameter!="hrs"&&parameter!="day"&&parameter!="week"&&parameter!="year") {parameter="ms"}
	if (data<0) {abs=true} else {abs=false}
	data=Math.abs(data)*(parameter=="sec"?1000:parameter=="min"?60*1000:parameter=="hrs"?60*60*1000:parameter=="day"?24*60*60*1000:parameter=="week"?7*24*60*60*1000:parameter=="mnth"?(30.4375/7)*7*24*60*60*1000:parameter=="year"?12*(30.4375/7)*7*24*60*60*1000:1);
	dYear=Math.floor(parseFloat(data/1000/60/60/24/7/(30.4375/7)/12));
	data=data-dYear*1000*60*60*24*7*(30.4375/7)*12;
	dMnth=Math.floor(parseFloat(data/1000/60/60/24/7/(30.4375/7)));
	data=data-dMnth*1000*60*60*24*7*(30.4375/7);
	dWeek=Math.floor(parseFloat(data/1000/60/60/24/7));
	data=data-dWeek*1000*60*60*24*7;
	dDay=Math.floor(parseFloat(data/1000/60/60/24));
	data=data-dDay*1000*60*60*24;
	dHrs=Math.floor(parseFloat(data/1000/60/60));
	data=data-dHrs*1000*60*60;
	dMin=Math.floor(parseFloat(data/1000/60));
	data=data-dMin*1000*60;
	dSec=Math.floor(parseFloat(data/1000));
	data=data-dSec*1000;
	dMsec=Math.floor(parseFloat(data));
	return {abs: abs, year: dYear, mnth: dMnth, week: dWeek, day: dDay, hrs: dHrs, min: dMin, sec: dSec, msec: dMsec};
};

Math.decToBin=function(dec)
{
	bin="";
	while (dec>0)
	{
		bin=(dec%2).toString()+bin;
		dec=Math.floor(dec/2);
	};
	return bin;
};

Math.binToDec=function(bin)
{
	dec=0;
	bin=bin.toString().replace(/[^01]/g,"");
	for (var i=0; i<bin.length; i++)
	{
		dec+=Math.pow(2,i)*parseInt(bin.charAt(bin.length-i-1));
	};
	if (dec=="") {dec="0"};
	return dec;
};

Math.decToHex=function(dec)
{
	hexStr="0123456789ABCDEF";
	hex="";
	while (dec>0)
	{
		hex=hexStr[(dec%16)]+hex;
		dec=Math.floor(dec/16);
	};
	if (hex=="") {hex=hexStr.charAt(0)};
	return hex;
};

Math.hexToDec=function(hex)
{
	hex=hex.toString().replace(/[^0-9A-F]/gi,"");
	dec=0;
	for (var i=0; i<hex.length; i++)
	{	
		ch=hex.charAt(hex.length-i-1).toUpperCase();
		ch=ch=="A"?10:ch=="B"?11:ch=="C"?12:ch=="D"?13:ch=="E"?14:ch=="F"?15:parseFloat(ch);
		dec+=Math.pow(16,i)*ch;
	};
	return dec;
};

Math.decToCustom=function(dec,str)
{
	cus="";
	while (dec>0)
	{
		cus=str[(dec%str.length)]+cus;
		dec=Math.floor(dec/str.length);
	};
	if (cus=="") {cus=str.charAt(0)};
	return cus;
};

Math.customToDec=function(custom,str)
{
	eval("custom=custom.toString().replace(/[^"+str+"]/g,\"\")");
	dec=0;
	for (var i=0; i<custom.length; i++)
	{	
		ch=str.search(custom.charAt(custom.length-i-1));
		if (ch<0) {ch=0};
		dec+=Math.pow(str.length,i)*ch;
	};
	return dec;
};