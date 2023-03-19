const slides = [
	{
		"image": "./assets/images/slideshow/slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "./assets/images/slideshow/slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "./assets/images/slideshow/slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "./assets/images/slideshow/slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const leftArrow = document.querySelector('.arrow_left')
const rightArrow = document.querySelector('.arrow_right')
const bannerImg = document.querySelector('.banner-img')
const dots = document.querySelector('.dots')
const bannerTagLine = document.querySelector('#banner p')
let currentIndex = 0

// This function updates the selection of dots based on the current index.
function updateDots() {
	const dotList = document.querySelectorAll('.dot');
	dotList.forEach((dot, index) => {
		if (index === currentIndex) {
			dot.classList.add('dot_selected');
		} else {
			dot.classList.remove('dot_selected');
		}
	});
}
//Handles left arrow clicks and updates the banner accordingly.
leftArrow.addEventListener('click', (event) => {
	currentIndex--;
	if (currentIndex < 0) {
		currentIndex = slides.length - 1;
	}
	bannerImg.setAttribute("src", slides[currentIndex].image);
	bannerTagLine.innerHTML = slides[currentIndex].tagLine;
	updateDots();
});

//Handles left arrow clicks and updates the banner accordingly.
rightArrow.addEventListener('click', (event) => {
	currentIndex++;
	if (currentIndex > slides.length - 1) {
		currentIndex = 0;
	}
	bannerImg.setAttribute("src", slides[currentIndex].image);
	bannerTagLine.innerHTML = slides[currentIndex].tagLine;
	updateDots();
});


//Creates dots for each slide
for (const slide of slides) {
	const dot = document.createElement('p');
	dot.classList.add('dot');
	dots.appendChild(dot);
	dots.innerHTML += dot.innerHTML;
}

updateDots()
