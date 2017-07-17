lang.windowTitle="Kalendarz v%ins0 by ΜΛЯТIN";
lang.day0="poniedziałek";
lang.day1="wtorek";
lang.day2="środa";
lang.day3="czwartek";
lang.day4="piątek";
lang.day5="sobota";
lang.day6="niedziela";
lang.dayOrder=[0,1,2,3,4,5,6];
lang.month1="styczeń";
lang.month2="luty";
lang.month3="marzec";
lang.month4="kwiecień";
lang.month5="maj";
lang.month6="czerwiec";
lang.month7="lipiec";
lang.month8="sierpień";
lang.month9="wrzesień";
lang.month10="październik";
lang.month11="listopad";
lang.month12="grudzień";
lang.previousYear="Poprzedni rok (%ins0 %ins1)";
lang.previousMonth="Poprzedni miesiąc (%ins0 %ins1)";
lang.nextMonth="Następny miesiąc (%ins0 %ins1)";
lang.nextYear="Następny rok (%ins0 %ins1)";
lang.thisMonth="Ten miesiąc ma %ins0 dni.";
lang.thisYearLeap="Ten rok jest przestępny.";
lang.thisYearNotLeap="Ten rok nie jest przestępny.";
lang.importantDays="Ważne dni:";
lang.todayIs="Dzisiaj jest %ins0<br>%ins1";
lang.nameDays="Imieniny %ins0";
lang.go="Idź";
lang.cancel="Anuluj";
lang.and="i";
lang.changeOfName=function(name)
{
	upCase=(name==name.toUpperCase())?true:false;
	change="";
	uName=name.toUpperCase();
	if (uName=="KIM"||uName=="HUGO"||uName=="MAI"||uName=="KAI"||uName=="INEZ")
	{
		change=name;
	}
	else
	{
		txt=name.substring(0,name.length-4);
		switch (name.substring(name.length-4).toLowerCase())
		{
			case "ieja": change=txt+"iei";break;
			case "niec": change=txt+"ńca";break;
			case "niew": change=txt+"niewa";break;
			default:
			{
				txt=name.substring(0,name.length-2);
				switch (name.substring(name.length-2).toLowerCase())
				{
					case "da": change=txt+"dy";break;
					case "ea": change=txt+"ei";break;
					case "ek": change=txt+"ka";break;
					case "eo": change=txt+"ea";break;
					case "eł": change=txt+"ła";break;
					case "er": change=txt+"ra";break;
					case "ew": change=txt+"wa";break;
					case "fa": change=txt+"fy";break;
					case "ga": change=txt+"gi";break;
					case "ia": change=txt+"ii";break;
					case "ja": change=txt+"ji";break;
					case "ka": change=txt+"ki";break;
					case "ko": change=txt+"ka";break;
					case "la": change=txt+"li";break;
					case "li": change=txt+"lego";break;
					case "ła": change=txt+"ły";break;
					case "na": change=txt+"ny";break;
					case "ra": change=txt+"ry";break;
					case "ta": change=txt+"ty";break;
					case "wa": change=txt+"wy";break;
					case "za": change=txt+"zy";break;
					case "ża": change=txt+"ży";break;
					default:
					{
						txt=name.substring(0,name.length-1);
						switch(name.charAt(name.length-1).toLowerCase())
						{
							case "b": change=txt+"ba";break;
							case "d": change=txt+"da";break;
							case "f": change=txt+"fa";break;
							case "h": change=txt+"ha";break;
							case "i": change=txt+"iego";break;
							case "j": change=txt+"ja";break;
							case "k": change=txt+"ka";break;
							case "l": change=txt+"la";break;
							case "ł": change=txt+"ła";break;
							case "m": change=txt+"ma";break;
							case "n": change=txt+"na";break;
							case "p": change=txt+"pa";break;
							case "r": change=txt+"ra";break;
							case "s": change=txt+"sa";break;
							case "t": change=txt+"ta";break;
							case "w": change=txt+"wa";break;
							case "y": change=txt+"ego";break;
							case "z": change=txt+"za";break;
							default: change=name;break;
						};
					};
					break;
				};
				break;
			};
		}
	};
	if (upCase==true) {change=change.toUpperCase()};
	return change;
};