function mazeView(){


this.htmlElement = document.createElement("canvas");



this.build = function(){

this.htmlElement.setAttribute("width",350);
this.htmlElement.setAttribute("height",350);
this.htmlElement.style.position = "absolute";
this.htmlElement.style.top = "38px";
this.htmlElement.style.left = "50px";
this.htmlElement.style.zIndex = "500";
//this.htmlElement.style.backgroundColor = "#CC99FF";
	
}
/***************************************************
 *
 ***************************************************/
this.maze1 = function(){

	var ctx = this.htmlElement.getContext("2d");
	ctx.clearRect(0,0,350,350);
	// maze1/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(6.5, 258.8);
      ctx.lineTo(6.5, 3.0);
      ctx.lineWidth = 6.0;
      ctx.strokeStyle = "rgb(116, 75, 40)";
      ctx.stroke();

      // maze1/Path
      ctx.beginPath();
      ctx.moveTo(91.7, 345.0);
      ctx.lineTo(91.7, 258.8);
      ctx.stroke();

      // maze1/Path
      ctx.beginPath();
      ctx.moveTo(349.2, 3.0);
      ctx.lineTo(3.5, 3.0);
      ctx.stroke();

      // maze1/Path
      ctx.beginPath();
      ctx.moveTo(262.0, 345.0);
      ctx.lineTo(262.0, 172.5);
      ctx.stroke();

      // maze1/Path
      ctx.beginPath();
      ctx.moveTo(177.8, 173.0);
      ctx.lineTo(5.2, 173.0);
      ctx.stroke();

      // maze1/Path
      ctx.beginPath();
      ctx.moveTo(263.1, 89.0);
      ctx.lineTo(91.5, 89.0);
      ctx.stroke();

      // maze1/Path
      ctx.beginPath();
      ctx.moveTo(346.5, 344.5);
      ctx.lineTo(346.5, 3.0);
      ctx.stroke();

      // maze1/Path
      ctx.beginPath();
      ctx.moveTo(349.2, 343.3);
      ctx.lineTo(91.7, 343.3);
      ctx.stroke();

      // maze1/Path
      ctx.beginPath();
      ctx.moveTo(131.2, 37.1);
      ctx.bezierCurveTo(131.2, 40.1, 128.8, 42.6, 125.7, 42.6);
      ctx.bezierCurveTo(122.7, 42.6, 120.2, 40.1, 120.2, 37.1);
      ctx.bezierCurveTo(120.2, 34.1, 122.7, 31.6, 125.7, 31.6);
      ctx.bezierCurveTo(128.8, 31.6, 131.2, 34.1, 131.2, 37.1);
      ctx.closePath();
      ctx.fillStyle = "rgb(134, 22, 24)";
      ctx.fill();

      // maze1/Path
      ctx.beginPath();
      ctx.moveTo(11.0, 344.5);
      ctx.bezierCurveTo(11.0, 347.5, 8.5, 350.0, 5.5, 350.0);
      ctx.bezierCurveTo(2.5, 350.0, 0.0, 347.5, 0.0, 344.5);
      ctx.bezierCurveTo(0.0, 341.5, 2.5, 339.0, 5.5, 339.0);
      ctx.bezierCurveTo(8.5, 339.0, 11.0, 341.5, 11.0, 344.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 103, 55)";
      ctx.fill();

      // maze1/Start
      ctx.font = "16.0px 'Arial'";
      ctx.fillText("Start", 11.9, 340.3);

      // maze1/End
      ctx.fillStyle = "rgb(189, 29, 44)";
      ctx.fillText("End", 111.5, 62.0);
      ctx.restore();
}
/***************************************************
 *
 ***************************************************/
this.maze2 = function(){

	var ctx = this.htmlElement.getContext("2d");
	ctx.clearRect(0,0,350,350);
	// maze2/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(344.0, 344.0);
      ctx.lineTo(3.0, 344.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineTo(344.0, 3.0);
      ctx.lineTo(344.0, 344.0);
      ctx.closePath();
      ctx.lineWidth = 6.0;
      ctx.strokeStyle = "rgb(116, 75, 40)";
      ctx.stroke();

      // maze2/Path
      ctx.beginPath();
      ctx.moveTo(88.0, 343.0);
      ctx.lineTo(88.0, 173.0);
      ctx.stroke();

      // maze2/Path
      ctx.beginPath();
      ctx.moveTo(89.0, 87.0);
      ctx.lineTo(89.0, 5.0);
      ctx.stroke();

      // maze2/Path
      ctx.beginPath();
      ctx.moveTo(173.0, 88.0);
      ctx.lineTo(259.0, 88.0);
      ctx.stroke();

      // maze2/Path
      ctx.beginPath();
      ctx.moveTo(174.0, 87.0);
      ctx.lineTo(174.0, 258.0);
      ctx.stroke();

      // maze2/Path
      ctx.beginPath();
      ctx.moveTo(260.0, 343.0);
      ctx.lineTo(260.0, 174.0);
      ctx.stroke();

      // maze2/Path
      ctx.beginPath();
      ctx.moveTo(222.0, 131.5);
      ctx.bezierCurveTo(222.0, 134.5, 219.5, 137.0, 216.5, 137.0);
      ctx.bezierCurveTo(213.5, 137.0, 211.0, 134.5, 211.0, 131.5);
      ctx.bezierCurveTo(211.0, 128.5, 213.5, 126.0, 216.5, 126.0);
      ctx.bezierCurveTo(219.5, 126.0, 222.0, 128.5, 222.0, 131.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(134, 22, 24)";
      ctx.fill();

      // maze2/Path
      ctx.beginPath();
      ctx.moveTo(50.0, 301.5);
      ctx.bezierCurveTo(50.0, 304.5, 47.5, 307.0, 44.5, 307.0);
      ctx.bezierCurveTo(41.5, 307.0, 39.0, 304.5, 39.0, 301.5);
      ctx.bezierCurveTo(39.0, 298.5, 41.5, 296.0, 44.5, 296.0);
      ctx.bezierCurveTo(47.5, 296.0, 50.0, 298.5, 50.0, 301.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 103, 55)";
      ctx.fill();

      // maze2/Start
      ctx.font = "16.0px 'Arial'";
      ctx.fillText("Start", 27.6, 325.3);

      // maze2/End
      ctx.fillStyle = "rgb(189, 29, 44)";
      ctx.fillText("End", 202.3, 155.0);
      ctx.restore();
}
/***************************************************
 *
 ***************************************************/
this.maze3 = function(){

	var ctx = this.htmlElement.getContext("2d");
	/*
	ctx.clearRect(0,0,350,350);
	// maze3/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(3.0, 346.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineWidth = 6.0;
      ctx.strokeStyle = "rgb(116, 75, 40)";
      ctx.stroke();

      // maze3/Path
      ctx.beginPath();
      ctx.moveTo(275.5, 275.0);
      ctx.lineTo(275.5, 140.5);
      ctx.stroke();

      // maze3/Path
      ctx.beginPath();
      ctx.moveTo(345.7, 3.0);
      ctx.lineTo(0.0, 3.0);
      ctx.stroke();

      // maze3/Path
      ctx.beginPath();
      ctx.moveTo(71.1, 276.8);
      ctx.lineTo(71.1, 71.8);
      ctx.stroke();

      // maze3/Path
      ctx.beginPath();
      ctx.moveTo(344.6, 140.5);
      ctx.lineTo(272.6, 140.5);
      ctx.stroke();

      // maze3/Path
      ctx.beginPath();
      ctx.moveTo(278.4, 275.0);
      ctx.lineTo(136.4, 275.0);
      ctx.stroke();

      // maze3/Path
      ctx.beginPath();
      ctx.moveTo(343.0, 344.5);
      ctx.lineTo(343.0, 3.0);
      ctx.stroke();

      // maze3/Path
      ctx.beginPath();
      ctx.moveTo(345.7, 343.3);
      ctx.lineTo(3.0, 343.3);
      ctx.stroke();

      // maze3/Path
      ctx.beginPath();
      ctx.moveTo(315.1, 37.1);
      ctx.bezierCurveTo(315.1, 40.1, 312.6, 42.6, 309.6, 42.6);
      ctx.bezierCurveTo(306.6, 42.6, 304.1, 40.1, 304.1, 37.1);
      ctx.bezierCurveTo(304.1, 34.1, 306.6, 31.6, 309.6, 31.6);
      ctx.bezierCurveTo(312.6, 31.6, 315.1, 34.1, 315.1, 37.1);
      ctx.closePath();
      ctx.fillStyle = "rgb(134, 22, 24)";
      ctx.fill();

      // maze3/Path
      ctx.beginPath();
      ctx.moveTo(315.1, 172.6);
      ctx.bezierCurveTo(315.1, 175.6, 312.6, 178.1, 309.6, 178.1);
      ctx.bezierCurveTo(306.6, 178.1, 304.1, 175.6, 304.1, 172.6);
      ctx.bezierCurveTo(304.1, 169.6, 306.6, 167.1, 309.6, 167.1);
      ctx.bezierCurveTo(312.6, 167.1, 315.1, 169.6, 315.1, 172.6);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 103, 55)";
      ctx.fill();

      // maze3/Start
      ctx.font = "16.0px 'Arial'";
      ctx.fillText("Start", 292.7, 203.0);

      // maze3/End
      ctx.fillStyle = "rgb(189, 29, 44)";
      ctx.fillText("End", 295.4, 65.0);

      // maze3/Path
      ctx.beginPath();
      ctx.moveTo(275.5, 71.2);
      ctx.lineTo(68.0, 71.2);
      ctx.stroke();

      // maze3/Path
      ctx.beginPath();
      ctx.moveTo(139.3, 276.0);
      ctx.lineTo(139.3, 139.4);
      ctx.stroke();

      // maze3/Path
      ctx.beginPath();
      ctx.moveTo(207.4, 208.8);
      ctx.lineTo(207.4, 72.2);
      ctx.stroke();
      ctx.restore();*/
	  // maze3/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(3.0, 346.0);
      ctx.lineTo(3.0, 3.0);
      ctx.lineWidth = 6.0;
      ctx.strokeStyle = "rgb(116, 75, 40)";
      ctx.stroke();

      // maze3/Path
      ctx.beginPath();
      ctx.moveTo(275.5, 275.0);
      ctx.lineTo(275.5, 140.5);
      ctx.stroke();

      // maze3/Path
      ctx.beginPath();
      ctx.moveTo(345.7, 3.0);
      ctx.lineTo(0.0, 3.0);
      ctx.stroke();

      // maze3/Path
      ctx.beginPath();
      ctx.moveTo(71.1, 341.0);
      ctx.lineTo(71.1, 71.8);
      ctx.stroke();

      // maze3/Path
      ctx.beginPath();
      ctx.moveTo(344.6, 140.5);
      ctx.lineTo(272.6, 140.5);
      ctx.stroke();

      // maze3/Path
      ctx.beginPath();
      ctx.moveTo(278.4, 275.0);
      ctx.lineTo(136.4, 275.0);
      ctx.stroke();

      // maze3/Path
      ctx.beginPath();
      ctx.moveTo(343.0, 344.5);
      ctx.lineTo(343.0, 3.0);
      ctx.stroke();

      // maze3/Path
      ctx.beginPath();
      ctx.moveTo(345.7, 343.3);
      ctx.lineTo(3.0, 343.3);
      ctx.stroke();

      // maze3/Path
      ctx.beginPath();
      ctx.moveTo(314.5, 91.5);
      ctx.bezierCurveTo(314.5, 94.5, 312.0, 97.0, 309.0, 97.0);
      ctx.bezierCurveTo(306.0, 97.0, 303.5, 94.5, 303.5, 91.5);
      ctx.bezierCurveTo(303.5, 88.5, 306.0, 86.0, 309.0, 86.0);
      ctx.bezierCurveTo(312.0, 86.0, 314.5, 88.5, 314.5, 91.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(134, 22, 24)";
      ctx.fill();

      // maze3/Path
      ctx.beginPath();
      ctx.moveTo(104.5, 300.0);
      ctx.bezierCurveTo(104.5, 303.0, 102.0, 305.5, 99.0, 305.5);
      ctx.bezierCurveTo(96.0, 305.5, 93.5, 303.0, 93.5, 300.0);
      ctx.bezierCurveTo(93.5, 297.0, 96.0, 294.5, 99.0, 294.5);
      ctx.bezierCurveTo(102.0, 294.5, 104.5, 297.0, 104.5, 300.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 103, 55)";
      ctx.fill();

      // maze3/Start
      ctx.font = "16.0px 'Arial'";
      ctx.fillText("Start", 82.1, 330.4);

      // maze3/End
      ctx.fillStyle = "rgb(189, 29, 44)";
      ctx.fillText("End", 294.8, 119.4);

      // maze3/Path
      ctx.beginPath();
      ctx.moveTo(341.0, 71.2);
      ctx.lineTo(68.0, 71.2);
      ctx.stroke();

      // maze3/Path
      ctx.beginPath();
      ctx.moveTo(139.3, 276.0);
      ctx.lineTo(139.3, 139.4);
      ctx.stroke();

      // maze3/Path
      ctx.beginPath();
      ctx.moveTo(207.4, 208.8);
      ctx.lineTo(207.4, 72.2);
      ctx.stroke();
      ctx.restore();
}
/***************************************************
 *
 ***************************************************/
this.maze5 = function(){ 

	var ctx = this.htmlElement.getContext("2d");
	ctx.clearRect(0,0,350,350);
	
}
/***************************************************
 *
 ***************************************************/
this.maze4 = function(){

	var ctx = this.htmlElement.getContext("2d");
	ctx.clearRect(0,0,350,350);
	// maze4/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(53.4, 173.1);
      ctx.lineTo(1.1, 173.1);
      ctx.lineWidth = 6.0;
      ctx.strokeStyle = "rgb(116, 75, 40)";
      ctx.stroke();

      // maze4/Path
      ctx.beginPath();
      ctx.moveTo(35.6, 146.8);
      ctx.bezierCurveTo(35.6, 149.8, 33.1, 152.3, 30.1, 152.3);
      ctx.bezierCurveTo(27.0, 152.3, 24.6, 149.8, 24.6, 146.8);
      ctx.bezierCurveTo(24.6, 143.8, 27.0, 141.3, 30.1, 141.3);
      ctx.bezierCurveTo(33.1, 141.3, 35.6, 143.8, 35.6, 146.8);
      ctx.closePath();
      ctx.fillStyle = "rgb(134, 22, 24)";
      ctx.fill();

      // maze4/Path
      ctx.beginPath();
      ctx.moveTo(34.6, 198.5);
      ctx.bezierCurveTo(34.6, 201.5, 32.1, 204.0, 29.1, 204.0);
      ctx.bezierCurveTo(26.0, 204.0, 23.6, 201.5, 23.6, 198.5);
      ctx.bezierCurveTo(23.6, 195.5, 26.0, 193.0, 29.1, 193.0);
      ctx.bezierCurveTo(32.1, 193.0, 34.6, 195.5, 34.6, 198.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 103, 55)";
      ctx.fill();

      // maze4/Start
      ctx.font = "16.0px 'Arial'";
      ctx.fillText("Start", 19.2, 222.7);

      // maze4/End
      ctx.fillStyle = "rgb(189, 29, 44)";
      ctx.fillText("End", 17.3, 135.0);

      // maze4/Path
      ctx.beginPath();
      ctx.moveTo(343.3, 173.1);
      ctx.bezierCurveTo(343.3, 79.2, 267.1, 3.0, 173.1, 3.0);
      ctx.bezierCurveTo(79.2, 3.0, 3.0, 79.2, 3.0, 173.1);
      ctx.bezierCurveTo(3.0, 267.1, 79.2, 343.3, 173.1, 343.3);
      ctx.bezierCurveTo(267.1, 343.3, 343.3, 267.1, 343.3, 173.1);
      ctx.closePath();
      ctx.stroke();

      // maze4/Path
      ctx.beginPath();
      ctx.moveTo(292.6, 172.6);
      ctx.bezierCurveTo(292.6, 106.0, 239.0, 52.1, 173.0, 52.1);
      ctx.bezierCurveTo(107.0, 52.1, 53.4, 106.0, 53.4, 172.6);
      ctx.bezierCurveTo(53.4, 239.1, 107.0, 293.0, 173.0, 293.0);
      ctx.bezierCurveTo(239.0, 293.0, 292.6, 239.1, 292.6, 172.6);
      ctx.closePath();
      ctx.stroke();
      ctx.restore();
}
/***************************************************
 *
 ***************************************************/


this.build();


}

