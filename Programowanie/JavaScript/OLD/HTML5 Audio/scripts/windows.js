windows=new Object(function(windowName) {
  windowName=windowName.replace(/[^a-z0-9 _]/gi,"").replace(/ /g,"_");
  try {
    return {handle: document.getElementById('window_'+windowName), caption: document.getElementById('window_'+windowName+'_caption'), body: document.getElementById('window_'+windowName+'_body'), status: document.getElementById('window_'+windowName+'_status')};
  } catch(err) {return null}
});
windows.num=0;
windows.len=0;
windows.focused=null;

windows.create=function(windowName,settings) {
  if (!windowName||windowName==null||windowName==undefined||windowName=="") windowName=windows.num++;
  windowName=windowName.replace(/[^a-z0-9 _]/gi,"").replace(/ /g,"_");
  windowID="window_"+windowName;
  windows[windowName]=new Object();
  windows[windowName].type="createdWindow";
  windows[windowName].date=new Date();
  if (!settings||typeof(settings)!="object") settings=new Object();
  windows[windowName].left=(typeof(settings.left)=="number"&&!isNaN(settings.left)&&settings.left>=0)?settings.left:Math.round(Math.random()*320);
  windows[windowName].top=(typeof(settings.top)=="number"&&!isNaN(settings.top)&&settings.top>=0)?settings.top:Math.round(Math.random()*240);
  windows[windowName].width=(typeof(settings.width)=="number"&&!isNaN(settings.width)&&settings.width>0)?settings.width:Math.round(100+Math.random()*540);
  windows[windowName].height=(typeof(settings.height)=="number"&&!isNaN(settings.height)&&settings.height>0)?settings.height:Math.round(75+Math.random()*415);
  windows[windowName].draggable=settings.draggable?true:false;
  windows[windowName].canMinimize=settings.canMinimize?true:false;
  windows[windowName].canMaximize=settings.canMaximize?true:false;
  windows[windowName].canClose=settings.canClose?true:false;
  windows[windowName].caption=settings.captionTitle?true:false;
  windows[windowName].captionTitle=(settings.captionTitle===true)?windowName:settings.captionTitle;
  windows[windowName].status=settings.defaultStatus?true:false;
  windows[windowName].defaultStatus=settings.defaultStatus?settings.defaultStatus:"";
  windows[windowName].state=settings.state?settings.state:"maximized";
  windows[windowName].icon=new Image();
  windows[windowName].icon.src=settings.icon?settings.icon:"";
  windows[windowName].zIndex=windows.minZ();
  if (!settings.styles||typeof(settings.styles)!="border") settings.styles=new Object();
  settings.styles.border=settings.styles.border?settings.styles.border:new Object();
  settings.styles.border.active=settings.styles.border.active?settings.styles.border.active:"1px inset #D4D0C8";
  settings.styles.border.inactive=settings.styles.border.inactive?settings.styles.border.inactive:"1px inset #D4D0C8";
  settings.styles.caption=settings.styles.caption?settings.styles.caption:{font: "Trebuchet MS 10pt bold", height: "25px"};
  settings.styles.caption.active=settings.styles.caption.active?settings.styles.caption.active:{background: "#C0C0C0", color: "#000000"};
  settings.styles.caption.inactive=settings.styles.caption.inactive?settings.styles.caption.inactive:{background: "#909090", color: "#000000"};
  settings.styles.body=settings.styles.body?settings.styles.body:{font: "Tahoma 8pt #000000", background: "#FFFFFF"};
  settings.styles.status=settings.styles.status?settings.styles.status:{font: "Tahoma 8pt #000000", background: "#DFE0E5"};
  windows[windowName].styles=settings.styles;
  html=document.createElement('div');
  html.id=windowID;
  with (html.style) {
    position="fixed";
    left=windows[windowName].left+"px";
    top=windows[windowName].top+"px";
    width=windows[windowName].width+"px";
    height=windows[windowName].height+"px";
  }
  caption=document.createElement('div');
  caption.id=windowID+"_caption";
  caption.style.width="100%";
  caption.style.height=windows[windowName].styles.caption.height;
  if (!windows[windowName].caption) caption.style.display="none";

  captionIcon=document.createElement('img');
  captionIcon.style.width="16px";
  captionIcon.style.height="16px";
  captionIcon.src=windows[windowName].icon.src;
  if (captionIcon.src=="") captionIcon.style.visibility="hidden";
  caption.appendChild(captionIcon);

  body=document.createElement('div');
  body.id=windowID+"_body";

  status=document.createElement('div');
  status.id=windowID+"_status";
  if (!windows[windowName].status) status.style.display="none";

  html.appendChild(caption);
  html.appendChild(body);
  html.appendChild(status);

  document.body.appendChild(html);
  windows(windowName).handle.style.zIndex=windows[windowName].zIndex;
  windows.len+=1;
  if ((!settings.focus&&!settings.focused)||(settings.focus==true||settings.focused==true)) windows.focus(windowName);
}

windows.write=function(str,vars,windowName) {
  if (!windowName||windowName==""||windowName==undefined||windowName==null) windowName=windows.focused;
  if (windowName==null) {return}
  windowName=windowName.toString().replace(/[^a-z0-9 _]/gi,"").replace(/ /g,"_");
  if (!vars||typeof(vars)!="object") vars=new Object();
  str=str.replace(/%[a-z0-9 _]%/gi,function(x) {
    return vars[x]?vars[x]:"!"+x.slice(1,-1)+"!";
  });
  windows(windowName).body.innerHTML+=str;
}

windows.focus=function(windowName) {
  if (!windowName||windowName==""||windowName==undefined||windowName==null) return;
  windowName=windowName.replace(/[^a-z0-9 _]/gi,"").replace(/ /g,"_");
  z=windows.maxZ();
  windows[windowName].zIndex=z;
  windows(windowName).handle.style.zIndex=z;
  windows(windowName).handle.style.border=windows[windowName].styles.border.active;
  windows.useStyles(windows(windowName).caption,windows[windowName].styles.caption.active);
}

windows.blur=function(windowName) {
  if (!windowName||windowName==""||windowName==undefined||windowName==null) return;
  windowName=windowName.replace(/[^a-z0-9 _]/gi,"").replace(/ /g,"_");
  windows[windowName].handle.style.border=windows[windowName].styles.border.inactive;
  windows.useStyles(windows(windowName).caption,windows[windowName].styles.caption.inactive);
}

windows.useStyles=function(element,styles) {
  for (uSI in styles) {
    try {element.style[uSI]=styles[uSI]} catch(err) {continue}
  }
}

windows.minZ=function() {
  z=1;
  for (zI in windows) {
    try {
      if (windows[zI].type=="createdWindow")
        if (windows[zI].zIndex<z) z=windows[zI].zIndex;
    } catch(err) {continue}
  }
  return z-1;
}

windows.maxZ=function() {
  z=0;
  for (zI in windows) {
    try {
      if (windows[zI].type=="createdWindow")
        if (windows[zI].zIndex>z) z=windows[zI].zIndex;
    } catch(err) {continue}
  }
  return z+1;
}