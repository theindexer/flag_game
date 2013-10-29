/***************************************************
 * 
 ***************************************************/
function soundQueue(){

this.sounds = new Array();
this.sounds[0]  = new Audio('sounds/0.wav');		
this.sounds[1]  = new Audio('sounds/1.wav');
this.sounds[2]  = new Audio('sounds/2.wav');	
this.sounds[3]  = new Audio('sounds/3.wav');
this.sounds[4]  = new Audio('sounds/4.wav');	
this.sounds[5]  = new Audio('sounds/5.wav');	
this.sounds[6]  = new Audio('sounds/6.wav');		
this.sounds[7]  = new Audio('sounds/7.wav');
this.sounds[8]  = new Audio('sounds/8.wav');		
this.sounds[9]  = new Audio('sounds/9.wav');
this.sounds[10] = new Audio('sounds/10.wav');		
this.sounds[11] = new Audio('sounds/11.wav');
this.sounds[12] = new Audio('sounds/12.wav');		
this.sounds[13] = new Audio('sounds/13.wav');
this.sounds[14] = new Audio('sounds/14.wav');		
this.sounds[15] = new Audio('sounds/15.wav');
this.sounds[16] = new Audio('sounds/A.wav');		
this.sounds[17] = new Audio('sounds/B.wav');
this.sounds[18] = new Audio('sounds/C.wav');		
this.sounds[19] = new Audio('sounds/D.wav');
this.sounds[20] = new Audio('sounds/E.wav');		
this.sounds[21] = new Audio('sounds/F.wav');
this.sounds[22] = new Audio('sounds/G.wav');		
this.sounds[23] = new Audio('sounds/H.wav');
this.sounds[24] = new Audio('sounds/I.wav');		
this.sounds[25] = new Audio('sounds/J.wav');
this.sounds[26] = new Audio('sounds/K.wav');		
this.sounds[27] = new Audio('sounds/L.wav');
this.sounds[28] = new Audio('sounds/repeat.wav');		
this.sounds[29] = new Audio('sounds/reserved.wav');
this.sounds[30] = new Audio('sounds/start.wav');		
this.sounds[31] = new Audio('sounds/stop.wav');

this.play_flags = new Array();
this.sound_has_played_flags = new Array();

	for(i=0;i<32;i++)
	{
		this.play_flags[i]=0;
		this.sound_has_played_flags[i]=0;
	}


this.Queue = new Array();
this.QueueDescription = new Array();
this.lastPlayed = -1;

/***************************************************
 * 
 ***************************************************/
this.run = function(c){



	setInterval(function(){
	
		if(c.QueueDescription[0]==undefined)
		{
			return;
		}
	
	
		n = c.QueueDescription[0];
		
	
		
	
		if(c.play_flags[n]==0&&c.sound_has_played_flags[n] == 1)
		{	
	
			c.sound_has_played_flags[n] = 0;
			c.QueueDescription.shift();			
			n = c.QueueDescription[0];
			
		}
		
		
		
		if(c.sound_has_played_flags[n] == 0){
			if(n != c.lastPlayed){
				c.sound_has_played_flags[n] = 1;
				c.play_flags[n] = 1;
				c.sounds[n].load();
				c.sounds[n].play();
					if(n==31)
						alert("finished");
				c.lastPlayed = n;
			}
			else{
			    c.QueueDescription[0] = 28;
				c.sound_has_played_flags[28] = 1;
				c.play_flags[28] = 1;
				c.sounds[28].load();
				c.sounds[28].play();
				c.lastPlayed = 28;
			}
		}
		
		
	
	},5);



}
/***************************************************
 * 
 ***************************************************/
this.playSound = function(n){

	this.QueueDescription.push(n);

}
/***************************************************
 * 
 ***************************************************/
this.bindFlags = function(c){

	for(i=0;i<32;i++)
	{
		eval("this.sounds["+i+"].addEventListener('ended', function(){ c.play_flags["+i+"] = 0; });");
	}


}
/***************************************************
 * 
 ***************************************************/
this.run(this);
this.bindFlags(this);



}
