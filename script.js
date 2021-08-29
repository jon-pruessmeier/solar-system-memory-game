document.addEventListener("DOMContentLoaded", () => {
    //creates an Array consisting of all the cards, except the sun and solar_system card
    const arrayOfCards = [
        {
            name: "earth",
            img: "./Cards/earth.jpg"
        },
        {
            name: "jupiter",
            img: "./Cards/jupiter.jpg"
        },
        {
            name: "mars",
            img: "./Cards/mars.jpg"
        },
        {
            name: "mercury",
            img: "./Cards/mercury.jpg"
        },
        {
            name: "neptune",
            img: "./Cards/neptune.jpg"
        },
        {
            name: "saturn",
            img: "./Cards/saturn.jpg"
        },
        {
            name: "uranus",
            img: "./Cards/uranus.jpg"
        },
        {
            name: "venus",
            img: "./Cards/venus.jpg"
        }, {
            name: "earth",
            img: "./Cards/earth.jpg"
        },
        {
            name: "jupiter",
            img: "./Cards/jupiter.jpg"
        },
        {
            name: "mars",
            img: "./Cards/mars.jpg"
        },
        {
            name: "mercury",
            img: "./Cards/mercury.jpg"
        },
        {
            name: "neptune",
            img: "./Cards/neptune.jpg"
        },
        {
            name: "saturn",
            img: "./Cards/saturn.jpg"
        },
        {
            name: "uranus",
            img: "./Cards/uranus.jpg"
        },
        {
            name: "venus",
            img: "./Cards/venus.jpg"
        }
    ];

    const gameboard = document.querySelector('.gameboard');
    let memoryCardsChosen = []; //array which is used for checking matches
    let memoryCardsChosenID = [];

    //this funktion will be used for the creation of the board:
    function createGameboard() {
        arrayOfCards.sort(() => 0.5 - Math.random());
        for (let i = 0; i < arrayOfCards.length; i++) {
            let memoryCard = document.createElement('img'); //creates an empty image for each of the elements within the array
            memoryCard.setAttribute('src', './Cards/sun.jpg'); //connects the picture of the sun to each element (sun.jpg will be the picture of unchosen cards)
            memoryCard.setAttribute('card-id', i); //creates for every card an ID which is the respective index of the for-Loop
            memoryCard.addEventListener("click", turnTheCard); //invokes the function turnTheCard() if the card is clicked on
            gameboard.appendChild(memoryCard); //connects the css-element ".gameboard" with each card
        }
    }

    //function for the turn of cards
    function turnTheCard() {
        let memoryCardID = this.getAttribute('card-id'); //creates a variable containing the card-id of the clicked card
        memoryCardsChosen.push(arrayOfCards[memoryCardID].name); //adds the name of the clicked card to the array memoryCardsChosen
        memoryCardsChosenID.push(memoryCardID);
        this.setAttribute('src', arrayOfCards[memoryCardID].img);
        if (memoryCardsChosenID[0] != memoryCardsChosen[1]) {

            if (memoryCardsChosen.length === 2) {
                //the following if-else-statement catches the error of winning though clicking twice on the same image
                if (memoryCardsChosenID[0] != memoryCardsChosenID[1]) {
                    setTimeout(checkForMatch, 100);
                } else {
                    //catching the error of clicking twice on
                    memoryCardsChosen.pop();
                    memoryCardsChosenID.pop();
                }

            }
        }
    }

    //checks if two cards are a match
    function checkForMatch() {
        let memoryCard = document.querySelectorAll("img");

        const FirstCardID = memoryCardsChosenID[0]; //saves the ID of the first chosen card
        const SecondCardID = memoryCardsChosenID[1]; //saves the ID of the second chosen card
        if (memoryCardsChosen[0] === memoryCardsChosen[1]) {
            alert(`Congratulation, you found a match of ${memoryCardsChosen[0]}!`); //displays the alert that will pop up, if it is a match
            memoryCard[FirstCardID].setAttribute("src", "./Cards/solar_system.jpg"); //sets the solar_system image for the matched cards
            memoryCard[SecondCardID].setAttribute("src", "./Cards/solar_system.jpg");
        } else {
            memoryCard[FirstCardID].setAttribute("src", "./Cards/sun.jpg"); //sets the images back to the default image of the sun
            memoryCard[SecondCardID].setAttribute("src", "./Cards/sun.jpg");
            alert("Sorry, you have to try again!")
        }
        //clearing the arrays, so the next turn can begin
        memoryCardsChosen = [];
        memoryCardsChosenID = [];

    }


    //creates the game
    createGameboard();

});