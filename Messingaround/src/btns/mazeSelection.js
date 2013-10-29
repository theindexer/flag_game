function mazeSelection(left,top,control){

this.htmlElement = document.createElement("div");

this.top = top;
this.left = left;

this.control = control;
/***************************************************
 *
 ***************************************************/
this.build = function(){


this.htmlElement.style.position = "absolute";
this.htmlElement.style.top = this.top+"px";
this.htmlElement.style.left = this.left+"px";
this.htmlElement.style.zIndex = "500";


this.maze1tog = new toggle(0,0,'1');
this.htmlElement.appendChild(this.maze1tog.htmlElement);
this.maze2tog = new toggle(60,0,'2');
this.htmlElement.appendChild(this.maze2tog.htmlElement);
this.maze3tog = new toggle(120,0,'3');
this.htmlElement.appendChild(this.maze3tog.htmlElement);
this.maze4tog = new toggle(180,0,'4');
this.htmlElement.appendChild(this.maze4tog.htmlElement);
this.maze5tog = new toggle(240,0,'5');
this.htmlElement.appendChild(this.maze5tog.htmlElement);

}
/***************************************************
 *
 ***************************************************/
this.bindEvents = function(c){

	this.unselectAll(1);
	//this.control.mazeView.maze1();
	//this.control.logic.x_orig = 0;
	//this.control.logic.y_orig = 0;

	this.maze1tog.bindRun(function(){

	c.unselectAll(1);
	c.control.mazeView.maze1();
	//c.control.logic.x_orig = 0;
	//c.control.logic.y_orig = 0;
	//c.control.newInputState();
	});
	
	this.maze2tog.bindRun(function(){
	
	c.unselectAll(2);
	c.control.mazeView.maze2();
	//c.control.logic.x_orig = 0.25;
	//c.control.logic.y_orig = 0.28;
	//c.control.newInputState();
	});
	
	this.maze3tog.bindRun(function(){
	
	c.unselectAll(3);
	c.control.mazeView.maze3();
	//c.control.logic.x_orig = 1.8;
	//c.control.logic.y_orig = 1;
	//c.control.newInputState();
	});
	
	this.maze4tog.bindRun(function(){
	
	c.unselectAll(4);
	c.control.mazeView.maze4();
	//c.control.logic.x_orig = 1.6;
	//c.control.logic.y_orig = 1.8;
	//c.control.newInputState();
	});

	this.maze5tog.bindRun(function(){
	
	c.unselectAll(5);
	c.control.mazeView.maze5();
	//c.control.logic.x_orig = 1.6;
	//c.control.logic.y_orig = 1.8;
	//c.control.newInputState();
	});

}
/***************************************************
 *
 ***************************************************/
this.unselectAll = function(i){

	this.maze1tog.running = 0;
	this.maze1tog.out_stoped_LF();
	
	this.maze2tog.running = 0;
	this.maze2tog.out_stoped_LF();
	
	this.maze3tog.running = 0;
	this.maze3tog.out_stoped_LF();
	
	this.maze4tog.running = 0;
	this.maze4tog.out_stoped_LF();
	
	this.maze5tog.running = 0;
	this.maze5tog.out_stoped_LF();
	
	eval('this.maze'+i+'tog.running = 1;');
	eval('this.maze'+i+'tog.out_running_LF();');


}
/***************************************************
 *
 ***************************************************/
this.build();
this.bindEvents(this);

}
