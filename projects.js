//to rotate images to both sides
var isRight = true;

//Movement Animation to happen
const card = document.querySelector(".card");
const card2 = document.querySelector(".card2");
const card3 = document.querySelector(".card3");

const container = document.querySelector(".container");
//Items
const awcLogo = document.querySelector(".awc-logo img");
const github = document.querySelector(".github");
const description = document.querySelector(".info h3");

//Moving Animation Event
card.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 45;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 45;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate In
card.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    //Popout
    awcLogo.style.transform = "translateZ(125px)";
    description.style.transform = "translateZ(125px)";
    github.style.transform = "translateZ(125px)";
});

//Animate Out
card.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    awcLogo.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    github.style.transform = "translateZ(0px)";
});