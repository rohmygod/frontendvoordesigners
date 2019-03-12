/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const prevbutton = document.querySelector('#prevbutton');
const nextbutton = document.querySelector('#nextbutton');

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';


//Button Listeners
nextbutton.addEventListener('click',()=>{
    if (counter >= carouselImages.length -1) return;
	carouselSlide.style.transition = "transform 0.4s ease-in-out";
	counter++;
	carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevbutton.addEventListener('click',()=>{
    if (counter <= 0) return;
	carouselSlide.style.transition = "transform 0.4s ease-in-out";
	counter--;
	carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', ()=>{
    if (carouselImages[counter].id === 'lastClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length -2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (carouselImages[counter].id === 'firstClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});


//Keycodes

window.addEventListener("keydown", theKeyPress, false);

function theKeyPress(key){
    if (key.keyCode == "37") {

        if (counter <= 0) return;
        carouselSlide.style.transition = "transform 0.7s ease-in-out";
        counter--;

        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

        console.log('pressed');
    }

    if (key.keyCode == "39") {

        if (counter >= carouselImages.length - 1) return;

        carouselSlide.style.transition = "transform 0.7s ease-in-out";
        counter++;

        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    }

    }

