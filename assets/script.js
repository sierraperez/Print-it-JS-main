const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

let currentSlide = 0;

function showSlide(index) {
    const bannerImg = document.querySelector('.banner-img');
    const bannerTagLine = document.querySelector('#banner p');
    const dots = document.querySelectorAll('.dot');

    bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;// Atualiza a imagem atraves do template string
    bannerTagLine.innerHTML = slides[index].tagLine;// Atualiza  a legenda

    // Atualiza os dots
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('dot_selected');
        } else {
            dot.classList.remove('dot_selected');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

document.addEventListener('DOMContentLoaded', function() {
    const arrowLeft = document.querySelector('.arrow_left');
    const arrowRight = document.querySelector('.arrow_right');
    const dotsContainer = document.querySelector('.dots');

    // Adicionar dots dinamicamente
    slides.forEach((slide, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === 0) {
            dot.classList.add('dot_selected');
        }
        dotsContainer.appendChild(dot);

        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    arrowLeft.addEventListener('click', prevSlide);
    arrowRight.addEventListener('click', nextSlide);

    showSlide(currentSlide);
});