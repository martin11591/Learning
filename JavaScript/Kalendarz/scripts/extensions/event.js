/////////////////////////////////////////////////////////////
//							   //
// Funkcja działająca w przypadku zmiany wartości zmiennej //
//							   //
/////////////////////////////////////////////////////////////

varEvents=new Object(function(id,exec,timer,repeat)
{
	if (!repeat) {repeat=false};
	varEvents[id]=new Object(id);
	varEvents[id].undef=false;
	val=eval(id);
	if (val==undefined) {val=null};
	varEvents[id].value=val;
	varEvents[id].exec=exec;
	varEvents[id].timer=timer;
	varEvents[id].latency=null;
	varEvents[id].repeat=repeat;
	varEvents.onVarChange(id);
});

varEvents.onVarChange=function(id)
{
	undef=false;
	val=eval(id);
	if (val==undefined) {val=null};
	if (val!==varEvents[id].value)
	{
		eval(varEvents[id].exec);
		if (varEvents[id].repeat==false)
		{
			clearTimeout(varEvents[id].latency);
			delete(varEvents[id]);
			return;
		} else {varEvents[id].value=eval(id)};
	};
	varEvents[id].latency=setTimeout("varEvents.onVarChange(\""+id+"\")",varEvents[id].timer);
};

keyboard=new Object(function()
{
	var key;
	if (window.event) {key=event.keyCode} else {if (event.which) {key=event.which}};
	tar=navi.ie?event.srcElement.id:event.target.id;
	typ=event.type;
	if (tar=="") {tar="document.body"};
	alert(tar+"\n"+keyboard["\""+tar+"\""]);
	if (keyboard["\""+tar+"\""]["\""+typ+"\""][key]) {eval(keyboard["\""+tar+"\""]["\""+typ+"\""][key])};
	if (keyboard["\""+tar+"\""]["\""+typ+"\""]["any"]) {eval(keyboard["\""+tar+"\""]["\""+typ+"\""]["any"])};
	return true;
});

function keys()
{
	alert(event);
	return true;
};

addEvent=function(handler,eventType,code,exec)
{
	if (!keyboard[handler]) {keyboard[handler]=new Object(handler)};
	if (!keyboard[handler][eventType]) {keyboard[handler][eventType]=new Object(eventType)};
	keyboard[handler][eventType][code]=exec;
	eval(handler+"."+eventType+"=keyboard;");
};

removeEvent=function(handler,eventType,code)
{
	if (code) {delete(keyboard[handler][eventType][code])}
	else if (eventType) {delete(keyboard[handler][eventType]);eval(handler+"."+eventType+"=null;")}
	else if (handler) {delete(keyboard[handler])}
	else {return};
};