// JavaScript to create an image slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

const phrases = [
  "Welcome to Beauty Lux WebPage !", 
  "Hi, I'm Anastasia.",
  "I'm an Artist.",

];

const typewriter = document.getElementById('typewriter');
let phraseIndex = 0;
let charIndex = 0;

function type() {
    const currentPhrase = phrases[phraseIndex];
    const typingDelay = 100; // Typing speed (adjust as needed)

    if (charIndex < currentPhrase.length) {
        typewriter.textContent += currentPhrase.charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, 1000); // Delay for 1 second before erasing
    }
}

function erase() {
    const erasingDelay = 50; // Erasing speed (adjust as needed)

    if (charIndex > 0) {
        typewriter.textContent = phrases[phraseIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        phraseIndex = (phraseIndex + 1) % phrases.length; // Cycle through phrases
        setTimeout(type, 1000); // Delay for 1 second before typing the next phrase
    }
}

type(); // Start the typewriter animation
