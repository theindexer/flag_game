qr/***************************************************
 *
 ***************************************************/
function logic(){

this.n;



this.x_orig = 0;
this.y_orig = 0;


this.x = new Array();
this.y = new Array();



this.x_disp = new Array();
this.y_disp = new Array();




this.x_disp_total = 0;
this.y_disp_total = 0;

this.dist_total = 0;

this.th = new Array();
this.turnAngle = new Array();

this.distances = new Array();
this.transitionTimes = new Array();
this.end_time;

this.velocity = 0.08;

this.X;
this.Y;

this.previous_i = 0;
this.stage_switch = 1;
/***************************************************
 *
 ***************************************************/
this.calculatePosition = function(t){
	
	
	if(t==0){
		this.X = this.x[0];
		this.Y = this.y[0];
		return;
	}
	
	var i = 0;
	//alert(t+"<"+this.transitionTimes[i])
	while(t>this.transitionTimes[i] && i<20){
		//alert('here')
		i++;
	}
	
	if(this.previous_i != i){
		this.stage_switch = 1;
		this.previous_i = i;
	}else{
		this.stage_switch = 0;
	}
	

	
	var x_i = this.x[i-1];
	var y_i = this.x[i-1];
	var x_f = this.x[i];
	var y_f = this.x[i];
	
	
	var th = this.th[i];
	
	x_v = this.velocity*Math.cos(th);
	y_v = this.velocity*Math.sin(th);
	
	var T = t - this.transitionTimes[i-1];
	
	
	this.X = this.x[i-1] + x_v*T;
	this.Y = this.y[i-1] + y_v*T;
	
	//alert(this.X+" , "+this.Y+" , "+i);
}
/***************************************************
 *
 ***************************************************/
this.curentAngle = 0.0;
this.calculate = function(){

	this.previous_i = 0;
	
	this.x_disp_total = 0;
	this.y_disp_total = 0;
	
	this.dist_total = 0;
	
	this.transitionTimes[0] = 0;
	
	for(i=1;i<=20;i++){
		
		this.x[i]=this.x[i-1] + this.x_disp[i];
		this.y[i]=this.y[i-1] + this.y_disp[i];
		
		//alert(this.x_disp[i-1]);
		
		this.x_disp_total = this.x_disp_total + this.x_disp[i];
		this.y_disp_total = this.y_disp_total + this.y_disp[i];
		
		var dx = this.x[i] - this.x[i-1];
		var dy = this.y[i] - this.y[i-1];
		

		this.th[i] = Math.atan2(dy,dx);
		
		
		
		if(this.th[i]>=0){
		this.turnAngle[i] = this.th[i]-this.curentAngle;
		this.curentAngle = this.th[i];
		}else{
		this.turnAngle[i] = this.th[i]+this.curentAngle;
		this.curentAngle = this.th[i];
		}

		

		this.distances[i] = Math.sqrt(Math.pow(this.x_disp[i],2) + Math.pow(this.y_disp[i],2));
		this.dist_total = this.dist_total+Math.sqrt(Math.pow(this.x_disp[i],2) + Math.pow(this.y_disp[i],2));	
		
		this.transitionTimes[i] = this.dist_total/this.velocity;
		
	}
		this.end_time = this.dist_total/this.velocity;
	
}
/***************************************************
 *
 ***************************************************/
this.reset = function(){

	this.x[0] = 0.6;
	this.y[0] = 0.2;
	
	this.x_disp[1] = 0.0;// - Math.random()*0.4;
	this.y_disp[1] = 1.2;// - Math.random()*0.4;
	
	for(i=2;i<=20;i++){
	this.x_disp[i] = 0;//Math.random()*0.4;
	this.y_disp[i] = 0;//Math.random()*0.4;

}/* */

	
	this.x_disp[2]  = 0.4;
	this.y_disp[2]  = 0.0;
	this.x_disp[3]  = 0.0;
	this.y_disp[3]  = -0.8;
	this.x_disp[4]  = 0.4;
	this.y_disp[4]  = 0.0;
	this.x_disp[5]  = 0.0;
	this.y_disp[5]  = 0.8;

	this.x_disp[6]  = 0.4;
	this.y_disp[6]  = 0.0;
	
	/*
	this.x_disp[7]  = 0.0;
	this.y_disp[7]  = 0.8;
	this.x_disp[8]  = 0.4;
	this.y_disp[8]  = 0.0;
	this.x_disp[9]  = 0.0;
	this.y_disp[9]  = 0.4;

/* */	


}
/***************************************************
 *
 ***************************************************/
this.reset();

}
