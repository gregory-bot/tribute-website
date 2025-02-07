const videos = document.querySelectorAll('.hero-video');
let currentVideo = 0;

function changeVideo() {
    videos.forEach(video => video.classList.remove('active'));
    currentVideo = (currentVideo + 1) % videos.length;
    videos[currentVideo].classList.add('active');
}

setInterval(changeVideo, 8000);

document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll(".quote-image");
    let index = 0;

    function changeImage() {
        images[index].classList.remove("active");
        index = (index + 1) % images.length; 
        images[index].classList.add("active");
    }

    setInterval(changeImage, 8000);
});
const quotes = [
    "dream big.",
    "stay focused.",
    "never give up."
];

let currentQuote = 0;
let currentChar = 0;
let isDeleting = false;
let typewriterElement = document.getElementById('typewriter');

function typeWriter() {
    const quote = quotes[currentQuote];
    
    if (isDeleting) {
        typewriterElement.textContent = quote.substring(0, currentChar - 1);
        currentChar--;
    } else {
        typewriterElement.textContent = quote.substring(0, currentChar + 1);
        currentChar++;
    }

    let typeSpeed = isDeleting ? 50 : 150;

    if (!isDeleting && currentChar === quote.length) {
        isDeleting = true;
        typeSpeed = 2000;
    } else if (isDeleting && currentChar === 0) {
        isDeleting = false;
        currentQuote = (currentQuote + 1) % quotes.length;
        typeSpeed = 500; 
    }

    setTimeout(typeWriter, typeSpeed);
}

typeWriter();

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.side-menu');
const overlay = document.querySelector('.overlay');
const menuLinks = document.querySelectorAll('.side-menu a');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
});

overlay.addEventListener('click', () => {
    menu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        const targetId = link.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

document.querySelector('.cta-button').addEventListener('click', () => {
    scrollToSection('timeline');
});

const stars = document.querySelectorAll('.star');
stars.forEach(star => {
    star.addEventListener('click', () => {
        const rating = parseInt(star.getAttribute('data-rating'));
        stars.forEach(s => {
            const sRating = parseInt(s.getAttribute('data-rating'));
            if (sRating <= rating) {
                s.classList.add('active');
            } else {
                s.classList.remove('active');
            }
        });
    });
});

const inspirationalQuotes = [
    "Education is the most powerful weapon which you can use to change the world.",
    "It always seems impossible until it's done.",
    "I learned that courage was not the absence of fear, but the triumph over it."
];

let currentQuoteIndex = 0;
const quoteText = document.getElementById('quote-text');

function displayQuote() {
    quoteText.textContent = inspirationalQuotes[currentQuoteIndex];
    currentQuoteIndex = (currentQuoteIndex + 1) % inspirationalQuotes.length;
}

displayQuote();
setInterval(displayQuote, 10000);

const timelineItems = document.querySelectorAll('.timeline-item');

const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

timelineItems.forEach(item => {
    observer.observe(item);
});
