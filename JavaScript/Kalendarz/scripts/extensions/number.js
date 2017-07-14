Number.prototype.numeral=function(lang,data)
{
	lang=lang.toLowerCase();
	number=Math.floor(parseFloat(Math.abs(this)));
	if (lang=="pl")
	{
		if (number==1) {return data.prefix+data.suffix1};
		number=number%100;
		if (number%10>=2&&number%10<=4)
		{
			if (number>=12&&number<=14) {return data.prefix+data.suffixOther};
			return data.prefix+data.suffix2_4;
		}
		return data.prefix+data.suffixOther;
	}
};