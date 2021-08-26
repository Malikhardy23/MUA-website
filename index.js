// When the user scrolls the page, execute myFunction

window.onscroll = function(){myFunction()};

// Get the navbar 

let navbar = document.getElementById("navbar");

// Get the offset position of the navbar

let sticky = navbar.offsetTop;


// Add the sticky class to the navbar when you reach its scroll position. 
// Remove "sticky" when you leave the scroll position

function myFunction(){
    if(window.pageYOffset >= sticky){
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

// menuBtn Section

// get the menu Btn 

const menuBtn = document.getElementById("menuBtn");
let mobileMenu = document.querySelector('mobileMenu.active');

// toggle active class 

const toggleClass = () => {

    mobileMenu.classList.toggle('active')

}

menuBtn.addEventListener('click', toggleClass);



// Modal Section

// Get the modal 

let myImg1 = document.getElementById("myImg1");
let showModalImage1 = document.getElementById("img1");
let myModal1 = document.getElementById("myModal1");

let myImg2 = document.getElementById("myImg2");
let showModalImage2 = document.getElementById("img2");
let myModal2 = document.getElementById("myModal2");

let myImg3 = document.getElementById("myImg3");
let showModalImage3 = document.getElementById("img3");
let myModal3 = document.getElementById("myModal3");

let myImg4 = document.getElementById("myImg4");
let showModalImage4= document.getElementById("img4");
let myModal4 = document.getElementById("myModal4");

let myImg5 = document.getElementById("myImg5");
let showModalImage5 = document.getElementById("img5");
let myModal5 = document.getElementById("myModal5");

let myImg6 = document.getElementById("myImg6");
let showModalImage6 = document.getElementById("img6");
let myModal6 = document.getElementById("myModal6");

// close the picture when something else is clicked 

window.addEventListener('click', (e) => {
    if(e.target == myModal1){
        myModal1.style.display = "none";
    }
})

window.addEventListener('click', (e) => {
    if(e.target == myModal2){
        myModal2.style.display = "none";
    }
})

window.addEventListener('click', (e) => {
    if(e.target == myModal3){
        myModal3.style.display = "none";
    }
})

window.addEventListener('click', (e) => {
    if(e.target == myModal4){
        myModal4.style.display = "none";
    }
})

window.addEventListener('click', (e) => {
    if(e.target == myModal5){
        myModal5.style.display = "none";
    }
})

window.addEventListener('click', (e) => {
    if(e.target == myModal6){
        myModal6.style.display = "none";
    }
})

// function to open the modals

const openModal1 = () => {
    if(myModal1){
        myModal1.style.display = "block";
    }
}

const openModal2 = () => {
    if(myModal2){
        myModal2.style.display = "block";
    }
}

const openModal3 = () => {
    if(myModal3){
        myModal3.style.display = "block";
    }
}

const openModal4 = () => {
    if(myModal4){
        myModal4.style.display = "block";
    }
}

const openModal5 = () => {
    if(myModal5){
        myModal5.style.display = "block";
    }
}

const openModal6 = () => {
    if(myModal6){
        myModal6.style.display = "block";
    }
}


myImg1.addEventListener('click', (openModal1));

myImg2.addEventListener('click', (openModal2));

myImg3.addEventListener('click', (openModal3));

myImg4.addEventListener('click', (openModal4));

myImg5.addEventListener('click', (openModal5));

myImg6.addEventListener('click', (openModal6));

/* window.addEventListener('click', (e) => {
    if(e.target !== myModal1){
        myModal1.style.display = "flex";
    }
}) */