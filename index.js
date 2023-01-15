import Typed from 'typed.js';

let typed = new Typed(".input", {
    strings:["Fidelis Tuwei", "Web Developer.", "IT Technician.", "Data Entry Manager."],
    typeSpeed: 70,
    backSpeed: 60,
    loop: true
});

const harmburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");
const links = document.querySelector(".nav-list li");

harmburger.addEventListener("click", () => {
    this.classList.toggle("click");
    navList.classList.toggle("open");
    
})