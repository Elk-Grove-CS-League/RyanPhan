const prompt = require("prompt-sync")({siginit: true});

var cards =[1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10];


function getCard (){
    var a = ~~(Math.random() * cards.length)
    var rand = cards[a];
    cards.splice(a,1);
    return rand;
}

function cont(){
    console.log("Hi")
}

//player
var playerStatus = 0
console.log("Your cards:");
var player = getCard();
console.log(player);
var cont = prompt("Would you like to hit or stand? (type h or s)");
while (cont == "h"){
    player = player + getCard();
    console.log(player);
    if (player == 21){
        playerStatus = 21;
        console.log("21! ");
        break;
    } 
    if (player > 21){
        playerStatus = "bust";
        break;
    } 
    cont = prompt("Would you like to hit or stand? (Type h or s) ");
}

//dealer:
dealer = getCard();
console.log("Dealer cards:");
console.log(dealer);
while (dealer < 17){
    dealer = dealer + getCard();
    console.log(dealer);
}
if (player <= 21 && dealer > 21){
    console.log("You win!");
}
if (playerStatus == "bust") {
    console.log("You lose!");
}
if (player < 21 && dealer > 21){
    console.log("You win!");       
}
if (player <= 21 && dealer <= 21){
    if (player > dealer){
        console.log("You win!");
    } else if (player == dealer) {
        console.log("Push");
    } else {
        console.log("You lose!")
    }
}