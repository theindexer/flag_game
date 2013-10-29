function graphEditView(keyPad){

this.htmlElement = document.createElement("div");

this.backCanvas = document.createElement("canvas");

this.keyPad = keyPad;

/***************************************************
 *
 ***************************************************/
this.build = function(){


this.htmlElement.style.position = "absolute";
this.htmlElement.style.height = "20px";
this.htmlElement.style.width  = "20px";
this.htmlElement.style.top = "30px";
this.htmlElement.style.left = "20px";
this.htmlElement.style.zIndex = "1000";
//this.htmlElement.style.backgroundColor = "#CC99CC";

this.backCanvas.setAttribute("width","225");
this.backCanvas.setAttribute("height","110");
this.backCanvas.style.position = "absolute";
this.backCanvas.style.top = "0px";
this.backCanvas.style.left = "0px";
this.backCanvas.style.zIndex = "300";
//this.backCanvas.style.backgroundColor = "#CC99CC";

this.htmlElement.appendChild(this.backCanvas);//move down
//-------------------------------------------

this.xIn = new ergoInput(80,33,80,24,this.keyPad);
this.htmlElement.appendChild(this.xIn.htmlElement);//move down

this.yIn = new ergoInput(80,68,80,24,this.keyPad);
this.htmlElement.appendChild(this.yIn.htmlElement);//move down


this.closeBtn = new closeBtn(180,0);
this.htmlElement.appendChild(this.closeBtn.htmlElement);//move down

}
/***************************************************
 *
 ***************************************************/
this.hide = function(){
this.htmlElement.style.display = "none";
}
this.show = function(){
this.htmlElement.style.display = "";
}
/***************************************************
 *
 ***************************************************/
this.setXFunction = function(){}
this.setYFunction = function(){}
this.setScaleFunction = function(a){}

this.bindXinput = function(fnct){this.setXFunction=fnct; }
this.bindYinput = function(fnct){this.setYFunction=fnct; }
this.bindScaleInput = function(fnct){this.setScaleFunction=fnct; }

this.setXin = function(a){this.xIn.setValue(a);}
this.setYin = function(a){this.yIn.setValue(a);}
this.setScaleIn = function(a){
	this.scaleSlide.slidePosition=26+a;
	this.scaleSlide.drawSlider();
}
/***************************************************
 *
 ***************************************************/
this.bindEvents = function(c){

this.xIn.bind("out",function(a){ c.setXFunction(Math.floor(a*10)/10); });

this.yIn.bind("out",function(a){ c.setYFunction(Math.floor(a*10)/10); });


this.closeBtn.bind("mousedown",function(a){ c.hide(); });

}
/***************************************************
 *
 ***************************************************/
this.drawBackgorund = function(){

var ctx = this.backCanvas.getContext("2d");

var alpha = ctx.globalAlpha;

      // layer1/Path
      ctx.save();
      ctx.globalAlpha = alpha * 0.70;
      ctx.beginPath();
      ctx.moveTo(0.5, 109.5);
      ctx.lineTo(224.5, 109.5);
      ctx.lineTo(224.5, 0.5);
      ctx.lineTo(0.5, 0.5);
      ctx.lineTo(0.5, 109.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(222, 240, 241)";
      ctx.fill();
      ctx.stroke();

      // layer1/xy
      ctx.globalAlpha = alpha * 1.00;
      ctx.font = "Bold Italic 21.0px 'Times New Roman'";
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fillText("x", 45.5, 53.5);
      ctx.fillText("y", 45.5, 85.5);

      // layer1/mm
      ctx.font = "Bold 18.0px 'Arial'";
      ctx.fillText("m", 183.5, 57.5);
      ctx.fillText("m", 183.5, 90.5);

      // layer1/Set scale
      ctx.font = "Bold 17.0px 'Arial'";
      // layer1/Set origin
      ctx.fillText("Set origin", 17.5, 22.5);
      ctx.restore();

}
/***************************************************
 *
 ***************************************************/
this.build();
this.drawBackgorund();
this.bindEvents(this);

}
