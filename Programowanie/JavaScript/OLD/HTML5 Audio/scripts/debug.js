debug=new Object();

debug.instance=new Object(function(instanceName) {return instanceName?debug.instance[instanceName]:null});

debug.instance.num=0;

debug.instance.create=function(instanceName,createTimer) {
  if (!$useable(instanceName)) instanceName=debug.instance.num++;
  if (createTimer) debug.timer.create(instanceName+"Timer",true);
  debug.instance[instanceName]=window.open();
  debug.instance[instanceName].name=instanceName;
  debug.instance[instanceName].document.write("<html><head><title>Debugger - Instance: "+instanceName+"</title><meta http-equiv=\"content-type\" content=\"text/html; charset=UTF-8\" /><style>td{vertical-align: top}</style></head><body><table id=\""+instanceName+"Table\" style=\"font-family: Courier New; font-size: 10pt; white-space: pre; width: 100%\" border=1 cellspacing=0 cellpadding=0><tr><td style=\"width: 184px\"></td><td></td><td style=\"width: 120px; text-align: right\"></td></tr></table></body></html>");
  debug.instance[instanceName].document.close();
  debug.instance[instanceName].created=true;
  debug.instance[instanceName].fld=debug.instance[instanceName].document.getElementById(instanceName+"Table");
  debug.instance[instanceName].onunload=function() {debug.instance.delete(instanceName)}
  if (useNow) debug.instance.inUse=instanceName;
}

debug.instance.delete=function(instanceName) {
  if (!$useable(instanceName)) instanceName=--debug.instance.num;
  try {debug.instance(instanceName).close()} catch (err) {void(null)}
  $delete(debug.instance[instanceName]);
  if (debug.instance.inUse==instanceName) debug.instance.inUse=false;
}

debug.instance.use=function(instanceName) {
  if (!$useable(instanceName)) instanceName=debug.instance.num;
  if (debug.instance(instanceName)) debug.instance.inUse=instanceName;
  else {if (!debug(debug.instance.inUse)) debug.instance.inUse=""}
}

debug.timer=new Object(function(timerName) {return debug.timer[timerName?timerName:debug.timer.inUse]});
debug.timer.elapsed=function(timerName) {
  el=new Date().getTime()-debug.timer(timerName).start;
  ms=el%1000;
  el-=ms;
  el/=1000;
  s=el%60;
  el-=s;
  el/=60;
  m=el%60;
  el-=m;
  el/=60;
  h=el%24;
  el-=h;
  el/=24;
  w=el%7;
  if (s>0||m>0||h>0||w>0) ms="."+$fill2(ms,0,3,0);
  if (m>0||h>0||w>0) s=":"+$fill2(s,0,2,0);
  if (h>0||w>0) m=":"+$fill2(m,0,2,0);
  if (w>0) h=" "+$fill2(h," ",2,0);
  if (w==0) {
    w="";
    if (h==0) {
      h="";
      if (m==0) {
        m="";
        if (s==0) {
          s="";
        }
      }
    }
  }
  return w+h+m+s+ms;
}
debug.timer.num=0;

debug.timer.create=function(timerName,useNow) {
  if (!$useable(timerName)) timerName=debug.timer.num++;
  debug.timer[timerName]=new Object();
  debug.timer[timerName].name=timerName;
  debug.timer[timerName].start=new Date().getTime();
  debug.timer[timerName].saves=new Object();
  debug.timer[timerName].num=0;
  if (useNow) debug.timer.inUse=timerName;
}

debug.timer.delete=function(timerName) {
  if (!$useable(timerName)) timerName=--debug.timer.num;
  $delete(debug.timer[timerName]);
  if (debug.timer.inUse==timerName) debug.timer.inUse=false;
}

debug.timer.save=function(saveName) {
  if (!$useable(saveName)) saveName=debug.timer().num++;
  debug.timer().saves[saveName].name=saveName;
  debug.timer()=new Date().getTime()-debug.timer().start;
}

debug.timer.restore=function(saveName) {
  if (!$useable(saveName)) saveName=--debug.timer[debug.timer.inUse].num;
  debug.timer[debug.timer.inUse].start=new Date().getTime()-debug.timer[debug.timer.inUse].saves[saveName];
  $delete(debug.timer[debug.timer.inUse].saves[saveName]);
}

debug.nowDate=function() {
  now=new Date();
  return $fill2(now.getDate()," ",2,0)+"."+$fill2(now.getMonth()+1,0,2,0)+"."+$fill2(now.getFullYear(),0,4,0)+" "+$fill2(now.getHours()," ",2,0)+"."+$fill2(now.getMinutes(),0,2,0)+":"+$fill2(now.getSeconds(),0,2,0)+"."+$fill2(now.getMilliseconds(),0,3,0);
}

debug.msg=function(str) {
  if (debug.instance.inUse&&debug.instance()&&!debug.instance().closed) {
    msgTr=document.createElement("tr");
    msgTd=document.createElement("td");
    msgTd.innerHTML=debug.nowDate();
    msgTr.appendChild(msgTd);
    msgTd=document.createElement("td");
    msgTd.innerHTML=str;
    msgTr.appendChild(msgTd);
    msgTd=document.createElement("td");
    msgTd.style.textAlign="right";
    msgTd.innerHTML=debug.timer.elapsed();
    msgTr.appendChild(msgTd);
    try {debug.instance().fld.appendChild(msgTr)} catch (err) {void(null)}
  }
}

debug.clr=function() {
  if (debug.instance.inUse||debug.instance()) {
    debug.instance().document.write("<html><head><title>Debugger - Instance: "+instanceName+"</title><meta http-equiv=\"content-type\" content=\"text/html; charset=UTF-8\" /><style>td{vertical-align: top}</style></head><body><table id=\""+instanceName+"Table\" style=\"font-family: Courier New; font-size: 10pt; white-space: pre; width: 100%\" border=1 cellspacing=0 cellpadding=0><tr><td style=\"width: 184px\"></td><td></td><td style=\"width: 120px; text-align: right\"></td></tr></table></body></html>");
    debug.instance().document.close();
    debug.instance().fld=debug.instance().document.getElementById(debug.instance().name+"Table");
  }
}

debug.reset=function() {
  for (i in debug.instance) {
    if (debug.instance[i].created) $delete(debug.instance[i]);
  }
  debug.instance.inUse="";
  for (i in debug.timer) {
    if (debug.timer[i].start) $delete(debug.timer[i]);
  }
  debug.timer.inUse="";
}