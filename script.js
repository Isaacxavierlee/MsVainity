const phrases = [
    "Welcome to Beauty Lux WebPage !", 
    "Hi, I'm Anastasia!",
    "I'm an Artist!",
    "A Web Developer!",
    "A Buisness Owner!",
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