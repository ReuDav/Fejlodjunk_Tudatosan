// import './bootstrap';

const hambi = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const links = menu.querySelectorAll("ul li a");


hambi.onclick = function() {
  menu.classList.toggle("open");

  const isMenuOpen = menu.classList.contains("open");
  menu.setAttribute("aria-expanded", isMenuOpen);

  const lines = [...hambi.children];
  lines.forEach((child) => {
    child.classList.toggle("anim");
  });
};

links.forEach((link) => {
  link.addEventListener("click", function() {
    menu.classList.remove("open");
    menu.setAttribute("aria-expanded", false);
  });
});

let startingValue = 0;
let endingValue = [
  100, 100, 80, 75, 70 ,70, 65, 60, 55, 50, 40, 25,
  100, 85, 80, 65, 55, 40  
];
let speed = 50;
let colors = [
  "E14E1D", "0277BD", "0073AA", "F38A12", "F0DB4F", "CD6799", "7612F5", "25B9BC", "B3B4BA", "FFB13B", "646CFF", "00D8FF",
  "7B7FB5", "E42C23", "EA7F08", "336791", "B143FE", "81CD39",
];
let circularProgress = document.querySelectorAll(".circular-progress");
let progressValue = document.querySelectorAll(
".circular-progress-data #progress-value"
);
let progress = setInterval(() => {
startingValue++;
for (let i = 0; i < endingValue.length; i++) {
  if (startingValue < endingValue[i] + 1) {
    
    progressValue[i].innerHTML = startingValue + "%";

    let degreeValue = startingValue * 3.6;
    circularProgress[i].style.backgroundImage =
    "conic-gradient(#" + colors[i] + " " + degreeValue + "deg, #FFFFFF 0deg)";
  }      
}

}, speed);