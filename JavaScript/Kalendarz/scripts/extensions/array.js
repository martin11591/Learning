////////////////////////////////////////////////
//					      //
// Dodatkowe funkcje do zarządzania tablicami //
//					      //
////////////////////////////////////////////////
//					      //
//	    sum	- zwraca sumę wszystkich lub  //
//		  kilku pierwszych elementów  //
//		  tablicy		      //
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
//	  $sort	- własna metoda sortowania    //
//		  			      //
//     $sortInx	- zwraca indeksy elementów    //
//		  po posortowaniu	      //
//					      //
////////////////////////////////////////////////

Array.prototype.sum=function(n)
{
	if (typeof(n)!="number") {n=this.length};
	if (n>this.length) {n=this.length};
	sumN=0;
	for (sumI=0; sumI<n; sumI++)
	{
		sumA=this[sumI].toString().replace(/[^0-9.]/g,"");
		sumN+=eval(sumA);
	};
	return sumN;
};

Array.prototype.move=function(moveFrom,moveTo)
{
	if (moveFrom<0||moveFrom>this.length||moveTo<0||moveTo>this.length) {return this};
	moveTmp=new Array();
	for (var i=0; i<this.length; i++)
	{
		if (i==moveFrom) {continue};
		if (i==moveTo) {moveTmp.push(this[moveFrom])};
		moveTmp.push(this[i]);
	};
	return moveTmp;
};

Array.prototype.rePos=function(rePosFrom,rePosTo)
{
	if (rePosFrom<0||rePosFrom>this.length||rePosTo<0||rePosTo>this.length) {return this};
	rePosTmp=new Array();
	for (var i=0; i<this.length; i++)
	{
		if (i==rePosFrom) {rePosTmp.push(this[rePosTo]);continue};
		if (i==rePosTo) {rePosTmp.push(this[rePosFrom]);continue};
		rePosTmp.push(this[i]);
	};
	return rePosTmp;
};

Array.prototype.insert=function(insEl,insPos)
{
	if (insPos<0||insPos>this.length) {return this};
	insertTmp=new Array();
	for (var i=0; i<this.length; i++)
	{
		if (i==insPos) {insertTmp.push(insEl)};
		insertTmp.push(this[i]);
	};
	return insertTmp;
};

Array.prototype.change=function(chgEl,chgPos)
{
	if (chgPos<0||chgPos>this.length) {return this};
	changeTmp=new Array();
	for (var i=0; i<this.length; i++)
	{
		if (i==chgPos) {changeTmp.push(chgEl);continue};
		changeTmp.push(this[i]);
	};
	return changeTmp;
};

Array.prototype.delPos=function(delPosition)
{
	if (this.length<1||!delPosition||isNaN(delPosition)||delPosition==undefined||delPosition<0||delPosition>this.length) {return this};
	delPosTmp=new Array();
	for (var i=0; i<this.length; i++)
	{
		if (i==delPosition) {continue};
		delPosTmp.push(this[i]);
	};
	return delPosTmp;
};

Array.prototype.search=function(element,startPos,endPos)
{
	if (!startPos) {startPos=0};
	if (!endPos) {endPos=this.length};
	if (startPos<0) {endPos-=startPos;startPos=0};
	for (sI=startPos; sI<endPos; sI++)
	{
		if (this[sI]==element) {return sI};
	};
	return -1;
};

Array.prototype.$sort=function(type,rev,order,child)
{
	type=(type)?type.toLowerCase().substring(0,3):"";
	if (!rev) {var rev};
	if (!order) {var order};
	if (!child) {var child};
	function mySort(a,b)
	{
		if (child) {a=a[child];b=b[child]};
		if (type=="num")
		{
			a=a.toString().replace(/[^0-9\+\-\*\/\.]/g,"").replace(/[\/\.]{2,}/g,"");
			b=b.toString().replace(/[^0-9\+\-\*\/\.]/g,"").replace(/[\/\.]{2,}/g,"");
			a=eval(a);
			b=eval(b);
			if (a<b) {return -1} else {return 1};
		};
		if (type=="str")
		{
			if (order)
			{
				iChar=0;
				do
				{
					result=compareChar(a.charAt(iChar),b.charAt(iChar),order);
					iChar+=1;
				} while (result==0&&iChar<(a.length>b.length?a.length:b.length));
				return result;
			}
			else
			{
				a=a.toString().toLowerCase().replace(/[ąćęłńóśźż]/g,function(x)
				{
					return (x=="ą"?"a":x=="ć"?"c":x=="ę"?"e":x=="ł"?"l":x=="ń"?"n":x=="ó"?"o":x=="ś"?"s":x=="ź"?"z":x=="ż"?"zż":x)+"ż";
				});
				b=b.toString().toLowerCase().replace(/[ąćęłńóśźż]/g,function(x)
				{
					return (x=="ą"?"a":x=="ć"?"c":x=="ę"?"e":x=="ł"?"l":x=="ń"?"n":x=="ó"?"o":x=="ś"?"s":x=="ź"?"z":x=="ż"?"zż":x)+"ą";
				});
				if (a<b) {return -1} else {return 1};
			};
		};
	};
	function compareChar(a,b,str)
	{
		a="\\"+a.toString().charAt(0);
		b="\\"+b.toString().charAt(0);
		if (str.search(a)==str.search(b)) {return 0};
		if (str.search(a)<str.search(b)) {return -1} else {return 1};
	};
	tSort=(!type)?this.sort():this.sort(mySort);
	return (!rev)?tSort:tSort.reverse();
};

Array.prototype.$sortInx=function(type,rev,order)
{
	type=(type)?type.toLowerCase().substring(0,3):"";
	if (!rev) {var rev};
	if (!order) {var order};
	sortArray=new Array();
	for (var i=0; i<this.length; i++) {sortArray.push({str:this[i],inx:i})};
	sortArray=sortArray.$sort(type,rev,order,"str");
	sortInxArray=new Array();
	for (var i=0; i<sortArray.length; i++) {sortInxArray.push(sortArray[i].inx)};
	return sortInxArray;
};