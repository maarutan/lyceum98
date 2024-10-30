const burger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
	burger.classList.toggle('is-active');
	nav.classList.toggle('is-active');
});
