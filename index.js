
var randomNumber1 = Math.floor(Math.random() * 7);
var randomNumber2 = Math.floor(Math.random() * 7);

if (randomNumber1 === 1) {
    document.querySelector(".img1").setAttribute("src", "Images/dice1.png");
}
else if (randomNumber1 === 2) {
    document.querySelector(".img1").setAttribute("src", "Images/dice2.png");
}
else if (randomNumber1 === 3) {
    document.querySelector(".img1").setAttribute("src", "Images/dice3.png");
}
else if (randomNumber1 === 4) {
    document.querySelector(".img1").setAttribute("src", "Images/dice4.png");
}
else if (randomNumber1 === 5) {
    document.querySelector(".img1").setAttribute("src", "Images/dice5.png");
}
else {
    document.querySelector(".img1").setAttribute("src", "Images/dice6.png");
}

switch (randomNumber2) {
    case 1:
        document.querySelector(".img2").setAttribute("src", "Images/dice1.png");
        break;
    case 2:
        document.querySelector(".img2").setAttribute("src", "Images/dice2.png");
        break;
    case 3:
        document.querySelector(".img2").setAttribute("src", "Images/dice3.png");
        break;
    case 4:
        document.querySelector(".img2").setAttribute("src", "Images/dice4.png");
        break;
    case 5:
        document.querySelector(".img2").setAttribute("src", "Images/dice5.png");
        break;
    case 6:
        document.querySelector(".img2").setAttribute("src", "Images/dice6.png");
        break;

} 
if (randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML="Player 1 won &#128681;";
 
}
else if (randomNumber1<randomNumber2) {
    document.querySelector("h1").innerHTML="&#128681; Player 2 won";
 
}
else {
    document.querySelector("h1").innerHTML="Its tie!";
 
}
