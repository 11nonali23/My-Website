//to rotate images to both sides
var isRight = true;

//Movement Animation to happen
const card1 = document.querySelector(".card");
const card2 = document.querySelector(".card2");
const card3 = document.querySelector(".card3");

function addCardListener(card){
    //Moving Animation Event
    card.addEventListener("mousemove", (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 45;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 45;
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    //Animate In
    card.addEventListener("mouseenter", (e) => {
        card.style.transition = "none";
    });

    //Animate Out
    card.addEventListener("mouseleave", (e) => {
        card.style.transition = "all 0.5s ease";
        card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });
}

addCardListener(card1);
addCardListener(card2);
addCardListener(card3);
