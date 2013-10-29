function dispInView(keyPad){

this.htmlElement = document.createElement("div");
this.background  = document.createElement("canvas");

this.keyPad = keyPad;
/***************************************************
 *
 ***************************************************/
this.build = function(){

this.htmlElement.style.position = "absolute";
this.htmlElement.style.width  = "245px";
this.htmlElement.style.height = "315px";
this.htmlElement.style.top = "69px";
this.htmlElement.style.left = "537px";
//this.htmlElement.style.backgroundColor = "#FFCCCC";
this.htmlElement.style.overflow = "auto";


this.background.style.position = "absolute";
this.background.setAttribute("width","210");
this.background.setAttribute("height",20*32);
this.background.style.top = "0px";
this.background.style.left = "0px";
//this.background.style.backgroundColor = "#F00";

this.htmlElement.appendChild(this.background);//move down

this.xInputs = new Array();
this.yInputs = new Array();

for(i=1;i<=20;i++){
this.xInputs[i] = new ergoInput(50,(i-1)*32+5,55,20,this.keyPad);
this.htmlElement.appendChild(this.xInputs[i].htmlElement);//move down
this.yInputs[i] = new ergoInput(135,(i-1)*32+5,55,20,this.keyPad);
this.htmlElement.appendChild(this.yInputs[i].htmlElement);//move down
}


}
/***************************************************
 *
 ***************************************************/
this.drawBack = function(){

var ctx = this.background.getContext("2d");

for(i=0;i<20;i++){

      ctx.save();

	  ctx.translate(0,i*32);

      ctx.save();
      ctx.font = "Italic 24.0px 'Times New Roman'";
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fillText("d", 6.5, 20.0);
      ctx.font = "16.0px 'Times New Roman'";
      ctx.fillText(i+1, 17.5, 27.0);
      ctx.restore();

      ctx.save();
      ctx.font = "18.0px 'Arial'";
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fillText("m", 211.5, 26.0);
      ctx.restore();

      ctx.save();
      ctx.font = "30.0px 'Times New Roman'";
      ctx.transform(1.000, 0.000, 0.000, 1.000, 35.5, 26.4);
      ctx.fillText("(", 0, 0);
      ctx.restore();

      ctx.save();
      ctx.font = "30.0px 'Times New Roman'";
      ctx.transform(1.000, 0.000, 0.000, 1.000, 117.5, 30.0);
      ctx.fillText(",", 0, 0);
      ctx.restore();

      ctx.save();
      ctx.font = "30.0px 'Times New Roman'";
      ctx.transform(1.000, 0.000, 0.000, 1.000, 199.5, 26.4);
      ctx.fillText(")", 0, 0);
      ctx.restore();
      
      ctx.restore();
     
}
	
}
/***************************************************
 *
 ***************************************************/
this.userInputFunctionX = function(a,i){}
this.bindOutX = function(fnct){

	this.userInputFunctionX = fnct;

}
this.userInputFunctionY = function(a,i){}
this.bindOutY = function(fnct){

	this.userInputFunctionY = fnct;

}
/***************************************************
 *
 ***************************************************/
this.bindEvents = function(c){

for(i=1;i<=20;i++){

eval('this.xInputs['+i+'].bind("out",function(a){c.userInputFunctionX(a,'+i+');});');
eval('this.yInputs['+i+'].bind("out",function(a){c.userInputFunctionY(a,'+i+');});');


}/* */

}
/***************************************************
 *
 ***************************************************/
this.setxValue = function(v,i){

	this.xInputs[i].setValue(v);

}
this.setyValue = function(v,i){

	this.yInputs[i].setValue(v);

}
/***************************************************
 *
 ***************************************************/
this.build();
this.drawBack();
this.bindEvents(this);
}
