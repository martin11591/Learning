function $(id) {return document.all?document.all[id]:document.getElementById(id)}
function $include(scriptFile) {
  includeScript=document.createElement("script");
  includeScript.type="text/javascript";
  includeScript.src=scriptFile;
  document.body.appendChild(includeScript);
}
function $useable(test) {
  if ((test!=null&&test!=undefined)&&((test!="Infinity"&&!isNaN(test))||(test!=""))) return true; else return false;
}
function $find(str) {
  try {
    
  } catch (err) {return false}
}
function $delete(del) {
  try {
    try {if (del.opener) del.close()} catch (err) {void(null)}
    delete(del);
  } catch (err) {return false}
}
function $count(str1,str2) {
  try {return str1.match(new RegExp(str2,"g")).length} catch (err) {return 0}
}
function $num(str) {
  try {str=eval(str)} catch (err) {
    str=str.slice(0,str.search(/[^0-9.]/));
    if ($count(str,"\\.")>1) str=eval(str.slice(0,str.lastIndexOf("."))); else str=eval(str);
  }
  return str;
}
function $repeat(str,num) {
  rStr="";
  for (i=0; i<$num(num); i++) rStr+=str;
  return rStr;
}
function $slice(str,pos1,pos2,fromLast1,fromLast2) {
  if (typeof(pos1)=="string") {
    if (fromLast1) pos1=str.lastIndexOf(pos1); else pos1=str.indexOf(pos1);
    if (pos1==-1) return str;
  }
  if ($useable(pos2)&&typeof(pos2)=="string") {
    if (fromLast2) pos2=str.lastIndexOf(pos2)+1; else pos2=str.indexOf(pos2,pos1)+1;
    if (pos2==-1) return str;
  };
  return $useable(pos2)?str.slice(pos1,pos2):str.slice(pos1);
}
function $fill(str,fStr,pos,num,method) {
  str=str.toString();
  fStr=fStr.toString();
  num=$num(num);
  fStr=$repeat(fStr,num);
  if (method) fStr=$slice(fStr,0,num);
  if (!$useable(pos)) pos=0;
  if (typeof(pos)=="string") {
    pos=str.search(pos);
    if (pos==-1) pos=0;
  }
  if (pos<0) pos=str.length-pos-1;
  return $slice(str,0,pos)+fStr+$slice(str,pos);
}
function $fill2(str,fStr,num,back,method) {
  str=str.toString();
  fStr=fStr.toString();
  num=$num(num)-str.length;
  fStr=$repeat(fStr,num);
  if (method) fStr=$slice(fStr,0,num);
  if (back) str=str+fStr; else str=fStr+str;
  return str;
}