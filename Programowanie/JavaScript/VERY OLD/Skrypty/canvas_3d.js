canv=new Object();
canv.timers=new Array();
alert(canv.timers.length);
Canv=new Object(function(args) {
	try {
		if (args.ID) {
			if (!document.getElementById(args.ID)) canvID=args.ID; else canvID="canv"+(++this.canvCount);
		};
		if (args.fit) {
			this.timers[this.timers.length]=setTimeout(function() {
					try {
						with (document.getElementById(args.ID).style) {
							left="0px";
							top="0px";
						};
					} catch(err) { void(null); };
				},33);
		};
	} catch(err) { this.canvCount=0 };
	
	return document.getElementById(canvID);
});