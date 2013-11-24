/*
** This Class Initiates all HTML object elements
** it instantiates the Incline Plane class
** and passes created HTML elements to it
*/
window.onload = function(){

try
  {
var parent = document.getElementById("parent");


var background = document.createElement("canvas");
background.setAttribute("width","700");
background.setAttribute("height","750");
background.style.position = "absolute";
background.style.backgroundColor = "#BDBDBD";
parent.appendChild(background);//move down
//-------------------------------------------






var b = new backView(background);
var c = new control();
}
catch(err)
  {
  alert("cant initialize:"+err);
  }


}

/*------------------------------------- end class -------------------------------------------*/
