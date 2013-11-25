function control(){

//this.grid = grid;
this.logic = new logic();
this.soundQueue = new soundQueue();
this.t = 0;

this.stage_codes = new Array();
this.stage_codes[0]  = 65;
this.stage_codes[1]  = 66;
this.stage_codes[2]  = 67;
this.stage_codes[3]  = 68;
this.stage_codes[4]  = 69;
this.stage_codes[5]  = 70;
this.stage_codes[6]  = 71;
this.stage_codes[7]  = 72;
this.stage_codes[8]  = 73;
this.stage_codes[9]  = 74;
this.stage_codes[10] = 75;
this.stage_codes[11] = 76;
this.stage_codes[12] = 77;
this.stage_codes[13] = 78;
this.stage_codes[14] = 79;
this.stage_codes[15] = 80;
this.stage_codes[16] = 81;
this.stage_codes[17] = 82;
this.stage_codes[18] = 83;
this.stage_codes[19] = 84;
this.stage_codes[20] = 85;

this.stage = new Array();
for(i=0;i<=20;i++){
 this.stage[i] = 0;
}

/***************************************************
 *
 ***************************************************/
this.build = function(){
	
	this.parent = new parent("parent");
        var X_OFFSET = 50;	
        var Y_OFFSET = 100;	
	this.grid = new grid();
	//this.parent.add(this.grid);

	this.mazeView = new mazeView();
	//this.parent.add(this.mazeView);

	this.keyPad = new keyPad();
	//this.parent.add(this.keyPad);
	
	this.dispInView = new dispInView(this.keyPad);
	//this.parent.add(this.dispInView);
	
	this.X_zeroIn = new ergoInput(585,34,55,20,this.keyPad);
	//this.parent.add(this.X_zeroIn);
	
	this.Y_zeroIn = new ergoInput(665,34,55,20,this.keyPad);
	//this.parent.add(this.Y_zeroIn);
	
	
	this.dispXin = new Array();
	this.dispYin = new Array();
	
	
	this.X_finalIn = new ergoInput(585,395,55,20,this.keyPad);
	//this.parent.add(this.X_finalIn);
	
	this.Y_finalIn = new ergoInput(665,395,55,20,this.keyPad);
	//this.parent.add(this.Y_finalIn);
	
	
	
	this.totalDispXout = new output(590,456,55,20);
	//this.parent.add(this.totalDispXout);
	this.totalDispYout = new output(670,456,55,20);
	//this.parent.add(this.totalDispYout);
	
	
	this.curentPosXout = new output(807,100,55,20);
	//this.parent.add(this.curentPosXout);
	this.curentPosYout = new output(884,100,55,20);
	//this.parent.add(this.curentPosYout);

	this.totalDistOut = new output(420,455,60,20);
	//this.parent.add(this.totalDistOut);	
	
	this.setOriginBtn = new setOriginButton(425,30);
	//this.parent.add(this.setOriginBtn);
	
	this.runBtn = new runButton(420,100);
	//this.parent.add(this.runBtn);
	
	this.testBtn = new button(420,240);
	this.testBtn.buttonString = "Test";
	this.testBtn.out_LF();
	//this.parent.add(this.testBtn);

	this.startBtn = new button(420, 240);
	this.startBtn.buttonString = "Start Button";
	this.startBtn.down_LF();
	this.parent.add(this.startBtn);
	
	this.resetBtn = new resetButton(420,310);
	//this.parent.add(this.resetBtn);
	
	this.printBtn = new printButton(420,380);
	//this.parent.add(this.printBtn);
	////////////////////////////////////////

	///////////////////////////////////////
	/*
	this.p1 = new poly1(400,400);
	this.parent.add(this.p1);
	this.p2 = new polyclass(500,400,[0,100,50,0],[0,50,100,90]);
	this.parent.add(this.p2);
	*/
	this.p1 = new polyclass(X_OFFSET,Y_OFFSET,[0,100,100,0],[0,0,600,600],100,600,'#ffffff','a');
	this.parent.add(this.p1);
	this.p1 = new polyclass(X_OFFSET + 500,Y_OFFSET,[0,100,100,0],[0,0,600,600],100,600,'#ffffff','b');
	this.parent.add(this.p1);
	this.p1 = new polyclass(X_OFFSET + 100,Y_OFFSET,[0,400,400,0],[0,0,100,100],400,100,'#ffffff','c');
	this.parent.add(this.p1);
	this.p1 = new polyclass(X_OFFSET + 100,Y_OFFSET + 500,[0,400,400,0],[0,0,100,100],400,100,'#ffffff','d');
	this.parent.add(this.p1);
	this.p1 = new polyclass(X_OFFSET + 100,Y_OFFSET + 100,[0,200,200,0],[0,0,200,200],200,200,'#ffffff','e');
	this.parent.add(this.p1);
	this.p1 = new polyclass(X_OFFSET + 300,Y_OFFSET + 100,[0,200,200,0],[0,0,400,400],200,400,'#ffffff','f');
	this.parent.add(this.p1);
	this.p1 = new polyclass(X_OFFSET + 100,Y_OFFSET + 300,[0,100,100,0],[0,0,100,100],100,100,'#ffffff','g');
	this.parent.add(this.p1);
	this.p1 = new polyclass(X_OFFSET + 200,Y_OFFSET + 300,[0,100,100,0],[0,0,100,100],100,100,'#ffffff','h');
	this.parent.add(this.p1);
	this.p1 = new polyclass(X_OFFSET + 100,Y_OFFSET + 400,[0,100,100,0],[0,0,100,100],100,100,'#ffffff','i');
	this.parent.add(this.p1);
	this.p1 = new polyclass(X_OFFSET + 200,Y_OFFSET + 400,[0,100,100,0],[0,0,100,100],100,100,'#ffffff','j');
	this.parent.add(this.p1);
	
	
	this.programBtn = new button(420,170);
	this.programBtn.buttonString = "Program";
	this.programBtn.out_LF();
	//this.parent.add(this.programBtn);
	
	this.saveButton = new saveButton(425,170);
	//this.parent.add(this.saveButton);
	
	this.openButton = new openButton(425,240);
	//this.parent.add(this.openButton);
	
	//this.grphEditBtn = new editGraphButton(270,435);
	//this.parent.add(this.grphEditBtn);
	
	
	this.inRec = new inputRecieiver();
	//this.parent.add(this.inRec);
	
	
	/*
	this.mazeSlct = new mazeSelection(90,437,this);
	this.parent.add(this.mazeSlct);
	*/
	
	this.graphEdit = new graphEditView(this.keyPad);
	this.parent.add(this.graphEdit);
	this.graphEdit.hide();
	//this.graphEdit.setXin(a);
	//this.graphEdit.setYin(a);
	//this.graphEdit.setScaleIn(a);
	
}
/***************************************************
 *
 ***************************************************/
this.bindInputs = function(c){


	this.graphEdit.bindXinput(function(a){ 
		c.logic.x_orig = a;
		c.newInputState();
	});/* */
	
	this.graphEdit.bindYinput(function(a){ 
		c.logic.y_orig = a;
		c.newInputState();
	});
	
	this.graphEdit.bindScaleInput(function(a){
		c.grid.scale = a;
		c.grid.clearView();
		c.grid.drawAxis();
		c.grid.drawPoints();
		c.grid.drawArrows();
		c.grid.drawVector();
		//c.grid.drawPoints();
		//c.grid.drawArrows();
	});

	
	
	this.dispInView.bindOutX(function(a,i){c.logic.x_disp[i] = a;c.newInputState(); });
	
	this.dispInView.bindOutY(function(a,i){c.logic.y_disp[i] = a;c.newInputState(); });
	
	
	this.X_zeroIn.bind("out",function(a){ 
	c.logic.x[0] = a;
	c.newInputState();
	});
	
	this.Y_zeroIn.bind("out",function(a){
	c.logic.y[0] = a;
	c.newInputState();
	});

}
/***************************************************
 *
 ***************************************************/
this.stopInPorgress = function(){

	if(this.runBtn.running == 1){
		this.runBtn.running=0;
		this.runBtn.out_stoped_LF();
		this.runBtn.stop();
	}

}
/***************************************************
 *
 ***************************************************/
this.bindBtns = function(c){

this.printBtn.bind('mousedown',function(){

	window.print();	

});


this.setOriginBtn.bind('mousedown',function(){
	
	c.graphEdit.show();

});



this.resetBtn.bind('mousedown',function(){

	c.logic.reset();	
	c.newInputState();

});/* */


this.testBtn.bind('mousedown',function(){
	c.sendSound(7);
	c.sendSound("stop");
});

this.programBtn.bind('mousedown',function(){

	var ergoString = "A,";
	var i = 1;
	var s;
	
	c.sendSound("A");
	
		for(i=1;i<=20;i++){
			
			if(c.logic.turnAngle[i]>=0){
				c.sendSound("D");
				ergoString=ergoString+"D,";
			}else{
				c.sendSound("C");
				ergoString=ergoString+"C,";
			}
				
			var th_int = Math.floor(Math.abs(c.logic.turnAngle[i])/Math.PI*180);
			

			s = th_int>>4&15;
			c.sendSound(s);
			ergoString=ergoString+s+',';	
			s = th_int&15;
			c.sendSound(s);
			ergoString=ergoString+s+',';
				
				
			c.sendSound("B");
			ergoString=ergoString+"B,";
					
			var dist_int = Math.floor(c.logic.distances[i]*1000);
				
			s=dist_int>>8&15
			c.sendSound(s);
			ergoString=ergoString+s+',';
			s=dist_int>>4&15
			c.sendSound(s);
			ergoString=ergoString+s+',';
			s=dist_int&15;
			c.sendSound(s);
			ergoString=ergoString+s+',';
		
		}/* */
	
	c.sendSound("stop");
	ergoString=ergoString+'stop';
	alert(ergoString);
	
});/* */




	this.inRec.bind(function(e){
		c.next_stage = 1;
		//alert('noo')
		
		for(i=0;i<=20;i++){
		
			if(e.keyCode == c.stage_codes[i]){
				c.stage[i] = 1;
			}
		
		}
		
		
		
		
	});



}
/***************************************************
 *
 ***************************************************/
this.next_stage = 0;
this.bindRunButton = function(c){

//--------------------------------------------------
	c.runBtn.bindRun(function(){
		
		c.sendSound("A");
		c.sendSound("E");
		c.sendSound("stop");
		
		c.runHandle = setInterval(function(){
			
			c.inRec.focus();
			
			

			
			
			if(c.logic.stage_switch==1){
					
					
					
					if(c.stage[c.logic.previous_i] == 1){
							c.logic.stage_switch=0;
							//c.next_stage = 0;
					}else{
							return;
					}

				
			}/* */
			
			
			c.logic.calculatePosition(c.t);
			

			
			c.grid.clearView();
	
		    c.grid.drawAxis();
			c.grid.drawPoints();
			c.grid.drawArrows();
			
			c.grid.appendValue(c.logic.X,c.logic.Y);
			c.grid.drawVector();
			
			c.curentPosXout.setValue(Math.round(c.logic.X*10)/10);
			c.curentPosYout.setValue(Math.round(c.logic.Y*10)/10);
			
			
			c.t = c.t + 0.1;
		
			if(c.t >= c.logic.end_time){
				c.stopInPorgress();
			}
		
		},30);
	
	});
//--------------------------------------------------
		c.runBtn.bindStop(function(){
		
			clearInterval(c.runHandle);
		
		});
//--------------------------------------------------


//--------------------------------------------------

}
/***************************************************
 *
 ***************************************************/
this.newInputState = function(){
	
		for(i=0;i<=20;i++){
			this.stage[i] = 0;
		}
	
	this.logic.calculate();
	this.grid.clearView();
	
	this.X_zeroIn.setValue(this.logic.x[0].toFixed(2));
	this.Y_zeroIn.setValue(this.logic.y[0].toFixed(2));
	
	
	this.grid.setOriginX(this.logic.x_orig);
	this.grid.setOriginY(this.logic.y_orig);
	
		for(i=1;i<=20;i++){
		
			this.grid.setX(this.logic.x[i],i);
			this.grid.setY(this.logic.y[i],i);
			
			this.dispInView.setxValue(this.logic.x_disp[i].toFixed(2),i);
			this.dispInView.setyValue(this.logic.y_disp[i].toFixed(2),i);
			
			this.grid.th[i] = this.logic.th[i];
		
		}
	
	this.X_finalIn.setValue(this.logic.x[10].toFixed(2));
	this.Y_finalIn.setValue(this.logic.y[10].toFixed(2));
	
	
	this.totalDispXout.setValue(Math.round(this.logic.x_disp_total*10)/10);
	this.totalDispYout.setValue(Math.round(this.logic.y_disp_total*10)/10);
		
	
	this.graphEdit.setXin(this.logic.x_orig);
	this.graphEdit.setYin(this.logic.y_orig);
	
	this.totalDistOut.setValue(round(this.logic.dist_total));
	
	this.grid.drawPoints();
	this.grid.drawArrows();
	

	
	this.t=0;
	this.grid.clear();
	this.grid.drawAxis();

	
}
/***************************************************
 *
 ***************************************************/
this.sendSound = function(inp){

	switch(inp){
		case 0: 
			this.soundQueue.playSound(0);
			break;
		case 1: 
			this.soundQueue.playSound(1);
			break;
		case 2: 
			this.soundQueue.playSound(2);
			break;
		case 3: 
			this.soundQueue.playSound(3);
			break;
		case 4: 
			this.soundQueue.playSound(4);
			break;
		case 5: 
			this.soundQueue.playSound(5);
			break;
		case 6: 
			this.soundQueue.playSound(6);
			break;
		case 7: 
			this.soundQueue.playSound(7);
			break;
		case 8: 
			this.soundQueue.playSound(8);
			break;
		case 9: 
			this.soundQueue.playSound(9);
			break;
		case 10: 
			this.soundQueue.playSound(10);
			break;
		case 11: 
			this.soundQueue.playSound(11);
			break;
		case 12: 
			this.soundQueue.playSound(12);
			break;
		case 13: 
			this.soundQueue.playSound(13);
			break;
		case 14: 
			this.soundQueue.playSound(14);
			break;
		case 15: 
			this.soundQueue.playSound(15);
			break;
		case 'A': 
			this.soundQueue.playSound(16);
			break;
		case 'B': 
			this.soundQueue.playSound(17);
			break;
		case 'C': 
			this.soundQueue.playSound(18);
			break;
		case 'D': 
			this.soundQueue.playSound(19);
			break;
		case 'E': 
			this.soundQueue.playSound(20);
			break;
		case 'F': 
			this.soundQueue.playSound(21);
			break;
		case 'G': 
			this.soundQueue.playSound(22);
			break;
		case 'H': 
			this.soundQueue.playSound(23);
			break;
		case 'I': 
			this.soundQueue.playSound(24);
			break;
		case 'J': 
			this.soundQueue.playSound(25);
			break;
		case 'K': 
			this.soundQueue.playSound(26);
			break;
		case 'L': 
			this.soundQueue.playSound(27);
			break;
		case "repeat": 
			this.soundQueue.playSound(28);
			break;
		case "reserved": 
			this.soundQueue.playSound(29);
			break;
		case "start": 
			this.soundQueue.playSound(30);
			break;
		case "stop": 
			this.soundQueue.playSound(31);
			break;
//		case "TESTSOUND":
//			this.soundQueue.playSound(32);
//			console.log("Queuing test sound.");
		default:
		break;
	}
}
/***************************************************
 *
 ***************************************************/
this.build();
this.newInputState();


this.bindInputs(this);
this.bindRunButton(this);
this.bindBtns(this);

}
