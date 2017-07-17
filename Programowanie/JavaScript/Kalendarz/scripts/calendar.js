calendar.version="1.2 pre-alpha";
calendar.setLanguage=function(cLang)
{
	cLang=cLang.toString().toLowerCase();
	document.title=lang.write(lang["windowTitle"],calendar.version);
	interface.write();
	for (var cI=0; cI<7; cI++)
	{
		calendar(1,cI).dayOfWeek=lang["dayOrder"][cI];
		calendar(1,cI).innerHTML=lang["day"+(lang["dayOrder"][cI])].toUpperCase();
		for (var ccJ=2; ccJ<8; ccJ++)
		{
			calendar(ccJ,cI).bColor="#000000";
			calendar(ccJ,cI).fColor="#FFFFFF";
		};
		if (lang["dayOrder"][cI]==6)
		{
			for (var cJ=1; cJ<=7; cJ++)
			{
				calendar(cJ,cI).style.color="#FF0000";
				for (var ccJ=2; ccJ<8; ccJ++) calendar(ccJ,cI).fColor="#FF0000";
			};
		};
	};
}

calendar.daysInMonthArray=function(cYear) {
	return [31,28+(cYear%4==0?1:0),31,30,31,30,31,31,30,31,30,31];
};

calendar.daysInMonth=function(cMonth,cYear) {
	daysInMonth=[31,28+(cYear%4==0?1:0),31,30,31,30,31,31,30,31,30,31];
	return daysInMonth[cMonth-1];
};

calendar.dayOfWeek=function(cDay,cMonth,cYear) {
	// 1st January 1988 is Friday and this is start of cycle
	// 1st January 2015 is Thursday and this is end of cycle
	cDoW=((5+cYear%28+Math.floor((cYear%28-1)/4))%7)+1;
	cDoW=cDoW+(cMonth>1?calendar.daysInMonthArray(cYear).sum(cMonth-1)%7:0)+(cDay-1);
	//cDoW+=lang.dayOrder[0]==6?2:0;
	cDoW=(cDoW-1)%7;
	return lang.dayOrder.search(cDoW);
};

calendar.weekOfMonth=function(cDay,cMonth,cYear) {
	ccDay=0;
	do
	{
		ccDay+=1;
		first=(lang.dayOrder[calendar.dayOfWeek(ccDay,cMonth,cYear)]==lang.dayOrder[0]);
	} while (first==false);
	if (ccDay==1) {startWeek=0} else {startWeek=1};
	if (startWeek==1&&cDay<ccDay) {return 0} else {return startWeek+Math.floor((cDay-ccDay)/7)};
};

calendar.importantDay=function(cDay,cMonth,cYear,name)
{
	result="";
	tDate=new Date();
	tDay=tDate.getDate();
	tMonth=tDate.getMonth()+1;
	tYear=tDate.getFullYear();
	if (tDay==cDay&&tMonth==cMonth&&tYear==cYear)
	{
		if (name) {result="today"};
	};
	return result;
};

calendar.fillCalendar=function(cMonth,cYear)
{
	tDate=new Date();
	tDay=tDate.getDate();
	tMonth=tDate.getMonth()+1;
	tYear=tDate.getFullYear();
	for (var cI=0; cI<calendar.dayOfWeek(1,cMonth,cYear); cI++)
	{
		with (calendar(2,cI))
		{
			innerHTML="&nbsp;";
			onmouseover=null;
			onmouseout=null;
			onmouseclick=null;
			className="";
		};
	};
	for (var cI=1; cI<=calendar.daysInMonth(cMonth,cYear); cI++)
	{
		cRow=calendar.weekOfMonth(cI,cMonth,cYear)+2;
		cCell=calendar.dayOfWeek(cI,cMonth,cYear);
		calendar(cRow,cCell).day=cI;
		calendar(cRow,cCell).month=cMonth;
		calendar(cRow,cCell).year=cYear;
		with (calendar(cRow,cCell))
		{
			innerHTML=cI;
			onmouseover=interface.dayInfo;
			onmouseout=interface.todayInfo;
			onmouseclick=null;
			className=calendar.importantDay(cI,cMonth,cYear,true);
		};
	};
	for (var cI=calendar.weekOfMonth(cI,cMonth,cYear)*7+calendar.dayOfWeek(cI,cMonth,cYear); cI<42; cI++)
	{
		with (calendar(Math.floor(cI/7)+2,cI%7))
		{
			innerHTML="&nbsp;";
			onmouseover=null;
			onmouseout=null;
			onmouseclick=null;
			className="";
		};
	};
};

calendar.fill=function(cLang)
{
	if (!cLang) {cLang=lang()};
	calendar.month=Math.floor(parseFloat(Math.abs(calendar.month)));
	calendar.year=Math.floor(parseFloat(Math.abs(calendar.year)));
	if (isNaN(calendar.month)) {calendar.month=new Date().getMonth()+1};
	if (isNaN(calendar.year)) {calendar.year=new Date().getFullYear()};
	if (calendar.month<1)
	{
		do
		{
			calendar.month+=12;
			calendar.year-=1;
		} while (calendar.month<1);
	};
	if (calendar.month>12)
	{
		do
		{
			calendar.month-=12;
			calendar.year+=1;
		} while (calendar.month>12);
	};
	if (calendar.year<1) {calendar.year=1};
	interface.mnthAndYr.month=calendar.month;
	interface.mnthAndYr.year=calendar.year;
	interface.mnthAndYr.innerHTML=lang["month"+calendar.month].capitalize()+" "+calendar.year;
	monthTitle=lang["month"+calendar.month].capitalize()+" "+calendar.year;
	monthTitle+="\n"+lang.write(lang["thisMonth"],calendar.daysInMonth(calendar.month,calendar.year));
	monthTitle+="\n"+lang.write(calendar.year%4==0?lang["thisYearLeap"]:lang["thisYearNotLeap"]);
	interface.mnthAndYr.title=monthTitle;
	interface.prvYrBtn.title=lang.write(lang["previousYear"],[lang["month"+calendar.month].capitalize(),(calendar.year-1<1?1:calendar.year-1)]);
	interface.prvMnthBtn.title=lang.write(lang["previousMonth"],[lang["month"+(calendar.month-1<1?12:calendar.month-1)].capitalize(),(calendar.month-1<1?calendar.year-1:calendar.year)]);
	interface.nxtMnthBtn.title=lang.write(lang["nextMonth"],[lang["month"+(calendar.month+1>12?1:calendar.month+1)].capitalize(),(calendar.month+1>12?calendar.year+1:calendar.year)]);
	interface.nxtYrBtn.title=lang.write(lang["nextYear"],[lang["month"+calendar.month].capitalize(),calendar.year+1]);
	cToday=new Date();
	cTodayD=cToday.getDate();
	cTodayM=cToday.getMonth()+1;
	cTodayY=cToday.getFullYear();
	calendar.fillCalendar(calendar.month,calendar.year);
	if (!interface.timer) {interface.timer=setInterval("interface.timeRefresh()",25)};
};

calendar.customDate=function()
{
	onResizeBackup=window.onresize;
	customHTML="<select id=\"customMonth\">";
	for (var cI=1; cI<=12; cI++) customHTML+="\n<option value="+cI+(cI==calendar.month?" selected":"")+">"+lang["month"+cI].capitalize()+"</option>";
	customHTML+="\n</select>\n<input id=\"customYear\" maxlength=5 size=4 value="+calendar.year+"></input>";
	customHTML+="\n<button onclick=\"calendar.month=getID('customMonth').value;calendar.year=getID('customYear').value;hBox.hide();cDateBox().style.display='none';window.onresize=onResizeBackup\">"+lang.go+"</button>";
	customHTML+="\n<button onclick=\"hBox.hide();cDateBox().style.display='none';window.onresize=onResizeBackup\">"+lang.cancel+"</button>";
	cDateBox().innerHTML="<div id=\"inputFields\" style=\"position: absolute\">"+customHTML+"</div>";
	cDateBox().style.whiteSpace="nowrap";
	cDateBox().style.display="block";
	w=(navi.ie?getID("inputFields").clientWidth:getID("inputFields").offsetWidth);
	h=(navi.ie?getID("inputFields").clientHeight:getID("inputFields").clientHeight);
	function onResize()
	{
		with (getID("inputFields"))
		{
			style.left=calendar.posL()+(calendar.sizeW()/2-w/2)+"px";
			style.top=calendar.posT()+(calendar.sizeH()/2-h/2)+"px";
		};
		calendar.cover(hBox());
		calendar.cover(cDateBox());
	};
	hBox.show();
	onResize();
	onResize();
	window.onresize=onResize;
};

calendar.setLanguage(lang);
calendar.month=new Date().getMonth()+1;
calendar.year=new Date().getFullYear();
calendar.fill();
interface.todayInfo();
interface.timeRefresh();
varEvents("calendar.month","calendar.fill()",10,true);
varEvents("calendar.year","calendar.fill()",10,true);
varEvents("new Date().getDate()","calendar.fill()",1000,true);
addEvent("calendar()","onkeyup",37,"calendar.month-=1;return false");	// cursor left/kursor w lewo
/*
addEvent("document.body","onkeyup",37,"calendar.month-=1;return false");	// cursor left/kursor w lewo
addEvent("document.body","onkeyup",38,"calendar.year-=1;return false");		// cursor up/kursor do góry
addEvent("document.body","onkeyup",39,"calendar.month+=1;return false");	// cursor right/kursor w prawo
addEvent("document.body","onkeyup",40,"calendar.year+=1;return false");		// cursor down/kursor w dół
*/