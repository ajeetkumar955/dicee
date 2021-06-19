var randonNumber1 = Math.floor(Math.random()*6)+1;
var randomdice1 = "images/dice" + randonNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomdice1);


var randonNumber2 = Math.floor(Math.random()*6)+1;
var randomdice2 = "images/dice" + randonNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomdice2);

if (randonNumber1>randonNumber2){
  document.querySelector("h1").innerHTML="☝ Player 1 wins!";
}
else if(randonNumber1<randonNumber2){
  document.querySelector("h1").innerHTML="✌ Player 2 wins!";
}
else{
  document.querySelector("h1").innerHTML="🖖 Match is draw!";
}
