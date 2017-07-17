interface=new Object();
interface.write=function(id)
{
	if (!id||!getID(id)) {return false};
	x="<table id=\"calendarTable\" cellspacing=0>";
	x=x+"<tr class=\"buttonsAndInfo\"><td><button id=\"calendarPreviousYearButton\" onclick=\"calendar.year-=1\">&lt;--</button></td>";
	x=x+"<td><button id=\"calendarPreviousMonthButton\" onclick=\"calendar.month-=1\">&lt;-</button></td>";
	x=x+"<td class=\"monthAndYear\" onclick=\"calendar.customDate()\" colspan=3>&nbsp;</td>";
	x=x+"<td><button id=\"calendarNextMonthButton\" onclick=\"calendar.month+=1\">-&gt;</button></td>";
	x=x+"<td><button id=\"calendarNextYearButton\" onclick=\"calendar.year+=1\">--&gt;</button></td></tr>";
	x=x+"<tr class=\"daysOfWeekNames\"><td>&nbsp;</td>";
	x=x+"<td>&nbsp;</td>";
	x=x+"<td>&nbsp;</td>";
	x=x+"<td>&nbsp;</td>";
	x=x+"<td>&nbsp;</td>";
	x=x+"<td>&nbsp;</td>";
	x=x+"<td>&nbsp;</td></tr>";
	x=x+"<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>";
	x=x+"<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>";
	x=x+"<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>";
	x=x+"<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>";
	x=x+"<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>";
	x=x+"<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>";
	x=x+"<tr class=\"dayInfo\"><td colspan=2 rowspan=2>&nbsp;</td><td colspan=5 rowspan=2>&nbsp;</td></tr>";
	x=x+"<tr></tr>";
	x=x+"</table>";
	x=x+"<div id=\"hiddenBox\" style=\"position: absolute; display: none\"></div>";
	x=x+"<div id=\"customDateBox\" style=\"position: absolute; text-align: center; display: none\"></div>";
	getID(id).innerHTML=x;
	calendar=new Object(function(cRow,cCell)
	{
		cC=getID("calendarTable");
		if (cRow!=undefined) {cRow=eval(cRow.toString().replace(/[^0-9]/g,""));cC=cC.rows[cRow]};
		if (cCell!=undefined) {cCell=eval(cCell.toString().replace(/[^0-9]/g,""));cC=cC.cells[cCell]};
		return cC;
	});
	calendar.posL=function() {return (navi.ie?calendar().clientLeft+4:calendar().offsetLeft)};
	calendar.posT=function() {return (navi.ie?calendar().clientTop+10:calendar().offsetTop)};
	calendar.sizeW=function() {return (navi.ie?calendar().clientWidth+12:calendar().offsetWidth)};
	calendar.sizeH=function() {return (navi.ie?calendar().clientHeight+11:calendar().offsetHeight)};
	calendar.cover=function(handler)
	{
		with (handler.style)
		{
			left=calendar.posL()+"px";
			top=calendar.posT()+"px";
			width=calendar.sizeW()+"px";
			height=calendar.sizeH()+"px";
		};
	};
	hBox=new Object(function(){return getID("hiddenBox")});
	hBox.show=function()
	{
		calendar.cover(hBox());
		hBox().style.display="block";
	};
	hBox.hide=function()
	{
		with (hBox().style)
		{
			left="0px";
			top="0px";
			width="0px";
			height="0px";
			display="none";
		};
	};
	cDateBox=new Object(function(){return getID("customDateBox")});
	interface.prvYrBtn=getID("calendarPreviousYearButton");
	interface.prvMnthBtn=getID("calendarPreviousMonthButton");
	interface.nxtMnthBtn=getID("calendarNextMonthButton");
	interface.nxtYrBtn=getID("calendarNextYearButton");
	interface.mnthAndYr=calendar(0,2);
	interface.daysNamesFld=calendar(1);
	interface.dateFld=calendar(8,0);
	interface.dayInfoFld=calendar(8,1);
}

interface.nameDays=function(nDay,nMonth)
{
	
	names="";
	for (nI=0; nI<calendar.nameDays[nMonth-1][nDay-1].length; nI++)
	{
		if (nI>0) {names+=(nI==calendar.nameDays[nMonth-1][nDay-1].length-1?" "+lang.and+" ":", ")};
		names+=lang.changeOfName(calendar.nameDays[nMonth-1][nDay-1][nI]);
	};
	return lang.write(lang.nameDays,names);
};

interface.dayInfo=function()
{
	clearInterval(interface.timer);
	iDay=this.day;
	iMonth=this.month;
	iYear=this.year;
	if (this.style) {this.style.padding="1px"};
	if (this.style) {this.style.border="4px outset #FFFFFF"};
	interface.dateFld.innerHTML=iDay+"."+iMonth.toString().fill(2,"0",0)+"."+iYear+"<br />"+lang["day"+lang["dayOrder"][calendar.dayOfWeek(iDay,iMonth,iYear)]].capitalize();
	interface.dayInfoFld.innerHTML=interface.nameDays(iDay,iMonth);
};

interface.todayInfo=function()
{
	clearInterval(interface.timer);
	if (this.style) {this.style.border="1px solid #FFFFFF"};
	if (this.style) {this.style.padding="4px"};
	interface.dayInfoFld.innerHTML=interface.nameDays(tDay,tMonth);
	interface.timer=setInterval("interface.timeRefresh()",25);
};

interface.timeRefresh=function()
{
	tDate=new Date();
	tDay=tDate.getDate();
	tMonth=tDate.getMonth()+1;
	tYear=tDate.getFullYear();
	tHrs=tDate.getHours();
	tMns=tDate.getMinutes();
	tScs=tDate.getSeconds();
	tMss=tDate.getMilliseconds();
	interface.dateFld.innerHTML=tDay+"."+tMonth.toString().fill(2,"0",0)+"."+tYear+" "+tHrs+":"+tMns.toString().fill(2,"0",0)+":"+tScs.toString().fill(2,"0",0)+"."+tMss.toString().fill(3,"0",0)+"<br />"+lang["day"+lang["dayOrder"][calendar.dayOfWeek(tDay,tMonth,tYear)]].capitalize();
};