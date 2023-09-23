const phrases = [
    "Welcome to Beauty Lux WebPage !", 
    "Hi, I'm Anastasia!",
    "I'm an Artist!",
    "A Web Developer!",
    "A Business Owner!",
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

// Start the typewriter animation
type();

// Change the font and color
typewriter.style.fontFamily = 'Your-Preferred-Font, cursive'; // Change 'Your-Preferred-Font' to your desired font
typewriter.style.color = ' #ffffff'; // Change the color to your desired color (pink)
typewriter.style.fontSize = 32;

document.addEventListener("DOMContentLoaded", function () {
    const carouselItems = document.querySelectorAll(".carousel-item");
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");
    let currentSlide = 0;

    // Function to show the current slide
    function showSlide() {
        carouselItems.forEach((item, index) => {
            if (index === currentSlide) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });
    }

    // Event listener for the "Next" button
    nextButton.addEventListener("click", function () {
        currentSlide = (currentSlide + 1) % carouselItems.length;
        showSlide();
    });

    // Event listener for the "Previous" button
    prevButton.addEventListener("click", function () {
        currentSlide = (currentSlide - 1 + carouselItems.length) % carouselItems.length;
        showSlide();
    });

    // Initially show the first slide
    showSlide();
});
// Add this to your JavaScript file (e.g., script.js)
const imageSlider = document.querySelector('.image-slider');
const images = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg']; // Replace with your image URLs
let currentIndex = 0;

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    const imageUrl = images[currentIndex];
    const imageElement = document.querySelector('.image');
    imageElement.src = imageUrl;
}

setInterval(changeImage, 3000); // Change image every 3 seconds (3000 milliseconds)

function tryOnNail(nailImage) {
    // Change the source of the female hand image to the selected nail image
    const femaleHand = document.getElementById("female-hand");
    femaleHand.src = nailImage;
}

