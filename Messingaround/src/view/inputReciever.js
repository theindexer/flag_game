/***************************************************
 *
 ***************************************************/
function inputRecieiver(){


this.htmlElement = document.createElement("input");


/***************************************************
 *
 ***************************************************/
this.build = function(){
	
this.htmlElement.style.position = "absolute";
this.htmlElement.setAttribute("type","number");
this.htmlElement.style.top = "1px";
this.htmlElement.style.left = "1px";
this.htmlElement.style.width = "1px";
this.htmlElement.style.height = "1px";

}
/***************************************************
 *
 ***************************************************/
this.userFunction = function(){}
this.bind = function(fnct){
	
	this.userFunction = fnct;
		
}
/***************************************************
 *
 ***************************************************/
this.processKey = function(e){
this.userFunction(e);

}
/***************************************************
 *
 ***************************************************/
this.CreateButtonEvents=function(c){

	//bind events for non internet explorer borswers
	if(window.browserFlag=="NOT_IE"){
		this.htmlElement.addEventListener("keyup",function(e){ c.processKey(e); });
	}
	
	//bind internet expolorer specific events
	if(window.browserFlag=="IE"){
		this.htmlElement.attachEvent("onkeyup",function(e){ c.processKey(e); });
	}

}
/***************************************************
 *
 ***************************************************/
this.setValue = function(v){
this.htmlElement.value = v;
this.value = v;
}
/***************************************************
 *
 ***************************************************/
this.focus = function(){

this.htmlElement.focus();

}
/***************************************************
 *
 ***************************************************/
this.build();
this.CreateButtonEvents(this);

}

