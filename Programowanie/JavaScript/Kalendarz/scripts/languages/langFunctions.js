lang=new Object(function(){return lang.set?lang.set:"en"});
lang.write=function(text,data)
{
	if (!text) {return "NODATA"};
	if (!data) {return text};
	if (typeof(data)!="object") {data=[data]};
	text=text.replace(/%ins[0-9]{1,}/gi,function(x)
	{
		num=Math.floor(parseFloat(x.substring(4)));
		if (num<data.length) {return data[num]} else {return x};
	});
	text=text.replace(/\$.+\$/gi,function(x)
	{
		x=x.substring(1,x.length-1);
		return eval(x);
	});
	return text;
};