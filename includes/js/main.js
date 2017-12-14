/*
var article = document.createElement('article');
article.innerHTML = "my <b>new</b> skill - <large>DOM maniuplation!</large>";
article.setAttribute('id', 'rectangle'); // and make sure myclass has some styles in css
document.main.appendChild(article);
*/

 var article;
 
 function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

 function myFunction(element) {
    if(element.style.backgroundImage === "none"){
	    element.style.backgroundImage = "url(images/white_star.png)";
    }else{
	    element.style.backgroundImage = "none"; 
	    }
    }
    
     function myPlus() {
	article = document.getElementById("mainContent").prepend(createArticle("rectangleS")); 
	//article.style.backgroundColor =getRandomColor();
    }
    
function createArticle(className){
	article = document.createElement("article");
	article.setAttribute('class',className);
	article.style.backgroundColor =getRandomColor();
	if(className === "rectangleS"){
		article.style.backgroundImage = "none";
		article.setAttribute('onclick',"myFunction(this);");
		}
	if(className === "plus"){
		article.setAttribute('onclick',"myPlus();");
	}
	return article;
}



for (var i=0; i < 32 ;i++){
	article = document.getElementById("mainContent").appendChild(createArticle("rectangleS")); 
	
}
	document.getElementById("mainContent").appendChild(createArticle("plus")).style.backgroundColor ="grey"; 
//document.getElementById("myBtn").onclick = function() {myFunction()};





/*
	//var node = document.createElement("main");
	var node1 = document.getElementsByClassName("rectangle");
	node1.onclick = function myFunction() {
	var rect = document.getElementsByClassName("rectangle");
    if(rect.style.backgroundImage === "none"){
	    rect.style.backgroundImage = url(../../images/white_star.png);
    }else{
	    rect.style.backgroundImage = "none"; 
    }
}
*/

