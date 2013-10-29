function grid(){

this.htmlElement = document.createElement("div");

this.canvas   = document.createElement("canvas");
this.xNumbers = document.createElement("canvas");
this.yNumbers = document.createElement("canvas");



/***************************************************
 *
 ***************************************************/
this.scale = 175;

this.th = new Array();

this.x = new Array();
this.y = new Array();

this.xf;
this.yf;

this.t1_marker = 0;
this.t2_marker = 0;
this.t3_marker = 0;
this.t4_marker = 0;

this.T = 0;


this.true_x_orig = 0;
this.true_y_orig = 350;

this.xOrig;
this.yOrig;

/***************************************************
 * build()
 ***************************************************/
this.build = function(){

	this.htmlElement.style.position = "absolute";
	this.htmlElement.style.top = "0px";
	this.htmlElement.style.left = "0px";
	this.htmlElement.style.width = "20px";
	this.htmlElement.style.height = "20px";
	this.htmlElement.style.zIndex = "400";
	//this.htmlElement.style.backgroundColor = "#CC99CC";


	this.canvas.setAttribute("width","350");
	this.canvas.setAttribute("height","350");
	this.canvas.style.position = "absolute";
	this.canvas.style.top = "38px";
	this.canvas.style.left = "50px";
	//this.canvas.style.backgroundColor = "#CC99CC";
	this.canvas.zIndex = "300";
	
	this.htmlElement.appendChild(this.canvas);//move down
	//-------------------------------------------
	
	this.xNumbers.setAttribute("width","350");
	this.xNumbers.setAttribute("height","30");
	this.xNumbers.style.position = "absolute";
	this.xNumbers.style.top = "390px";
	this.xNumbers.style.left = "50px";
	//this.xNumbers.style.backgroundColor = "#CC99CC";
	this.xNumbers.style.zIndex = "300";
	
	this.htmlElement.appendChild(this.xNumbers);//move down
	//-------------------------------------------
	
	this.yNumbers.setAttribute("width","30");
	this.yNumbers.setAttribute("height","350");
	this.yNumbers.style.position = "absolute";
	this.yNumbers.style.top = "38px";
	this.yNumbers.style.left = "17px";
	//this.yNumbers.style.backgroundColor = "#CC99CC";
	this.yNumbers.style.zIndex = "300";
	
	this.htmlElement.appendChild(this.yNumbers);//move down
	//-------------------------------------------

}
/***************************************************
 *
 ***************************************************/
this.clearView = function(){

var ctx = this.canvas.getContext("2d");
var ctx1 = this.xNumbers.getContext("2d");
var ctx2 = this.yNumbers.getContext("2d");

ctx.clearRect(0,0,800,800);	
ctx1.clearRect(0,0,800,800);	
ctx2.clearRect(0,0,800,800);
	
}
/***************************************************
 *
 ***************************************************/
this.drawAxis = function(){
	

var ctx = this.canvas.getContext("2d");
var ctx_xn = this.xNumbers.getContext("2d");
var ctx_yn = this.yNumbers.getContext("2d");

var spacing = this.scale/10;


ctx_yn.save();
ctx_yn.strokeStyle = 'rgb(0,0,0)';

ctx.save();
ctx.strokeStyle = 'rgb(0,0,0)';


var begin_y = this.yOrig%spacing;

for(i=0;i<25;i++){
//ctx.save();
ctx.lineWidth = 0.5;
ctx.beginPath();
ctx.moveTo(0,begin_y+i*spacing);
ctx.lineTo(350,begin_y+i*spacing);
ctx.closePath();
ctx.stroke();
//ctx.restore();

ctx_yn.lineWidth = 0.5;
ctx_yn.beginPath();
ctx_yn.moveTo(20,begin_y+i*spacing);
ctx_yn.lineTo(30,begin_y+i*spacing);
ctx_yn.closePath();
ctx_yn.stroke();

}

ctx.restore();
ctx_yn.restore();
//-----------------------------

ctx_xn.save();
ctx_xn.strokeStyle = 'rgb(0,0,0)';

ctx.save();
ctx.strokeStyle = 'rgb(0,0,0)';


var begin_x = this.xOrig%spacing;

for(i=0;i<25;i++){
//ctx.save();
ctx.lineWidth = 0.5;
ctx.beginPath();
ctx.moveTo(begin_x+i*spacing,0);
ctx.lineTo(begin_x+i*spacing,350);
ctx.closePath();
ctx.stroke();
//ctx.restore();

ctx_xn.lineWidth = 0.5;
ctx_xn.beginPath();
ctx_xn.moveTo(begin_y+i*spacing,0);
ctx_xn.lineTo(begin_y+i*spacing,10);
ctx_xn.closePath();
ctx_xn.stroke();

}

ctx.restore();
ctx_yn.restore();

/* */



for(i=0;i<5;i++){

ctx_yn.save();
ctx_yn.font = "Bold 12.0px 'Arial'";
if(i!=0)
ctx_yn.fillText("- "+i,5,this.yOrig+spacing*10*i);
ctx_yn.fillText(i,5,this.yOrig-spacing*10*i); 
ctx_yn.restore();

ctx_xn.save();
ctx_xn.font = "Bold 12.0px 'Arial'";
if(i!=0)
ctx_xn.fillText("- "+i,this.xOrig-spacing*10*i,24);
ctx_xn.fillText(i,this.xOrig+spacing*10*i,24); 
ctx_xn.restore();

}




}
/***************************************************
 *
 ***************************************************/
this.appendValue = function(x,y){
	
var X = this.xOrig + x*this.scale;	
var Y = this.yOrig - y*this.scale;
	
this.xPointsAr.push(x);
this.yPointsAr.push(y);
}
this.clear = function(){
this.xPointsAr = new Array();
this.yPointsAr = new Array();
this.T=0;	
}
/***************************************************
 *
 ***************************************************/
this.drawObject = function(x,y){

var ctx = canvas.getContext("2d");
ctx.fillStyle="#CC0000";
ctx.beginPath();
ctx.arc(x,y,15,0,Math.PI*2,true);
ctx.closePath();
ctx.fill();

}
/***************************************************
 *
 ***************************************************/
this.drawVector = function(){

var ctx = this.canvas.getContext("2d");

var x;
var y;





ctx.save();

ctx.beginPath();
ctx.strokeStyle = this.color;
ctx.moveTo(this.xOrig + this.xPointsAr[0]*this.scale,this.yOrig - this.yPointsAr[0]*this.scale);
 
for (var i=1;i<this.xPointsAr.length;i++){
x = this.xOrig + this.xPointsAr[i]*this.scale;
y = this.yOrig - this.yPointsAr[i]*this.scale;
ctx.lineTo(x,y);
}
ctx.stroke();


ctx.beginPath();
ctx.fillStyle = "#CC0000";
ctx.arc(x,y,5,0,Math.PI*2,true);
ctx.closePath();
ctx.fill();
ctx.restore();

}
/***************************************************
 *
 ***************************************************/
this.drawPoints = function(){

	var ctx = this.canvas.getContext("2d");
	
	ctx.save();
	
	for(i=1;i<=20;i++){

		ctx.beginPath();
		ctx.fillStyle = "#CC9999";
		ctx.arc(this.xOrig + this.x[i]*this.scale , this.yOrig - this.y[i]*this.scale	,4,0,Math.PI*2,true);
		ctx.closePath();
		ctx.fill();
		
	}
	
	ctx.restore();
	
}
/***************************************************
 *
 ***************************************************/
this.drawArrows = function(){

var ctx = this.canvas.getContext("2d");

	for(i=1;i<=20;i++){
	
		ctx.save();
		ctx.translate(this.xOrig + this.x[i]*this.scale , this.yOrig - this.y[i]*this.scale);
		ctx.rotate(-this.th[i]);
		ctx.beginPath();
		ctx.moveTo(0,0);
		ctx.lineTo(-8,-4);
		ctx.lineTo(-5,0);
		ctx.lineTo(-8,4);
		ctx.closePath();
		ctx.fill();
		ctx.restore();
	
	}

}
/***************************************************
 *
 ***************************************************/
this.setOriginX = function(x){
//alert(x);
this.xOrig = this.true_x_orig+x*this.scale;
}
this.setOriginY = function(y){
this.yOrig = this.true_y_orig-y*this.scale;		
}




this.setX=function(a,i){
this.x[i]= a;//this.xOrig + a*this.scale;
}
this.setY=function(a,i){
this.y[i] = a;//this.yOrig - a*this.scale;
}


//this.setXf=function(a){
//this.xf = this.xOrig + a*this.scale;	
//}
//this.setYf=function(a){
//this.yf = this.yOrig - a*this.scale;	
//}
/***************************************************
 *
 ***************************************************/
this.build();


}
