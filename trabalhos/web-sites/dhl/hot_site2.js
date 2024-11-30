(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib._01 = function() {
	this.initialize(img._01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2519,397);


(lib._02 = function() {
	this.initialize(img._02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2465,466);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.Layer1 = function() {
	this.initialize(img.Layer1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2297,545);


(lib.lua = function() {
	this.initialize(img.lua);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,77,87);


(lib.noel = function() {
	this.initialize(img.noel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,860,529);


(lib.noel2 = function() {
	this.initialize(img.noel2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,860,529);


(lib.nuvens_01 = function() {
	this.initialize(img.nuvens_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1305,146);


(lib.nuvens_02 = function() {
	this.initialize(img.nuvens_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1093,123);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Símbolo3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_1
	this.instance = new lib.noel();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo3, new cjs.Rectangle(0,0,860,529), null);


(lib.Símbolo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_1
	this.instance = new lib.Layer1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo1, new cjs.Rectangle(0,0,2297,545), null);


(lib.Interpolação4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_1
	this.instance = new lib.nuvens_01();
	this.instance.parent = this;
	this.instance.setTransform(-652.5,-73);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-652.5,-73,1305,146);


(lib.Interpolação3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_1
	this.instance = new lib.nuvens_02();
	this.instance.parent = this;
	this.instance.setTransform(-546.5,-61.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-546.5,-61.5,1093,123);


(lib.Interpolação2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_1
	this.instance = new lib._01();
	this.instance.parent = this;
	this.instance.setTransform(-1259.5,-198.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1259.5,-198.5,2519,397);


(lib.Interpolação1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_1
	this.instance = new lib._02();
	this.instance.parent = this;
	this.instance.setTransform(-1232.5,-233);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1232.5,-233,2465,466);


(lib.Símbolo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_2
	this.instance = new lib.noel2();
	this.instance.parent = this;
	this.instance.setTransform(-22,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120));

	// Camada_1
	this.instance_1 = new lib.Símbolo3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(430,264.5,1,1,0,0,0,430,264.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,0,882,536);


(lib.Símbolo4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_1
	this.instance = new lib.Símbolo2();
	this.instance.parent = this;
	this.instance.setTransform(381,-147.5,1,1,0,0,0,430,264.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:419,regY:268,x:372,y:-141.3},0).wait(1).to({x:374,y:-138.6},0).wait(1).to({x:376,y:-136},0).wait(1).to({x:376.6,y:-139.1},0).wait(1).to({x:377.1,y:-142.2},0).wait(1).to({x:377.6,y:-145.3},0).wait(1).to({x:378.2,y:-148.5},0).wait(1).to({x:375.2,y:-147.8},0).wait(1).to({x:372.2,y:-147.2},0).wait(1).to({x:369.2,y:-146.6},0).wait(1).to({x:366.2,y:-146},0).wait(1).to({x:367.1,y:-145.5},0).wait(1).to({x:368.1,y:-145},0).wait(1).to({x:369.1,y:-144.5},0).wait(1).to({x:370,y:-144},0).wait(1).to({x:369.6,y:-145.5},0).wait(1).to({x:369.1,y:-147},0).wait(1).to({x:368.6,y:-148.5},0).wait(1).to({x:368.1,y:-150},0).wait(1).to({x:369.6,y:-148.8},0).wait(1).to({x:371.2,y:-147.6},0).wait(1).to({x:372.8,y:-146.4},0).wait(1).to({x:374.4,y:-145.2},0).wait(1).to({x:376,y:-144},0).wait(1).to({x:375.1,y:-144.6},0).wait(1).to({x:374.2,y:-145.3},0).wait(1).to({x:373.3,y:-146},0).wait(1).to({x:372.5,y:-146.6},0).wait(1).to({x:371.6,y:-147.3},0).wait(1).to({x:370.7,y:-148},0).wait(1).to({x:369.8,y:-148.6},0).wait(1).to({x:368.9,y:-149.3},0).wait(1).to({x:368,y:-150},0).wait(1).to({x:367.7,y:-149.3},0).wait(1).to({x:367.4,y:-148.6},0).wait(1).to({x:367,y:-148},0).wait(1).to({x:366.7,y:-147.3},0).wait(1).to({x:366.4,y:-146.6},0).wait(1).to({x:366,y:-146},0).wait(1).to({x:366.7,y:-147},0).wait(1).to({x:367.3,y:-148},0).wait(1).to({x:368,y:-149},0).wait(1).to({x:368.7,y:-150},0).wait(1).to({x:369.3,y:-151},0).wait(1).to({x:370,y:-152},0).wait(1).to({x:369,y:-150.6},0).wait(1).to({x:368,y:-149.3},0).wait(1).to({x:367,y:-148},0).wait(1).to({x:366.1,y:-146.6},0).wait(1).to({x:365.1,y:-145.3},0).wait(1).to({x:364.1,y:-144},0).wait(1).to({x:362.9,y:-145.2},0).wait(1).to({x:361.7,y:-146.4},0).wait(1).to({x:360.5,y:-147.6},0).wait(1).to({x:359.3,y:-148.8},0).wait(1).to({x:358.1,y:-150},0).wait(1).to({x:358.8,y:-150.5},0).wait(1).to({x:359.6,y:-151},0).wait(1).to({x:360.3,y:-151.5},0).wait(1).to({x:361.1,y:-152},0).wait(1).to({x:361.8,y:-152.5},0).wait(1).to({x:362.6,y:-153},0).wait(1).to({x:363.3,y:-153.4},0).wait(1).to({x:364.1,y:-154},0).wait(1).to({x:365.4,y:-152.6},0).wait(1).to({x:366.7,y:-151.3},0).wait(1).to({x:368,y:-150},0).wait(1).to({x:369.3,y:-148.6},0).wait(1).to({x:370.7,y:-147.3},0).wait(1).to({x:372,y:-146},0).wait(1).to({x:371.1,y:-145.5},0).wait(1).to({x:370.3,y:-145.1},0).wait(1).to({x:369.4,y:-144.6},0).wait(1).to({x:368.5,y:-144.2},0).wait(1).to({x:367.6,y:-143.7},0).wait(1).to({x:366.7,y:-143.3},0).wait(1).to({x:365.8,y:-142.8},0).wait(1).to({x:364.9,y:-142.4},0).wait(1).to({x:364.1,y:-142},0).wait(1).to({x:365,y:-142.2},0).wait(1).to({x:366,y:-142.4},0).wait(1).to({x:367,y:-142.6},0).wait(1).to({x:368,y:-142.8},0).wait(1).to({x:369,y:-143},0).wait(1).to({x:370,y:-143.2},0).wait(1).to({x:371,y:-143.4},0).wait(1).to({x:372,y:-143.6},0).wait(1).to({x:373,y:-143.8},0).wait(1).to({x:374,y:-144},0).wait(1).to({x:372.9,y:-144.8},0).wait(1).to({x:371.8,y:-145.7},0).wait(1).to({x:370.7,y:-146.6},0).wait(1).to({x:369.6,y:-147.5},0).wait(1).to({x:368.5,y:-148.4},0).wait(1).to({x:367.4,y:-149.3},0).wait(1).to({x:366.3,y:-150.2},0).wait(1).to({x:365.2,y:-151.1},0).wait(1).to({x:364.1,y:-152},0).wait(1).to({x:364.8,y:-151.4},0).wait(1).to({x:365.5,y:-150.9},0).wait(1).to({x:366.2,y:-150.3},0).wait(1).to({x:367,y:-149.8},0).wait(1).to({x:367.7,y:-149.2},0).wait(1).to({x:368.4,y:-148.7},0).wait(1).to({x:369.1,y:-148.1},0).wait(1).to({x:369.9,y:-147.6},0).wait(1).to({x:370.6,y:-147},0).wait(1).to({x:371.3,y:-146.5},0).wait(1).to({x:372,y:-146},0).wait(1).to({x:372.8,y:-146.6},0).wait(1).to({x:373.6,y:-147.2},0).wait(1).to({x:374.4,y:-147.8},0).wait(1).to({x:375.2,y:-148.4},0).wait(1).to({x:376,y:-149},0).wait(1).to({x:376.8,y:-149.6},0).wait(1).to({x:377.6,y:-150.2},0).wait(1).to({x:378.4,y:-150.8},0).wait(1).to({x:379.2,y:-151.4},0).wait(1).to({x:380,y:-152},0).wait(1).to({x:379.4,y:-151.3},0).wait(1).to({x:378.7,y:-150.6},0).wait(1).to({x:378,y:-150},0).wait(1).to({x:377.4,y:-149.3},0).wait(1).to({x:376.7,y:-148.6},0).wait(1).to({x:376,y:-148},0).wait(1).to({x:375.4,y:-147.3},0).wait(1).to({x:374.7,y:-146.6},0).wait(1).to({x:374,y:-146},0).wait(1).to({x:373.4,y:-145.3},0).wait(1).to({x:372.7,y:-144.6},0).wait(1).to({x:372.1,y:-144},0).wait(1).to({x:371.3,y:-144.7},0).wait(1).to({x:370.6,y:-145.4},0).wait(1).to({x:369.9,y:-146.1},0).wait(1).to({x:369.2,y:-146.9},0).wait(1).to({x:368.4,y:-147.6},0).wait(1).to({x:367.7,y:-148.3},0).wait(1).to({x:367,y:-149},0).wait(1).to({x:366.3,y:-149.8},0).wait(1).to({x:365.5,y:-150.5},0).wait(1).to({x:364.8,y:-151.2},0).wait(1).to({x:364.1,y:-152},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71,-412,882,536);


// stage content:
(lib.hot_site2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// nuven 02
	this.instance = new lib.Interpolação3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(2559.6,172.5);
	this.instance.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-520.4},719).wait(1));

	// nuven 01
	this.instance_1 = new lib.Interpolação4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(2554.4,113);
	this.instance_1.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-616.3},719).wait(1));

	// Camada_93
	this.instance_2 = new lib.lua();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1709,131);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(720));

	// Camada_93
	this.instance_3 = new lib.Símbolo4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1316,415,1,1,0,0,0,370,-144);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(720));

	// Layer 1
	this.instance_4 = new lib.Interpolação2("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(3180.3,883.5,1,1,0,0,180);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(45).to({_off:false},0).to({x:1260.3},290).to({x:660.3},96).to({x:-1258.1},288).wait(1));

	// Layer 1
	this.instance_5 = new lib.Interpolação2("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(1261.5,883.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:-1257.7},335).to({_off:true},1).wait(95).to({_off:false,x:3176.3},0).to({x:1259.5},288).wait(1));

	// Layer 1
	this.instance_6 = new lib.Interpolação1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(3146.9,769);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(143).to({_off:false},0).to({x:2458.9},216).to({x:1226.9},360).wait(1));

	// Layer 1
	this.instance_7 = new lib.Interpolação1("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(1232.5,771);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:1102.8},34).to({x:686.9},109).to({x:2.9},216).to({x:-1233.1},360).wait(1));

	// Layer 1
	this.instance_8 = new lib.Símbolo1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(2884.4,730.5,0.84,0.84,0,0,0,1148.5,272.6);
	this.instance_8.alpha = 0.551;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(2).to({_off:false},0).to({regX:1148.6,regY:272.7,x:2493.1,y:724},146).to({regX:1148.5,regY:272.6,x:962.4,y:688.5},571).wait(1));

	// Layer 1
	this.instance_9 = new lib.Símbolo1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(962.4,688.5,0.84,0.84,0,0,0,1148.5,272.6);
	this.instance_9.alpha = 0.551;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regY:272.7,x:565.3,y:688.6},148).to({x:-372.1,y:666.6},350).to({x:-949.1,y:651.9},215).to({regY:272.6,x:-967.3,y:650.5},6).wait(1));

	// Camada_1
	this.instance_10 = new lib.bg();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-38,-22,1.04,1.04);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(720));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(922,518,3244.9,1123.2);
// library properties:
lib.properties = {
	id: '164E7F423FDC48C3911A05D857ABF042',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_01.png?1512598000087", id:"_01"},
		{src:"images/_02.png?1512598000087", id:"_02"},
		{src:"images/bg.jpg?1512598000087", id:"bg"},
		{src:"images/Layer1.png?1512598000087", id:"Layer1"},
		{src:"images/lua.png?1512598000087", id:"lua"},
		{src:"images/noel.png?1512598000087", id:"noel"},
		{src:"images/noel2.png?1512598000087", id:"noel2"},
		{src:"images/nuvens_01.png?1512598000087", id:"nuvens_01"},
		{src:"images/nuvens_02.png?1512598000087", id:"nuvens_02"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['164E7F423FDC48C3911A05D857ABF042'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;