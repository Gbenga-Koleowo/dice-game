
var randomNumber1= (Math.floor(Math.random()* 6)) + 1;
console.log(randomNumber1);

if(randomNumber1==1){
    console.log(document.querySelector(".img1").setAttribute("src","images/dice1.png"))
};
if (randomNumber1==2){
    console.log(document.querySelector(".img1").setAttribute("src","images/dice2.png"))
};
if (randomNumber1==3){
    console.log(document.querySelector(".img1").setAttribute("src","images/dice3.png"))
};
if (randomNumber1==4){
    console.log(document.querySelector(".img1").setAttribute("src","images/dice4.png"))
};
if (randomNumber1==5){
    console.log(document.querySelector(".img1").setAttribute("src","images/dice5.png"))
};
if (randomNumber1==6){
    console.log(document.querySelector(".img1").setAttribute("src","images/dice6.png"))
};

var randomNumber2= (Math.floor(Math.random()* 6)) + 1;
console.log(randomNumber2);
if(randomNumber2==1){
    console.log(document.querySelector(".img2").setAttribute("src","images/dice1.png"))
    
};
if (randomNumber2==2){
    console.log(document.querySelector(".img2").setAttribute("src","images/dice2.png"))
};
if (randomNumber2==3){
    console.log(document.querySelector(".img2").setAttribute("src","images/dice3.png"))
};
if (randomNumber2==4){
    console.log(document.querySelector(".img2").setAttribute("src","images/dice4.png"))
};
if (randomNumber2==5){
    console.log(document.querySelector(".img2").setAttribute("src","images/dice5.png"))
};
if (randomNumber2==6){
    console.log(document.querySelector(".img2").setAttribute("src","images/dice6.png"))
};



if (randomNumber1 == randomNumber2){
    console.log(document.querySelector("h1").innerHTML="Draw!")
};

if (randomNumber1 > randomNumber2){
    console.log(document.querySelector("h1").innerHTML= "🚩 Player1 Wins!")
};

if (randomNumber1 < randomNumber2) {
    console.log(document.querySelector("h1").innerHTML="Player2 Wins! 🚩")
};