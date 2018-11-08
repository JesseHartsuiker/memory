let birdcards = document.getElementById("birdcards");
createCardHolders();

function createCardHolders() {
    for (let i = 1; i <= 9 ; i++) {
        for (let j = 0; j < 2 ; j++) {
            let image = document.createElement("img");
            image.src = "Bird%20pictures/bird"+ i + ".jpg";
            image.id = "image" + i + "" + j;
            let cardHolder = document.createElement("div");
            cardHolder.className = "birdpicture";
            cardHolder.id = "card-holder" + i + "" + j;
            cardHolder.appendChild(image);
            birdcards.appendChild(cardHolder);
        }
    }
}

var plaatjes = document.getElementsByTagName("img");
var randomnumbers = [];

while(randomnumbers.length <= 18){
    var random = Math.floor(Math.random()*9+1);
    console.log("Random number = " + random);
    if (countInstances(random, randomnumbers) < 2){
        randomnumbers.push(random);
    }
}

function countInstances(random, randomnumbers) {
    // for loop die in de array telt hoe vaak het getal random voorkomt
    // het resultaat komt in de return

}

console.log("Complete array = " + randomnumbers);
console.log("Aantal getallen in array plaatjes = " + plaatjes.length);
for (var i = 0; i < 9 ; i++) {
    var pad = "Bird pictures/bird" + randomnumbers[i] + ".jpg";
    console.log("Het random pad is " + pad);
    plaatjes[i].src = pad;
}


