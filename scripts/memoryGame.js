
//define the images array
var cardImages = [];

cardImages[0] = "../images/earth.png"; 
cardImages[1] = "../images/moon.png";
cardImages[2] = "../images/jupiter.png";
cardImages[3] = "../images/mars.png";
cardImages[4] = "../images/uranus.png";
cardImages[5] = "../images/saturn.png";
cardImages[6] = "../images/earth.png"; 
cardImages[7] = "../images/moon.png";
cardImages[8] = "../images/jupiter.png";
cardImages[9] = "../images/mars.png";
cardImages[10] = "../images/uranus.png";
cardImages[11] = "../images/saturn.png"; 

//shuffle the array
function shuffle(array) {
    var currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle
    while (0 !== currentIndex) {
  
      // Pick a remaining element
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}
shuffle(cardImages);

// assign images from the array to figures on page
const figures = document.querySelectorAll("img");

for (var i = 0; i < figures.length; i++) {
    figures[i].src = cardImages[i];
}


//select all the cards
const cards = document.querySelectorAll('.card');


//select all flipped cards
let flippedCards = document.getElementsByClassName("flipped");


//flip any card if there are less than 2 cards flipped
cards.forEach(item => {
    item.addEventListener('click', flipAnyCard = e => {
        if (flippedCards.length < 2) {
        item.style.transform = "rotateY(180deg)";
        item.classList.add("flipped");
        }
        if (flippedCards.length == 2) {
        compareCards();
        }
    }); 
});  

function compareCards () {
    if(flippedCards[0].lastElementChild.lastElementChild.src == flippedCards[1].lastElementChild.lastElementChild.src) {
        setTimeout(removeCardsfromTable, 1500);
    } else {
        setTimeout(flipBack, 1500);    
    }
}

function removeCardsfromTable () {
    for (var i=flippedCards.length - 1; i >= 0; i--) {
    flippedCards[i].style.visibility = "hidden";
    flippedCards[i].classList.add("hidden");
    flippedCards[i].classList.remove("flipped");
    }
    checkFinish();
}

function flipBack() { 
    for (var i=flippedCards.length - 1; i >= 0; i--) {
        flippedCards[i].style.transform = "";
        flippedCards[i].classList.remove("flipped"); //remove the class   
    }
}

var hiddencards = document.getElementsByClassName("hidden");

function checkFinish() {
    if (hiddencards.length > 11) {
        document.getElementById("finishMessage").style.display = "block";
        document.getElementById("playHeader").innerHTML = "Memory Game";
        document.getElementById("newGameButton").style.display = "block";
    }
}


