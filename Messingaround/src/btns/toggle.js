function toggle(left,top,str){


//create a canvas element for this object
//all library fnction have an htmlElement member though the type of element may vary depedning pn the object
this.htmlElement = document.createElement("canvas");

//define default button values
//height and width are predefined for this button
this.height = 50;
this.width  = 50;

this.str = str;

//button is poisitoned upon instantiation
this.top    = top;
this.left   = left;

this.running = 0;

/*========================================================================================================*/
//set all the atributes for this html_Element
this.build = function(){
	
this.htmlElement.setAttribute("width",this.width);
this.htmlElement.setAttribute("height",this.height);
this.htmlElement.style.position = "absolute";
this.htmlElement.style.top = this.top+"px";
this.htmlElement.style.left = this.left+"px";
this.htmlElement.style.zIndex = "500";	
}

this.runFunction = function(e){};
/*========================================================================================================*/
//draw the upstate for the button (up state is the same as out state)
this.up_stoped_LF=function(){
	var ctx = this.htmlElement.getContext("2d");
// layer1/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(45.0, 22.5);
      ctx.bezierCurveTo(45.0, 34.9, 34.9, 45.0, 22.5, 45.0);
      ctx.bezierCurveTo(10.1, 45.0, 0.0, 34.9, 0.0, 22.5);
      ctx.bezierCurveTo(0.0, 10.1, 10.1, 0.0, 22.5, 0.0);
      ctx.bezierCurveTo(34.9, 0.0, 45.0, 10.1, 45.0, 22.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(204, 204, 204)";
      ctx.fill();
      ctx.restore();

      // layer3/1
      ctx.save();
      ctx.font = "Bold 24.0px 'Arial'";
      ctx.fillText(this.str, 14.8, 30.3);
      ctx.restore();	
     
}
/*========================================================================================================*/
//draw the down state for the button
this.down_stoped_LF=function(){
	var ctx = this.htmlElement.getContext("2d");
 // layer1/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(45.0, 22.5);
      ctx.bezierCurveTo(45.0, 34.9, 34.9, 45.0, 22.5, 45.0);
      ctx.bezierCurveTo(10.1, 45.0, 0.0, 34.9, 0.0, 22.5);
      ctx.bezierCurveTo(0.0, 10.1, 10.1, 0.0, 22.5, 0.0);
      ctx.bezierCurveTo(34.9, 0.0, 45.0, 10.1, 45.0, 22.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(204, 204, 204)";
      ctx.fill();
      ctx.restore();

      // layer3/1
      ctx.save();
      ctx.font = "Bold 24.0px 'Arial'";
      ctx.fillText(this.str, 14.8, 30.3);
      ctx.restore();     
}
/*========================================================================================================*/
//draw the over state
this.over_stoped_LF=function(){
	var ctx = this.htmlElement.getContext("2d");
// layer1/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(45.0, 22.5);
      ctx.bezierCurveTo(45.0, 34.9, 34.9, 45.0, 22.5, 45.0);
      ctx.bezierCurveTo(10.1, 45.0, 0.0, 34.9, 0.0, 22.5);
      ctx.bezierCurveTo(0.0, 10.1, 10.1, 0.0, 22.5, 0.0);
      ctx.bezierCurveTo(34.9, 0.0, 45.0, 10.1, 45.0, 22.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(204, 204, 204)";
      ctx.fill();
      ctx.restore();

      // layer3/1
      ctx.save();
      ctx.font = "Bold 24.0px 'Arial'";
      ctx.fillText(this.str, 14.8, 30.3);
      ctx.restore();
      
}
/*========================================================================================================*/
//draw the mouseout state (out state is the same as the up state)
this.out_stoped_LF=function(){
	var ctx = this.htmlElement.getContext("2d");
// layer1/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(45.0, 22.5);
      ctx.bezierCurveTo(45.0, 34.9, 34.9, 45.0, 22.5, 45.0);
      ctx.bezierCurveTo(10.1, 45.0, 0.0, 34.9, 0.0, 22.5);
      ctx.bezierCurveTo(0.0, 10.1, 10.1, 0.0, 22.5, 0.0);
      ctx.bezierCurveTo(34.9, 0.0, 45.0, 10.1, 45.0, 22.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(204, 204, 204)";
      ctx.fill();
      ctx.restore();

      // layer3/1
      ctx.save();
      ctx.font = "Bold 24.0px 'Arial'";
      ctx.fillText(this.str, 14.8, 30.3);
      ctx.restore();
      
}
/*========================================================================================================*/
//------- running look and feel---------------------------------------
this.up_running_LF=function(){
	var ctx = this.htmlElement.getContext("2d");
// layer2/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(45.0, 22.5);
      ctx.bezierCurveTo(45.0, 34.9, 34.9, 45.0, 22.5, 45.0);
      ctx.bezierCurveTo(10.1, 45.0, 0.0, 34.9, 0.0, 22.5);
      ctx.bezierCurveTo(0.0, 10.1, 10.1, 0.0, 22.5, 0.0);
      ctx.bezierCurveTo(34.9, 0.0, 45.0, 10.1, 45.0, 22.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(149, 182, 223)";
      ctx.fill();
      ctx.restore();

      // layer3/1
      ctx.save();
      ctx.font = "Bold 24.0px 'Arial'";
      ctx.fillText(this.str, 14.8, 30.3);
      ctx.restore();
      
}
/*========================================================================================================*/
//draw the down state for the button
this.down_running_LF=function(){
	var ctx = this.htmlElement.getContext("2d");
// layer2/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(45.0, 22.5);
      ctx.bezierCurveTo(45.0, 34.9, 34.9, 45.0, 22.5, 45.0);
      ctx.bezierCurveTo(10.1, 45.0, 0.0, 34.9, 0.0, 22.5);
      ctx.bezierCurveTo(0.0, 10.1, 10.1, 0.0, 22.5, 0.0);
      ctx.bezierCurveTo(34.9, 0.0, 45.0, 10.1, 45.0, 22.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(149, 182, 223)";
      ctx.fill();
      ctx.restore();

      // layer3/1
      ctx.save();
      ctx.font = "Bold 24.0px 'Arial'";
      ctx.fillText(this.str, 14.8, 30.3);
      ctx.restore();
}
/*========================================================================================================*/
//draw the over state
this.over_running_LF=function(){
	  var ctx = this.htmlElement.getContext("2d");
// layer2/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(45.0, 22.5);
      ctx.bezierCurveTo(45.0, 34.9, 34.9, 45.0, 22.5, 45.0);
      ctx.bezierCurveTo(10.1, 45.0, 0.0, 34.9, 0.0, 22.5);
      ctx.bezierCurveTo(0.0, 10.1, 10.1, 0.0, 22.5, 0.0);
      ctx.bezierCurveTo(34.9, 0.0, 45.0, 10.1, 45.0, 22.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(149, 182, 223)";
      ctx.fill();
      ctx.restore();

      // layer3/1
      ctx.save();
      ctx.font = "Bold 24.0px 'Arial'";
      ctx.fillText(this.str, 14.8, 30.3);
      ctx.restore();
}
/*========================================================================================================*/
//draw the mouseout state (out state is the same as the up state)
this.out_running_LF=function(){
      var ctx = this.htmlElement.getContext("2d");
	// layer2/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(45.0, 22.5);
      ctx.bezierCurveTo(45.0, 34.9, 34.9, 45.0, 22.5, 45.0);
      ctx.bezierCurveTo(10.1, 45.0, 0.0, 34.9, 0.0, 22.5);
      ctx.bezierCurveTo(0.0, 10.1, 10.1, 0.0, 22.5, 0.0);
      ctx.bezierCurveTo(34.9, 0.0, 45.0, 10.1, 45.0, 22.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(149, 182, 223)";
      ctx.fill();
      ctx.restore();

      // layer3/1
      ctx.save();
      ctx.font = "Bold 24.0px 'Arial'";
      ctx.fillText(this.str, 14.8, 30.3);
      ctx.restore();
}

/*========================================================================================================*/
this.bind=function(evnt,fctn){
//determine the right event and assign to the right function
if(evnt=="mousedown"){this.downFunction=fctn;}
if(evnt=="mouseup"){this.upFunction=fctn;}
if(evnt=="mouseover"){this.overFunction=fctn;}
if(evnt=="mouseout"){this.outFunction=fctn;}	
}
/*========================================================================================================*/
this.unbind=function(evnt){
//if the event is specified in the call tot his function then that spefic event function is removed	
if(evnt=="mousedown"){this.downFunction=null;}
if(evnt=="mouseup"){this.upFunction=null;}
if(evnt=="mouseover"){this.overFunction=null;}
if(evnt=="mouseout"){this.outFunction=null;}
//otherwise all functions are set to null this removing all bound functions from this object
if(evnt==undefined){
this.downFunction = null;
this.upfunction   = null;
this.overFunction = null;
this.outFunction  = null;
}

}
/*========================================================================================================*/
this.bindRun=function(fnct){this.run=fnct;}
this.unbindRun=function(fnct){this.run=null;}

this.bindStop=function(fnct){this.stop=fnct;}
this.unbindStop=function(fnct){this.stop=null;}

this.run=function(c){}
this.stop=function(c){}

/*========================================================================================================*/
this.CreateButtonEvents=function(c){
	
//bind events for non internet explorer borswers
if(window.platformFlag=="DSK"&&window.browserFlag=="NOT_IE"){
this.desktopEvents(this);
}

//bind internet expolorer specific events
if(window.platformFlag=="DSK"&&window.browserFlag=="IE"){
this.ieEvents(this);
}

//this is the ios events
if(window.platformFlag=="IOS"){
this.touchScreenEvents(this);
}
//this is the android events
if(window.platformFlag=="AND"){
this.touchScreenEvents(this);
}	
	
}
/*========================================================================================================*/
this.desktopEvents=function(c){

this.htmlElement.addEventListener("mousedown",function(e){
	if(c.running==0){
	c.down_stoped_LF();
	c.running=1;
	c.run(c);
	}
	else{
	//c.down_running_LF();
	//c.running=0;
	//c.stop(c);	
	}
});
this.htmlElement.addEventListener("mouseup",function(e){
	if(c.running==0){
	c.over_stoped_LF();
	}
	else{
	c.over_running_LF();	
	}
	
});
this.htmlElement.addEventListener("mouseover",function(e){
	if(c.running==0){
	c.over_stoped_LF();
	}
	else{
	c.over_running_LF();	
	}
});
this.htmlElement.addEventListener("mouseout",function(e){
	if(c.running==0){
	c.out_stoped_LF();
	}
	else{
	c.out_running_LF();	
	}	
});

}
/*========================================================================================================*/
this.touchScreenEvents=function(c){

this.htmlElement.addEventListener("touchstart",function(e){
	if(c.running==0){
	c.down_stoped_LF();
	c.running=1;
	c.run(c);
	}
	else{
	//c.down_running_LF();
	//c.running=0;
	//c.stop(c);	
	}
});
this.htmlElement.addEventListener("touchend",function(e){
	if(c.running==0){
	c.over_stoped_LF();
	}
	else{
	c.over_running_LF();	
	}
	
});

/*
this.htmlElement.addEventListener("mouseover",function(e){
	if(c.running==0){
	c.over_stoped_LF();
	}
	else{
	c.over_running_LF();	
	}
});
this.htmlElement.addEventListener("mouseout",function(e){
	if(c.running==0){
	c.out_stoped_LF();
	}
	else{
	c.out_running_LF();	
	}	
});
*/

}
/*========================================================================================================*/
this.ieEvents=function(c){

this.htmlElement.attachEvent("onmousedown",function(e){
	if(c.running==0){
	c.down_stoped_LF();
	c.running=1;
	c.run(c);
	}
	else{
	//c.down_running_LF();
	//c.running=0;
	//c.stop(c);	
	}
});
this.htmlElement.attachEvent("onmouseup",function(e){
	if(c.running==0){
	c.over_stoped_LF();
	}
	else{
	c.over_running_LF();	
	}
	
});
this.htmlElement.attachEvent("onmouseover",function(e){
	if(c.running==0){
	c.over_stoped_LF();
	}
	else{
	c.over_running_LF();	
	}
});
this.htmlElement.attachEvent("onmouseout",function(e){
	if(c.running==0){
	c.out_stoped_LF();
	}
	else{
	c.out_running_LF();	
	}	
});
	
}
/*========================================================================================================*/


//call all the function to make this button visable
this.build();
this.out_stoped_LF();
//bind events for this function
this.CreateButtonEvents(this);
	
}
