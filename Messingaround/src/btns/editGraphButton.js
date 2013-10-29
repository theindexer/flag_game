/*
** general purpose button. 
** 
*/
function editGraphButton(left,top){

//create a canvas element for this object
//all library fnction have an htmlElement member though the type of element may vary depedning pn the object
this.htmlElement = document.createElement("canvas");

//define default button values
//height and width are predefined for this button
this.height = 50;
this.width  = 60;

//button is poisitoned upon instantiation
this.top    = top;
this.left   = left;

this.buttonString="";
/*========================================================================================================*/
//set all the atributes for this function
this.build = function(){

this.htmlElement.setAttribute("width",this.width);
this.htmlElement.setAttribute("height",this.height);
this.htmlElement.style.position = "absolute";
this.htmlElement.style.top = this.top+"px";
this.htmlElement.style.left = this.left+"px";
this.htmlElement.style.zIndex = "500";
	
}
/*========================================================================================================*/

/*========================================================================================================*/
//blank functions that will be asigned new functions with the use of the bind method
this.downFunction = function(e){};
this.upfunction   = function(e){};
this.overFunction = function(e){};
this.outFunction  = function(e){};
/*========================================================================================================*/
this.hideButton=function(){this.htmlElement.style.display="none";}
this.showButton=function(){this.htmlElement.style.display="inherit";}
/*========================================================================================================*/
//draw the upstate for the button (up state is the same as out state)
this.up_LF=function(){
	
    var ctx = this.htmlElement.getContext("2d");
    
    var gradient;

      // layer2/Group
      ctx.save();

      // layer2/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(60.0, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(60.0, 0.0);
      ctx.lineTo(60.0, 50.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(144, 222, 255)";
      ctx.fill();

      // layer2/Group/Path
      ctx.beginPath();
      ctx.moveTo(5.1, 41.7);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(5.1, 8.3);
      ctx.lineTo(5.1, 41.7);
      ctx.closePath();
      gradient = ctx.createLinearGradient(0.0, 25.0, 5.1, 25.0);
      gradient.addColorStop(0.00, "rgb(129, 129, 129)");
      gradient.addColorStop(1.00, "rgb(144, 222, 255)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // layer2/Group/Path
      ctx.beginPath();
      ctx.moveTo(60.0, 50.0);
      ctx.lineTo(54.9, 41.7);
      ctx.lineTo(54.9, 8.3);
      ctx.lineTo(60.0, 0.0);
      ctx.lineTo(60.0, 50.0);
      ctx.closePath();
      gradient = ctx.createLinearGradient(55.0, 25.0, 60.1, 25.0);
      gradient.addColorStop(0.00, "rgb(144, 222, 255)");
      gradient.addColorStop(1.00, "rgb(239, 239, 239)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // layer2/Group/Path
      ctx.beginPath();
      ctx.moveTo(60.0, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(5.1, 41.7);
      ctx.lineTo(54.9, 41.7);
      ctx.lineTo(60.0, 50.0);
      ctx.closePath();
      gradient = ctx.createLinearGradient(30.0, 49.8, 30.0, 42.0);
      gradient.addColorStop(0.00, "rgb(129, 129, 129)");
      gradient.addColorStop(1.00, "rgb(144, 222, 255)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // layer2/Group/Path
      ctx.beginPath();
      ctx.moveTo(54.9, 8.3);
      ctx.lineTo(5.5, 8.3);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(60.0, 0.0);
      ctx.lineTo(54.9, 8.3);
      ctx.closePath();
      gradient = ctx.createLinearGradient(30.0, 8.2, 30.0, 0.1);
      gradient.addColorStop(0.00, "rgb(144, 222, 255)");
      gradient.addColorStop(1.00, "rgb(239, 239, 239)");
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.restore();
      ctx.restore();

      // layer4/editgraph
      ctx.save();
      ctx.font = "Bold 16.0px 'Arial'";
      ctx.fillStyle = "rgb(218, 45, 58)";
      ctx.fillText("edit", 15.8, 20.9);
      ctx.fillText("graph", 7.8, 36.9);
      ctx.restore();
    
}
/*========================================================================================================*/
//draw the down state for the button
this.down_LF=function(){
	
    var ctx = this.htmlElement.getContext("2d");
    
    var gradient;

      // layer1/Group
      ctx.save();

      // layer1/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(60.0, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(60.0, 0.0);
      ctx.lineTo(60.0, 50.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(144, 206, 234)";
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(5.1, 41.7);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(5.1, 8.3);
      ctx.lineTo(5.1, 41.7);
      ctx.closePath();
      gradient = ctx.createLinearGradient(0.0, 25.0, 5.1, 25.0);
      gradient.addColorStop(0.00, "rgb(89, 89, 89)");
      gradient.addColorStop(1.00, "rgb(144, 206, 234)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(60.0, 50.0);
      ctx.lineTo(54.9, 41.7);
      ctx.lineTo(54.9, 8.3);
      ctx.lineTo(60.0, 0.0);
      ctx.lineTo(60.0, 50.0);
      ctx.closePath();
      gradient = ctx.createLinearGradient(55.0, 25.0, 60.1, 25.0);
      gradient.addColorStop(0.00, "rgb(144, 206, 234)");
      gradient.addColorStop(1.00, "rgb(129, 129, 129)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(60.0, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(5.1, 41.7);
      ctx.lineTo(54.9, 41.7);
      ctx.lineTo(60.0, 50.0);
      ctx.closePath();
      gradient = ctx.createLinearGradient(30.0, 49.8, 30.0, 42.0);
      gradient.addColorStop(0.00, "rgb(89, 89, 89)");
      gradient.addColorStop(1.00, "rgb(144, 206, 234)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // layer1/Group/Path
      ctx.beginPath();
      ctx.moveTo(54.9, 8.3);
      ctx.lineTo(5.1, 8.3);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(60.0, 0.0);
      ctx.lineTo(54.9, 8.3);
      ctx.closePath();
      gradient = ctx.createLinearGradient(30.0, 8.2, 30.0, 0.1);
      gradient.addColorStop(0.00, "rgb(144, 206, 234)");
      gradient.addColorStop(1.00, "rgb(129, 129, 129)");
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.restore();
      ctx.restore();

      // layer4/editgraph
      ctx.save();
      ctx.font = "Bold 16.0px 'Arial'";
      ctx.fillStyle = "rgb(218, 45, 58)";
      ctx.fillText("edit", 15.8, 20.9);
      ctx.fillText("graph", 7.8, 36.9);
      ctx.restore();  

}
/*========================================================================================================*/
//draw the over state
this.over_LF=function(){
   
    var ctx = this.htmlElement.getContext("2d");
    
    var gradient;

      // layer2/Group
      ctx.save();

      // layer2/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(60.0, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(60.0, 0.0);
      ctx.lineTo(60.0, 50.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(144, 222, 255)";
      ctx.fill();

      // layer2/Group/Path
      ctx.beginPath();
      ctx.moveTo(5.1, 41.7);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(5.1, 8.3);
      ctx.lineTo(5.1, 41.7);
      ctx.closePath();
      gradient = ctx.createLinearGradient(0.0, 25.0, 5.1, 25.0);
      gradient.addColorStop(0.00, "rgb(129, 129, 129)");
      gradient.addColorStop(1.00, "rgb(144, 222, 255)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // layer2/Group/Path
      ctx.beginPath();
      ctx.moveTo(60.0, 50.0);
      ctx.lineTo(54.9, 41.7);
      ctx.lineTo(54.9, 8.3);
      ctx.lineTo(60.0, 0.0);
      ctx.lineTo(60.0, 50.0);
      ctx.closePath();
      gradient = ctx.createLinearGradient(55.0, 25.0, 60.1, 25.0);
      gradient.addColorStop(0.00, "rgb(144, 222, 255)");
      gradient.addColorStop(1.00, "rgb(239, 239, 239)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // layer2/Group/Path
      ctx.beginPath();
      ctx.moveTo(60.0, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(5.1, 41.7);
      ctx.lineTo(54.9, 41.7);
      ctx.lineTo(60.0, 50.0);
      ctx.closePath();
      gradient = ctx.createLinearGradient(30.0, 49.8, 30.0, 42.0);
      gradient.addColorStop(0.00, "rgb(129, 129, 129)");
      gradient.addColorStop(1.00, "rgb(144, 222, 255)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // layer2/Group/Path
      ctx.beginPath();
      ctx.moveTo(54.9, 8.3);
      ctx.lineTo(5.5, 8.3);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(60.0, 0.0);
      ctx.lineTo(54.9, 8.3);
      ctx.closePath();
      gradient = ctx.createLinearGradient(30.0, 8.2, 30.0, 0.1);
      gradient.addColorStop(0.00, "rgb(144, 222, 255)");
      gradient.addColorStop(1.00, "rgb(239, 239, 239)");
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.restore();
      ctx.restore();

      // layer4/editgraph
      ctx.save();
      ctx.font = "Bold 16.0px 'Arial'";
      ctx.fillStyle = "rgb(218, 45, 58)";
      ctx.fillText("edit", 15.8, 20.9);
      ctx.fillText("graph", 7.8, 36.9);
      ctx.restore();
    
}
/*========================================================================================================*/
//draw the mouseout state (out state is the same as the up state)
this.out_LF=function(){
    var ctx = this.htmlElement.getContext("2d");
    
    var gradient;

      // layer3/Group
      ctx.save();

      // layer3/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(60.0, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(60.0, 0.0);
      ctx.lineTo(60.0, 50.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(144, 206, 234)";
      ctx.fill();

      // layer3/Group/Path
      ctx.beginPath();
      ctx.moveTo(5.1, 41.7);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(5.1, 8.3);
      ctx.lineTo(5.1, 41.7);
      ctx.closePath();
      gradient = ctx.createLinearGradient(0.0, 25.0, 5.1, 25.0);
      gradient.addColorStop(0.00, "rgb(129, 129, 129)");
      gradient.addColorStop(1.00, "rgb(144, 206, 234)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // layer3/Group/Path
      ctx.beginPath();
      ctx.moveTo(60.0, 50.0);
      ctx.lineTo(54.9, 41.7);
      ctx.lineTo(54.9, 8.3);
      ctx.lineTo(60.0, 0.0);
      ctx.lineTo(60.0, 50.0);
      ctx.closePath();
      gradient = ctx.createLinearGradient(55.0, 25.0, 60.1, 25.0);
      gradient.addColorStop(0.00, "rgb(144, 206, 234)");
      gradient.addColorStop(1.00, "rgb(239, 239, 239)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // layer3/Group/Path
      ctx.beginPath();
      ctx.moveTo(60.0, 50.0);
      ctx.lineTo(0.0, 50.0);
      ctx.lineTo(5.1, 41.7);
      ctx.lineTo(54.9, 41.7);
      ctx.lineTo(60.0, 50.0);
      ctx.closePath();
      gradient = ctx.createLinearGradient(30.0, 49.8, 30.0, 42.0);
      gradient.addColorStop(0.00, "rgb(129, 129, 129)");
      gradient.addColorStop(1.00, "rgb(144, 206, 234)");
      ctx.fillStyle = gradient;
      ctx.fill();

      // layer3/Group/Path
      ctx.beginPath();
      ctx.moveTo(54.9, 8.3);
      ctx.lineTo(5.5, 8.3);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(60.0, 0.0);
      ctx.lineTo(54.9, 8.3);
      ctx.closePath();
      gradient = ctx.createLinearGradient(30.0, 8.2, 30.0, 0.1);
      gradient.addColorStop(0.00, "rgb(144, 206, 234)");
      gradient.addColorStop(1.00, "rgb(239, 239, 239)");
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.restore();
      ctx.restore();

      // layer4/editgraph
      ctx.save();
      ctx.font = "Bold 16.0px 'Arial'";
      ctx.fillStyle = "rgb(218, 45, 58)";
      ctx.fillText("edit", 15.8, 20.9);
      ctx.fillText("graph", 7.8, 36.9);
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
this.CreateButtonEvents=function(c){

//bind events for non internet explorer borswers
if(window.platformFlag=="DSK"&&window.browserFlag=="NOT_IE"){
this.htmlElement.addEventListener("mousedown",function(e){c.down_LF();c.downFunction(e);});
this.htmlElement.addEventListener("mouseup",function(e){c.over_LF();c.upFunction(e);});
this.htmlElement.addEventListener("mouseover",function(e){c.over_LF();c.overFunction(e);});
this.htmlElement.addEventListener("mouseout",function(e){c.out_LF();c.outFunction(e);});
}

//bind internet expolorer specific events
if(window.platformFlag=="DSK"&&window.browserFlag=="IE"){
this.htmlElement.attachEvent('onmousedown',function(e){c.down_LF();c.downFunction(e);});
this.htmlElement.attachEvent('onmouseup',function(e){c.over_LF();c.upFunction(e);});
this.htmlElement.attachEvent('onmouseover',function(e){c.over_LF();c.overFunction(e);});
this.htmlElement.attachEvent('onmouseout',function(e){c.out_LF();c.outFunction(e);});
}

//this is the ios events
if(window.platformFlag=="IOS"){
this.htmlElement.addEventListener('touchstart',function(e){e.preventDefault();c.down_LF();c.downFunction(e);});
this.htmlElement.addEventListener('touchend',function(e){e.preventDefault();c.up_LF();c.upFunction(e);});
}
//this is the android events
if(window.platformFlag=="AND"){
this.htmlElement.addEventListener("touchstart",function(e){e.preventDefault();c.down_LF();	c.downFunction(e);});
this.htmlElement.addEventListener("touchend",function(e){e.preventDefault();c.up_LF();c.upFunction(e);});
}


}
/*========================================================================================================*/
//call all the function to make this button visable
this.build();
this.out_LF();
//bind events for this function
this.CreateButtonEvents(this);

}